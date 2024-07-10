import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./style.module.scss";
import { sliderImageUrl } from "../../data";
const responsive = {
  desktop: {
    breakpoint: { max: 2000, min: 900 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 767, min: 350 },
    items: 2,
    slidesToSlide: 1,
  },
  mobil: {
    breakpoint: { max: 350, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const CitiesSlider = () => {
  return (
    <main className="container">
      <div className={styles.imageSwap}>
        <div className={styles.logoText}>
          <p>Explpore Cities</p>
          <h1>Find Your Neibhourhood</h1>
        </div>
        <div className={`parent`}>
          <Carousel
            responsive={responsive}
            arrows={false}
            showDots={true}
            dotListClass="custom-dot-list-style"
          >
            {sliderImageUrl.map((imageUrl, index) => {
              return (
                <a href="#" className={styles.checks}>
                  <div
                    className={`slider ${styles.slider}`}
                    key={index}
                    style={{ position: "relative" }}
                  >
                    <img src={imageUrl.url} alt={`slider-${index}`} />
                    <div className={styles.modals}>
                      <h2>New York</h2>
                      <span>36 properties</span>
                    </div>
                  </div>
                </a>
              );
            })}
          </Carousel>
        </div>
      </div>
    </main>
  );
};

export default CitiesSlider;
