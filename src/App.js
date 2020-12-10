//import logo from './logo.svg';
import './App.css';
import {GreetFunctionArrowComponent} from "./component/GreetFunctionArrowComponent";
import GreetFunctionalNormalComponent from "./component/GreetFunctionalNormalComponent";
import ClassComponent from './component/ClassComponet';
import HelloJSX from './component/HelloJSX';
import Welcome from './component/Welcome';
import MessageState from './component/MessageState';
import Counter from './component/Counter';
import { Component } from 'react';



class App extends Component {
  render(){
    return (
      <div className="App">
        There are two types of Component:
        <ui>
          <li>Functional Component, you can direct export html code.</li>
          <li>Class Component, you have to extend Component & render method returning HTML code.</li>
        </ui>
        <h3>JSX</h3>
        JavaScript XML (JSX) is an extension to the JavaScript language syntax. With React, it's an extension to write XML-like code for 
        elements and components. And just like XML, JSX tags have a tag name, attributes, and children.

        <GreetFunctionArrowComponent></GreetFunctionArrowComponent><hr></hr>
        <GreetFunctionalNormalComponent></GreetFunctionalNormalComponent><hr></hr>
        <ClassComponent></ClassComponent><hr></hr>
        <HelloJSX /><hr></hr>
        <Welcome firstName="Omm Namah" lastName="Shivaye">
          This is child element.
        </Welcome><hr></hr>
        <Welcome firstName="Bruce" lastName="Wayn">
          This is child element.
        </Welcome><hr></hr>
        <MessageState></MessageState><hr></hr>
        <Counter></Counter>
        <Counter addValue="2" ></Counter>
      </div>
    );
  }
}

export default App;
