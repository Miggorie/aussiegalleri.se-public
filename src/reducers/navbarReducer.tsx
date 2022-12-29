import { TOGGLE_MENU } from "../actions/actions";

const initialState = {
  menuOpen: false,
};

const navbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        menuOpen: !state.menuOpen,
      };
    default:
      return state;
  }
};

export default navbarReducer;
