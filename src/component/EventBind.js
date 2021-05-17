import React, { Component } from 'react';
import { Accordion,Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
class EventBind extends Component {
   
   constructor(props){
       super(props)
       this.state = {
           message:"Hello"
       }
       //this.clickHandler = this.clickHandler.bind(this);
   }

   // Method 4: Setting Class Property
   clickHandler = () =>{
       this.setState({
           message: this.state.message + " Ram"
       })
       alert(this.state.message);
   }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* Total 4 aproaches, 1 Binding in function, 2: Arrow function in render(good for passing arguments), 3: Binding in the class constructor, 4: Class property in arrow funciton
                    <Button onClick={this.clickHandler.bind(this)}>Click Event Binding</Button>   // Binding Type 1
                    <Button onClick={() => this.clickHandler() }>Click Event Binding</Button>   // Binding Type 2 this require to bind the function to this in constructor
                    // 2nd aproach is best suggested by 
                */}
                <Button onClick={this.clickHandler}>Click Event Binding</Button> {/* This is using class property, Method 4 */}
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Click me! "Accordion Card as Button"
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>Hello! I'm a Card of EventBinding Class</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            Click me! "Accordion Card as Button"
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>Hello! I'm another Card of EventBinding Class</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    </Accordion>
            </div>
        )
    }
}

export default EventBind
