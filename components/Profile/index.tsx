import type { NextComponentType } from 'next'

const Profile: NextComponentType = () => {
    return (
        <div className="section">
            <img
                id="profile-image"
                src="files/portrait.png"
                alt="portrait.png"
            />
            <h1>Jan Garong</h1>
            <h2>Software Engineer</h2>
        </div>
    )
}

export default Profile
