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


## Variables in JSX
When you inject JavaScript into JSX, that JavaScript is part of the same environment as the rest of the JavaScript in your file.

That means that you can access variables while inside of a JSX expression, even if those variables were declared on the outside.

`// Declare a variable:
const name = 'Gerdo';`

`// Access your variable 
// from inside of a JSX expression:
const greeting = <p>Hello, {name}!</p>;`

`
const theBestString = 'tralalalala i am da best';
ReactDOM.render(
  <h1>
  {theBestString}
  </h1>, 
  document.getElementById('app'));
`


## Variable Attributes in JSX
When writing JSX, it's common to use variables to set attributes.

Here's an example of how that might work:

// Use a variable to set the `height` and `width` attributes:

`const sideLength = "200px";
const panda = (
  <img 
    src="images/panda.jpg" 
    alt="panda" 
    height={sideLength} 
    width={sideLength} />
);`

Notice how in this example, the <img />'s attributes each get their own line. This can make your code more readable if you have a lot of attributes on one element.

Object properties are also often used to set attributes:

`const pics = {
  panda: "http://bit.ly/1Tqltv5",
  owl: "http://bit.ly/1XGtkM3",
  owlCat: "http://bit.ly/1Upbczi"
};`

`const panda = (
  <img 
    src={pics.panda} 
    alt="Lazy Panda" />
);`

`const owl = (
  <img 
    src={pics.owl} 
    alt="Unimpressed Owl" />
);`

`const owlCat = (
  <img 
    src={pics.owlCat} 
    alt="Ghastly Abomination" />
);`

### Example

`
const goose = 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg';
// Declare new variable here:
const gooseImg = <img src={goose} />;
ReactDOM.render(gooseImg, 
                document.getElementById('app')
               );
`


## Event Listeners in JSX
JSX elements can have event listeners, just like HTML elements can. Programming in React means constantly working with event listeners.

You create an event listener by giving a JSX element a special attribute. Here's an example:

`<img onClick={myFunc} />`

An event listener attribute's name should be something like `onClick` or `onMouseOver`: the word on, plus the type of event that you're listening for. You can see a list of valid event names at [https://reactjs.org/docs/events.html#supported-events](https://reactjs.org/docs/events.html#supported-events).

An event listener attribute's value should be a function. The above example would only work if myFunc were a valid function that had been defined elsewhere:

`function myFunc() {
  alert('Make myFunc the pFunc... omg that was horrible i am so sorry');
}`

`<img onClick={myFunc} />`

Note that in HTML, event listener names are written in all lowercase, such as onclick or onmouseover. In JSX, event listener names are written in camelCase, such as onClick or onMouseOver.

### example

`function makeDoggy(e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  e.target.setAttribute('src', 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
}
const kitty = (
  <img 
    onClick={makeDoggy}
    src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg" 
    alt="kitty" />
);
ReactDOM.render(kitty, 
                document.getElementById('app')
               );`


## JSX Conditionals: If Statements That Don't Work
Here's a rule that you need to know: you can not inject an if statement into a JSX expression.

This code will break:

`(
  <h1>
    {
      if (purchase.complete) {
        'Thank you for placing an order!'
      }
    }
  </h1>
)`

The reason why has to do with the way that JSX is compiled. You don't need to understand the mechanics of it for now, but if you're interested then you can learn more at [https://reactjs.org/docs/jsx-in-depth.html](https://reactjs.org/docs/jsx-in-depth.html).

What if you want a JSX expression to render, but only under certain circumstances? You can't inject an if statement. What can you do?

