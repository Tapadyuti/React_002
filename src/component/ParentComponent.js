import React, { Component } from 'react'
import ChildComponent from './ChildComponent';
import PureCOmponent from './PureCOmponent';
import RegularComponent from './RegularComponent';

export default class ParentComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            parentName:"Parent",
            name:"RS"
        }
        this.greetParent = this.greetParent.bind(this);
    }

    greetParent(childName){
        alert(`Hello ${this.state.parentName} from: ${childName}`);
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:"RS"
            })
        }, 2000)
    }
    render() {
        console.log("Parent Component Reder")
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent} ></ChildComponent>
                <RegularComponent name={this.state.name}></RegularComponent>
                <PureCOmponent name={this.state.name}></PureCOmponent>
            </div>
        )
    }
}
