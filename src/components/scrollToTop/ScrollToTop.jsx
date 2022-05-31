import React from 'react'
import { useEffect } from "react";
import { useLocation } from "react-router";
import './styles.css'
import { Modal, } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { cloaseLoginModal, closeLoginModal, triggerModal } from '../../store/layoutStore/layoutStore.actions';
import Logo from '../../assets/images/logo.png'
import LoginImage from '../../assets/images/login.png'
import { useState } from 'react';
import PreLoader from '../preLoader/PreLoader';
// import Typing from 'react-typing-animation';
const ScrollToTop = (props) => {
  const loginModal = useSelector(state => state.layoutStore.loginModal)
  const dispatch = useDispatch()
  const [login, setLogin] = useState(true)

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return <>
    <div className="main-child-container">
      {props.children}
    </div>

      <PreLoader />



    {/* <div class='cursor' id="cursor"></div> */}
    <Modal footer={null}
      header={null} title="Basic Modal"
      visible={loginModal} onOk={() =>
        dispatch(closeLoginModal())}
      destroyOnClose={true}
      wrapClassName='login-wrap'
      onCancel={() => dispatch(closeLoginModal())}>
      <div className="login-container">
        <div className="container">
          <div className="modal-logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="login-info">
            <div className="login-image">
              <img src={LoginImage} alt="Login" />
            </div>
            <div className="login-text">
              To {login ? 'Login' : 'Register'},<br />
              {/* <Typing> */}
              Please enter your mobile number
              {/* </Typing> */}
            </div>
          </div>
          <div className="mobile-number-container">
            <div className="mobile-input-container">
              <div className="mobile-selection">
                +977
              </div>
              <div className="mobile-input">
                <input type="text" name="pnone" id="phone" />
              </div>
            </div>
          </div>
          {login ? <> <div className="otp-button">
            <button>Login with OTP</button>
          </div>
            <div className="password-button">
              <button>Login with password</button>
            </div> </> : <div className="otp-button">
            <button>Proceed</button>
          </div>}
          {login ? <div className="first-tim">
            First time user? <span className="register" onClick={() => setLogin(false)}>Register</span>
          </div> : <div className="first-tim">
            Already registered? <span className="register" onClick={() => setLogin(true)}>Login</span>
          </div>}
        </div>
      </div>
    </Modal>
  </>

}

export default ScrollToTop