import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './style.module.scss'
import store from '../../store/store';
import Link from 'next/link';
import { AiOutlineCar, AiOutlineHeart } from 'react-icons/ai';
import { BiBath } from 'react-icons/bi';
import { LiaVectorSquareSolid } from 'react-icons/lia';
import { MdOutlineKingBed } from 'react-icons/md';
import { IoIosGitCompare } from 'react-icons/io';

const responsive = {
    desktop: {
        breakpoint: { max: 2000, min: 900 },
        items: 3,
        slidesToSlide: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 2,
        slidesToSlide: 1,
    },
    mobile: {
        breakpoint: { max: 767, min: 350 },
        items: 1,
        slidesToSlide: 1,
    },
    mobil: {
        breakpoint: { max: 350, min: 0 },
        items: 1,
        slidesToSlide: 1,
    },
};

const Popularproperties = () => {

    const { getFeaturedPrperty } = store.featureProperty;
    const [arr, setArr] = useState<any[]>([]);

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

    return (
        <main className='container'>
        <div className={styles.imageSwap}>
            <div className={styles.logoText}>
                <p>Best Choice</p>
                <h1>Popular Properties.</h1>

            </div>
            <div className={`parent`} >
                <Carousel
                    responsive={responsive}
                    showDots={true}
                    arrows={false}
                    dotListClass="custom-dot-list-style">
                    {arr?.length > 0 && arr?.map((property, index) => {
                        return (
                            <div className={`slider ${styles.slider}`} key={index}>
                                <div className={styles.propertyCardItem} key={property?.id}>
                                    <Link key={property?.id} href={`/routes/properties/propertDetails`}>
                                        <div className={styles.propertyCardItemChild}>
                                            <img src={property?.imageSrc} alt="" />
                                            <div className={styles.forSale} style={{ background: 'white' }}>
                                                {property?.status}
                                            </div>
                                            <div className={styles.camera}>
                                                <button><img src="/popular/camera.webp" alt="" />07</button>
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
                            </div>
                          
                        )})}
                </Carousel>
            </div>
        </div>
        </main>
    );
};

export default Popularproperties;
