import { action } from "commander";

export const initialState = {
  selectedGerms: [],
  experimentList: [],
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_SELECTION":
      return {
        ...state,
        selectedGerms: [...state.selectedGerms, action.germ],
      };

    case "ADD_TO_EXPERIMENTS":
      return {
        ...state,
        experimentList: [...state.experimentList, action.experiments],
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "EMPTY_EXPERIMENTS":
      return {
        ...state,
        selectedGerms: [],
      };

    default:
      return state;
  }
};

export default reducer;
