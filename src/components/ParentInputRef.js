import React, { Component } from 'react'
import ChildInput from './ChildInputRef'

class ParentInput extends Component {
    constructor(props) {
        super(props)
    
        this.componentRef = React.createRef();
    }

    clickHandler = ()=> {
        this.componentRef.current.focusInput();
    }
    
    render() {
        return (
            <div>
                <ChildInput ref={this.componentRef}></ChildInput>
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default ParentInput
