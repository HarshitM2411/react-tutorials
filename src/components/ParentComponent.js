import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            message: 'Hi From Parent'
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(message) {
        this.setState({
            message: message
        })
    }

    render() {
        return (
            <div>
                <p>
                    Good Morning {this.state.message}
                    <ChildComponent clickHandler={this.greetParent}></ChildComponent>
                </p>
            </div>
        )
    }
}

export default ParentComponent