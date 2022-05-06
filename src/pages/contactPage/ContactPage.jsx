import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Form, Input } from 'antd';
import React from 'react'
import Particles from './Particles';
import './styles.css'
const ContactPage = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
      <div className='contact-page-container'>
        <div className="container" style={{position:"relative", zIndex:"3"}}>
          <div className="contact-page-inner-container">

            <div className="row center-contact">
              <div className="col-lg-6">
                <div className="contact-us-left">

                  <div className="contact-page-header">
                    <div className="heading">ASK THE EXPERTS</div>
                  </div>
                  <div className="contact-info">
                    <div className="contact-text">
                      info@expertBusiness.com
                    </div>
                    <div className="contact-text">
                      P.O. Box 12345
                    </div>
                    <div className="contact-text">
                      01-5286235 01-4467123
                    </div>
                    <div className="contact-text">
                      Kathmandu, Bagmati, 44600
                    </div>
                  </div>
                  <div className="contact-page-social-media">
                    <div className="contact-page-social-media-item">
                      <a href="facebook.com" target="_blank">
                        <FontAwesomeIcon icon={brands("facebook-f")} />
                      </a>
                    </div>
                    <div className="contact-page-social-media-item">
                      <a href="twitter.com" target="_blank">
                        <FontAwesomeIcon icon={brands("twitter")} />
                      </a>
                    </div>
                    <div className="contact-page-social-media-item">
                      <a href="youtube.com" target="_blank" >
                        <FontAwesomeIcon icon={brands("youtube")} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 col-md-10 col-sm-10 col-xs-12 contact-form-margin">
                <Form
                  name="basic"
                  initialValues={{
                    remember: true,
                  }}
                  layout="vertical"
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    // label="Name"
                    name="name"
                    className='label-absolute'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your name!',
                      },
                    ]}
                  >
                    <Input />
                    <div className="artificial-label">Name</div>
                  </Form.Item>
                  <Form.Item
                    // label="Address"
                    name="address"
                    className='label-absolute'

                    rules={[
                      {
                        required: true,
                        message: 'Please input your address!',
                      },
                    ]}
                  >
                    <Input />
                    <div className="artificial-label">Address</div>

                  </Form.Item>

                  <Form.Item
                    // label="Phone Number"
                    name="phone"
                    className='label-absolute'

                    rules={[
                      {
                        required: true,
                        message: 'Please input your phone!',
                      },
                    ]}
                  >
                    <Input />
                    <div className="artificial-label">Phone</div>

                  </Form.Item>
                  <Form.Item
                    label="Messsage"
                    name="message"

                    rules={[
                      {
                        required: true,
                        message: 'Please input your message!',
                      },
                    ]}
                  >
                    <Input.TextArea style={{ height: "100px", color: "white", background: "transparent", height: "100px", marginBottom: "15px" }} />
                  </Form.Item>
                  <Form.Item
                    className="contact-form-button-container"

                  >
                    <a htmlType="submit" style={{ border: "none" }} class="btn-flip btn-flip-alternate" data-back="+ SUBMIT" data-front="+ SUBMIT"></a>

                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </div>
    <Particles />
      </div >
  )
}

export default ContactPage