# STATELESS COMPONENTS FROM STATEFUL COMPONENTS

## Stateless Components Inherit From Stateful Components
Let's learn our first programming pattern! The programming pattern uses two React components: a stateful component, and a stateless component. "Stateful" describes any component that has a state property; "stateless" describes any component that does not.

In our pattern, a stateful component passes its state down to a stateless component.


## Build a Stateful Component Class
Let's make a stateful component pass its state to a stateless component. To make that happen, you need two component classes: a stateful class, and a stateless class.

A stateful component class named Parent

`//Parent.js
import React from 'react';
import ReactDOM from 'react-dom';
class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Frarthur' };
  }
  render() {
    return <div></div>;
  }
}`

Now our stateless component class.

`//Child.js
import React from 'react';
export class Child extends React.Component {
  render() {
    return <h1>Hey, my name is {this.props.name}!</h1>;
  }
}`


## Pass a Component's State
A <Parent /> is supposed to pass its state to a <Child />. Before a <Parent /> can pass anything to a <Child />, you need to import Child into Parent.js.

`//Parent.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';
class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Frarthur' };
  }
  render() {
    return <Child name={this.state.name} />;
  }
}
ReactDOM.render(<Parent />, document.getElementById('app'));`

`//Child.js
import React from 'react';
export class Child extends React.Component {
  render() {
    return <h1>Hey, my name is {this.props.name}!</h1>;
  }
}`


## Don't Update props
You just passed information from a stateful component to a stateless component. You will be doing a lot of that. A component can change its state by calling this.setState(). You may have been wondering: how does a component change its props?

The answer: it doesn't!

A component should never update this.props. This is potentially confusing. props and state store dynamic information. Dynamic information can change, by definition. If a component can't change its props, then what are props for? A React component should use props to store information that can be changed, but can only be changed by a different component.

A React component should use state to store information that the component itself can change. 


## Child Components Update Their Parents' state
The stateless, child component will update the state of the parent component.

Here's how that works:

1. The parent component class defines a method that calls this.setState().

`//Step1.js
import React from 'react';
import ReactDOM from 'react-dom';
import { ChildClass } from './ChildClass';
class ParentClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { totalClicks: 0 };
  }
  handleClick() {
    const total = this.state.totalClicks;
    // calling handleClick will 
    // result in a state change:
    this.setState(
      { totalClicks: total + 1 }
    );
  }
}`

For an example, look in Step1.js at the .handleClick() method.

2. The parent component binds the newly-defined method to the current instance of the component in its constructor. This ensures that when we pass the method to the child component, it will still update the parent component.

`//Step2.js
import React from 'react';
import ReactDOM from 'react-dom';
import { ChildClass } from './ChildClass';
class ParentClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { totalClicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const total = this.state.totalClicks;
    // calling handleClick will 
    // result in a state change:
    this.setState(
      { totalClicks: total + 1 }
    );
  }
  // The stateful component class passes down
  // handleClick to a stateless component class:
  render() {
    return (
      <ChildClass onClick={this.handleClick} />
    );
  }
}`

For an example, look in Step2.js at the end of the constructor() method.

3. Once the parent has defined a method that updates its state and bound to it, the parent then passes that method down to a child.

Look in Step2.js.

4. The child receives the passed-down function, and uses it as an event handler.

`//Step3.js
import React from 'react';
import ReactDOM from 'react-dom';
export class ChildClass extends React.Component {
  render() {
    return (
      // The stateless component class uses
      // the passed-down handleClick function,
      // accessed here as this.props.onClick,
      // as an event handler:
      <button onClick={this.props.onClick}>
        Click Me!
      </button>
    );
  }
}`

Look in Step3.js. When a user clicks on the <button></button>, a click event will fire. This will make the passed-down function get called, which will update the parent's state.


##
