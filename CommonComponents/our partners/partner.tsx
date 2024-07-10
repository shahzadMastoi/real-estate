import React from 'react';
import styles from './style.module.scss'
import { imgUrl } from '../../data';


const LogoSection = () => {
  return (
    <main className='container'>
    <div className={styles.logoSection}>
      <div>
        <p>Our Partner’s</p>
        <h1>Reliable Partner’s.</h1>
      </div>
      <div className={styles.logos}>
        {imgUrl.map((imageUrl:any, index:any) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Image ${index + 1}`}
            className="gallery-image"
          />
        ))}
      </div>
    </div>
    </main>
  );
};

export default LogoSection;
