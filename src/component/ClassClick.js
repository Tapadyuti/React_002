import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandeler(){
        console.log("Class Click")
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandeler}>Click from Class</button>
            </div>
        )
    }
}

export default ClassClick;