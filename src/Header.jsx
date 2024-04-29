import React, { Component } from "react";   
import "./app.css";




class Header extends Component{
    render(){
        return(
            <header>
            <div className='logo'>
            <h1>Logo</h1>
            </div>
            <div className='menu'>
                    <ul>
                        <li>
                            <a href="#">HOME</a>
                        </li>
                        <li>
                            <a href="#">ABOUT</a>
                        </li>
                        <li>
                            <a href="#">BLOG</a>
                        </li>
                        <li>
                            <a href="#">CONTACT</a>
                        </li>
                    </ul>
            </div>
        </header>
        )
    }
}

export default Header;
