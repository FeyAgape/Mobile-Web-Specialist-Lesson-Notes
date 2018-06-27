# ReactJs: ADVANCED JSX


## class vs className
This lesson will cover more advanced JSX. You'll learn some powerful tricks, and some common errors to avoid.

Grammar in JSX is mostly the same as in HTML, but there are subtle differences to watch out for. Probably the most frequent of these involves the word class.

In HTML, it's common to use class as an attribute name:

`<h1 class="big">Hey</h1>`
### In JSX, you can't use the word class! You have to use className instead:

`<h1 className="big">Hey</h1>`

This is because JSX gets translated into JavaScript, and class is a reserved word in JavaScript.

When JSX is rendered, JSX **className** attributes are automatically rendered as class attributes.


## Self-Closing Tags
Another JSX 'gotcha' involves self-closing tags.

What's a self-closing tag?

Most HTML elements use two tags: an opening tag `(<div>)`, and a closing tag `(</div>)`. However, some HTML elements such as `<img>` and `<input>` use only one tag. The tag that belongs to a single-tag element isn't an opening tag nor a closing tag; it's a self-closing tag.

When you write a self-closing tag in HTML, it is optional to include a forward-slash immediately before the final angle-bracket:

Fine in HTML with a slash:

`<br/>`

Also fine, without the slash:

`<br>`

But!

### In JSX, you have to include the slash. If you write a self-closing tag in JSX and forget the slash, you will raise an *error*:

**Fine in JSX**:

  `<br />`

NOT FINE AT ALL in JSX:

  `<br>`


## JavaScript In Your JSX In Your JavaScript
Is regular JavaScript, written inside of a JSX expression, written inside of a JavaScript file.

`ReactDOM.render(
  <h1>2 + 3</h1>,
  document.getElementById('app')
);`