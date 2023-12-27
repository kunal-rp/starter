import { useEffect, useState } from "react";

import { FETCH_STATES } from "../constants.jsx";

// Example POST method implementation:
async function makePostDataCall(url = "", data = {}, onFail, onSuccess) {
  // Default options are marked with *

  console.log(data);
  const response = await fetch(url, {
    method: "POST",
    body: data,
    credentials: "include",
  });
  return response.json().then((responseData) => onSuccess(responseData)); // parses JSON response into native JavaScript objects
}

export function usePostData(props) {
  const [state, setState] = useState(null);

  function postData() {
    setState(FETCH_STATES.IN_PROGRESS);

    function onError(error) {
      setState(FETCH_STATES.FAIL);
      props.onFail(error);
    }

    function onSuccess(responseData) {
      setState(FETCH_STATES.SUCCESS);
      props.onSuccess(responseData);
    }

    console.log(props.constructRequestData);

    makePostDataCall(
      props.url,
      props.constructRequestData(),
      props.onFail,
      props.onSuccess,
    );
  }

  return [state, postData];
}
