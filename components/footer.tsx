import type { NextComponentType } from 'next'
import Link from 'next/link'

const Navbar: NextComponentType = () => {
    return (
        <div id="footer">
            Designed and developed by Jan Garong | 
            Published on May 2022 | {` `}
            <Link href="https://github.com/jangarong/jangarong.github.io">
                Source Code
            </Link>
        </div>
    )
}

export default Navbar
