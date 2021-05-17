import React, { Component } from 'react'
import ErrorBoundries from './ErrorBoundries'
import Heros from './Heros'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"RS"
        }
        console.log("LifeCycleA Constructor")
    }

    static getDerivedStateFromProps(props, state){
        console.log("LifeCycleA getDerivedStateFromProps")

        return null;
    }

    componentDidMount(){
        console.log("LifeCycleA componentDidMount")
    }

    shouldComponentUpdate(nextProps, nextState){
        //rearly used method
        // Dictates if the component should re-render or not
        //it returns true or false if the component update or not
        console.log("LifeCycleA shouldComponentUpdate")
        return true;
    }
 
    getSnapshotBeforeUpdate(prevProps, prevState){
        //rearly used method
        // this method returns null or value
        //returned value will be passed as 3rd parameter to the next method.
        console.log("LifeCycleA getSnapshotBeforeUpdate");
        return null;
    }
    componentDidUpdate(){
        console.log("LifeCycleA componentDidUpdate");
    }
    componentDidMount(prevProps, PrevState, snapshot){
        // it is gaurented to be called after re-render is finished
        // suitable to make ajax call by comparing previous and current value
        console.log("LifeCycleA componentDidMount")
    }

    static getDerivedStateFromError(error){
        // this is part of error Boundries
        
        // Catch the error anywhere in the Life cycle method

        // this method is used to render to fallback UI after an error is thrown and componentDidCatch is used to log the error Information.
        console.log("LifeCycleA getDerivedStateFromError")
    }
    componentDidCatch(error, info){
        // this is part of error Boundries
        // Catch the error anywhere in the Life cycle method
        
        console.log("LifeCycleA componentDidCatch: ", info)
    }
    
    render() {

        console.log("LifeCycleA render")
        return (
            <div>
                <div>Life Cycle A</div>
                <LifeCycleB></LifeCycleB>
                <hr></hr>
                <h1>Error Boundries</h1>
                <h3>Error boundries are React Components that catches the JavaScript error in their child component tree, log those errors and display fall-back UI</h3>
                <h5>This can be applies to whole app or can be component specific</h5>
                <ErrorBoundries>
                    <Heros heroName="Batman"></Heros>
                </ErrorBoundries>
                <ErrorBoundries>
                    <Heros heroName="SuperMan"></Heros>
                </ErrorBoundries>
                <ErrorBoundries>
                    <Heros heroName="Joker"></Heros>
                </ErrorBoundries>
                <hr></hr>
                    
            </div>
        )
    }
}

export default LifeCycleA
