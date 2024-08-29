'use client'

import Link from "next/link"
import styles from './Header.module.css'
import { useState } from "react"

export default function Header() {
    const [showSidebar, setShowSidebar] = useState(false)

    return <header>
        <nav className={`${styles.nav} flex justify-between items-center p-4 h-18`}>
            <h1 className="text-4xl font-extrabold font-perm cursor-pointer text-white">PROTOTYPE</h1>
            <div>
                <i className="fa-solid fa-magnifying-glass text-white text-2xl ml-5 relative left-7" id="searchicon"></i>
                <input type="search" name="Searchbar" id="Searchbar" placeholder="Search..." className="w-80 h-10 p-2 rounded-lg ml-9 shadow-lg" />
            </div>
            <ul className="flex gap-x-12 text-4xl font-bold mr-10 text-white">
                <li><Link href="#" className="text-xl hover:text-slate-400">Home</Link></li>
                <li><Link href="#" className="text-xl hover:text-slate-400">About</Link></li>
                <li><Link href="#" className="text-xl hover:text-slate-400">Contact</Link></li>
                <li><Link href="login" className="text-xl hover:text-slate-400">Login</Link></li>
                <div><i className={`fa-solid fa-bars text-2xl justify-items-end hidden ${styles.bars}`} id="bars" onClick={() => setShowSidebar(prev => !prev)}></i></div>
            </ul>
        </nav>
        <div className={`${styles.sidebar} w-64 bg-transparent rounded-lg p-4 h-screen fixed end-16 top-0 shadow-lg z-50 ${showSidebar ? '' : 'invisible'}`} id="sidebar">
            <h2 className="text-2xl font-bold font-perm mb-4 text-center">PROTOTYPE</h2>
            <ul className="text-center mt-10">
                <li className="mb-6"><Link href="#" className="text-2xl font-gloria font-bold hover:text-white">HOME</Link></li>
                <li className="mb-6"><Link href="#" className="text-2xl font-gloria font-bold hover:text-white">ABOUT</Link></li>
                <li className="mb-6"><Link href="#" className="text-2xl font-gloria font-bold hover:text-white">CONTACT</Link></li>
                <li className="mb-6"><Link href="login.html" className="text-2xl font-gloria font-bold hover:text-white">LOGIN</Link></li>
            </ul>
        </div>
    </header>
}