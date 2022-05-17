import type { NextComponentType } from 'next'
import Link from 'next/link'

const Navbar: NextComponentType = () => {
    return (
        <div id="navbar">
            <Link href="/">
                <div className="janco"></div>
            </Link>
            <div id="navbar-icon-menu">
                <Link href="/api/files/resume.pdf">
                    <div className="navbar-icon cv"></div>
                </Link>
                <Link href="https://github.com/jangarong">
                    <div className="navbar-icon github"></div>
                </Link>
                <Link href="https://www.linkedin.com/in/jangarong/">
                    <div className="navbar-icon linkedin"></div>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
