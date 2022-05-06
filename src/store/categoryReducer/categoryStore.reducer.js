import {
  SET_SELECTED_CATEGORY,
  TRIGGER_SLIDER_COLLAPSE,
  TRIGGER_SLIDER_MOBILE_COLLAPSE,
} from "./categoryStore.actionTypes";

const INITIAL_STATE = {
  categoryCollapse: false,
  categoryMobileCollapse: true,
  selectedCategory: "financial-services",
};

export const categoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRIGGER_SLIDER_COLLAPSE:
      return {
        ...state,
        categoryCollapse: !state.categoryCollapse,
        categoryMobileCollapse: !state.categoryMobileCollapse,
      };
    case TRIGGER_SLIDER_MOBILE_COLLAPSE:
      return {
        ...state,
        categoryMobileCollapse: !state.categoryMobileCollapse,
      };
    case SET_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      };

    default:
      return state;
  }
};
