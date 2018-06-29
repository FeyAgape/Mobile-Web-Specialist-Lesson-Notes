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


## Accessing a Component's state
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


## Updating state with this.setstate
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


## Calling this.setState from Another Function
The most common way to call this.setState() is to call a custom function that wraps a this.setState() call. .makeSomeFog() is an example:

`class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { weather: 'sunny' };
    this.makeSomeFog = this.makeSomeFog.bind(this);
  }
  makeSomeFog() {
    this.setState({
      weather: 'foggy'
    });
  }
}`

Notice how the method makeSomeFog() contains a call to this.setState(). You may have noticed a weird line in there:

`this.makeSomeFog = this.makeSomeFog.bind(this);`

This line is necessary because makeSomeFog()'s body contains the word this. Let's walk through how a function wrapping this.setState() might work in practice. 

### Example
`//Mood.js
import React from 'react';
import ReactDOM from 'react-dom';
class Mood extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: 'good' };
    this.toggleMood = this.toggleMood.bind(this);
  }
  toggleMood() {
    const newMood = this.state.mood == 'good' ? 'bad' : 'good';
    this.setState({ mood: newMood });
  }
  render() {
    return (
      <div>
        <h1>I'm feeling {this.state.mood}!</h1>
        <button onClick={this.toggleMood}>
          Click Me
        </button>
      </div>
    );
  }
}
ReactDOM.render(<Mood />, document.getElementById('app'));`

``//Toggle.js
import React from 'react';
const green = '#39D1B4';
const yellow = '#FFD712';
class Toggle extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Change my color
        </h1>
      </div>
    );
  }
}``

Here is how a <Mood />'s state would be set:

1. A user triggers an event (in this case a click event, triggered by clicking on a <button></button>).

2. The event from Step 1 is being listened for (in this case by the onClick attribute on line 20).

3. When this listened-for event occurs, it calls an event handler function (in this case, this.toggleMood()).

4. Inside of the body of the event handler, this.setState() is called.

5. The component's state is changed!

Due to the way that event handlers are bound in JavaScript, this.toggleMood() loses its this when it is used. Therefore, the expressions this.state.mood and this.setState on won't mean what they're supposed to... unless you have already bound the correct this to this.toggleMood.

That is why we must bind this.toggleMood to this.

For an in-depth explanation of this kind of binding trickery, begin with the [React docs](https://facebook.github.io/react/docs/handling-events.html). For the less curious, just know that in React, whenever you define an event handler that uses this, you need to add `this.methodName = this.methodName.bind(this)` to your constructor function.

Look at the statement `const newMood = this.state.mood == 'good' ? 'bad' : 'good';` What does that do?

It declares a const named newMood equal to the opposite of this.state.mood. If this.state.mood is "good", then newMood will be "bad," and vice versa.

A <Mood /> instance would display "I'm feeling good!" along with a button. Clicking on the button would change the display to "I'm feeling bad!" Clicking again would change back to "I'm feeling good!," etc. Try to follow the step-by-step walkthrough in Mood.js and see how all of this works.

**One final note**: you can't call this.setState() from inside of the render function! 


##