"use client";
import Link from "next/link";
import React from "react";
import styles from "./style.module.scss";
import { HiArrowLongRight } from "react-icons/hi2";
import { experts } from "@/app/routes/Agency/staticData";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const OurExperts = () => {
  return (
    <main className="container">
      <div className={styles.expertMain}>
        <div className={styles.intro}>
          <span>Our Agents</span>
          <h1>Here Is Our Experts.</h1>
          <p>
            Huge number propreties availabe here for buy, sell and Rent, you a
            find here co-living property lots to choose here and enjoy huge.
          </p>
          <a href="#">
            <span>
              View All Posts
              <HiArrowLongRight />
            </span>
          </a>
        </div>
        <div>
          <div className={styles.hero}>
            {experts.map((item) => (
              <Link
                href={{ pathname: "/routes/Agency/AgentDetail", query: item }}
              >
                <div className={styles.cardDiv}>
                  <img src={item.img} alt="agent_image"></img>
                  <ul 
                  className={styles.icons}>
                    <li>
                    <FaFacebookF />
                    </li>
                    <li>
                    <FaTwitter />
                    </li>
                    <li>
                    <FaInstagram />
                    </li>
                    </ul>
                  <div className={styles.innerCard}>
                    <h1>{item.name}</h1>
                    <p>{item.position}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
export default OurExperts;
