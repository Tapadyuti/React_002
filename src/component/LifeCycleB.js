import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"RS"
        }
        console.log("LifeCycleB Constructor")
    }

    static getDerivedStateFromProps(props, state){
        console.log("LifeCycleB getDerivedStateFromProps")

        return null;
    }

    componentDidMount(){
        console.log("LifeCycleB componentDidMount")
    }

    shouldComponentUpdate(nextProps, nextState){
        //rearly used method
        // Dictates if the component should re-render or not
        //it returns true or false if the component update or not
        console.log("LifeCycleB shouldComponentUpdate")
         return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        //rearly used method
        // this method returns null or value
        //returned value will be passed as 3rd parameter to the next method.
        console.log("LifeCycleB getSnapshotBeforeUpdate")
        return null;
    }
    
    componentDidUpdate(){
        console.log("LifeCycleA componentDidUpdate");
    }

    componentDidMount(prevProps, PrevState, snapshot){
        // it is gaurented to be called after re-render is finished
        // suitable to make ajax call by comparing previous and current value
        console.log("LifeCycleB componentDidMount")
    }
    
    handeClick = ()=>{
        this.setState({name:"RS RS"})

    }
    
    render() {

        console.log("LifeCycleB render")
        return (
            <div>
                <div>Life Cycle B</div>
                <button onClick={this.handeClick}>Change State</button>
            </div>
        )
    }
}

export default LifeCycleB
