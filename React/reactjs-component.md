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
}
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


## Import ReactDOM
Now take a look at the code on line 2:

`import ReactDOM from 'react-dom';`
This line of code is very similar to line 1.

Lines 1 and 2 both import JavaScript objects. In both lines, the imported object contains React-related methods.

However, there is a difference!

The methods imported from 'react-dom' are meant for interacting with the DOM. You are already familiar with one of them: ReactDOM.render().

The methods imported from 'react' don't deal with the DOM at all. They don't engage directly with anything that isn't part of React.

To clarify: the DOM is used in React applications, but it isn't part of React. After all, the DOM is also used in countless non-React applications. Methods imported from 'react' are only for pure React purposes, such as creating components or writing JSX elements.


## Create a Component Class
You've learned that a React component is a small, reusable chunk of code that is responsible for one job, which often involves rendering HTML.

Here's another fact about components: every component must come from a component class.

A component class is like a factory that creates components. If you have a component class, then you can use that class to produce as many components as you want. To make a component class, you use a base class from the React library: React.Component.

What is `React.Component`, and how do you use it to make a component class?

React.Component is a JavaScript class. To create your own component class, you must subclass React.Component. You can do this by using the syntax class YourComponentNameGoesHere extends React.Component {}.

On line 4, you know that you are declaring a new component class, which is like a factory for building React components. You know that React.Component is a class, which you must subclass in order to create a component class of your own. You also know that React.Component is a property on the object which was returned by import React from 'react' on line 1.




### example
`
import React from 'react';
import ReactDOM from 'react-dom';
class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}
ReactDOM.render(
  <MyComponentClass />, 
  document.getElementById('app')
);`