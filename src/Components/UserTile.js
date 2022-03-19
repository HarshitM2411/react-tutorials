import React from 'react';

const containerDiv = {
    
}

function UserTile(props) {

    return (
        <div className="container" onClick={()=>{props.removeUser(props.user.phone)}}>
            <div style={containerDiv} className="card_container">
                <img src={props.user.picture.large} height="150px" width="150px" ></img>
                <h3>{props.user.name.first +" "+ props.user.name.last}</h3>
                <p>{props.user.age}</p>
                <p>{props.user.email}</p>
                <p>{props.user.phone}</p>
            </div>
            <div className="middle">
                <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-cross-100-most-used-icons-flaticons-lineal-color-flat-icons.png"/>
            </div>
        </div>
    )
}

export default UserTile

