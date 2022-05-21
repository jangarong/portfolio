import Link from 'next/link'

const Organizations = ({ organizations }: { organizations: Organization[] }) => {

    return (
        <div className="section">
            <div className="title">
                BUILDING BETTER SOFTWARE WITH
            </div>
            <div id="org-logos">
                {organizations.map(org => (
                    <Link href={org.url} key={org.name}>
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
