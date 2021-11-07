import React from 'react'
import './ProfilePage.css'

const Profile = (props) => {
    return(
        <div className="profile grow">
            <img className="img" src={props.image} alt="" />
            <h2 className="center">{props.name}</h2>
            <p className="center">{props.info}</p>
        </div>
    )
}
export default Profile;