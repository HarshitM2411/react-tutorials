import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button type="button" onClick={()=>props.clickHandler('Hi From Child')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
