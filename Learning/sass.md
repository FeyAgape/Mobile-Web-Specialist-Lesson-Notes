# SASS

Sass, or Syntactically Awesome StyleSheets, is an extension language for CSS. With Sass, you can write clean, sustainable CSS code and solve the common repetition and maintenance challenges present in traditional CSS.

## Compiling Sass

Sass can't be directly interpreted by your browser, so it must first be converted, or compiled, to CSS before the browser can directly understand it.

Compiling refers to converting code to lower level code so that it can be executed. By compiling SCSS to CSS, it can be interpreted by your browser and the results will appear on a webpage.

## Nesting Selectors

The first Sass construct we will learn about is nesting.

**Nesting is the process of placing selectors inside the scope of another selector**

In Sass, it's helpful to think of the scope of a selector as any of the code between its opening { and closing } curly brackets.

Selectors that are nested inside the scope of another selector are referred to as children. The former selector is referred to as the parent. This is just like the relationship observed in HTML elements.

`.parent {
  color: blue;
  .child {
    font-size: 12px;
  }
}`

In the example above .child is the child selector and .parent is the parent selector.

The above SCSS would compile to the following, equivalent CSS:

`.parent {
  color: blue;
}`

`.parent .child {
    font-size: 12px;
}`

Nesting allows you to see the clear DOM relationship between two selectors while also removing the repetition observed in CSS.

In SCSS, nesting is not limited only to selectors. You can also nest common CSS properties if you append a `:` colon suffix after the name of the property.

For example, the following SCSS code:

`.parent {
  font : {
    family: Roboto, sans-serif;
    size: 12px;
    decoration: none;
  }
}`

will compile to the following CSS:

`.parent {
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-decoration: none;
}`

## Variables In Sass

Variables in SCSS allow you to assign an identifier of your choice to a specific value.

Why is that useful? Unlike in CSS, if you need to tweak a value, you'll only have to update it in one place and the change will be reflected in multiple rules.

In Sass, `$`is used to define and reference a variable:

`$translucent-white: rgba(255,255,255,0.3);`

**Note:** It's important to stick to one naming convention for variables when you first build out your codebase. This will help you reference them easily in the future.

use cases. eg.

`.slogan {
  position: absolute;
  border: $standard-border;
  background-color: $translucent-white;
}`

## Sass(y) Types

There are different data types you can assign to a variable in CSS. In addition to the color data type we have seen, there are also:

**Numbers**, such as 8.11, 12, and 10px. Notice that while 10 has a unit of px associated with it, it is still considered a number.

**Strings** of text, with and without quotes. Some examples are "potato", 'tomato', span.

**Booleans**, or simply true and false.

**null**, which is considered an empty value.

use cases. eg.

`$icon-square-length: 300px;`

`icon{
width: $icon-square-length;
height: $icon-square-length;
}`

## Maps & Lists

In addition to color, numbers, strings, booleans, and null, Sass also has two other data types, lists and maps.

**Lists can be separated by either spaces or commas.** 

For example, the following list denotes font properties, such as:
`1.5em Helvetica bold;`
or
`Helvetica, Arial, sans-serif;`

**Note:** You can also surround a list with parentheses and create lists made up of lists.

**Maps are very similar to lists, but instead each object is a key-value pair.**

The typical map looks like:
(key1: value1, key2: value2);

**Note:** In a map, the value of a key can be a list or another map.

## MIXINS AND THE & SELECTOR

**The `&` Selector in Nesting**

In Sass, the `&` character is used to specify exactly where a parent selector should be inserted. It also helps write psuedo classes in a much less repetitive way.

For example, the following Sass:

`.notecard{ 
  &:hover{
      @include transform (rotatey(-180deg));  
    }
  }`

will compile to the following CSS:

`.notecard:hover {
  transform: rotatey(-180deg);
}`

### What is a Mixin?

In addition to variables and nesting, Sass has multiple constructs that reduce repetition.

In Sass, a mixin lets you make groups of CSS declarations that you want to reuse throughout your site.

The notation for creating a mixin is as follows:

`@mixin backface-visibility {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  -o-backface-visibility: hidden;
}`

**Note:** Mixin names and all other Sass identifiers use hyphens and underscores interchangeably. The following code:

