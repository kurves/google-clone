import React from 'react';
import {Link }from 'react-router-dom'
import './Home.css';
import {FaTh, FaUserCircle} from 'react-icons/fa'
import Search from './Search'

function Home() {
    return (
			<div className="home">
				<div className="home__header">
					<div className="home__headerLeftSide">
						<Link to="/about">About</Link>
						<Link to="/store">Store</Link>
					</div>
					<div className="home__headerRightSide">
						<Link to="/gmail">Gmail</Link>
						<Link to="/images">Image</Link>
					<div className="home__headerIcons">
                        <FaTh/>
                    <FaUserCircle/>
                    </div>
                    </div>
				</div>
				<div className="home__container">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/552px-Google_2015_logo.svg.png"
alt="google-logo"/>
<div className="home__inputBody">
<Search/>
</div>
				</div>
			</div>
		);
}

export default Home
