import HomeSearch from '@/app/CommonComponents/HomeCommon/HomeSearc/HomeSearch'
import styles from './style.module.scss'
export default function Header() {

    return (
        <div>
            <div className={` ${styles.home2header}`}>
                <div className={`container ${styles.content}`}>
                    <div className={` ${styles.main1}`}>
                        <h1><u>Modern</u>, Creative & Luxury <u>Homes</u></h1>
                        <p className={styles.p}>We always try to make sure bes quality and modern technology for our customer to satisfy them more than 100% </p>
                        <button className='mt-3'>Contact Us</button>
                    </div>
                    <div className={styles.main2}>
                        <img src="/home2.webp" alt=""/>
                    </div>
                </div>
            </div>
            <div className='container'>
                <HomeSearch type='home2' />
            </div>
        </div>
    )
}