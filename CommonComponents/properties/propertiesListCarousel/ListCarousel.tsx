import store from "@/app/store/store";
import { Carousel } from "antd";
import { useEffect, useState } from "react";
import styles from '../style.module.scss'
import Link from "next/link";
import { AiOutlineHeart } from "react-icons/ai";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { IoIosGitCompare } from "react-icons/io";


const ListCarousel = ()=> {
    const { getFeaturedPrperty } = store.featureProperty;
    const [arr, setArr] = useState<any[] | null>(null);

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

    const carouselSettings = {
        dots: false,
        infinite: true,
        slidesToShow: 1, 
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,   
    };


    const next = () => {
        carousel.next();
    };
    const prev = () => {
        carousel.prev();
    };
    let carousel: any;


    return (
        <>
        <h1 className="fs-3 mt-3">Featured Properties</h1>
        <div className={styles.verticalCarouselWrapper}>
            <Carousel {...carouselSettings} ref={(node) => (carousel = node)}>
                {arr?.map((property, index) => (
                    <><div key={property?.id} className={styles.antdCarousal}>
                        <Link key={property?.id} href={{ pathname: "/routes/properties/propertDetails", query: property }}>
                            <div className={`${styles.aa}`}>
                                <img src={property?.imageSrc} alt="PropertCarosule-Images" />
                                {/* <div className={styles.forSale} style={{ background: 'white' }}>
        {property?.status}
    </div> */}
                                <div className={styles.camera}>
                                    <button><img src="/properties/camera.webp" alt="cameraIcon_image" />07</button>
                                    <button><img src="/icon/video.webp" alt="videoIcon_image" />08</button>
                                </div>
                            </div>

                            <div className="ml-5 p-3">
                                <h3 className="fs-5 mt-2">{property?.title}</h3>
                                <h4 className="text-decoration-underline mt-1">{property?.location}</h4>
                                <div className="d-flex justify-between mt-2 h4">
                                    <div className="fs-6 ml-2">Price: {property?.price}</div>
                                    <div className="d-flex gap-1 align-items-center">
                                        <IoIosGitCompare />
                                        <AiOutlineHeart />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div key={property?.id} className={styles.antdCarousal}>
                            <Link key={property?.id} href={{ pathname: "/routes/properties/propertDetails", query: property }}>
                                <div className={`${styles.aa}`}>
                                    <img src={property?.imageSrc} alt="PropertCarosule-Images" />
                                    {/* <div className={styles.forSale} style={{ background: 'white' }}>
        {property?.status}
    </div> */}
                                    <div className={styles.camera}>
                                        <button><img src="/properties/camera.webp" alt="cameraIcon_image" />07</button>
                                        <button><img src="/icon/video.webp" alt="videoIcon_image" />08</button>
                                    </div>
                                </div>
                                <div className="ml-5 p-3">
                                    <h3 className="fs-5 mt-2">{property?.title}</h3>
                                    <h4 className="text-decoration-underline mt-1">{property?.location}</h4>
                                    <div className="d-flex justify-between mt-2 h4">
                                        <div className="fs-6 ml-2">Price: {property?.price}</div>
                                        <div className="d-flex gap-1 align-items-center">
                                            <IoIosGitCompare />
                                            <AiOutlineHeart />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div></>
                ))}
            </Carousel>
            <div className={styles.buttonchange}>
            <button onClick={()=>next()} ><LeftOutlined /></button>
            <button onClick={()=>prev()} ><RightOutlined /></button>
            </div>
        </div>
        </>
    );
}
export default ListCarousel;