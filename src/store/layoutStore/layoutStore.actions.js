
import { CLOSE_LOGIN_MODAL, OPEN_LOGIN_MODAL, TRIGGER_MODAL } from "./layoutStore.actionTypes";
   
   export const triggerModal = () => {
     return {
       type:TRIGGER_MODAL
     };
   };
   export const openLoginModal = () => {
    return {
      type:OPEN_LOGIN_MODAL
    };
  };
  export const closeLoginModal = () => {
    return {
      type:CLOSE_LOGIN_MODAL
    };
  };
 