import Link from 'next/link'
import styles from '@/app/(auth)/login.module.css'

export default function AuthLayout({ children }: {
    children: React.ReactNode
}) {
    return (<>
        <header className="ml-4 pt-4">
            <Link href='/' className="text-4xl font-extrabold font-perm cursor-pointer text-white">PROTOTYPE</Link>
        </header>
        <div id="mainpage" className={styles.mainpage}>
            {children}
        </div>
    </>)
}