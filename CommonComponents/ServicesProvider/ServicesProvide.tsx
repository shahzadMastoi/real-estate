import React from 'react'
import { cardObj } from '../../data'
import styles from './style.module.scss'


const ServicesProvide =()=> {
  return (
    <main className='container'>
    <div className={styles.services}>
          <span> Our Services</span>
          <h2>Services That We Provide<span>.</span></h2>

          <div className={styles.carddiv}>
            {cardObj.map((item) => (
              <a href="#">
                <div className={styles.Card}>
                  <img alt="services_Images" src={item.img}></img>
                  <div className={styles.decription}>
                    <h1>{item.title}<span>.</span></h1>
                    <p>{item.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
        </main>
  )
}
export default ServicesProvide;