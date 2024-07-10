'use client'
import OurExperts from '@/app/CommonComponents/OurExperts/OurExperts';
import React, { useEffect, useState } from 'react'
import styles from './style.module.scss'
import { data } from '../../../data'
import LogoSection from '@/app/CommonComponents/our partners/partner';
import ServicesProvide from '@/app/CommonComponents/ServicesProvider/ServicesProvide';
import GetListed from '@/app/CommonComponents/GetListed/GetListed';
import Pageheader from '@/app/CommonComponents/PageHeader/pageHeader';
import Reviews from '@/app/CommonComponents/Reviews/Reviews';

export default function Services() {

    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: any) => {
        const boundingRect = e.currentTarget.getBoundingClientRect();
        const mouseX = e.clientX - boundingRect.left;
        const mouseY = e.clientY - boundingRect.top;
        const centerX = boundingRect.width / 2;
        const centerY = boundingRect.height / 2;

        const moveX = (mouseX - centerX) / 20;
        const moveY = (mouseY - centerY) / 20;

        setPosition({ x: -moveX, y: -moveY });
    };

    const handleMouseEnter = () => {
        setPosition({ x: 0, y: 0 });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };



    const dataa = {
        title: "Services",
        mainTitle: "Our Services",
    };
    return (
        <div>
            <Pageheader data={dataa} />
            <main className='container'>
                <div className={styles.main}>
                    <div className={styles.whyUsSection}>
                        <div className={styles.intro}>
                            <span>Why Choose Us</span>
                            <h1>We Provide best Services for our customer<span>.</span></h1>
                            <p>Huge number of propreties availabe here for buy, sell and Rent. Also you find here co-living property, lots opportunity you have to choose here and enjoy huge discount you can get.</p>
                        </div>
                        <div className={styles.carddiv}>
                            {
                                data.map((item) => (
                                    <div className={styles.card}>
                                        <img src={item.img} alt='whyUsCardIcon_Images'></img>
                                        <div>
                                            <h1>Budget Friendly</h1>
                                            <p>Properties are most budget friendly</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className={styles.imgdiv} >
                        <img src='/about/about7.webp'
                            alt='about7_image'
                            onMouseMove={handleMouseMove}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            style={{
                                transform: `translate(${position.x}px, ${position.y}px)`,
                                transition: 'transform 0.3s ease-in-out',
                            }}
                        ></img>
                    </div>
                </div>
            </main>
            <ServicesProvide />
            <Reviews />
            <LogoSection />
            <OurExperts />
            <GetListed />
        </div>
    )
}
