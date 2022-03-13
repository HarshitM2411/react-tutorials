import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count: 0
        }
    }

    increment() {
        //this.setState(stateObj, callback after state update) to update state so that it can render again with new value on dom.
        // this.setState({
        //     count: this.state.count + 1
        // }, ()=>{console.log(this.state.count)})

        //this.setState(function) to update state using previous state result.
        this.setState((prevState, props)=>({
            count: prevState.count + 1
        }))
    }

    increment5() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
    
    render() {
        return (
            <div>
                <div>
                    Counter - {this.state.count}
                </div>
                <button onClick={()=>this.increment5()}>Increment</button>
            </div>
        )
    }
}

export default Counter
