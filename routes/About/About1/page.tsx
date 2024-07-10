"use client";
import styles from "./style.module.scss";
import LogoSection from "../../../CommonComponents/our partners/partner";
import ServicesProvide from "@/app/CommonComponents/ServicesProvider/ServicesProvide";
import Reviews from "@/app/CommonComponents/Reviews/Reviews";
import GetListed from "@/app/CommonComponents/GetListed/GetListed";
import Whyus from "@/app/CommonComponents/WhyUs/whyus";


export default function About() {
  function startCountdown(targetCount: any, duration: any) {
    // let countElement = document.getElementById('count');
    const interval = 10;

    const step = targetCount / (duration / interval);

    let currentCount = 0;
    const countdownInterval = setInterval(() => {
      currentCount += step;

      if (currentCount >= targetCount) {
        currentCount = targetCount;
        clearInterval(countdownInterval);
      }

      const countElement = document.getElementById("count") as HTMLElement | null;
      if (countElement) {
        countElement.innerHTML = Math.round(currentCount).toString();
      } else {
        console.error("Element with ID 'count' not found");
      }

      const countElement2 = document.getElementById("count2") as HTMLElement | null;
      if (countElement2) {
        countElement2.innerHTML = Math.round(currentCount).toString();
      } else {
        console.error("Element with ID 'count2' not found");
      }
       
      const countElement3 = document.getElementById("count3") as HTMLElement | null;
      if (countElement3) {
        countElement3.innerHTML = Math.round(currentCount).toString();
      } else {
        console.error("Element with ID 'count3' not found");
      }
       
    }, interval);
  }

  startCountdown(100, 2000);

  return (
    <>
      <div className={styles.aboutsec}>
        <div className={styles.explaination}>
          <span>About us</span>
          <h2>About Bary</h2>
          <p className={styles.para}>
            Huge number of propreties availabe here for buy<br></br> and sell,
            also you can find here co-living property
          </p>
        </div>
      </div>
      <div className={styles.section1}>
        <img
          src="/about/about5.webp"
          className={styles.img}
          alt="about5_Image"
        />
      </div>
      <main className="container">
        <div className={styles.section2}>
          <div className={styles.history}>
            <p> Since 1975</p>
            <h2>
              We Provide Right Choice Of Properties That You Need And Have Great
              Opportunity To Choose From Thousands Of Collection
            </h2>

            <div className={styles.stat}>
              <div>
                <h2>
                  {" "}
                  <span id="count">0</span> K+
                </h2>
                <p>Properties</p>
              </div>
              <div style={{ marginLeft: "100px" }}>
                <h2>
                  <span id="count2">0</span>K+
                </h2>
                <p>Properties</p>
              </div>
              <div style={{ marginLeft: "100px" }}>
                <h2>
                  {" "}
                  <span id="count3">0</span> +
                </h2>
                <p>Properties</p>
              </div>
            </div>
          </div>
        </div>
      </main>
        <Whyus />
        <ServicesProvide />
        <Reviews />
        <LogoSection />
      <GetListed />
    </>
  );
}
