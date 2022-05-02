import {
  SET_SELECTED_CATEGORY,
    TRIGGER_SLIDER_COLLAPSE,
    TRIGGER_SLIDER_MOBILE_COLLAPSE
   } from "./categoryStore.actionTypes";
   
   export const triggerSliderCollapse = () => {
     return {
       type: TRIGGER_SLIDER_COLLAPSE,
     };
   };
   export const triggerMobileSliderCollapse = () => {
    return {
      type: TRIGGER_SLIDER_MOBILE_COLLAPSE,
    };
  };

   export const setSelectedCategory = (category)=>{
     return{
       type: SET_SELECTED_CATEGORY,
       payload: category
     }
   }