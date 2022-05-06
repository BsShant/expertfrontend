import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { triggerModal } from '../../store/layoutStore/layoutStore.actions';
const Login = () => {
    const loginModal = useSelector(state => state.layoutStore.loginModal)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const dispatch = useDispatch()

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    console.log("loginmodal", loginModal)
    return (
        <div>
            <button type="primary" onClick={() => dispatch(triggerModal())}>show modal </button>
            <Modal footer={null}
                header={null} title="Basic Modal" visible={loginModal} onOk={() => dispatch(triggerModal())} onCancel={() => dispatch(triggerModal())}>
                login modal
            </Modal>
        </div>
    )
}

export default Login