`.notecard {
.front, .back {
    width: 100%;
    height: 100%;
    position: absolute;
    @include backface-visibility;
  }
}`

is equivalent to the following CSS:

`.notecard .front, .notecard .back {
  width: 100%;
  height: 100%;
  position: absolute;
   backface-visibility: hidden;
  -webkit-backface-visibility: hidden; 
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  -o-backface-visibility: hidden;
}`


### Mixins: Arguments

Mixins also have the ability to take in a value.

An argument, or parameter, is a value passed to the mixin that will be used inside the mixin, such as `$visibility` in this example:

`@mixin backface-visibility($visibility) {
  backface-visibility: $visibility;
  -webkit-backface-visibility: $visibility;
  -moz-backface-visibility: $visibility;
  -ms-backface-visibility: $visibility;
  -o-backface-visibility: $visibility;
}`

In fact, you should only ever use a mixin if it takes an argument. We will learn more about this in a later exercise.

The syntax to pass in a value is as follows:

`@include backface-visibility(hidden);`

In the code above, hidden is passed in to the backface-visibility mixin, where it will be assigned as the value of its argument, $visibility.

### Default Value Arguments

Mixin arguments can be assigned a default value in the mixin definition by using a special notation.

A default value is assigned to the argument if no value is passed in when the mixin is included. Defining a default value for each argument is optional.

The notation is as follows:

`@mixin backface-visibility($visibility: hidden) {
   backface-visibility: $visibility;
  -webkit-backface-visibility: $visibility;
  -moz-backface-visibility: $visibility;
  -ms-backface-visibility: $visibility;
  -o-backface-visibility: $visibility;
}`

In the example above, if no value is passed in when backface-visibility is included, hidden would be assigned to all properties.

### Mixin Facts

In general, here are 5 important facts about arguments and mixins:

1. Mixins can take multiple arguments.
2. Sass allows you to explicitly define each argument in your @include statement.
3. When values are explicitly specified you can send them out of order.
4. If a mixin definition has a combination of arguments with and without a default value, you should define the ones with no default value first.
5. Mixins can be nested.


Here are some concrete examples of the rules:

`@mixin dashed-border($width, $color: #FFF) {
  border: {
     color: $color;
     width: $width;
     style: dashed;
  }
}`

`span { //only passes non-default argument
    @include dashed-border(3px);
}`

`p { //passes both arguments
    @include dashed-border(3px, green);
}`

`div { //passes out of order but explicitly defined
   @include dashed-border(color: purple, width: 5px); 
}`


In the example above, the color of the border of span elements would be white, the border of paragraph elements would be green, while the div elements would have a thicker purple border.

### List Arguments

Sass allows you to pass in multiple arguments in a list or a map format.

For example, take the multiple properties needed to create the college-ruled stripes in the back of our notecard.

`@mixin stripes($direction, $width-percent, $stripe-color, $stripe-background: #FFF) {
  background: repeating-linear-gradient(
    $direction,
    $stripe-background,
    $stripe-background ($width-percent - 1),
    $stripe-color 1%,
    $stripe-background $width-percent
  );
}`

In this scenario, it makes sense to create a map with these properties in case we ever want to update or reference them.

`$college-ruled-style: ( 
    direction: to bottom,
    width-percent: 15%,
    stripe-color: blue,
    stripe-background: white
);`

When we include our mixin, we can then pass in these arguments in a map with the following ... notation:

`.definition {
      width: 100%;
      height: 100%;
      @include stripes($college-ruled-style...);
 }`

**Note:** Remember to always prioritize readability over writing less code. This approach is only useful if you find it adds clarity to your codebase.

## String Interpolation

In Sass, string interpolation is the process of placing a variable string in the middle of two other strings.

In a mixin context, interpolation is handy when you want to make use of variables in selectors or file names. The notation is as follows:

`@mixin photo-content($file) {
  content: url(#{$file}.jpg); //string interpolation
  object-fit: cover;
}`

`//....`

`.photo { 
  @include photo-content('titanosaur');
  width: 60%;
  margin: 0px auto; 
  }`

String interpolation would enable the following CSS:

`.photo { 
  content: url(titanosaur.jpg);
  width: 60%;
  margin: 0px auto; 
}`

## The & Selector in Mixins

