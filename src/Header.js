import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import { useStateValue } from './Stateprovider';
import { auth } from './Firebase';

function Header() {
    const [{basket, user}, dispatch] = useStateValue();
    const handleAuthentication = () =>{
        if(user){
            auth.signOut();
        }
    }
    return (
        <div className = 'header'>
        
            <Link to="/">
            <div className = 'Header-logo'>
        <img className = 'Header-logo'
        src = 'https://pngimg.com/uploads/amazon/amazon_PNG25.png'/>
        </div>
        </Link>
        
        <div className = 'SearchBar' >
        
        <input className = 'SearchBarinput'
        type = "text"/>
        
        <SearchIcon className = 'searchIcon'/>
        
        </div>

        
    <div className = 'Header-nav'>
        <Link to={!user && '/Login'}>
        <div onClick={handleAuthentication} className = 'header-option'>
        
        <span className = 'header-option-lineone'>
        Hello {!user ? 'Guest' : user.email}
        </span> 
        <span className = 'header-option-linetw'>
        {user ? 'Sign Out' : 'Sign In'} 
        </span> 
        </div>
        </Link>
        <div className = 'header-option' >
        
        <span className = 'header-option-lineone'>
        Returns 
        </span> 
        <span className = 'header-option-linetw'>
        &
        Orders
        </span>
        </div>

        
        <div className = 'header-option' >
        
        <span className = 'header-option-lineone' >
        Your 
        </span> 
        <span className = 'header-option-linetw' >
        Prime 
        
        </span>    
        </div>
        <Link to="/checkout">
        <div className = "header-optionBasket" >
        
        <ShoppingCartIcon />
        
        <span className = 'header-optionLineTwoheader-basketcount'> {basket?.length} </span> </div>
        </Link>
        </div>
        </div>
    )
}




export default Header;