import * as types from '../constants/actionTypes';

const initialState = {
	companyQuestions: {},
	questions: {
		'General':[],
		'Algorithm': [],
		'System Design':[],
	},
	companyNames: [],
}

const questionManager = (state = initialState, action) => {
	switch (action.type) {
		case types.ADD_QUESTION:
			const companyQuestions = Object.assign({}, state.companyQuestions);
			const questions = Object.assign({}, state.questions);
			const companyNames = state.companyNames.slice();
			const temp = action.questions.map(ques => {
				return	Object.values(ques)[0]
			})

			if(companyQuestions[action.companyName]) {
				companyQuestions[action.companyName] = [...companyQuestions[action.companyName],...temp];
			}	else companyQuestions[action.companyName] = temp;

			action.questions.forEach(object => {
				if(object.General) questions.General.push(object.General);
				else if(object.Algorithm) questions.Algorithm.push(object.Algorithm);
				else questions['System Design'].push(object['System Design']);
			})

			companyNames.push(action.companyName);

			return {companyQuestions, questions, companyNames};
		case types.GET_COMPANY_NAMES:
			return {
				companyNames: action.json,
				questions: {
					'General':[],
					'Algorithm': [],
					'System Design':[],
				},
				companyQuestions: {}
			};
		defalut:
		 return state;
	}
}

export default questionManager;

