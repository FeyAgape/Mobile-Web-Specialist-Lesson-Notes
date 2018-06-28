# ReactJs: Components

## THE COMPONENT
React applications are made out of components.

**What's a component?**

A component is a small, reusable chunk of code that is responsible for one job. That job is often to render some HTML.

Take a look at the code below. This code will create and render a new React component:

`import React from 'react';
import ReactDOM from 'react-dom';
class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
};
ReactDOM.render(
  <MyComponentClass />,
  document.getElementById('app')
);`

A lot of that code is probably unfamiliar. However you can recognize some JSX in there, as well as ReactDOM.render().

We are going to unpack that code, one small piece at a time. By the end of this lesson, you'll understand how to build a React component!


## Import React
Wooo! Your first React component!

Take a look at the code on line 1:

`import React from 'react';`

This line of code creates a new variable. That variable's name is `React`, and its value is a particular, imported JavaScript object:

// create a variable named React:
`import React from 'react';`

// evaluate this variable and get a particular, imported JavaScript object:
React // { imported object properties here... }

This imported object contains methods that you need in order to use React. The object is called the React library.

You've already seen one of the methods contained in the React library: `React.createElement()`. Recall that when a JSX element is compiled, it transforms into a React.createElement() call.

**For this reason, you have to import the React library, and save it in a variable named React, before you can use any JSX at all. `React.createElement()` must be available in order for JSX to work.**


