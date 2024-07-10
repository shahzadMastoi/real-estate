import React from "react";
import { blogPostGrid } from "@/app/data";
import { Pagination } from "antd";
import Pageheader from "@/app/CommonComponents/PageHeader/pageHeader";
import styles from "./style.module.scss"
import GetListed from "@/app/CommonComponents/GetListed/GetListed";

export default function BlogGrid() {
  const data = {
    title: 'Our Blog',
    mainTitle: 'Latest Blog Post',
  }
  return (
    <div>
      <Pageheader data={data} />
      <div className={`container ${styles.houses}`}>
        <div className={styles.houses}>
          <div className={styles.homecontainer}>
            {blogPostGrid.map((item) => (
              <div className={styles.homeitem}>
                <img src={item.src} alt="blogGrid_images" />
                <div>
                  <span>{item.date}</span>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
                <div></div>
              </div>
            ))}
          </div>
          <div className="d-flex justify-center mt-5">
            <Pagination defaultCurrent={1} total={50} />
          </div>
        </div>
      </div>
        <GetListed />
      </div>
      );
}
