import React from 'react'
import './SearchPage.css';
import Search from './Search'
import {useStateValue} from '../components/StateProvider'
import useGoogleSearch from '../components/useGoogleSearch'
import {Link} from 'react-router-dom';
 import {FaSearch,
		FaRegCaretSquareRight,
		FaImage,
		FaRegNewspaper,
		FaMapMarkerAlt,
		FaEllipsisV
 } from "react-icons/fa";

function SearchPage() {
    const [{term},dispatch] =useStateValue();
     const{data}=useGoogleSearch(term);
  
    return (
			<div className="searchPage">
				<div className="searchPage__header">
					<Link to="/">
						<img
							className="searchPage__logo"
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/552px-Google_2015_logo.svg.png"
							alt="google-logo"
						/>
					</Link>

					<div className="searchPage__headerBody">
						<Search hidden />
<div className="searchPage__options">
							<div className="searchPage__option">
								<FaSearch />
								<Link to="/all">All</Link>
							</div>
							<div className="searchPage__option">
								<FaRegCaretSquareRight />
								<Link to="">Videos</Link>
							</div>
							<div className="searchPage__option">
								<FaImage />
								<Link to="">Images</Link>
							</div>
							<div className="searchPage__option">
								<FaRegNewspaper />
								<Link to="">News</Link>
							</div>
							<div className="searchPage__option">
								<FaMapMarkerAlt />
								<Link to="">Maps</Link>
							</div>
							<div className="searchPage__option">
								<FaEllipsisV />
								<Link to="">More</Link>
							</div>
							<div className="searchPage__option">
								<Link to="/settings">Settings</Link>
							</div>
							<div className="searchPage__option">
								<Link to="tools">Tools</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="searchPage__resultsBody">
				<p className="searchPage__countResults">
					About{data?.searchInformation.formattedTotalResults} results (
					{data?.searchInformation.searchTime})
				</p>
				{data?.items.map((item) => (
					<div className="searchPage__result">
                    <a className="searchPage__resultLink"href={item.link}>
                        {item.displayLink}
						<FaEllipsisV className="faEllips" />
                        </a>
					<a className="searchPage__resultTitle" href={item.link}>
							<h2>{item.title}</h2>
</a>
	<p className="searchPage__resultSnippet">{item.snippet}</p>
					</div>
                    
				))}
			</div>
           </div>
        
		);
}

export default SearchPage
