import { Button, Form, Input } from 'antd';
import React from 'react'
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
      <div className="container">
        <div className="contact-page-inner-container">
          <div className="contact-page-header">
            <div className="heading">Contact us</div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6 col-md-8 col-sm-10 col-xs-12 contact-form-margin">
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
                  label="Name"
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your name!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Address"
                  name="address"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your address!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Phone Number"
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your phone!',
                    },
                  ]}
                >
                  <Input />
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
                  <Input.TextArea style={{ height: "150px" }} />
                </Form.Item>
                <Form.Item 
                className="contact-form-button-container"

                >
                  <button className='alternate-button' htmlType="submit">
                    Submit
                  </button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default ContactPage