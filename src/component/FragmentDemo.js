import React, { Component } from 'react'

// Fragment adds element without adding them to the DOM
export class FragmentDemo extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>
                    Fragment Demo
                </h1>
                <div>Fragment adds element without adding them to the DOM</div>
            </React.Fragment>
        )
    }
}

export default FragmentDemo
