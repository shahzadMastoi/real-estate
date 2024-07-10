'use client'
import React, { useEffect, useState } from 'react';
import styles from './style.module.scss'
import { Form, Input, Button, Row, Col, Upload, Radio } from 'antd';
import { GoFileDirectory } from 'react-icons/go';
import { RadioTitle1, RadioTitle2 } from '../../../app/data';
import Pageheader from '@/app/CommonComponents/PageHeader/pageHeader';
import GetListed from '@/app/CommonComponents/GetListed/GetListed';
import store from '@/app/store/store';

function AdvanceSearch() {

    const PageTitle = {
        title: "Advance Search",
        mainTitle: "Advance Search",
      };

      const { getFeaturedPrperty } = store.featureProperty;
  const [arr, setArr] = useState<any[] | null>(null);
  const [searchCriteria, setSearchCriteria] = useState({
    title: '',
    price: '',
  
    
  });
  const [filteredResults, setFilteredResults] = useState<any[] | null>(null);


      useEffect(() => {
        const load = async () => {
          try {
            const data = await getFeaturedPrperty();
            setArr(data);
            setFilteredResults(data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
        load();
      }, []);

      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSearchCriteria(prevCriteria => ({
          ...prevCriteria,
          [name]: value,
        }));
      };

      const handleSearch = () => {
        // Perform filtering whenever search button is clicked
        console.log('handle working');
        
        if (arr) {
          const filteredData = arr.filter(item => {
            // Implement your filtering logic based on search criteria
            // For example, filtering by title and price
            return (
              item.title.toLowerCase().includes(searchCriteria.title.toLowerCase()) &&
              item.price === parseInt(searchCriteria.price)
              // ... Add other filtering conditions based on other fields
            );
          });
          setFilteredResults(filteredData);
        }
      };
      
      // const RadioGroup = ({ title }: any) => (
      //   <div className='d-flex'>
      //     <div className='d-flex flex-column'>
      //       {title.map((name: any, index: any) => (
      //         <Radio key={index}>{name}</Radio>
      //       ))}
      //     </div>
      //   </div>
      // );
// arr?.map((item)=>{
//   console.log(item.price);
  
// })
  return (
    <>
    <Pageheader data={PageTitle} />
     {/* {filteredResults && filteredResults.length > 0 && ( */}
    <div className='container'>
      <div className={styles.antdform}>
        <Form layout="vertical" >
          <Row gutter={16} >
            <Col lg={12} sm={24} xs={24}>
              <Form.Item
                name={'title'}
                label={'Property Title '}
                rules={[
                  {
                    required: true,
                    message: 'Please enter the Property Type',
                  },
                ]}>
                <Input   placeholder='Title' onChange={handleInputChange} />
              </Form.Item>
            </Col>
            <Col lg={12} sm={24} xs={24}>
              <Form.Item
                name={'price'}
                label={'Price'}
                rules={[
                  {
                    required: true,
                    message: 'Please enter Property subtype',
                  },
                ]}>
                <Input   placeholder='Price' onChange={handleInputChange} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16} >
            <Col lg={12} sm={24} xs={24}>
              <Form.Item
                name={'status'}
                className='mt-2'
                rules={[
                  {
                    required: true,
                    message: 'Please enter the Property status',
                  },
                ]}
                >
                <Input   placeholder='Status' />
              </Form.Item>
            </Col>
            <Col lg={12} sm={24} xs={24}>
              <Form.Item >
                <Input   className={`${styles.setlabel}`} placeholder='Min Price 3675676$' />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16} >
            <Col lg={12} sm={24} xs={24}>
              <Form.Item>
                <Input className={styles.setlabel}   placeholder='City,country,or Postal Codes' />
              </Form.Item>
            </Col>
            <Col lg={12} sm={24} xs={24}>
              <Form.Item>
                <Input className={styles.setlabel}   placeholder='Bedroom' />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16} >
            <Col lg={12} sm={24} xs={24}>
              <Form.Item
               className='mt-2'
                rules={[
                  {
                    required: true,
                    message: 'Please enter the Max Price',
                  },
                ]}>
                <Input   placeholder='Max Price 280000$' />
              </Form.Item>
            </Col>
            <Col lg={12} sm={24} xs={24}>
              <Form.Item
             className='mt-2'
                name={'area'}
                rules={[
                  {
                    required: true,
                    message: 'Please enter the Property Area',
                  },
                ]}>
                <Input   placeholder='Sqft' />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16} >
            <Col lg={12} sm={24} xs={24}>
              <Form.Item
                className='mt-2'
                name={'bathroom'}
                rules={[
                  {
                    required: true,
                    message: 'Please enter the number of bathroom',
                  },
                ]}
                >
                <Input  type='number' placeholder='Bathrooms' />
              </Form.Item>
            </Col>
            <Col lg={12} sm={24} xs={24}>
              <Form.Item
                className='mt-2'
                name={'image'}
                rules={[
                  {
                    required: true,
                    message: 'Please enter virtual',
                  },
                ]}
                >
                <Input className={styles.setlabel}   type='text' placeholder='Image,virtual tour,virtual opeb house,featured' />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16} >
            <Col lg={12} sm={24} xs={24}>
              <Form.Item
                name={'Acers'}
                rules={[
                  {
                    required: true,
                    message: 'Please enter Area in Acers',
                  },
                ]}>
                <Input className={styles.setlabel}   placeholder='Acers' />
              </Form.Item>
            </Col>
            <Col lg={12} sm={24} xs={24}>
              <Form.Item
                name={'Sort by'}
                rules={[
                  {
                    required: true,
                    message: 'Please enter Sort by',
                  },
                ]}>
                <Input className={styles.setlabel}  placeholder='Sort by' />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16} >
            <Col lg={12} sm={24} xs={24}>
              <Form.Item>
                <Input className={styles.setlabel}   type='button' value="Reset" />
              </Form.Item>
            </Col>
            <Col lg={12} sm={24} xs={24}>
              <Form.Item>
                <Input className={styles.setlabel} style={{backgroundColor:"#0b2c3d", color:"white"}}  type='button' value="Search" onClick={handleSearch} />
              </Form.Item>
            </Col>
          </Row>
          <br></br>
          <br></br>
          {/* <Row gutter={16} >
            <Col lg={24} sm={24} xs={24}>
              <Form.Item
                label={'Sub-Divisions'}
                name={'sub division'}
                rules={[
                  {
                    required: true,
                    message: 'Please enter sub division',
                  },
                ]}>
                <Input className={styles.setlabel}  />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16} >
            <Col lg={24} sm={24} xs={24}>
              <Form.Item
                label={'Medium or Junior School Listing'}
                name={'bathrooms'}
                rules={[
                  {
                    required: true,
                    message: 'Please enter Listing',
                  },
                ]}>
                <Input className={styles.setlabel}   />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16} >
            <Col lg={24} sm={24} xs={24}>
              <Form.Item
                label={'Special Listing Conditions'}
                name={'special listing'}
                rules={[
                  {
                    required: true,
                    message: 'Please enter Special listing',
                  },
                ]}>
                <Input className={styles.setlabel}  />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16} >
            <Col lg={24} sm={24} xs={24}>
              <Form.Item
                label={'Listing terms'}
                name={'listing term'}
                rules={[
                  {
                    required: true,
                    message: 'Please enter listing terms',
                  },
                ]}>
                <Input className={styles.setlabel}   />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16} style={{display:"flex",justifyContent:"space-between"}}>
            <Col lg={10} sm={24} xs={24}>
              <Form.Item
               label="year built"
                rules={[
                  {
                    required: true,
                    message: 'Please enter the year built',
                  },
                ]}>
                <Input   />
              </Form.Item>
            </Col>
            <Col lg={4}>
            <h1 style={{marginLeft:"50px",fontSize:"32px",marginTop:"3rem"}}>To</h1>
            </Col>
            <Col lg={10} sm={24} xs={24}>
              <Form.Item
              style={{marginTop:"2.5rem"}}
                name={'status'}
                rules={[
                  {
                    required: true,
                    message: 'Please enter the Property Title',
                  },
                ]}>
                <Input  />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16} >
            <Col lg={24} sm={24} xs={24}>
              <Form.Item
                label={'Public Remarks'}
                name={'public remarks'}
                rules={[
                  {
                    required: true,
                    message: 'Please enter public remarks',
                  },
                ]}>
                <Input className={styles.setlabel}   />
              </Form.Item>
            </Col>
          </Row> */}
        </Form>
        
        {/* {
        filteredResults && filteredResults.length > 0 && filteredResults.map(item => (
        <div key={item.id}>
         
          <p>{item.title}</p>
          <p>{item.price}</p>
          
        </div>
      ))} */}
      </div>
    </div>
    {/* )} */}
<GetListed />
  </>
  )
}

export default AdvanceSearch
