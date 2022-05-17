import type { NextComponentType } from 'next'
import Image from 'next/image'

const Profile: NextComponentType = () => {
    return (
        <div className="section">
            <Image
                id="profile-image"
                src="/portrait.png"
                width="200px"
                height="200px"
            />
            <h1>Jan Garong</h1>
            <h2>Software Engineer</h2>
        </div>
    )
}

export default Profile
