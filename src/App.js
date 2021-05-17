//import logo from './logo.svg';
import './App.css';
import {GreetFunctionArrowComponent} from "./component/GreetFunctionArrowComponent";
import GreetFunctionalNormalComponent from "./component/GreetFunctionalNormalComponent";
import ClassComponent from './component/ClassComponet';
import HelloJSX from './component/HelloJSX';
import Welcome from './component/Welcome';
import MessageState from './component/MessageState';
import Counter from './component/Counter';
import FunctionClick from './component/FunctionClick';
import ClassClick from './component/ClassClick';
import { Component } from 'react';
import EventBind from './component/EventBind';
import './/../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import ParentComponent from './component/ParentComponent';
import UserGreeting from './component/UserGreeting';
import NameList from './component/NameList';
import PersonList from './component/PersonList';
import Forms from './component/Forms';
import LifeCycleA from './component/LifeCycleA';
import FragmentDemo from './component/FragmentDemo';
import Table from './component/Table';
import PureCOmponent from './component/PureCOmponent';

class App extends Component {
  render(){
    return (
      <div className="App">
        <div className="App-row">
          <div className="App-col">
            There are two types of Component:
            <ui>
              <li>Functional Component, you can direct export html code.</li>
              <li>Class Component, you have to extend Component & render method returning HTML code.</li>
            </ui>
            <h3>JSX</h3>
            JavaScript XML (JSX) is an extension to the JavaScript language syntax. With React, it's an extension to write XML-like code for 
            elements and components. And just like XML, JSX tags have a tag name, attributes, and children.
          </div>
        </div>
        <div className="App-row">
         <div className="App-col">
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
            <hr></hr>
            <FunctionClick/>
            <hr></hr>
            <ClassClick/>
            <hr></hr>
            <EventBind></EventBind>
            <hr></hr>
            <ParentComponent></ParentComponent>
            <hr></hr>
            <UserGreeting></UserGreeting>
            <hr></hr>
          </div>
        
          <div className="App-col">
            <NameList></NameList>
            <hr></hr>
            <PersonList></PersonList>
            <hr></hr>
            <Table></Table>
          </div>
          <div className="App-col">
            <Forms></Forms>
            <LifeCycleA></LifeCycleA>
            <FragmentDemo></FragmentDemo>
            <PureCOmponent></PureCOmponent>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
