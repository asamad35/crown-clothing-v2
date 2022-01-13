import React from "react";
import './menu-item.styles.scss'
import {Link} from 'react-router-dom'


const MenuItem = ({title, imageUrl, size, linkUrl}) =>{
    
    return ( 
        <div className={`${size} menu-item`}>
            <Link to={`/${linkUrl}`} 
             style={{backgroundImage: `url(${imageUrl})`}} 
             className='background-image'>
                <div className="content">
                    <h1 className="title">{title.toUpperCase()}</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </Link>
        </div>
    )
}
export default MenuItem