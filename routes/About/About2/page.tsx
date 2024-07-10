'use client'
import styles from "./style.module.scss";
import OurExperts from "@/app/CommonComponents/OurExperts/OurExperts";
import Pageheader from "@/app/CommonComponents/PageHeader/pageHeader";
import ServicesProvide from "@/app/CommonComponents/ServicesProvider/ServicesProvide";
import LogoSection from "@/app/CommonComponents/our partners/partner";
import Reviews from "@/app/CommonComponents/Reviews/Reviews";
import GetListed from "@/app/CommonComponents/GetListed/GetListed";
import Whyus from "@/app/CommonComponents/WhyUs/whyus";
import { useState } from "react";

export default function About2() {

      const [position, setPosition] = useState({ x: 0, y: 0 });
      
      const handleMouseMove = (e: any) => {
      const boundingRect = e.currentTarget.getBoundingClientRect();
      const mouseX = e.clientX - boundingRect.left;
      const mouseY = e.clientY - boundingRect.top;
      const centerX = boundingRect.width / 2;
      const centerY = boundingRect.height / 2;

      const moveX = (mouseX - centerX) / 10;
      const moveY = (mouseY - centerY) / 10;

      setPosition({ x: -moveX, y: -moveY });
  };

  const handleMouseEnter = () => {
      setPosition({ x: 1, y: 0 });
  };

  const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
  };


  const data = {
    title: "About Us",
    mainTitle: "About Bary",
  };

  return (
    <>
      <Pageheader data={data} />
      <main className="container">
        <div className={styles.sec1}>
          <div className={styles.imgdiv}>
            {" "}
            <img src="/about/about1.webp" alt="about1_Image"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
                transition: 'transform 0.3s ease-in-out',
            }}
            ></img>
          </div>
          <div className={styles.history}>
            <span> Since 1975</span>
            <h1>
              We Provide Right Choice Of Properties That You Need And Have Great
              Opportunity To Choose From Thousands Of Collection{" "}
            </h1>
            <ul>
              <li>
                <h2> 20 K+</h2>
                <p>Properties</p>
              </li>
              <li>
                <h2> 12 K+</h2>
                <p>Customers</p>
              </li>
              <li>
                <h2> 160 +</h2>
                <p>Awards win</p>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <ServicesProvide />
      <Whyus />
      <Reviews />
      <LogoSection />
      <OurExperts />
      <GetListed />
    </>
  );
}
