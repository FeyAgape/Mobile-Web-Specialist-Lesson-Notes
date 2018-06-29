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


## Define an Event Handler
To make a child component update its parent's state, the first step is something that you've seen before: you must define a state-changing method on the parent.


## Pass the Event Handler
The second step is the Parent must pass this function down to Child, so that Child can use it in an event listener on the dropdown menu.


## Receive the Event Handler
This function needs to be passed a new name as an argument, in order to work properly. When a user selects a new dropdown item, it will invoke changeName, but it won't pass the correct argument! Instead of passing a new name, it will pass an event object, as all event listeners do. This is a common problem when passing down an event handler in React! The solution is to define another function.

This new function should take an event object as an argument, extract the name that you want from that event object, and then call the event handler, passing in the extracted name! It sounds like a lot, but you will see this happen so often that it will soon feel intuitive. In Child.js, before the render function, define a new function that can be passed an event object:

You've defined a new function that can take an event object, and use it to correctly update the parent's state. Now let's put that new function to use! As with all methods that we pass in React, we must first bind this to our new method to the current instance of Child.


`//Parent.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';
class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Frarthur' };   
    this.changeName = this.changeName.bind(this);
  }  
  changeName(newName) {
    this.setState({
      name: newName
    });
  }
  render() {
    return <Child name={this.state.name} onChange={this.changeName} />
  }
}
ReactDOM.render(
	<Parent />,
	document.getElementById('app')
);`

`//Child.js
import React from 'react';
export class Child extends React.Component {
  constructor(props) {
    super(props);    
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }
  render() {
    return (
      <div>
        <h1>
          Hey my name is {this.props.name}!
        </h1>
        <select id="great-names" onChange={this.handleChange}>
          <option value="Frarthur">
            Frarthur
          </option>
          <option value="Gromulus">
            Gromulus
          </option>
          <option value="Thinkpiece">
            Thinkpiece
          </option>
        </select>
      </div>
    );
  }
}`


## Automatic Binding
Stateless components updating their parents' state is a React pattern that you'll see more and more. Learning to recognize it will help you understand how React apps are organized.


## Child Components Update Sibling Components
Patterns within patterns within patterns!

First React programming pattern: a stateful, parent component passes down a prop to a stateless, child component. Pattern is actually part of a larger pattern: a stateful, parent component passes down an event handler to a stateless, child component. The child component then uses that event handler to update its parent's state.

We will expand the pattern one last time. A child component updates its parent's state, and the parent passes that state to a sibling component. An understanding of this final pattern will be very helpful in the wild.


## One Sibling to Display, Another to Change
One of the very first things that you learned about components is that they should only have one job.

In the last lesson, Child had two jobs:

1. Child displayed a name.
2. Child offered a way to change that name.

You should make like Solomon and divide Child in two: one component for displaying the name, and a different component for allowing a user to change the name.

`//Parent.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';
import { Sibling } from './Sibling';
class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Frarthur' };
    this.changeName = this.changeName.bind(this);
  }
  changeName(newName) {
    this.setState({
      name: newName
    });
  }
  render() {
    return (
      <div>
        <Child 
          name={this.state.name} 
          onChange={this.changeName} />
        <Sibling />
      </div>
    );
  }
}
ReactDOM.render(
  <Parent />,
  document.getElementById('app')
);
`

`//Child.js
import React from 'react';
export class Child extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }
  render() {
    return (
      <div>
        <select
          id="great-names"
          onChange={this.handleChange}>
          <option value="Frarthur">Frarthur</option>
          <option value="Gromulus">Gromulus</option>
          <option value="Thinkpiece">Thinkpiece</option>
        </select>
      </div>
    );
  }
}`

`//Sibling.js
import React from 'react';
export class Sibling extends React.Component {
  render() {
    return (
      <div>
        <h1>Hey, my name is Frarthur!</h1>
        <h2>Don't you think Frarthur is the prettiest name ever?</h2>
        <h2>Sure am glad that my parents picked Frarthur!</h2>
      </div>
    );
  }
}`

That brings us to the essential new concept for this lesson: you will have one stateless component display information, and a different stateless component offer the ability to change that information.


## Pass the Right props to the Right Siblings
Look at Parent.js
Three things have changed.

1. Sibling has been required
2. <Sibling /> instance has been added to the render function.
3. <Sibling /> and <Child /> have been wrapped in a <div></div>, since JSX expressions must have only one outer element.

Sibling's job is to display the selected name. That name is stored in Parent's state. Parent will have to pass the name to Sibling, so that Sibling can display it.  In Parent's render function, pass the name to <Sibling />


## Display Information in a Sibling Component
You're on the last step! You've passed the name down to <Sibling /> as a prop. Now <Sibling /> has to display that prop.

`//Parent
import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';
import { Sibling } from './Sibling';
class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Frarthur' };
    this.changeName = this.changeName.bind(this);
  }
  changeName(newName) {
    this.setState({
      name: newName
    });
  }
  render() {
    return (
      <div>
        <Child onChange={this.changeName} />
        <Sibling name={this.state.name} />
      </div>
    );
  }
}
ReactDOM.render(
  <Parent />,
  document.getElementById('app')
);`

`// Sibling.js
import React from 'react';
export class Sibling extends React.Component {
  render() {
		const name = this.props.name;
    return (
      <div>
        <h1>Hey, my name is {name}!</h1>
        <h2>Don't you think {name} is the prettiest name ever?</h2>
        <h2>Sure am glad that my parents picked {name}!</h2>
      </div>
    );
  }
}`

`//Child.js
import React from 'react';
export class Child extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }
  render() {
    return (
      <div>
        <select
          id="great-names"
          onChange={this.handleChange}>
          <option value="Frarthur">Frarthur</option>
          <option value="Gromulus">Gromulus</option>
          <option value="Thinkpiece">Thinkpiece</option>
        </select>
      </div>
    );
  }
}`


## Stateless Components Inherit From Stateful Components Recap
You just executed a complete React programming pattern!

Let's review. 
1. A stateful component class defines a function that calls this.setState. (Parent.js)

2. The stateful component passes that function down to a stateless component. (Parent.js)

3. That stateless component class defines a function that calls the passed-down function, and that can take an event object as an argument. (Child.js)

4. The stateless component class uses this new function as an event handler. (Child.js)

5. When an event is detected, the parent's state updates. (A user selects a new dropdown menu item)

6. The stateful component class passes down its state, distinct from the ability to change its state, to a different stateless component. (Parent.js)

7. That stateless component class receives the state and displays it. (Sibling.js)

8. An instance of the stateful component class is rendered. One stateless child component displays the state, and a different stateless child component displays a way to change the (Parent.js)

This pattern occurs in React all the time! The more that you see it, the more that its elegance will become clear. Being introduced to this pattern is your first step towards understanding how React apps fit together!