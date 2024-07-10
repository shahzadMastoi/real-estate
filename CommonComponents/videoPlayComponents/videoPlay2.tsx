import styles from './style.module.scss'
import { BsFillPlayCircleFill } from 'react-icons/bs'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
const VideoPLay2 = ()=> {
  return (
    <div className='container'>
    <div className={styles.main}>
      <div className={styles.content1}>
        <div className={styles.content02}>
          <p className='mb-2'>Take a video tour</p>
          <h2>Watch the video for taking your decision easily.</h2>
          <p className={`d-flex align-items-center gap-3 mt-2 ${styles.pIcon}`}>View all <HiOutlineArrowNarrowRight/></p>
        </div>

          <div className={styles.img}>
          <img src="/video.webp" alt="vidionIcon_Image" />
          <BsFillPlayCircleFill />
        </div> 
        <img className={styles.dots} src="/shape-3.webp" alt=" shape3Icon_Image" />
        </div>
        <div className={styles.question}>
        <h1><span>have a Question?</span> +01234 874 854</h1>
        </div>
      </div>
      </div>
      )
}

      export default VideoPLay2