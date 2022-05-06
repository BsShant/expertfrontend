import {
  CLOSE_LOGIN_MODAL,
  OPEN_LOGIN_MODAL,
  TRIGGER_MODAL,
} from "./layoutStore.actionTypes";

const INITIAL_STATE = {
  loginModal: false,
};

export const layoutReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRIGGER_MODAL:
      return {
        ...state,
        loginModal: !state.loginModal,
      };

    case OPEN_LOGIN_MODAL:
      return {
        ...state,
        loginModal: true,
      };
    case CLOSE_LOGIN_MODAL:
      return {
        ...state,
        loginModal: false,
      };

    default:
      return state;
  }
};
