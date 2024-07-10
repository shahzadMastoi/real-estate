import styles from './style.module.scss'
import { data } from '../../data'
import { useState } from 'react';

const Whyus2 = (props: any)=> {

    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: any) => {
      const boundingRect = e.currentTarget.getBoundingClientRect();
      const mouseX = e.clientX - boundingRect.left;
      const mouseY = e.clientY - boundingRect.top;
      const centerX = boundingRect.width /2 ;
      const centerY = boundingRect.height /2;
  
      const moveX = (mouseX - centerX) /10 ;
      const moveY = (mouseY - centerY) /10 ;
  
      setPosition({ x: -moveX, y: -moveY });
    };
  
    const handleMouseEnter = () => {
      setPosition({ x: 1, y: 0 });
    };
  
    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
    }

    const imag = '/whyus/whyus.webp'
    return (
        <main className='container'>
            <div className={styles.content}>
                <div className={styles.content2} >
                    <img src={props.image ? props.image : imag} alt="WhyUs_Image"
                    onMouseMove={handleMouseMove}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        transform: `translate(${position.x}px, ${position.y}px)`,
                        transition: 'transform 0.3s ease-in-out',
                    }} />
                </div>
                <div className={styles.content1}>
                    <p className={styles.p1}>Why Choose Us</p>
                    <h2>We Provide Latest Properties For Our Valuable Clients..</h2>
                    <p>Huge number of propreties availabe here for buy, sell and Rent. Also you find here co-living property so lots opportunity you have to choose here and enjoy huge discount.</p>
                    <div className={styles.iconItems}>
                        {data.map((item) => (
                            <div className={styles.whyUs}>
                                <div>
                                    <img src={item.img} alt="whyUsIcon_Image" />
                                </div>
                                <div>
                                    <h3>{item.headin}</h3>
                                    <p>{item.para.slice(1,35)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Whyus2