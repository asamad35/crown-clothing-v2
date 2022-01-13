import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from '../assets/crown.svg'

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { auth } from "../firebase/firebase.util";

import './header.styles.scss';

const Header = ({currentUser,hidden})=>{
    const title = (title) => title.toUpperCase()
    return (
        <div className="header">
            <Link className="logo-container" to='/'>
                <Logo className='logo'></Logo>
            </Link>

            <div className="options">
                <Link className="option" to='/'>{title('home')}</Link>
                <Link className="option" to='/shop'>{title('shop')}</Link>
                <Link className="option" to='/contact'>{title('contact')}</Link>
                
                    {
                    currentUser ? 
                    <div className="option" onClick={()=> auth.signOut()}> {title('sign out')} </div> 
                    : 
                    <Link className="option" to='/signin'> {title('sign in')} </Link>
                     }
                <CartIcon/>
            </div>
           {hidden ? null : <CartDropdown />}
        </div>
    )
}

const mapStateToProps = ({user:{currentUser}, cart:{hidden}}) =>({
    currentUser, 
    hidden
})

export default connect(mapStateToProps)(Header);