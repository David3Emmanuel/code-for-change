import styles from './welcome.module.css'

export default function WelcomeLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <div className={`bg-gradient-to-r from-blue-700 to-black h-screen w-full bg-no-repeat ${styles.page}`}>
            {children}
        </div>
    )
}
