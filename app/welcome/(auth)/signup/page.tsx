import Link from "next/link";
import SocialLinks from '@/app/welcome/(auth)/SocialLinks'
import styles from '@/app/welcome/(auth)/login.module.css'
import { signup } from '@/app/utils/user'
import { UserRole } from '@/app/utils/types'
import { redirect } from 'next/navigation'

export default function Page() {
    // TODO update changes on initial branch
    return (
        <form action={signup} className={styles.form}>
            <h1 className={styles.formTitle}>Sign Up</h1>
            <div className={styles.textField}>
                <input name="email" type="email" required />
                <span></span>
                <label>Email</label>
            </div>
            <div className={styles.textField}>
                <input name="password" type="password" required />
                <span></span>
                <label>Password</label>
            </div>
            <div className={styles.textField}>
                <input name="first" required />
                <span></span>
                <label>First name</label>
            </div>
            <div className={styles.textField}>
                <input name="last" required />
                <span></span>
                <label>Last name</label>
            </div>
            <button className={styles.submit} type="submit">Sign Up</button>
            <div className={styles.signup}>
                Already a member? <Link href="/login">Login</Link>
            </div>
            <SocialLinks />
        </form>
    )
}