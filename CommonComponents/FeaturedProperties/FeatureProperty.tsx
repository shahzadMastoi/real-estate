import styles from './style.module.scss'
import { BiBath } from 'react-icons/bi'
import { LiaVectorSquareSolid } from 'react-icons/lia'
import { MdOutlineKingBed } from 'react-icons/md'
import { AiOutlineCar } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'
import Link from 'next/link'
import store from '../../store/store'
import { useEffect, useState } from 'react'
import { Pagination } from 'antd'
import { IoIosGitCompare } from 'react-icons/io'


const FeatureProperty = (props: any) => {
  const { getFeaturedPrperty } = store.featureProperty;
  const [arr, setArr] = useState<any[] | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getFeaturedPrperty();
        setArr(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    load();
  }, []);
  


  const PageSize = 12;
  const startIndex = (currentPage - 1) * PageSize;
  const endIndex = startIndex + PageSize;
  const displayedData = arr && arr.slice(startIndex, endIndex);


  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };
  return (
    <main className={`${!props?.container && 'container'}`}>
    <div className={styles.featuredPropertCards}>
      {
        props.type === 'mainpage' &&
        <div className={styles.featuredPropertey}>
          <div>
            <p>Newly Added</p>
            <h1>Featured Properties<span>.</span></h1>
          </div>
          <div>
            <ul>
              <li style={{color:"#b39359"}}>All Properties</li>
              <li>For Buy</li>
              <li>For Sale</li>
              <li>For Rent</li>
              <li>Co Living</li>
            </ul>
          </div>
        </div>
      }
      <div className={styles.propertyCard}>
        {props.type === 'mainpage' && Array.isArray(arr) && arr.length > 0 ?
          (arr?.slice(0, 6).map((property) => (
            <div className={styles.propertyCardItem} key={property?.id}>
              <Link key={property?.id} href={{pathname: "/routes/properties/propertDetails", query: property}}>
                <div className={styles.propertyCardItemChild}>
                  <img src={property?.imageSrc} alt="PropertyImages" />
                  <div className={styles.forSale} style={{ background: 'white' }}>
                    {property?.status}
                  </div>
                  <div className={styles.camera}>
                    <button><img src="/properties/camera.webp" alt="" />07</button>
                    <button><img src="/icon/video.webp" alt="" />08</button>
                  </div>
                </div>

                <div className={styles.propertyCardChild}>

                  <h3>{property?.title}</h3>
                  <h4>{property?.location}</h4>
                  <span>{property?.addedDate}</span>
                  <ul className='d-flex justify-between'>
                    <li>
                      <LiaVectorSquareSolid />
                      {property?.sqFootage}
                    </li>
                    <li>
                      <MdOutlineKingBed />
                      {property?.bedrooms}
                    </li>
                    <li>
                      <BiBath />
                      {property?.bathrooms}
                    </li>
                    <li>
                      <AiOutlineCar />
                      {property?.carSpaces}
                    </li>
                  </ul>
                  <div className="d-flex justify-between mt-2 h4">
                    <div>Price: {property?.price}</div>
                    <div className="d-flex gap-1 align-items-center">
                      <IoIosGitCompare />
                      <AiOutlineHeart />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))) : (
            displayedData?.map((property: any) => {
              return (
                <div className={styles.propertyCardItem} key={property?.id}>
                  <Link key={property?.id} href={{pathname: "/routes/properties/propertDetails", query: property}}>
                    <div className={styles.propertyCardItemChild}>
                      <img src={property?.imageSrc} alt="" />
                      <div className={styles.forSale} style={{ background: 'white' }}>
                        {property?.status}
                      </div>
                      <div className={styles.camera}>
                        <button><img src="/properties/camera.webp"alt="" />07</button>
                        <button><img src="/icon/video.webp" alt="" />08</button>
                      </div>
                    </div>

                    <div className={styles.propertyCardChild}>
                      <h3>{property?.title}</h3>
                      <h4>{property?.location}</h4>
                      <span>{property?.addedDate}</span>
                      <ul className='d-flex justify-between'>
                        <li>
                          <LiaVectorSquareSolid />
                          {property?.sqFootage}
                        </li>
                        <li>
                          <MdOutlineKingBed />
                          {property?.bedrooms}
                        </li>
                        <li>
                          <BiBath />
                          {property?.bathrooms}
                        </li>
                        <li>
                          <AiOutlineCar />
                          {property?.carSpaces}
                        </li>
                      </ul>
                      <div className="d-flex justify-between mt-2 h4">
                        <div>Price: {property?.price}</div>
                        <div className="d-flex gap-1 align-items-center">
                          <AiOutlineHeart />
                          <AiOutlineHeart />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            }))}
      </div>

      {props.type !== 'mainpage' &&
        <Pagination
          className={`d-flex justify-center mt-5 ${styles.pagination}`}
          current={currentPage}
          onChange={handlePageChange}
          total={arr?.length} />
      }
    </div>
    </main>
  );
};

export default FeatureProperty;
