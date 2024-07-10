import { suggestedcommunity } from '@/app/data'
import Styles from'./style.module.scss'
import { Button } from 'antd'
import Link from 'next/link'
import React from 'react'

function SuggestedCommunities() {
  return (
    <div className="container">
            <h1 style={{fontSize:"36px" , fontFamily:"Lora"}} className='mb-5'>Suggesting Communities</h1>
        <div className={Styles.outerSection2}>
          {suggestedcommunity?.map((item) => (
            <div className={Styles.section2}>
              <img src={item.img} />
              <div>
                <h2>{item.title}</h2>
                <p className={Styles.location}>{item.location}</p> 
                <p>Properties {suggestedcommunity?.length} - 7 Agents</p>
                <Button><Link href={{
                  pathname: "/routes/Agency/AgencyDetail", query: {
                    title: item.title, location: item.location,
                    img: item.img,
                  }
                }}>View Details</Link></Button>
              </div>
            </div>
          ))}
        </div>
        {/* <div className={Styles.pagination}>
          <Pagination
            className='d-flex justify-center mt-5'
            current={currentPage}
            onChange={handlePageChange}
            total={cardObject?.length} />
        </div> */}
      </div>
  )
}

export default SuggestedCommunities
