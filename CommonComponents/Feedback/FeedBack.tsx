"use client";
import React from "react";
import { Form, Col, Input, Dropdown, Row } from "antd";
import { Feedback } from "../../routes/properties/data";
import styles from "./style.module.scss";

const FeedBack =() => {
    const [form] = Form.useForm();
  const { TextArea } = Input;

  return (
    <div className={styles.feedbackMain}>
      <h1>Feedback.</h1>
      {Feedback.map((item) => (
        <div
          className={`d-flex gap-3 mt-5 lh-base mb-5 ${styles.feedback} `}
          style={{ marginLeft: item.marginLeft }}
        >
          <div className="mr-5">
            <img
              className="border border-dark"
              src={item.src}
              alt="feedbackPic"
            />
          </div>
          <div className="fs-6 fw-light">
            <div className="d-flex">
            <h3 className="fs-4 mr-4" style={{fontFamily:"Lora"}}>{item.name}</h3>
            <p className="fs-6 fw-light">{item.date}</p>
            </div>
            <p className={styles.desc}>{item.dscrpt}</p>
            <span className="mr-4 mt-6 ">{item.like}</span>
            <span>{item.reply}</span>
          </div>
        </div>
      ))}

<div className={styles.antForm}>
<Form form={form}  layout="vertical" >
          <Row gutter={16} >
            <Col lg={12} sm={24} xs={24}>
              <Form.Item
                name={'firstName'}
                rules={[
                  {
                    required: true,
                    message: 'Please enter First Name',
                  },
                ]}>
                <Input size='large' placeholder='First name' />
              </Form.Item>
            </Col>
            <Col lg={12} sm={24} xs={24}>
              <Form.Item
                name={'lastName'}
                rules={[
                  {
                    required: true,
                    message: 'Please enter Last Name',
                  },
                ]}>
                <Input size='large' placeholder='Last Name' />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16} >
            <Col lg={12} sm={24} xs={24}>
              <Form.Item
                name={'phone'}
                rules={[
                  {
                    required: true,
                    message: 'Please enter the Phone Number',
                  },
                ]}>
                <Input size='large' placeholder='Phone Number' />
              </Form.Item>
            </Col>
            <Col lg={12} sm={24} xs={24}>
              <Form.Item
                name={'mail'}
                rules={[
                  {
                    required: true,
                    message: 'Please enter email',
                  },
                ]}>
                <Input size='large' placeholder='Email Address' />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item >
                <TextArea rows={10} placeholder='Your Message' />
              </Form.Item>
            </Col>
          </Row>
          <br />
          <br />
          <button>Contact us</button>
        </Form>
        </div>
    </div>
  );
}
export default FeedBack
;
