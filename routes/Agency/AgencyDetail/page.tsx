'use client'
import styles from "./style.module.scss";
import { AgenceyOverview } from "@/app/data";
import { BsFillStarFill } from "react-icons/bs";
import FeatureProperty from "@/app/CommonComponents/FeaturedProperties/FeatureProperty";
import Pageheader from "@/app/CommonComponents/PageHeader/pageHeader";
import OurExperts from "@/app/CommonComponents/OurExperts/OurExperts";
import GetListed from "@/app/CommonComponents/GetListed/GetListed";
import SuggestedCommunities from "@/app/CommonComponents/SuggestedCommunities/page";

export default function AgenceyDetail({ searchParams }: any) {
  const properties = searchParams

  const data = {
    title: 'Listed Agencies',
    mainTitle: 'Agencey Details'
  }

  return (
    <>
      <Pageheader data={data} />
      <div className="container">
        <div className={`${styles.section1}`}>
          <div className={styles.stat}>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <span>135</span>
                <span>K</span>
                <span>+</span>
                <p>Properties sold</p>
              </li>
              <li className={styles.li}>
                <span>118</span>
                <span>K</span>
                <span>+</span>
                <p>Customers</p>
              </li>
              <li className={styles.lastLi}>
                <span>6</span>
                <span>+</span>
                <p>Awards Win</p>
              </li>
            </ul>
          </div>
          <div className={styles.imgdiv}>
            <img src="/agencyDetail.webp"></img>
          </div>
        </div>

        <div className={styles.section2}>
          <div className={styles.overview}>
            <h1>Overview</h1>
            <p> {AgenceyOverview}</p>
            <div className={styles.phone}>
              <div>
                <p className={styles.color}>Phone Number</p>
                <p>+9985 254 784</p>
              </div>

              <div>
                <p className={styles.color}>Agent.</p>
                <p>15 Agents</p>
              </div>

              <div>
                <p className={styles.color}>Properties</p>
                <p>75 Properties</p>
              </div>
            </div>
          </div>
          <div className={styles.address}>
            <div className={styles.location}>
              <h1>Address</h1>
              <p>2265 Paul Wayne Haggerty Road, New Orleans</p>
            </div>
            <h1>Rating</h1>
            <div className={`d-flex gap-2 mt-3 ml-2 ${styles.stars}`}>
              {Array.from({ length: 5 }, () =>
                <BsFillStarFill />
              )}
            </div>
          </div>
        </div>
      </div>
      <SuggestedCommunities />
      <FeatureProperty type='mainpage'/>
      <OurExperts />
      <GetListed />
    </>
  );
}
