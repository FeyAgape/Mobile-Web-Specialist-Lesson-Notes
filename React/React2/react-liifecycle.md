# React Lifecycle

## What's a Lifecycle Method?
Lifecycle methods are methods that get called at certain moments in a component's life. You can write a lifecycle method that gets called right before a component renders for the first time. You can write a lifecycle method that gets called right after a component renders, every time except for the first time. You can attach lifecycle methods to a lot of different moments in a component's life. This has powerful implications!


## Mounting Lifecycle Methods
There are three categories of lifecycle methods: mounting, updating, and unmounting. 

A component "mounts" when it renders for the first time. This is when mounting lifecycle methods get called.

There are three mounting lifecycle methods:

1. componentWillMount
2. render
3. componentDidMount

When a component mounts, it automatically calls these three methods, in order.


## componentWillMount
The first mounting lifecycle method is called componentWillMount.

When a component renders for the first time, componentWillMount gets called right before render.

`//Example.js
import React from 'react';
import ReactDOM from 'react-dom';
export class Example extends React.Component {
  componentWillMount() {
    alert('component is about to mount!');
  }
  render() {
    return <h1>Hello world</h1>;
  }
}
ReactDOM.render(
  <Example />,
  document.getElementById('app')
);
setTimeout(() => {
  ReactDOM.render(
    <Example />,
    document.getElementById('app')
  );
}, 2000);`


`//Example1.js
import React from 'react';
import ReactDOM from 'react-dom';
export class Example2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  componentWillMount() {
    this.setState({ text: 'Hello world' });
  }
  render() {
    return <h1>{this.state.text}</h1>;
  }
}
ReactDOM.render(
  <Example2 />,
  document.getElementById('app')
);`


## render
render is a lifecycle method! Whenever a component mounts, componentWillMount is called first, followed by render, followed by componentDidMount. render belongs to two categories: mounting lifecycle methods, and updating lifecycle methods. 


## componentDidMount
The final mounting lifecycle method is called componentDidMount.

When a component renders for the first time, componentDidMount gets called right after the HTML from render has finished loading. 

`import React from 'react';
export class Example extends React.Component {
  componentDidMount() {
    alert('component just finished mounting!');
  }
  render() {
    return <h1>Hello world</h1>;
  }
}`

componentDidMount gets used a lot in react!

If your React app uses AJAX to fetch initial data from an API, then componentDidMount is the place to make that AJAX call. More generally, componentDidMount is a good place to connect a React app to external applications, such as web APIs or JavaScript frameworks. componentDidMount is also the place to set timers using setTimeout or setInterval.


## Updating Lifecycle Methods
Updating and unmounting lifecycle methods. 

What is updating?

The first time that a component instance renders, it does not update. A component updates every time that it renders, starting with the second render.

There are five updating lifecycle methods:

1. componentWillReceiveProps
2. shouldComponentUpdate
3. componentWillUpdate
4. render
5. componentDidUpdate

Whenever a component instance updates, it automatically calls all five of these methods, in order.


## componentWillReceiveProps
The first updating lifecycle method is called componentWillReceiveProps.

When a component instance updates, componentWillReceiveProps gets called before the rendering begins.

As one might expect, componentWillReceiveProps only gets called if the component will receive props:

`// componentWillReceiveProps will get called here:
ReactDOM.render(
  <Example prop="myVal" />,
  document.getElementById('app')
);
// componentWillReceiveProps will NOT get called here:
ReactDOM.render(
  <Example />,
  document.getElementById('app')
);`


componentWillReceiveProps automatically gets passed one argument: an object called nextProps. nextProps is a preview of the upcoming props object that the component is about to receive.

`//example.js
import React from 'react';
export class Example extends React.Component {
  componentWillReceiveProps(nextProps) {
    alert("Check out the new props.text that "
      + "I'm about to get:  " + nextProps.text);
  }
  render() {
    return <h1>{this.props.text}</h1>;
  }
}
// The first render won't trigger
// componentWillReceiveProps:
ReactDOM.render(
  <Example text="Hello world" />,
  document.getElementById('app')
);
// After the first render, 
// subsequent renders will trigger
// componentWillReceiveProps:
setTimeout(() => {
  ReactDOM.render(
    <Example text="Hello world" />,
    document.getElementById('app')
  );
}, 1000);`


## shouldComponentUpdate
The second updating lifecycle method is called shouldComponentUpdate.

When a component updates, shouldComponentUpdate gets called after componentWillReceiveProps, but still before the rendering begins. 

`//Example.js
import React from 'react';
export class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { subtext: 'Put me in an <h2> please.' };
  }
  shouldComponentUpdate(nextProps, nextState) {
    if ((this.props.text == nextProps.text) && 
      (this.state.subtext == nextState.subtext)) {
      alert("Props and state haven't changed, so I'm not gonna update!");
      return false;
    } else {
      alert("Okay fine I will update.")
      return true;
    }
  }
  render() {
    return (
      <div>
        <h1>{this.props.text}</h1>
        <h2>{this.state.subtext}</h2>
      </div>
    );
  }
}`

shouldComponentUpdate should return either true or false.

If shouldComponentUpdate returns true, then nothing noticeable happens. But if shouldComponentUpdate returns false, then the component will not update! None of the remaining lifecycle methods for that updating period will be called, including render.

The best way to use shouldComponentUpdate is to have it return false only under certain conditions. If those conditions are met, then your component will not update. shouldComponentUpdate automatically receives two arguments: nextProps and nextState. It's typical to compare nextProps and nextState to the current this.props and this.state, and use the results to decide what to do. 


## componentWillUpdate
The third updating lifecycle method is componentWillUpdate. componentWillUpdate gets called in between shouldComponentUpdate and render. componentWillUpdate receives two arguments: nextProps and nextState. 

`//Example
import React from 'react';
export class Example extends React.Component {
  componentWillUpdate(nextProps, nextState) {
    alert('Component is about to update!  Any second now!');
  }
  render() {
    return <h1>Hello world</h1>;
  }
}
`

You cannot call this.setState from the body of componentWillUpdate! Which begs the question, why would you use it?

The main purpose of componentWillUpdate is to interact with things outside of the React architecture. If you need to do non-React setup before a component renders, such as checking the window size or interacting with an API, then componentWillUpdate is a good place to do that. If that sounds abstract, that's okay! All of the lifecycle methods might feel a bit theoretical, until you've used them in real-life scenarios.