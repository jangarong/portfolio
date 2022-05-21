import type { NextComponentType } from 'next'
import Link from 'next/link'
import styles from './index.module.scss'

const Navbar: NextComponentType = () => {
    return (
        <div id="navbar">
            <Link href="/">
                <div className={styles["janco"]}></div>
            </Link>
            <div id="navbar-icon-menu">
                <Link href="/files/resume.pdf">
                    <div className={styles["cv"]}></div>
                </Link>
                <Link href="https://github.com/jangarong">
                    <div className={styles["github"]}></div>
                </Link>
                <Link href="https://www.linkedin.com/in/jangarong/">
                    <div className={styles["linkedin"]}></div>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
