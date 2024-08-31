import Link from "next/link";

import styles from './login.module.css'

export default function Page() {
    return <>
        <header className="ml-4 pt-4">
            <h1 className="text-4xl font-extrabold font-perm cursor-pointer text-white">PROTOTYPE</h1>
        </header>
        <div id="mainpage" className={styles.mainpage}>
            <form method="post" className={styles.form}>
                <h1 className={styles.formTitle}>Login</h1>
                <div className={styles.textField}>
                    <input type="text" required />
                    <span></span>
                    <label>Username</label>
                </div>
                <div className={styles.textField}>
                    <input type="password" required />
                    <span></span>
                    <label>Password</label>
                </div>
                <div className={styles.forgot}>Forgot Password</div>
                <input className={styles.submit} type="submit" value="Login" />
                <div className={styles.signup}>
                    Not a member? <Link href="#">Sign up</Link>
                </div>
                <div className={`${styles.login_icons} text-white text-2xl text-center`}>
                    <Link href="#"><i className="fa-brands fa-google fa-beat"></i></Link>
                    <Link href="#"> <i className="fa-brands fa-facebook fa-beat"></i></Link>
                    <Link href="#"><i className="fa-brands fa-apple fa-beat"></i></Link>
                    <Link href="#"><i className="fa-brands fa-x-twitter fa-beat"></i></Link>
                    <Link href="#"><i className="fa-brands fa-linkedin-in fa-beat"></i></Link>
                </div>
            </form>
        </div>
    </>
}