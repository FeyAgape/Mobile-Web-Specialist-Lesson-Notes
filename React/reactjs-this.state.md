# ReactJs: This.State

## State
React components will often need dynamic information in order to render. Dynamic information is information that can change. For example, imagine a component that displays the score of a basketball game. The score of the game might change over time, meaning that the score is dynamic. Our component will have to know the score, a piece of dynamic information, in order to render in a useful way.

There are two ways for a component to get dynamic information: props and state. Besides props and state, every value used in a component should always stay exactly the same. props and state are all that you need to set up an ecosystem of interacting React components.


## Setting Initial State
A React component can access dynamic information in two ways: props and state. Unlike props, a component's state is not passed in from the outside. A component decides its own state.

To make a component have state, give the component a state property. This property should be declared inside of a constructor method, like this:

`class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: 'decent' };
  }
  render() {
    return <div></div>;
  }
}
<Example />`

Whoa, a constructor method? super(props)? What's going on here? Let's look more closely at this potentially unfamiliar code:

`constructor(props) {
  super(props);
  this.state = { mood: 'decent' };
}`

`this.state` should be equal to an object, like in the example above. This object represents the initial "state" of any component instance. We'll explain that more soon!

How about the rest of the code? constructor and super are both features of ES6, not unique to React. There is nothing particularly React-y about their usage here. It is important to note that React components always have to call super in their constructors to be set up properly.

Look at the bottom of the highest code example in this column. <Example /> has a state, and its state is equal to { mood: 'decent' }.


## Access a Component's state
To read a component's state, use the expression `this.state.name-of-property`:

`class TodayImFeeling extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: 'decent' };
  }
  render() {
    return (
      <h1>
        I'm feeling {this.state.mood}!
      </h1>
    );
  }
}`

The above component class reads a property in its state from inside of its render function. Just like this.props, you can use this.state from any property defined inside of a component class's body.


## Update state with this.setstate
A component can do more than just read its own state. A component can also change its own state. A component changes its state by calling the function `this.setState()`. `this.setState()` takes two arguments: an object that will update the component's state, and a callback. You basically never need the callback. 

`import React from 'react';
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mood:   'great',
      hungry: false
    };
  }
  render() {
    return <div></div>;
  }
}
<Example />`

Take a look at code about, notice that <Example /> has a state of:

`{
  mood:   'great',
  hungry: false
}`

Now, let's say that <Example /> were to call: 
`this.setState({ hungry: true });`

After that call, here is what <Example />'s state would be:

`{
  mood:   'great',
  hungry: true
}`

The mood part of the state remains unaffected! `this.setState()` takes an object, and merges that object with the component's current state. If there are properties in the current state that aren't part of that object, then those properties remain how they were.