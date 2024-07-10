'use client'
import { Form} from 'antd'
import styles from '../style.module.scss'
import ItemName, { Feedback, Reviews, items } from '../data';
import Pageheader from '@/app/CommonComponents/PageHeader/pageHeader';
import FeedBack from '@/app/CommonComponents/Feedback/FeedBack';
import GetListed from '@/app/CommonComponents/GetListed/GetListed';


function PropertyDetail({searchParams}:any) {

    const [form] = Form.useForm();
    const data = {
        title: "Our Proerties",
        mainTitle: "Properties",
      };

    return (
        <>
        <Pageheader data ={data} />
        <main className='container'>
            <div className={styles.container}>
                <div className={styles.item1}>

                    <div className={styles.propertySearch}>
                        <img src={searchParams?.imageSrc||"/properties2.webp"} alt="" />
                    </div>
                    <div className={styles.container2}>
                        <div>
                            <h2 className='fs-2 mb-3'>{searchParams?.title}</h2>
                            <h3 className='fs-6 mb-3'>{searchParams?.location}</h3>
                            <p>Huge number of propreties availabe here for buy, sell and Rent. Also you find here co-living property, lots opportunity you have to choose here and enjoy huge discount you can get. These cases are perfectly simpl and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prev ents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided are cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice</p>
                            <div className={styles.imgContainer}>
                                <div className={styles.setImages}>
                                    <div className={styles.imageGrid}>
                                        <img src="/blogdetail/01.webp" alt="" />
                                        <img className={`${styles.specificImage}`} src="/blogdetail/07.webp" alt="" />
                                        <img className={styles.specificImage} src="/blogdetail/03.webp" alt="" />
                                        <img className={styles.lastimage} src="/blogdetail/05.webp" alt="" />
                                    </div>
                                </div>
                                <div className={styles.prgrph}>
                                    <p>Huge number of properties available here for buy, sell, and rent. Also, you can find co-living properties, lots of opportunities to choose from, and enjoy huge discounts. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammeled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain.</p>
                                </div>
                            </div>
                            <p>Huge number of propreties availabe here for buy, sell and Rent. Also you find here co-living property, lots opportunity you have to choose here and enjoy huge discount you can get. These cases are perfectly simpl and easy to distinguish. In a free hour, when our power of choice is untrammelled</p>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className={styles.Amenities}>
                        <p className='fs-2'>Property Amenities.</p>
                        <div className={styles.content}>
                            <ItemName />
                        </div>
                    </div>
                    <div className={styles.floorPlan}>
                        <div>
                            <h3 className='fs-2'>Floor Plan.</h3>
                        </div>
                        <div className={styles.flooritem}>
                            <img src="/properties/floor1.webp" alt="" />
                            <img src="/properties/floor3.webp" alt="" />
                        </div>
                    </div>
                    <div>
                        <div className='gap-5 text-center align-items-center d-flex'>
                            <div className='fs-2 mr-5'>Nearby Places.</div>
                            <div>Health & Medical</div>
                            <div>Shopping Mall</div>
                            <div>School & College</div>
                            <div>Gym</div>
                        </div>

                        <div className='d-flex justify-between flex-column d-flex gap-10'>
                            {Reviews.map((review) => (
                                <div className='d-flex gap-4 align-items-center mt-4 justify-between border-bottom border-dark' key={review.title}>
                                    <div className='d-flex gap-2 mb-4 align-items-center'>
                                        <img src={review.src} alt={review.title} />
                                        <div className='d-flex flex-column'>
                                            <p>{review.title}</p>
                                            <p>{review.distance}</p>
                                        </div>
                                    </div>
                                    <div className='d-flex'>
                                        {review.icon.map((icon, index) => (
                                            <span key={index}>{icon}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>
                    <FeedBack />
                </div>
            </div>
        </main>
        <GetListed />
        </>
    )
}
export default PropertyDetail







