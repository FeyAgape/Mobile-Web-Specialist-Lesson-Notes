# ReactJs: Components and JSX

## Using Multiline JSX in a Component
In this lesson, you will learn some common ways that JSX and React components work together. You'll get more comfortable with both JSX and components, while picking up some new tricks.

Take a look at this HTML:

`<blockquote>
  <p>
    The world is full of objects, more or less interesting; I do not wish to add any more.
  </p>
  <cite>
    <a target="_blank"
      href="https://en.wikipedia.org/wiki/Douglas_Huebler">
      Douglas Huebler
    </a>
  </cite>
</blockquote>`

How might you make a React component that renders this HTML?

`import React from 'react';
import ReactDOM from 'react-dom';
class QuoteMaker extends React.Component {
  render() {
    return (
      <blockquote>
        <p>
          The world is full of objects, more or less interesting; I do not wish to add any more.
        </p>
        <cite>
          <a target="_blank"
            href="https://en.wikipedia.org/wiki/Douglas_Huebler">
            Douglas Huebler
          </a>
        </cite>
      </blockquote>
    );
  }
};
ReactDOM.render(
  <QuoteMaker />,
  document.getElementById('app')
);
`

The key thing to notice in QuoteMaker is the parentheses in the return statement, on lines 6 and 17. Until now, your render function return statements have looked like this, without any parentheses:

`return <h1>Hello world</h1>;`

However, a multi-line JSX expression should always be wrapped in parentheses! That is why QuoteMaker's return statement has parentheses around it.


## Using a Variable Attribute in a Component
Take a look at this JavaScript object named redPanda:

`const redPanda = {
  src:  'https://upload.wikimedia.org/wikipedia/commons/b/b2/Endangered_Red_Panda.jpg',
  alt: 'Red Panda',
  width:  '200px
};`

How could you render a React component, and get a picture with redPanda's properties?

`import React from 'react';
import ReactDOM from 'react-dom';
const redPanda = {
  src: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Endangered_Red_Panda.jpg',
  alt: 'Red Panda',
  width:  '200px'
};
class RedPanda extends React.Component {
  render() {
    return (
      <div>
        <h1>Cute Red Panda</h1>
        <img 
          src={redPanda.src}
          alt={redPanda.alt}
          width={redPanda.width} />
      </div>
    );
  }
}
ReactDOM.render(
  <RedPanda />,
  document.getElementById('app')
);
`

Note all of the curly-brace JavaScript injections inside of the render function! Lines 14, 15, and 16 all use JavaScript injections. You can, and often will, inject JavaScript into JSX inside of a render function.


## Putting Logic in a Render Function
A render() function must have a return statement. However, that isn't all that it can have.

A render() function can also be a fine place to put simple calculations that need to happen right before a component renders. Here's an example of some calculations inside of a render function:

`class Random extends React.Component {
  render() {
    // First, some logic that must happen
    // before rendering:
    const n = Math.floor(Math.random() * 10 + 1);
    // Next, a return statement
    // using that logic:
    return <h1>The number is {n}!</h1>;
  }
}`

Watch out for this common mistake:

`class Random extends React.Component {
  // This should be in the render function:
  const n = Math.floor(Math.random() * 10 + 1);
  render() {
    return <h1>The number is {n}!</h1>;
  }
};`

In the above example, the line with the const n declaration will cause a syntax error, as is it should not be part of the class declaration itself, but should occur in a method like render().

### example 

`import React from 'react';
import ReactDOM from 'react-dom';
const friends = [
  {
    title: "Yummmmmmm",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyweirdo.jpg"
  },
  {
    title: "Hey Guys!  Wait Up!",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-earnestfrog.jpg"
  },
  {
    title: "Yikes",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-alpaca.jpg"
  }
];
// New component class starts here:
class Friend extends React.Component {
  render() {
    let friend = friends[2];
    return (
      <div>
        <h1>{friend.title}</h1>
        <img src={friend.src} />
      </div>
    );
  }
}
ReactDOM.render(<Friend />, document.getElementById('app'));`


## 