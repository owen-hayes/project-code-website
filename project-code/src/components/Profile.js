import React from 'react'
import './ProfilePage.css'

const Profile = (props) => {
    return(
        <div className="profile">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" integrity="sha512-8bHTC73gkZ7rZ7vpqUQThUDhqcNFyYi2xgDgPDHc+GXVGHXq+xPjynxIopALmOPqzo9JZj0k6OqqewdGO3EsrQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <div class="ui card">
            <div class="image">
                <img className="img" src={props.image} alt="" />
            </div>
            <div class="content">
                <a class="header">{props.name}</a>
                <div class="description info-text">
                    {props.info}
                </div>
            </div>
            </div>

        </div>
    )
}
export default Profile;


