# Asynchronous

## Jquery

Query is an incredibly popular JavaScript library that provides a lot of functionality right out of the box. It was created a number of years ago back when browsers hadn't joined together to standardize on functionality. jQuery made life easier for developers that were building websites that had to function in all of the major browsers by providing a unified interface. The developer would use jQuery-specific functions and then jQuery would figure out what code to run depending on the browser that was being used.

jQuery is just JavaScript, so you'd download a [current version](https://code.jquery.com/) and link to it with a regular `<script>` tag. Once it's been included it on the page, you've got this powerhouse of functionality right at your fingertips.

Now that browsers have pretty much aligned, jQuery's usage is not as necessary as it was several years ago. However, one powerful tool that it provides is it's ajax() method. As its name suggests, jQuery's ajax() method is used to handle all asynchronous requests.

## Jquery's Ajax Method

The `.ajax()` method is at the heart of all asynchronous requests for the entire jQuery library. There are a couple of ways you can call the .ajax() method:

`$.ajax(<url-to-fetch>, <a-configuration-object>);`

// or 

`$.ajax(<just a configuration object>);`

The most common way to use the `.ajax()` method is with just the configuration object, since everything can be set inside the configuration object.


### What's a "configuration object"?

A configuration object is just a plain ol' JavaScript object that's used to configure something. For example:

`var settings = {
   frosting: 'buttercream',
   colors: ['orange', 'blue'],
   layers: 2,
   isRound: true
};`
...the settings configuration object can be used in the imaginary MakeCake constructor function:

`const myDeliciousCake = MakeCake( settings );`
Alternatively, the settings object could be passed in directly:

`const myDeliciousCake = MakeCake({
   frosting: 'buttercream',
   colors: ['orange', 'blue'],
   layers: 2,
   isRound: true
});`


## Making an Ajax call
jQuery's .ajax() method has to be incredibly versatile and powerful if it's what powers all of jQuery's asynchronous requests. A simple Ajax request would look like this:

`$.ajax({
    url: 'https://swapi.co/api/people/1/'
});`