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