import styles from './style.module.scss'
import {BsFillPlayCircleFill} from 'react-icons/bs'
const Videoplay = ()=> {
    
    return(
        <main className='container'>
        <div className={styles.videoPlay}>
            <img src="/videoPlay/video-2.webp" alt=" videoPlayIcon_Image" />
            <div className={styles.seticon}>
            <BsFillPlayCircleFill/>
            </div>
            <div className={styles.videoPlayChild2}>
                <span>Take a video tour</span>
                <h1>Watch the video for taking your decision easily.</h1>
                <span>view all</span>
            <img src='/videoPlay/shape-4.webp' alt='videoPlayShape4_Image'></img>
            </div>  
        </div>
        </main>
    )
}

export default Videoplay