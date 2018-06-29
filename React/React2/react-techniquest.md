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
