import React from 'react';
import Logo from './logo.png';

const Header = props => {
    return(
        <div>
            <img src={Logo} alt="logo" height="150" width="425"/>
            <h1> {props.statement} </h1>
        </div>
    )
}

export default Header;