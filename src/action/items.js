import * as types from '../constants/actionTypes.js';

export const addQuestion = (companyName, questions) => {
  return dispatch => {
    return fetch("/addquestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({companyName, questions})
    }).then(res =>
      dispatch({
        type: types.ADD_QUESTION,
				companyName,
				questions,
      })
    );
  };
};

export const searchQuestion = keyword => ({
  type: types.SEARCH_QUESTOIN,
  keyword
});

export const getAll = () => {
	return dispatch => {
		return fetch('/getall')
		.then(res => res.json())
		.then(json => dispatch({types: types.GET_ALL, json}))
	}
}