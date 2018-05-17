import * as types from '../constants/actionTypes';

const initialState = {
	companyName: {},
	questions: {}
}

const questionManager = (state = initialState, action) => {
	switch (action.type) {
		case types.GET_ALL:
			return {
				companyName: action.json
			};
		case types.ADD_QUESTION:
			const obj = Object.assign({}, state.companyName);
			const objQ = Object.assign({}, state.questions);
			const temp = action.questions.map(ques => {
				return	Object.values(ques)[0]
			})

			if(obj[action.companyName]) {
				obj[action.companyName] = [...obj[action.companyName],...temp];
			}	else obj[action.companyName] = temp;

			action.questions.forEach(obj => {
				if(obj.General) objQ.General.push(obj.General);
				else if(obj.Algorithm) ObjQ.Algorithm.push(obj.Algorithm);
				else ObjQ['System Design'].push(obj['System Design']);
			})
			return {companyName:obj, questions: objQ};
		defalut:
		 return state;
	}
}

export default questionManager

