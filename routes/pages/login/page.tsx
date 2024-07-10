import { Button, Checkbox, Input } from 'antd'
import styles from './style.module.scss'
import Link from 'next/link'
import LogoSection from '@/app/CommonComponents/our partners/partner'
import Pageheader from '@/app/CommonComponents/PageHeader/pageHeader'
import GetListed from '@/app/CommonComponents/GetListed/GetListed'

function Login() {

    const data = {
        title: 'Login',
        mainTitle: 'Login now',
    }
    return (
        <>
            <Pageheader data={data} />
            <div className='container'>
                <div className={styles.main}>
                    <div className={styles.container1}>
                        <h1>Login to Bary.</h1>
                        <p>Huge number of propreties availabe here for buy, sell and Rent. Also you find here co-living property, lots opportunity you have to choose here and enjoy huge discount you can get.</p>
                        <Input size='large' placeholder='Username' />
                        <Input size='large' placeholder='Password' />
                        <div className={styles.remember}>
                            <Checkbox>Remember me</Checkbox>
                            <a href="">Forgot Password</a>
                        </div>
                        <div className={styles.buttons}>
                            <button>Login</button>
                            <button><Link href='/routes/pages/register'>Register</Link></button>
                        </div>
                    </div>
                    <div className={styles.container2}>
                        <img src="/login/image.webp" alt="" />
                    </div>
                </div>
            </div>
            <LogoSection />
            <GetListed />
        </>
    )
}

export default Login