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


##