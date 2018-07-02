# Container components from presentational components

## Separate Container Components From Presentational Components: Explanation
In this lesson, you will learn your second programming pattern: separating presentational components from display components.

`//
import React from 'react';
import ReactDOM from 'react-dom';
const GUINEAPATHS = [
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-1.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-2.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-3.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-4.jpg'
];
export class GuineaPigs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentGP: 0 };
    this.interval = null;
    this.nextGP = this.nextGP.bind(this);
  }
  nextGP() {
    let current = this.state.currentGP;
    let next = ++current % GUINEAPATHS.length;
    this.setState({ currentGP: next });
  }
  componentDidMount() {
    this.interval = setInterval(this.nextGP, 5000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    let src = GUINEAPATHS[this.state.currentGP];
    return (
      <div>
        <h1>Cute Guinea Pigs</h1>
        <img src={src} />
      </div>
    );
  }
}
ReactDOM.render(
  <GuineaPigs />, 
  document.getElementById('app')
);`

Looking at <GuineaPigs /> component.

<GuineaPigs />'s job is to render a photo carousel of guinea pigs. It does this perfectly well! And yet, it has a problem: it does too much stuff. We can break <GuineaPigs /> into smaller components, but before we do: how do we know that GuineaPigs does too much stuff? How can you tell when a component has too many responsibilities?

Separating container components from presentational components helps to answer that question. It shows you when it might be a good time to divide a component into smaller components. It also shows you how to perform that division.


## Separate Container Components From Presentational Components: Apply
Separating container components from presentational components is a popular React programming pattern, ypu can read more [here](https://medium.com/@learnreact/container-components-c0e67432e005). Here's the basic idea behind it: if a component has to have state, make calculations based on props, or manage any other complex logic, then that component shouldn't also have to render HTML-like JSX. Instead of rendering HTML-like JSX, the component should render another component. It should be that component's job to render HTML-like JSX. Following this pattern separates your business logic from your presentational logic, which is a Good Thing.

### Example
``//GuineaPigs.js
import React from 'react';
export class GuineaPigs extends React.Component {
  render() {
    const src = this.props.src;
    return (
      <div>
        <h1>Cute Guinea Pigs</h1>
        <img src={src} />
      </div>
    );
  }
}``

``import React from 'react';
import ReactDOM from 'react-dom';
import { GuineaPigs } from '../filepath/GuineaPigs';
const GUINEAPATHS = [
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-1.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-2.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-3.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-4.jpg'
];
class GuineaPigsContainer extends React.Component {
  constructor(props) {
     super(props);
    this.state = { currentGP: 0 };
    this.interval = null;
    this.nextGP = this.nextGP.bind(this);
  }
  nextGP() {
    let current = this.state.currentGP;
    let next = ++current % GUINEAPATHS.length;
    this.setState({ currentGP: next });
  }
  componentDidMount() {
    this.interval = setInterval(this.nextGP, 5000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    let src = GUINEAPATHS[this.state.currentGP];
    return <GuineaPigs src={src} />;
  }
}
ReactDOM.render(
  <GuineaPigsContainer />,
  document.getElementById('app')
);``


## Stateless Functional Components
Take a look at GuineaPigs, notice that its instructions object only has one property: render(). When you separate a container component from a presentational component, the presentational component will always end up like this: one render() function, and no other properties.

If you have a component class with nothing but a render function, then you can rewrite that component class in a very different way. Instead of using React.Component, you can write it as JavaScript function!

A component class written as a function is called a stateless functional component. Stateless functional components have some advantages over typical component classes. We'll cover those advantages in this lesson.

Click on Example.js to see a stateless functional component in action.