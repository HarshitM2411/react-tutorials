import React, { Component } from 'react'
import HigherOrderComponent from './HigherOrderComponent'


class clickCounter extends Component {
    render() {
        const {count, incrementCounter} = this.props
        console.log(this.props);
        return (
            <div>
                <button type="button" onClick={incrementCounter}>Click To Increment: {count}</button>
            </div>
        )
    }
}

export default HigherOrderComponent(clickCounter)
