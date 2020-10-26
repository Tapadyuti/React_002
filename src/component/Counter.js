import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    increment(){
        // this.state.count = this.state.count +1; // on changing value directly whithout setState the value changes in console but wont change in UI
        /* // this commented to check increment5
        this.setState({
            count: this.state.count +1
        }, () =>{console.log("count: "+this.state.count)})
         */
        //The setState have 2 paramenter one is state and another is call back function which executes after setState 1st paramenter is completed
        // Whenever we have to check or execute after the setState is used then check or process in 2nd/callBack function not just bellow.
        

        this.setState((prevState, props) => ({  // setting answer with previous state gives proper value.
            count: prevState.count + (props.addValue?Number(props.addValue):1)
        }))
        console.log("count: "+this.state.count);

    }
    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
    
    render() {
        return (
            <div>
                <div>Count : {this.state.count}</div>
                <button onClick={() => this.increment()}>Increment By 1</button> 
                <button onClick={() => this.incrementFive()}>Increment By 5</button>
            </div>
        )
    }
}

export default Counter
