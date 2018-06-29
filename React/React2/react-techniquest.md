# Advanced React Techniques

You'll learn how to make a stateless functional component, how to make a propType, how to write a form, and how to use styles. You'll also be introduced to your second programming pattern: dividing components into presentational components and container components.

## Inline Styles
There are many different ways to use styles in React. One of them: inline styles.

An inline style is a style that's written as an attribute, like this:

`<h1 style={{ color: 'red' }}>Hello world</h1>`

Notice the double curly braces. What are those for?

The outer curly braces inject JavaScript into JSX. They say, "everything between us should be read as JavaScript, not JSX." The inner curly braces create a JavaScript object literal. They make this a valid JavaScript object:

`{ color: 'red' }`

If you inject an object literal into JSX, and your entire injection is only that object literal, then you will end up with double curly braces. There's nothing unusual about how they work, but they look funny and can be confusing.


## Make A Style Object Variable
That's all that you need to apply basic styles in React! Simple and straightforward. One problem with this approach is that it becomes obnoxious if you want to use more than just a few styles. An alternative that's often nicer is to store a style object in a variable, and then inject that variable into JSX.

`import React from 'react';
const styles = {
  color: 'darkcyan',
  background: 'mintcream'
};
export class StyledClass extends React.Component {
  render() {
    return (
      <h1 style={styles}>
        Hello world
      </h1>
    );
  }
}`

If you aren't used to using modules, then this code may have made you twitch uncontrollably:

`const style = {
  color: 'darkcyan',
  background: 'mintcream'
};`

Defining a variable named style in the top-level scope would be an extremely bad idea in many JavaScript environments! In React, however, it's totally fine. Remember that every file is invisible to every other file, except for what you choose to expose via module.exports. You could have 100 different files, all with global variables named style, and there could be no conflicts.


## Style Name Syntax
In regular JavaScript, style names are written in hyphenated-lowercase:

`const styles = {
  'margin-top':       "20px",
  'background-color': "green"
};`

In React, those same names are instead written in camelCase:

`const styles = {
  marginTop:       "20px",
  backgroundColor: "green"
};`

This has zero effect on style property values, only on style property names.