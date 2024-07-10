'use client'
import Styles from "./style.module.scss";
import { Button, Pagination } from "antd";
import { useEffect, useState } from "react";
import store from "@/app/store/store";
import Link from "next/link";
import Pageheader from "@/app/CommonComponents/PageHeader/pageHeader";
import GetListed from "@/app/CommonComponents/GetListed/GetListed";
import { cardObject } from "./staticData";

export default function Agency() {
  const [currentPage, setCurrentPage] = useState(1);
  const [arr, setArr] = useState<any[] | null>(null);
  const { getAgency } = store.agency

  const data = {
    title: 'Listed Agencies',
    mainTitle: 'Our Agencies',
  }


  useEffect(() => {
    const load = async () => {
      const data = await getAgency()
      setArr(data);
    }
    load()
  }, [])

  const PageSize = 9;
  const startIndex = (currentPage - 1) * PageSize;
  const endIndex = startIndex + PageSize;
  const displayedData = arr && arr?.slice(startIndex, endIndex);


  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Pageheader data={data} />
      <div className="container">
        <div className={Styles.outerSection2}>
          {displayedData?.map((item) => (
            <div className={Styles.section2}>
              <img src={item.img} />
              <div>
                <h2>{item.title}</h2>
                <p className={Styles.location}>{item.location}</p> 
                <p>Properties {cardObject?.length} - 7 Agents</p>
                <Button><Link href={{
                  pathname: "/routes/Agency/AgencyDetail", query: {
                    title: item.title, location: item.location,
                    img: item.img, phone: item?.phone, agents: item?.agents
                  }
                }}>View Details</Link></Button>
              </div>
            </div>
          ))}
        </div>
        <div className={Styles.pagination}>
          <Pagination
            className='d-flex justify-center mt-5'
            current={currentPage}
            onChange={handlePageChange}
            total={cardObject?.length} />
        </div>
      </div>
      <GetListed />
    </>
  );
}
