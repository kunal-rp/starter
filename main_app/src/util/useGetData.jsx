import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

import { FETCH_STATES } from "../constants.jsx";
import { acmeAccessTokenState } from "../atom/atoms.jsx";

export function useGetData(props) {
  const [state, setState] = useState(null);
  const [data, setData] = useState(false);

  const acmeAccessToken = useRecoilValue(acmeAccessTokenState);

  function fetchData() {
    setState(FETCH_STATES.IN_PROGRESS);
    fetch(props.url, {
      credentials: "include",
      headers: { authorization: "Bearer " + acmeAccessToken },
    })
      .then((response) => response.json())
      .then((data) => {
        setState(FETCH_STATES.SUCCESS);
        props.onSuccess(data);
      })
      .catch((error) => {
        setState(FETCH_STATES.FAIL);
        props.onFail(error);
      });
  }

  return [state, fetchData];
}
