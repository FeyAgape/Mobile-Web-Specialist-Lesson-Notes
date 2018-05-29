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