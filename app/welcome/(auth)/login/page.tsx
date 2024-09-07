import Link from "next/link";
import SocialLinks from '@/app/welcome/(auth)/SocialLinks'
import styles from '@/app/welcome/(auth)/login.module.css'
import { login } from '@/app/utils/user'

export default function Page() {
    // TODO update changes on initial branch
    return (
        <form action={login} className={styles.form}>
            <h1 className={styles.formTitle}>Login</h1>
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
            <div className={styles.forgot}>Forgot Password</div>
            <button className={styles.submit} type="submit">Login</button>
            <div className={styles.signup}>
                Not a member? <Link href="/signup">Sign up</Link>
            </div>
            <SocialLinks />
        </form>
    )
}