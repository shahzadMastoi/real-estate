import { Input } from "antd";
import styles from "./style.module.scss";

export default function GetListed() {
  return (
    <div className={` ${styles.listedMain}`}>
      <div className={`container ${styles.listed}`}>
        <div className={styles.listedOwner}>
          <div>
            <h1>Are you a Home Owner?</h1>
            <p>Put your email address and get listed</p>
          </div>
            <div className={styles.inputDive}>
            <Input className={styles.inputcls} placeholder="Enter your Email here..." suffix = {<button>Get Listed</button>}  />
            <button className={styles.btndisplay}>Get Listed</button>
            </div>
        </div>
        <div className={styles.imageDiv}>
          <img src="/background/bg-1.webp"></img>
        </div>
      </div>
    </div>
  );
}
