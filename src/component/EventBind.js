import React, { Component } from 'react';
import { Accordion,Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
class EventBind extends Component {
    constructor(props){
        super(props)
        this.state = {
            message:"Helo World"
        }
    }
    clickHandler
    render() {
        return (
            <div>
                <div>{this.message}</div>
                <Button onClick="this.clickHandler">Click Event Binding</Button>
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Click me!
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            Click me!
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    </Accordion>
            </div>
        )
    }
}

export default EventBind
