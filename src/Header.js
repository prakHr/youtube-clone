import React,{useState} from 'react';
import './Header.css';
import  MenuIcon from '@material-ui/icons/Menu';
import  AppsIcon from '@material-ui/icons/Apps';
import  NotificationsIcon from '@material-ui/icons/Notifications';
import  SearchIcon from '@material-ui/icons/Search';
import  VideoCallIcon from '@material-ui/icons/VideoCall';
import  Avatar  from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
function Header() {
    const [InputSearch,setInputSearch]=useState('');
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon/>
                <Link to="/">
                    <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt=""/>
            
                </Link>
                
            </div>
            <div className="header__input">
                <input onChange={e=>setInputSearch(e.target.value)} value={InputSearch} placeholder="Search" type="text"/>
                <Link to={`/search/${InputSearch}`}>
                    <SearchIcon className="header__inputButton"/>
            
                </Link>
                
            </div>
            <div className="header__icons">
                <VideoCallIcon className="header__icon"/>
                <AppsIcon className="header__icon"/>
                <NotificationsIcon className="header__icon"/>
                <Avatar alt="Prakhar Gandhi" src="https://i1.rgstatic.net/ii/profile.image/813466872979458-1570957024399_Q512/Prakhar-Gandhi.jpg"/>
    
            </div>
        </div>
    )
}

export default Header
