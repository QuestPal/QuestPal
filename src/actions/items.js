import * as types from '../constants/actionTypes.js';


export const addQuestion = content => {
  return dispatch => {
    return fetch("/addQuestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(content)
    }).then(res =>
      dispatch({
        type: types.ADD_QUESTION,
        content
      })
    );
  };
};

export const searchQuestion = keyword => ({
  type: types.SEARCH_QUESTOIN,
  keyword
});
