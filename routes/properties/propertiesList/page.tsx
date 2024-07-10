'use client'
import PropertiesSideBar from '@/app/CommonComponents/properties/propertiesSideBar'
import styles from './style.module.scss'
import PropertyList from '@/app/CommonComponents/properties/PropertyList'
import Pageheader from '@/app/CommonComponents/PageHeader/pageHeader';

export default function PropertiesList({searchParams}:any) {
    const data = {
        title: "Property Add",
        mainTitle: "Add Property",
      };
    return (
        <>
        <Pageheader data = {data} />
        <div className={`container ${styles.SideBarMain} ${searchParams?.item && styles.RightSide}`}>
            <PropertiesSideBar />
            <PropertyList />
        </div>
        </>
    )
}