import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    
    if (!user) return <div className="profile-panel profile-empty">Your profile will appear here.</div>

    return (
        <div className="profile-panel profile-ready">
            <span className="panel-number">02</span>
            <p className="profile-kicker">Context is working</p>
            <h2>Welcome, {user.username}</h2>
            <p className="profile-copy">Your details are now available to every component inside the provider.</p>
        </div>
    )
}

export default Profile