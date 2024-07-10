'use client'
import React from "react";
import styles from "./style.module.scss";
import { popularPost } from "@/app/data";
import { Button, Input, Pagination } from "antd";
import Pageheader from "@/app/CommonComponents/PageHeader/pageHeader";
import BlogGrid from "@/app/CommonComponents/Blog/BlogGrid";
import GetListed from "@/app/CommonComponents/GetListed/GetListed";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";

export default function blogLeftSideBar({ searchParams }: any) {
  const data = {
    title: 'Our Blog',
    mainTitle: 'Latest Blog Post',
  }

  return (
    <div>
      <Pageheader data={data} />
      <div className={`container ${styles.main} ${searchParams?.item && styles.mainRight}`}>
        <div className={styles.sidebar}>
          <div>
            <h1>Search</h1>
            <Input placeholder="Keywords here..." className={styles.input} suffix={<FaSearch />} />
          </div>
          <div>
            <h1>Catagories</h1>
            <div>
              <button className={styles.category}>
                <span>Apparment </span>
                <span>35</span>
              </button>
              <button className={styles.category}>
                <span>Family House</span>
                <span>50</span>
              </button>
              <button className={styles.category}>
                <span>Duplex Villa</span>
                <span>38</span>
              </button>
              <button className={styles.category}>
                <span>Form House</span>
                <span>14</span>
              </button>
              <button className={styles.category}>
                <span>Condo</span>
                <span>12</span>
              </button>
            </div>
          </div>
          <div>
            <h1>Popular Post</h1>
            {popularPost.map((item) => (
              <Link href="#">
                <div className={styles.post}>
                  <img src={item.img}></img>
                  <div className={styles.decription}>
                    <h2>{item.date}</h2>
                    <p>{item.detail}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div>
            <h1>Archieves</h1>
            <div>
              <button className={styles.category}>
                <span>January,2022 </span>
                <span>35</span>
              </button>
              <button className={styles.category}>
                <span>December,2021</span>
                <span>50</span>
              </button>
              <button className={styles.category}>
                <span>November,2021</span>
                <span>38</span>
              </button>
              <button className={styles.category}>
                <span>Octobor,2021</span>
                <span>14</span>
              </button>
              <button className={styles.category}>
                <span>September,2021</span>
                <span>12</span>
              </button>
            </div>
          </div>

          <div>
            <h1>Tags</h1>
            <div>
              <button className={styles.button}>Real Estate</button>
              <button className={styles.button}>Appartment</button>
              <button className={styles.button}>sale Property</button>
              <button className={styles.button}>Duplex</button>
              <button className={styles.button}>Buy Property</button>
              <button className={styles.button}>Houses</button>
              {/* <Button className={styles.button}>Appartment</Button>
              <Button className={styles.button}>sale Property</Button>
              <Button className={styles.button}>Duplex</Button>
              <Button className={styles.button}>Buy Property</Button>
              <Button className={styles.button}>Houses</Button> */}
            </div>
          </div>
        </div>
        <div className={styles.grid}>
          <BlogGrid type={'flex'} />
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "100px" }}>
            <Pagination defaultCurrent={1} total={50} />
          </div>
        </div>
      </div>
      <GetListed />
    </div>
  );
}
