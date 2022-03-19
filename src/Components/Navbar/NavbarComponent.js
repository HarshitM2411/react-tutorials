import React, { useEffect, useState } from 'react';
import { NavBar, NavbarContainer } from './NavbarEl'
import logo from '../../logo.svg';
import '../components.css';
import axios from 'axios';
import User from '../User';


const imgStyle = {
    'position': 'absolute',
    'height': '80px',
    'width': '80px'
}

const ulStyles = {
    'display': 'inline',
    'margin': '20px'
}

const liStyles = {
    'display': 'inline',
    'margin': '20px',
    'cursor': 'pointer'
}

function NavbarComponent() {

    let [usersList, updateUsersList] = useState([]);

    let removeUser = function (userData) {
        let clonedData = [...usersList];
        let index = clonedData.findIndex(element=>  element.phone === userData );
        clonedData.splice(index,1);
        updateUsersList(()=>{
            return usersList = [...clonedData];
        });
    }

    async function getUserFromServer() {
        let usersData = await axios.get('https://randomuser.me/api/');
        updateUsersList([...usersList, usersData.data.results[0]]);
    }

    return (
        <div>
            <NavBar>
                <img src={logo} style={imgStyle}></img>
                <NavbarContainer>
                    <ul style={ulStyles}>
                        <li style={liStyles}>
                            HOME
                    </li>
                        <li style={liStyles}>
                            ABOUT US
                    </li>
                    </ul>
                </NavbarContainer>
                <button className="add_user" type="button" onClick={()=>getUserFromServer()}>
                        Add User
                </button>
            </NavBar>
            <User usersList={usersList} removeUser={removeUser}></User>
        </div>
    )
}

export default NavbarComponent
