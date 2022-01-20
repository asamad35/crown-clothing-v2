import React from "react";
import { connect } from "react-redux";
import {ReactComponent as Logo} from '../assets/crown.svg'

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { auth } from "../firebase/firebase.util";

import './header.styles.scss';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink  } from "./header.styles";

const Header = ({currentUser,hidden})=>{
    const title = (title) => title.toUpperCase()
    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className='logo'></Logo>
            </LogoContainer>

            <OptionsContainer>
                <OptionLink to='/'>{title('home')}</OptionLink>
                <OptionLink to='/shop'>{title('shop')}</OptionLink>
                <OptionLink to='/contact'>{title('contact')}</OptionLink>
                
                    {
                    currentUser ? 
                    <OptionLink as={`div`} onClick={()=> auth.signOut()}> {title('sign out')} </OptionLink> 
                    : 
                    <OptionLink to='/signin'> {title('sign in')} </OptionLink>
                     }
                <CartIcon/>
            </OptionsContainer>
           {hidden ? null : <CartDropdown />}
        </HeaderContainer>
    )
}

const mapStateToProps = ({user:{currentUser}, cart:{hidden}}) =>({
    currentUser, 
    hidden
})

export default connect(mapStateToProps)(Header);