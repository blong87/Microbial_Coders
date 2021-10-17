export const initialState = {
  selectedGerms: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_SELECTION":
      return {
        ...state,
        selectedGerms: [...state.selectedGerms, action.germ],
      };

    default:
      return state;
  }
};

export default reducer;
