import styles from './style.module.scss'
import ItemName from '@/app/routes/properties/data'


const Materials = (props: any)=> {
    const imag = '/whyus/whyus.webp'
    return (
        <main className='container'>
            <div className={styles.material}>
                <div className={styles.material1} >
                    <img src={props.image ? props.image : imag} alt="whyUs_Image" />
                </div>
                <div className={styles.material2}>
                    <p className={styles.p1}>Materials</p>
                    <h1>Property Amenities.</h1>
                    <p>Amenities of property is very number of propreties availabe here for buy, sell and Rent you benifits</p>
                    <div className={styles.Amenities}>
                        <div className={`${styles.radios}`}>
                            <ItemName type='home6' />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Materials