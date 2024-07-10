'use client'
import { Col, Form, Input, Row, Switch } from "antd";
import { GiCheckMark } from 'react-icons/gi';
import styles from "./style.module.scss";
import store from "@/app/store/store";
import { useState } from "react";
import Pageheader from "@/app/CommonComponents/PageHeader/pageHeader";
import { Karla } from '@next/font/google'
import { cardObject } from "../staticData";
import { pricePlan } from "./create static file/staticData";
import GetListed from "@/app/CommonComponents/GetListed/GetListed";


export default function createAgency() {
  const { postAgency } = store.agency
  const { TextArea } = Input;
  const [form] = Form.useForm();
  const [switched, setSwitched] = useState(false);
  const [hoveredButtons, setHoveredButtons] = useState(new Array(pricePlan.length).fill(false));

  const handleMouseOver = (index:number) => {
    const updatedHoveredButtons = [...hoveredButtons];
    updatedHoveredButtons[index] = true;
    setHoveredButtons(updatedHoveredButtons);
  };


  const handleMouseOut = (index:number) => {
    const updatedHoveredButtons = [...hoveredButtons];
    updatedHoveredButtons[index] = false;
    setHoveredButtons(updatedHoveredButtons);
  };

  const filter = cardObject.filter((item) => {
    return item.img
  })
  const randomItem = filter[Math.floor(Math.random() * filter.length)];

  const getVal = (val: any) => {
    const values = {
      ...val,
      img: randomItem.img
    }
    postAgency(values)
    form.resetFields()
  }

  const handleSwitch = (item: any) => {
    setSwitched(item)
  }

  const data = {
    title: 'Agency Create',
    mainTitle: 'Create Agency',
  }

  return (
    <div>
      <Pageheader data={data} />
      <div className={`container ${styles.antdform}`}>
        <Form form={form} onFinish={getVal} layout="vertical" >
          <Col>
            <Form.Item
              name={'title'}
              rules={[
                {
                  required: true,
                  message: 'Please enter the Agencey Title',
                },
              ]}>
              <Input size='large' placeholder='Agency Title' style={{ fontFamily: 'Karla' }} />
            </Form.Item>
          </Col>
          <Row>
            <Col span={24}>
              <Form.Item name={'description'} rules={[
                {
                  required: true,
                  message: 'Please enter Description',
                },
              ]}>
                <TextArea rows={18} placeholder='Description' />
              </Form.Item>
            </Col>
          </Row>
          <Col>
            <Form.Item
              name={'location'}
              rules={[
                {
                  required: true,
                  message: 'Please enter Address',
                },
              ]}>
              <Input size='large' placeholder='Address line 1' />
            </Form.Item>
          </Col>

          <Col>
            <Form.Item name={'location2'}>
              <Input size='large' placeholder='Address line 2' />
            </Form.Item>
          </Col>

          <Row gutter={16} >
            <Col lg={12} sm={24} xs={24}>
              <Form.Item
                name={'city'}
                rules={[
                  {
                    required: true,
                    message: 'Please enter City',
                  },
                ]}>
                <Input size='large' placeholder='City' />
              </Form.Item>
            </Col>
            <Col lg={12} sm={24} xs={24}>
              <Form.Item name={'Zip Code'}>
                <Input size='large' placeholder='Zip Code' />
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
                    message: 'Please enter Phone Number',
                  },
                ]}>
                <Input size='large' placeholder='Phone' />
              </Form.Item>
            </Col>
            <Col lg={12} sm={24} xs={24}>
              <Form.Item
                className='mt-2'
                name={'email'}
                rules={[
                  {
                    required: true,
                    message: 'Please enter Email',
                  },
                ]}>
                <Input size='large' placeholder='Email' />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16} >
            <Col lg={12} sm={24} xs={24}>
              <Form.Item
                name={'agents'}
                rules={[
                  {
                    required: true,
                    message: 'Please enter Number of Agents',
                  },
                ]}>
                <Input size='large' placeholder='Number of Agents' />
              </Form.Item>
            </Col>
            <Col lg={12} sm={24} xs={24}>
              <Form.Item name={'website'}>
                <Input size='large' placeholder='Website' />
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <div className={styles.addproperty}>
          <button type="submit" onClick={() => form.submit()}>Create Agencey</button>
        </div>
      </div>

      <div className={styles.selectpakege}>
        <p>Packages</p>
        <h1 className="mt-1">Select Your Package</h1>
        <div className={styles.innerdiv}>
          <p style={{ color: switched ? '#0B2C3D' : '#B39359' }}>Monthly</p>{" "}
          <Switch className={styles.switch} checked={switched} onChange={(check) => handleSwitch(check)} />
          <p style={{ color: switched ? '#B39359' : '#0B2C3D' }}>yearly</p>
        </div>
      </div>

      <div className={`container ${styles.cardParent}`}>
        {
          pricePlan.map((item, index) => (
            <div key={index} className={styles.cardStyle} style={{ background: item?.bgColor, color: item?.color }}>
              <p>{item.title}</p>
              <h1> {switched ? item.yearlyPrice : item.price}<span>  /{switched ? item.year : item.duration}</span></h1>
              <p className="mb-4">{item.description}</p>
              <ul>
                <div className="flex mb-3">
                  <GiCheckMark />
                  <li className='ml-3'>Property Submit - {item.propertySubmit}</li>
                </div>
                <div className="flex mb-3">
                  <GiCheckMark />
                  <li className='ml-3 '>Agencey Profile- {item.agenceyProfile}</li>
                </div>
                <div className="flex mb-3">
                  <GiCheckMark />
                  <li className='ml-3'>Agent profile - {item.agentProfile}</li>
                </div>
                <div className="flex mb-3">
                  <GiCheckMark />
                  <li className='ml-3'>featured-properties - {item.featuredProperties}</li>
                </div>
              </ul>
              <div className={styles.btnCon}>
                <button
                  style={{
                    background: hoveredButtons[index] ? '#b39359' : item.buttonBg,
                    color : item.buttonText,
                    transition: 'background 0.3s, color 0.3s',
                  }}
                  className={styles.Button}
                  onMouseOver={() => handleMouseOver(index)} 
                  onMouseOut={() => handleMouseOut(index)} 
                >
                  Get Started
                </button>
              </div>

            </div>
          ))
        }
      </div>
      <GetListed />
    </div>
  );
}
