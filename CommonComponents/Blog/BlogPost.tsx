import styles from "./style.module.scss";
import { blogpost } from "../../data";

const BlogPost = ()=> {
  return (
    <main className="container">
      <div className={styles.houses}>
        <div className={styles.textCenter}>
          <p>Our Blog</p>
          <h1>Check Our Blog Post's.</h1>
        </div>
        <div className={styles.homeContainer}>
          {blogpost.map((item) => (
            <div className={styles.blogItem}>
              <img src={item.src} alt="" />
              <div>
                <span>{item.date}</span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
              <div></div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
export default BlogPost;
