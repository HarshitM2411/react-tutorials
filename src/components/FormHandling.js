import React, { Component } from 'react'

class FormHandling extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: '',
             comments: '',
             framework: 'react'
        }

        this.inputRef = React.createRef();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handletextChange = this.handletextChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    handleInputChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    handletextChange(e) {
        this.setState({
            comments: e.target.value
        })
    }

    handleSelectChange(e) {
        this.setState({
            framework: e.target.value
        })
    }
    onSubmit(e) {
        let {name, comments, framework} = this.state;
        console.log(name, comments, framework);
        e.preventDefault();
    }

    componentDidMount() {
        this.inputRef.current.focus();
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <form onSubmit={this.onSubmit}>
                        <div>
                            <label>UserName</label>
                            <input type="text" value={this.state.name} onChange={this.handleInputChange} ref={this.inputRef}></input>
                        </div>
                        <div>
                            <textarea value={this.state.comments} onChange={this.handletextChange}></textarea>
                        </div>
                        <div>
                            <select value={this.state.framework} onChange={this.handleSelectChange}>
                                <option value="react">React</option>
                                <option value="vue">Vue</option>
                                <option value="angular">Angular</option>
                            </select>
                        </div>
                        <button type="submit">submit</button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default FormHandling
