import styles from '@/app/style.module.scss';
import HomeSearch from '../CommonComponents/HomeCommon/HomeSearc/HomeSearch';


const HomeHeader = ()=> {
    return (
        <section className={styles.section}>
            <div className={styles['image-container']}>
                <div className='bg-dark'>
                    <img
                        src="/home/home-3.webp"
                        alt="Home3Header_Image"
                        className={`img-fluid ${styles['responsive-image']}`} />

                    <div className={styles['text-overlay']}>
                        <p className='ptag'>A new way to find Properties</p>
                        <h1 >Search and Find Luxury Homes</h1>
                    </div>
                </div>
                <HomeSearch />
            </div>
        </section>
    )
}

export default HomeHeader