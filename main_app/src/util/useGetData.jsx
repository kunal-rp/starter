import { useEffect, useState } from "react";

import { FETCH_STATES } from "../constants.jsx";

export function useGetData(props) {
  const [state, setState] = useState(null);
  const [data, setData] = useState(false);

  function fetchData() {
    setState(FETCH_STATES.IN_PROGRESS);
    fetch(props.url)
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
