import styles from './style.module.scss'

const Pageheader = (props:any) => {

    return (
        <div>
            <div className={`sens ${styles.header}`}>
            <p>{props?.data?.title}</p>
            <h1 className='lor'>{props?.data?.mainTitle}</h1>
            <p className={styles.para}>Huge number of propreties availabe here for buy and sell also you can find here co-living property as you like</p>
            </div>
        </div>
    )
}

export default Pageheader