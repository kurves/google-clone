export const initialState = {
	term: null,
};
export const actions = {
	SET_SEARCH_TERM: "SET_SEARCH_TERM",
};

const reducer = (state, action) => {
	switch (action.type) {
		case actions.SET_SEARCH_TERM:
			return {
				...state,
				term: action.term,
			};
		default:
			return state;
	}
};
export default reducer;
