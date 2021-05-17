import React, { Component } from 'react'

class Forms extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userName:"",
             comments:"",
             topic:"React"
        }
    }

    handelChanges = (event)=>{
        this.setState({
            [event.target.name]: event.target.value,
        })
    }
    handleSubmit = (event)=>{
        alert(`${this.state.userName}, ${this.state.comments}, ${this.state.topic}`)
        event.preventDefault();
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                Form Components:<br></br>
                <div>
                    <label>User Name:</label>
                    <input 
                        type="text" 
                        name="userName" 
                        value={this.state.userName} 
                        onChange={this.handelChanges}
                    ></input>
                </div>
                <div>
                    <label>Comments</label>
                    <textarea 
                        name="comments" 
                        value={this.state.comments}
                        onChange={this.handelChanges}
                    ></textarea>
                </div>
                <div>
                    <label>Select</label>
                    <select 
                        name="topic"
                        value={this.state.topic}
                        onChange={this.handelChanges}>
                            <option value="React">React</option>
                            <option value="Angular">Angular</option>
                            <option value="Vue">Vue</option>
                    </select>
                </div>
                <button name="submit" type="submit">Submit</button>
            </form>
        )
    }
}

export default Forms
