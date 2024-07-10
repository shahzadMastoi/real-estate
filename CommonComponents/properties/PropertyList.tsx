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


const PropertyList = () => {
    const { getFeaturedPrperty } = store.featureProperty;
    const [arr, setArr] = useState<any[] | null>(null);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const load = async () => {
            try {
                const data = await getFeaturedPrperty();
                setArr(data);
            } catch (error) {
                console.error("Error fetching data:", error); // Log any errors
            }
        };
        load();
    }, []);



    const PageSize = 9;
    const startIndex = (currentPage - 1) * PageSize;
    const endIndex = startIndex + PageSize;
    const displayedData = arr && arr.slice(startIndex, endIndex);


    const handlePageChange = (page: any) => {
        setCurrentPage(page);
    };
    return (
        <main className={``}>
            <div className={styles.featuredPropertCards}>
                <div className={styles.propertyCard}>
                    {displayedData?.map((property: any) => (
                        <div className={styles.propertyCardItem} key={property?.id}>
                            <Link key={property?.id} className='d-flex align-items-center' href={{ pathname: "/routes/properties/propertDetails", query: property }}>
                                <div className={styles.propertyCardItemChild}>
                                    <div className={styles.imgTag}>
                                    <img src={property?.imageSrc} alt="preoperty_images" />
                                    </div>
                                    <div className={styles.forSale} style={{ background: 'white' }}>
                                        {property?.status}
                                    </div>
                                    <div className={styles.camera}>
                                        <button><img src="/camera.webp" alt="cameraIcon_image" />07</button>
                                        <button><img src="/icon/video.webp" alt="videoIcon_image" />07</button>
                                    </div>
                                </div>

                                <div className={styles.propertyCardChild}>
                                    <div className={styles.residance}>
                                        <h3>{property?.title}</h3>
                                        <h4>{property?.location}</h4>
                                        <span>{property?.addedDate}</span>
                                        <div className={`d-flex justify-between h4 ${styles.price}`}>
                                            <div>Price: {property?.price}</div>
                                            <div className="d-flex gap-1 align-items-center">
                                                <AiOutlineHeart />
                                                <AiOutlineHeart />
                                            </div>
                                        </div>
                                    </div>
                                    <ul className='d-flex'>
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

                                </div>
                            </Link>
                        </div>
                    ))
                    }
                </div>

                <Pagination
                    className='d-flex justify-center mt-5'
                    current={currentPage}
                    onChange={handlePageChange}
                    total={arr?.length} />
            </div>
        </main>
    );
};

export default PropertyList;