Sass allows `&` selector usage inside of mixins. The flow works much like you think it would: 

1. The & selector gets assigned the value of the parent at the point where the mixin is included.

2. If there is no parent selector, then the value is null and Sass will throw an error.

`@mixin text-hover($color){
  &:hover {
      color: $color; 
  }
}`

In the above, the value of the parent selector will be assigned based on the parent at the point where it is invoked.

`.word { //SCSS: 
    display: block; 
    text-align: center;
    position: relative;
    top: 40%;
    @include text-hover(red);
  }`

The above will compile to the following CSS:

`.word{ 
    display: block;
    text-align: center;
    position: relative;
    top: 40%;
  }
  .word:hover{
    color: red;
  }`

Notice that the mixin inherited the parent selector `.word` because that was the parent at the point where the mixin was included.

## Functions in SCSS

Functions and operations in Sass allow for computing and iterating on styles.

With Sass functions you can:

1. Operate on color values
2. Iterate on lists and maps
3. Apply styles based on conditions
4. Assign values that result from math operations

### Arithmetic and Color

The alpha parameter in a color like RGBA or HSLA is a mask denoting opacity. It specifies how one color should be merged with another when the two are on top of each other.

In Sass, the function fade-out makes a color more transparent by taking a number between 0 and 1 and decreasing opacity, or the alpha channel, by that amount:
   
`$color: rgba(39, 39, 39, 0.5);
$amount: 0.1;
$color2: fade-out($color, $amount);//rgba(39, 39, 39, 0.4)`

The fade-in color function changes a color by increasing its opacity:

`$color: rgba(55,7,56, 0.5);
$amount: 0.1;
$color2: fade-in($color, $amount); //rgba(55,7,56, 0.6)`

The function adjust-hue($color, $degrees) changes the hue of a color by taking color and a number of degrees (usually between -360 degrees and 360 degrees), and rotate the color wheel by that amount.

### Color Functions

Sass also allows us to perform mathematical functions to compute measurements — including colors.

Here is how Sass computes colors:

1. The operation is performed on the red, green, and blue components.
2. It computes the answer by operating on every two digits.

`$color: #010203 + #040506;`

The above would compute piece-wise as follows:

`01 + 04 = 05
02 + 05 = 07
03 + 06 = 09`
and compile to:

`color: #050709;`

Sass arithmetic can also compute HSLA and string colors such as red and blue.

### Arithmetic

The Sass arithmetic operations are:

1. addition +
2. subtraction -
3. multiplication *
4. division /, and
5. modulo %.

**Note:** Modulo, or %, is the remainder in a given division, so "9%2" would be "1".

SCSS arithmetic requires that the units are compatible; for example, you can't multiply pixels by ems. Also, just like in regular math, multiplying two units together results in squared units:10px * 10px = 100px * px.

Since there is no such thing as squared units in CSS, the above would throw an error. You would need to multiply 10px * 10 in order to obtain 100px.


### Division Can Be Special

In CSS the `/` character can be used as a separator. In Sass, the character is also used in division.

Here are the specific instances `/` counts as division:

1. If the value, or any part of it, is stored in a variable or returned by a function.
2. If the value is surrounded by parentheses, unless those parentheses are outside a list and the value is inside.
3. If the value is used as part of another arithmetic expression.

Here are a few examples:

`width: $variable/6; //division
line-height: (600px)/9; //division
margin-left: 20-10 px/ 2; //division
font-size: 10px/8px; //not division`

### Each Loops

Beyond the simple math and color transformations, Sass also allows for more complex functions.

Each loops in Sass iterate on each of the values on a list. The syntax is as follows:

`@each $item in $list {
  //some rules and or conditions
}`

The value of $item is dynamically assigned to the value of the object in the list according to its position and the iteration of the loop.

example:

`//SCSS
$list: (orange, purple, teal);
//Add your each-loop here
@each $item in $list {
  .#{$item} {
    background: $item;
  }
}`

compiles to 

`//CSS
.orange {
  background: orange;
}
.purple {
  background: purple;
}
.teal {
  background: teal;
}`

### For Loops

For loops in Sass can be used to style numerous elements or assigning properties all at once. They work like any for-loop you've seen before.

Sass's for loop syntax is as follows:

