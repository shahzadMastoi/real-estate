import { FaFacebook } from "react-icons/fa";
import styles from "./style.module.scss";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      <main className="container align-items-center d-flex">
        <div className={styles.footerItems}>
          <div className={styles.one}>
            <img src="/logo/logo.svg" alt="" />
            <div>
              <p>
                Properties are most budget friendly so you can find many
                opportunities just on one click.
              </p>
              <p>© <span style={{color:"#b39359"}}>CodeCarnival.</span> All Rights Reserved - Privacy Policy</p>
            </div>
          </div>
          <div className={styles.two}>
            <h3>Information</h3>
            <ul>
              <li>About us</li>
              <li>Properties</li>
              <li>Careers</li>
              <li>Payment</li>
              <li>Blog Post</li>
            </ul>
          </div>
          <div className={styles.three}>
            <h3>Support</h3>
            <ul>
              <li>Add Property</li>
              <li>Terms & Condition</li>
              <li>Help line</li>
              <li>Our Agents</li>
              <li>features</li>
            </ul>
          </div>
          <div className={styles.four}>
            <h3>Address</h3>
            <p>2104 Charmaine Lane Amarillo, New York</p>
            <span className={styles.icon}><FaFacebook /> <AiFillTwitterCircle /> <AiFillInstagram /></span>
          </div>
        </div>
      </main>
    </footer>
  );
}

export default Footer;
