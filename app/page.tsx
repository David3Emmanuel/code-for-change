import { Metadata } from "next"
import Link from "next/link"

import styles from './main.module.css'
import Header from "./Header"

export const metadata: Metadata = {
    title: "PROTOTYPE",
}

export default function Page() {
    return <>
        <Header />
        <main className="main">
            <div className="w-max m-20 ml-64" id="mainhero">
                <h1 className={`cursor-pointer animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 ml-3 text-5xl text-white font-extrabold font-sans justify-center text-center space-x-8 ${styles.welcome}`} id="Welcome"> WELCOME TO <samp className="font-perm text-7xl">PROTOTYPE !</samp></h1>
                <h3 className={`${styles.motto} text-center font-gloria font-bold text-3xl text-white`}>"Empower your future, one click at a time"</h3>
                <div className="pt-8">
                    <button className={`${styles.getStarted} bg-white hover:bg-black hover:text-white text-black font-bold text-3xl shadow-md px-5 py-3 ml-72 rounded-lg mt-4 justify-center border-black`} id="startedbtn">Get Started</button>
                </div>
            </div>
        </main>
        <footer className={styles.footer}>
            <div className="flex justify-center items-center h-30 text-white">
                <p className="cursor-pointer">&copy; 2024 Prototype. All rights reserved.</p>
            </div>
            <div className="text-3xl mt-5 justify-center align-middle flex flex-row cursor-pointer">
                <Link href="#" className="hover:text-white"><i className="fa-brands fa-github px-10"></i></Link>
                <Link href="#" className="hover:text-white"><i className="fa-brands fa-instagram px-10"></i></Link>
                <Link href="#" className="hover:text-white"><i className="fa-brands fa-x-twitter px-10"></i></Link>
                <Link href="#" className="hover:text-white"><i className="fa-brands fa-youtube px-10"></i></Link>
            </div>
        </footer>
    </>
}
