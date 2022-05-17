import type { NextComponentType } from 'next'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const Organizations: NextComponentType = () => {

    const [orgs, setOrgs] = useState<Organization[]>([])

    const fetchOrgs = async () => {
        const data = await fetch('/api/orgs')
        setOrgs(await data.json())
    }

    useEffect(() => {
        fetchOrgs()
    }, [])

    return (
        <div className="section">
            <div className="title">
                BUILDING BETTER SOFTWARE WITH
            </div>
            <div id="org-logos">
                {orgs.map(org => (
                    <Link href={org.url}>
                        {/* eslint-disable @next/next/no-img-element */}
                        <img
                            src={org.imgUrl}
                            alt={org.name}
                            className="logo"
                        />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Organizations
