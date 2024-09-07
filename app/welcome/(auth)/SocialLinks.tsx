import Link from 'next/link'
import styles from '@/app/(auth)/login.module.css'

export default function SocialLinks() {
    return (
        <div className={`${styles.login_icons} text-white text-2xl text-center`}>
            <Link href="#"><i className="fa-brands fa-google fa-beat"></i></Link>
            <Link href="#"> <i className="fa-brands fa-facebook fa-beat"></i></Link>
            <Link href="#"><i className="fa-brands fa-apple fa-beat"></i></Link>
            <Link href="#"><i className="fa-brands fa-x-twitter fa-beat"></i></Link>
            <Link href="#"><i className="fa-brands fa-linkedin-in fa-beat"></i></Link>
        </div>
    )
}