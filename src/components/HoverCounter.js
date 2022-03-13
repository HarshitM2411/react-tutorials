import React, { Component } from 'react'
import HigherOrderComponent from './HigherOrderComponent'

class HoverCounter extends Component {
    render() {
        const {count, incrementCounter} = this.props
        return (
            <div>
                <h1 onMouseOver={incrementCounter}>Counter Value: {count}</h1>
            </div>
        )
    }
}

export default HigherOrderComponent(HoverCounter)
