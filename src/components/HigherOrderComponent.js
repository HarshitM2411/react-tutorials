import React from 'react'

const HigherOrderComponent = (OriginalComponent) => {
    class NewComponent extends React.Component {
        constructor(props) {
            super(props)
        
            this.state = {
                count: 0    
            }
        }
        incrementCounter = () => {
            this.setState(prevState => {
                return {count: prevState.count + 1}
            })
        }

        render() {
            return (
                <div>
                    <OriginalComponent count={this.state.count} incrementCounter={this.incrementCounter} {...this.props}></OriginalComponent>
                </div>
            )
        }
    }
    return NewComponent;
}

export default HigherOrderComponent
