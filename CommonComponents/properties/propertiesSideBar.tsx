import { Col, Dropdown, Form, Input } from 'antd'
import styles from './style.module.scss'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { BiLocationPlus } from 'react-icons/bi'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { TfiHome } from 'react-icons/tfi'
import { items } from '../../routes/properties/data';
import ListCarousel from './propertiesListCarousel/ListCarousel'

const PropertiesSideBar = ()=> {

    const [form] = Form.useForm();

    return (
        <>
        <div className={styles.item2}>
            <div>
                <Form form={form} layout="vertical" >
                    <label htmlFor="">Property Search .</label>
                    <Col>
                        <Form.Item
                            name={'field1-'}>
                            <Input size='large' placeholder='Agency Title' prefix={<BiLocationPlus />} />
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item
                            name={'1'}>
                            <Dropdown overlay={items} trigger={['click']} placement="bottom" className={styles.dropdown}>
                                <Input size='large' placeholder='Agency Title' prefix={<BiLocationPlus />} suffix={<RiArrowDropDownLine />} />
                            </Dropdown>
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item
                            name={'2-'}>
                            <Dropdown overlay={items} trigger={['click']} placement="bottom" className={styles.dropdown}>
                                <Input size='large' placeholder='Agency Title' prefix={<TfiHome />} suffix={<RiArrowDropDownLine />} />
                            </Dropdown>
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item
                            name={'field1-'}>
                            <Dropdown overlay={items} trigger={['click']} placement="bottom" className={styles.dropdown}>
                                <Input size='large' placeholder='Agency Title' prefix={<AiOutlineDollarCircle />} suffix={<RiArrowDropDownLine />} />
                            </Dropdown>
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item
                            name={'field1-'}>
                            <Dropdown overlay={items} trigger={['click']} placement="bottom" className={styles.dropdown}>
                                <Input size='large' placeholder='Agency Title' prefix={<BiLocationPlus />} suffix={<RiArrowDropDownLine />} />
                            </Dropdown>
                        </Form.Item>
                    </Col>
                    <button>Search</button>
                </Form>
            </div>
            <ListCarousel/>
            <div>
                <h2 className='fs-2 mt-4'>Our Agents.</h2>
                <div className={`mt-4 ${styles.cardItems}`}>
                    <div className={styles.person}>
                        <img src="/agents/person3.webp" alt="person3_Picture" />
                        <div>
                            <h4>Albert S. Smith</h4>
                            <p>Real Estate Agent</p>
                        </div>
                    </div>
                    <div className={styles.person}>
                        <img src="/agents/person4.webp" alt="person4_picture" />
                        <div >
                            <h4>Albert S. Smith</h4>
                            <p>Real Estate Agent</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.tags}>
                <h3 className='fs-2 mb-4'>Tags</h3>
                <label htmlFor="">Real-Esate</label>
                <label htmlFor="">Appartment</label>
                <label htmlFor="">Sale Property</label>
                <label htmlFor="">Buy Property</label>
                <label htmlFor="">Duplex</label>
                <label htmlFor="">Houses</label>
            </div>
        </div>
        </>
    )
}
export default PropertiesSideBar;