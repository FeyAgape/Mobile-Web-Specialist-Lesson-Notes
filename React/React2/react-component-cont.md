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