# ReactJs: Components and JSX

## Use Multiline JSX in a Component
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


## Use a Variable Attribute in a Component
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