`@for $i from $begin through $end {
   //some rules and or conditions
}`

In the example above:

1. $i is just a variable for the index, or position of the element in the list
2. $begin and $end are placeholders for the start and end points of the loop.
3. The keywords through and to are interchangeable in Sass

**For-loops** are useful for many things.

example

`//SCSS
$total: 10; //Number of .ray divs in our html
$step: 360deg / $total; //Used to compute the hue based on color-wheel
.ray {
  height: 30px;
}
//Add your for-loop here:
@for $i from 1 through $total {
	.ray:nth-child(#{$i}){
		background: adjust-hue(blue, $i * $step);
    width: if($i % 2 == 0, 300px, 350px);
		margin-left: if($i % 2 == 0, 0px, 50px);
	}
}`

compiles to 

`//CSS
.ray {
  height: 30px;
}
.ray:nth-child(1) {
  background: #9900ff;
  width: 350px;
  margin-left: 50px;
}
.ray:nth-child(2) {
  background: #ff00cc;
  width: 300px;
  margin-left: 0px;
}
.ray:nth-child(3) {
  background: #ff0033;
  width: 350px;
  margin-left: 50px;
}
.ray:nth-child(4) {
  background: #ff6600;
  width: 300px;
  margin-left: 0px;
}
.ray:nth-child(5) {
  background: yellow;
  width: 350px;
  margin-left: 50px;
}
.ray:nth-child(6) {
  background: #66ff00;
  width: 300px;
  margin-left: 0px;
}
.ray:nth-child(7) {
  background: #00ff33;
  width: 350px;
  margin-left: 50px;
}
.ray:nth-child(8) {
  background: #00ffcc;
  width: 300px;
  margin-left: 0px;
}
.ray:nth-child(9) {
  background: #0099ff;
  width: 350px;
  margin-left: 50px;
}
.ray:nth-child(10) {
  background: blue;
  width: 300px;
  margin-left: 0px;
}
`

### Conditionals

In Sass, `if()` is a function that can only branch one of two ways based on a condition. You can use it inline, to assign the value of a property:

`width: if( $condition, $value-if-true, $value-if-false);`

For cases with more than two outcomes, the @if, @else-if, and @else directives allow for more flexibility.

`@mixin deck($suit) {
 @if($suit == hearts || $suit == spades){
   color: blue;
 }
 @else-if($suit == clovers || $suit == diamonds){
   color: red;
 }
 @else{
   //some rule
 }
}`

The mixin above is a good example for how we would want to handle the coloring of a deck of cards based on a suit condition.


## Sass file structure

The best practices for organizing files, notice how the file structure makes it easy to think of the functionality of each component, facilitating the action of finding and updating files.

![image](https://github.com/FeyAgape/Assets/blob/master/sass_structure.jpg?raw=1)


### Sass: Overview
Sass has many perks that enable us to write succinct, readable code.

1. Nesting is the process of placing child selectors and properties in the scope of a parent selector. This allows a programmer to draw DOM relationships and avoid repetition.

2. Variables make it easy to update code and reference values by allowing you to assign an identifier to a value.

3. Sass Data Types include:

Numbers
Strings
Booleans
null
Lists
Maps
Nesting and variables are just two ways that Sass keeps stylesheets clean. In the next unit, you'll learn about other Sass constructs that serve the same purpose.
 
4. Mixins are a powerful tool that allow you to keep your code DRY. Their ability to take in arguments, assign default values to those arguments, and accept said arguments in whatever format is most readable and convenient for you makes the mixin Sass's most popular directive.

5. The & selector* is a Sass construct that allows for expressive flexibility by referencing the parent selector when working with CSS psuedo elements and classes.

6. String interpolation is the glue that allows you to insert a string in the middle of another when it is in a variable format. Its applications vary, but the ability to interpolate is especially useful for passing in file names.

7. Functions in Sass allow for an easier way to style pages, work with colors, and iterate on DOM elements.

8. Having both for loops and each loops gives the programmer different formats to iterate on both lists and maps.

9. The introduction of conditional statements allows you to create logic-based styling rules using SCSS.

There are other native Sass functions available to use, and you can even make your own custom functions if you have a good foundation in Ruby, check out more information [here](https://sass-lang.com/documentation/Sass/Script/Functions.html).




