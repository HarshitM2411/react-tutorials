import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserTile from './UserTile'
import './components.css'

const mainContainer = {
    'display': 'flex',
    'marginTop': '50px'
}

const innerDiv = {
    'display': 'flex',
    'flexWrap': 'wrap',
    'margin': '20px',
    'justifyContent': 'center'
}

function User(props) {

    return (
        <div style={mainContainer}>
            <div style={innerDiv}>
                {
                    props.usersList.length? props.usersList.map(item=>{ return <UserTile key={item.dob.date} user={item} removeUser={props.removeUser}></UserTile>}) : <h1> NO USER </h1>
                }
            </div>
        </div>
    )
}

export default User
