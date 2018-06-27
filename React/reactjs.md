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
these code wll print out "2 + 3" as a string of text

## Curly Braces in JSX
The code in the last exercise didn't behave as one might expect. Instead of adding 2 and 3, it printed out "2 + 3" as a string of text. Why?

This happened because 2 + 3 is located in between <h1> and </h1> tags.

Any code in between the tags of a JSX element will be read as JSX, not as regular JavaScript! JSX doesn't add numbers - it reads them as text, just like HTML.

You need a way to write code that says, "Even though I am located in between JSX tags, treat me like ordinary JavaScript and not like JSX."

You can do this by wrapping your code in curly braces `{}`.

`ReactDOM.render(
  <h1>{2 + 3}</h1>,
  document.getElementById('app')
);`


## 20 Digits of Pi in JSX
You can now inject regular JavaScript into JSX expressions! This will be extremely useful.

In the code editor, you can see a JSX expression that displays the first twenty digits of pi.

Study the expression and notice the following:

The code is written in a JavaScript file. By default, it will all be treated as regular JavaScript.
Find <div> on line 5. From there up through </div>, the code will be treated as JSX.
Find Math. From there up through (20), the code will be treated as regular JavaScript again.
The curly braces themselves won't be treated as JSX nor as JavaScript. They are markers that signal the beginning and end of a JavaScript injection into JSX, similar to the quotation marks that signal the boundaries of a string.

`
const math = (
    <h1>
   2 + 3 = {2 + 3}
    </h1>
);
ReactDOM.render(
  math,
  document.getElementById('app')
);
`
Displays 2 + 3 = 5

