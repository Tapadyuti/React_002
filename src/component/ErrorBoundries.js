import React, { Component } from 'react'

class ErrorBoundries extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hasError:false
        }
    }
    

    static getDerivedStateFromError(error){
        console.log("EEEEEEEEError : ",error)
        return {
            hasError:true
        }
    }
    render() {

        if(this.state.hasError){
            return <div>Something Went wrong</div>
        }
        return this.props.children // this return the statements that we are actually rendering
    }
}

export default ErrorBoundries
