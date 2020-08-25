import React from 'react'

let initialState = { count: 0 }

let reducer = (state=initialState, action) => {
	switch(action.type) {
		case "inc":
			return {
				...state,
				count: state.count + action.payload
			}
		case "dec":
			return {
				...state,
				count: state.count - action.payload
			}
		default:
			return { ...state }
	}
}

// const rootReducer = combineReducers({ImgReducer, reducer});
const rootReducer = reducer

export default rootReducer