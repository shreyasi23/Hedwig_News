import React, { Component } from 'react';

export default class Navbar extends Component{
    render(){
        return(
            <nav id = "Navbar">
                <div id = "logo">
                    <span><img src = "../Images/owl_logo.jpg" alt ="Logo"/> Hedwig News</span>
                </div>

                <div id = "menu_items">
                    <ul>
                        <li><a href='/'>HOME</a></li>
                        <li><a href='/'>ABOUT</a></li>
                        <li><a href='/'>CONTACT</a></li>
                        <li><a href='/'>SUBSCRIBE</a></li>
                    </ul>
                </div>

                <div id = "login_btn">
                    <button><a href = "/login"><i className="fa fa-user-circle-o"></i> Login </a></button>
                </div>
            </nav>
        )
    }
}