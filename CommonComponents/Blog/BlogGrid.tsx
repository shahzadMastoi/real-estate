
import { blogPostGrid } from '@/app/data'
import styles from './style.module.scss'


 const BlogGrid =(props:any)=> {
    
    return(
        <div className={styles.homeContainer}>
          {blogPostGrid.map((item) => (
            <div className={`${props?.type && styles.flex1} ${styles.homeItem}`}>
              <img src={item.src} alt="BlogGrid_images" />
              <div>
              <span>{item.date}</span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
    )
}
export default BlogGrid;