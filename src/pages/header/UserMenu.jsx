// eslint-disable-next-line no-unused-vars
import React from 'react'

const UserMenu = () => {
  return (
    <aside className="profile-card">
        <header>
    
            <a target="_blank" href="#">
                <img src="http://lorempixel.com/150/150/people/" className="hoverZoomLink" />
            </a>
            <h1>
                John Doe
            </h1>
            <h2>
                Better Visuals
            </h2>
        </header>
        <div className="profile-bio">
            <p>
                It takes monumental improvement for us to change how we live our lives. Design is the way we access that improvement.
            </p>
        </div>

        <ul className="profile-social-links">
            <li>
            <a target="_blank" href="https://www.facebook.com/creativedonut">
                <i className="fa fa-facebook"></i>
            </a>
            </li>
            <li>
            <a target="_blank" href="https://twitter.com/dropyourbass">
                <i className="fa fa-twitter"></i>
            </a>
            </li>
            <li>
            <a target="_blank" href="https://github.com/vipulsaxena">
                <i className="fa fa-github"></i>
            </a>
            </li>
            <li>
            <a target="_blank" href="https://www.behance.net/vipulsaxena">
            
                <i className="fa fa-behance"></i>
            </a>
            </li>
        </ul>
    </aside>
  )
}

export default UserMenu