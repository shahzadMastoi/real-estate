'use client'
import FeatureProperty from "@/app/CommonComponents/FeaturedProperties/FeatureProperty";
import PropertiesSideBar from "@/app/CommonComponents/properties/propertiesSideBar";
import styles from './style.module.scss'
import Pageheader from "@/app/CommonComponents/PageHeader/pageHeader";

export default function LeftSideBar({searchParams}:any) {
  const data = {
    title: "Property Add",
    mainTitle: "Add Property",
  };
    return(
      <>
      <Pageheader data ={data} />
        <div className={`container ${styles.SideBarMain} ${searchParams.item && styles.rightSideBar}`}>
          <PropertiesSideBar/>
          <FeatureProperty type='propertypage' container={'no'} />
        </div>
        </>
    )
}