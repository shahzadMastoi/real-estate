import { BiSolidQuoteRight } from 'react-icons/bi'
import styles from './style.module.scss'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'
import { Carousel } from 'antd';
import { AiTwotoneStar } from 'react-icons/ai';
const Reviews = () => {
  const carouselSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const next = () => {
    carousel.next();
  };
  const prev = () => {
    carousel.prev();
  };
  let carousel: any;
  return (
    <div className='container'>
      <Carousel {...carouselSettings} ref={(node) => (carousel = node)}>
        <div className={styles.bgDotedPic}>
            <img src='/review/dots.webp' alt='dotedBg_Image' className={styles.imageInbackground}></img>
          <div className={`${styles.testimonial}`}>
            <div className={styles.imgDiv}>
              <img src="/person2.webp" alt="person2_Image" />
            </div>
            <div className={styles.content2}>
              <div className={`d-flex justify-between ${styles.icon}`}>
                <span className={`mb-2 ${styles.color}`}>Testimonials</span>
                <BiSolidQuoteRight />
              </div>
              <h2>Reviews From our Happy Clients</h2>
              <p>
                Bary do a great job to find the perfect home. It’s very easy for
                every one to buy, sell or rent property we belive they continure
                their great service and appriciate them recomended.
              </p>
              <div className={`d-flex justify-between ${styles.color}`}>
                <p>Oliver Stephen</p>
                <div className='d-flex gap-1'>
                {Array.from({ length: 5 }).map((_, index) => (
                    <AiTwotoneStar key={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className={`d-flex ${styles.btn}`}>
            <IoIosArrowDropleftCircle onClick={next} />
            <IoIosArrowDroprightCircle onClick={prev} />
          </div>
        </div>
        <div className={styles.bgDotedPic}>
            <img src='/review/dots.webp' className={styles.imageInbackground} alt='dotedBg_Image'></img>
          <div className={`${styles.testimonial}`}>
            <div className={styles.imgDiv}>
              <img src="/person5.webp" alt="person5_Image" />
            </div>
            <div className={styles.content2}>
              <div className='d-flex justify-between'>
                <span className={`mb-2 ${styles.color}`}>Testimonisl</span>
                <BiSolidQuoteRight />
              </div>
              <h2>Reviews From our Happy Clients</h2>
              <p>
                Bary do a great job to find the perfect home. It’s very easy for
                every one to buy, sell or rent property we belive they continure
                their great service and appriciate them recomended.
              </p>
              <div>
                <p className={styles.color}>Oliver Stephen</p>
              </div>
            </div>
          </div>
          <div className={`d-flex ${styles.btn}`}>
            <IoIosArrowDropleftCircle onClick={next} />
            <IoIosArrowDroprightCircle onClick={prev} />
          </div>
        </div>
      </Carousel>
    </div>
  )
}
export default Reviews;