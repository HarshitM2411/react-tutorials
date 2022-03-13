import React from 'react'

const Greet = (props) => { return (
        <div>
            <h1>Hello Harshit {props.name} aka {props.hero}</h1> 
            {props.children}
        </div>
    )
}

export default Greet