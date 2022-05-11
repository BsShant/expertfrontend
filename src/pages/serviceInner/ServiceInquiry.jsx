import { Modal } from 'antd'
import React, { useState } from 'react'
import './service.css'
import Inquiry from '../../assets/images/enquiry.png'

const ServiceInquiry = (props) => {
    const { inquiryModal, setInquiryModal } = props
    const [inputPhone, setInputPhone] = useState("")
    const [inputName, setInputName] = useState("")
    const [inputEmail, setInputEmail] = useState("")
    const [inputSubject, setInputSubject] = useState("")
    return (
        <Modal footer={null}
            header={null} title="Basic Modal"
            visible={inquiryModal} onOk={() => setInquiryModal(false)}
            destroyOnClose={true}
            wrapClassName='inquiry-wrap'
            onCancel={() => setInquiryModal(false)}>
            <div className="inquiry-container">
                <div className="container">
                    <div className="row inquiry-heading-row">
                        <div className="col-5">
                            <div className="inquiry-heading">
                                Inquiry
                            </div>
                            <div className="inquiry-sub-heading">
                                We will respond to you as soon as possible
                            </div>

                        </div>
                        <div className="col-7">
                            <div className="inquiry-image-container">
                                <img src={Inquiry} alt="Inquiry" />
                            </div>

                        </div>
                    </div>
                    <div className="enquiry-input">
                        <input onChange={(e) => { setInputName(e.target.value) }} type="text" name="username" id="username" />
                        <div className={`enquiry-label ${inputName.length > 0 ? 'enquiry-label-off' : ''}`}>Name</div>
                    </div>
                    <div className="enquiry-input">
                        <input onChange={(e) => { setInputPhone(e.target.value) }} type="text" name="userphone" id="userphone" />
                        <div className={`enquiry-label ${inputPhone.length > 0 ? 'enquiry-label-off' : ''}`}>Phone</div>
                    </div>
                    <div className="enquiry-input">
                        <input onChange={(e) => { setInputEmail(e.target.value) }} type="text" name="email" id="email" />
                        <div className={`enquiry-label ${inputEmail.length > 0 ? 'enquiry-label-off' : ''}`}>Email</div>
                    </div>
                    <div className="enquiry-input">
                        <input onChange={(e) => { setInputSubject(e.target.value) }} type="text" name="subject" id="subject" />
                        <div className={`enquiry-label ${inputSubject.length > 0 ? 'enquiry-label-off' : ''}`}>Subject</div>
                    </div>
                    <div className="enquiry-input textarea-input">
                        <textarea type="text" name="message" id="message" />
                        <div className="textarea-enquiry-label">Message</div>
                    </div>

                    <div className="enquiry-button">
                        <button class="btn-flip" data-back="+ Inquire" data-front="+ Inquire" style={{ border: "none", padding: "0px", boxShadow: "none" }}></button>
                    </div>
                </div>
            </div>
        </Modal >)
}

export default ServiceInquiry