import * as types from "../constants/actionTypes.js";

export const addQuestion = (companyName, questions) => {
  return dispatch => {
    return fetch("/addQuestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ companyName, questions })
    }).then(res =>
      dispatch({
        type: types.ADD_QUESTION,
        companyName,
				questions
      })
    );
  };
};

export const searchQuestion = keyword => ({
  type: types.SEARCH_QUESTOIN,
  keyword
});

export const getCompanyNames = json => ({
  type: types.GET_COMPANY_NAMES,
  json
});
