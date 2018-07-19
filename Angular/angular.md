# Angular

AngularJS is a JavaScript web framework aimed to make web apps simple to build and easy to maintain.


## Here are steps on how to build an AngularJS app

1. In app.js, create a new module named `myApp`. A module contains the different components of an AngularJS app.

`//app.js
ar app = angular.module("myApp", []);`

2. Then, in index.html add `<body ng-app="myApp">`. 
``//index.html
<!doctype html>
<html>
  <head>
      <link href="https://s3.amazonaws.com/codecademy-content/projects/bootstrap.min.css" rel="stylesheet" />
    <link href='https://fonts.googleapis.com/css?family=Roboto:500,300,700,400' rel='stylesheet' type='text/css'>
    <link href="css/main.css" rel="stylesheet" />
    <!-- Include the AngularJS library -->
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.5/angular.min.js"></script>
  </head>
  <body  ng-app="myApp">
    <div class="header">
      <div class="container">
        <h1>{{ title }}</h1>
      </div>
    </div>
    <div class="main" ng-controller="MainController">
      <div class="container">
        <h1>  </h1>
      </div>
    </div>
    <div class="footer">
      <div class="container">
        <h2>Available for iPhone and Android.</h2>
        <img src="https://s3.amazonaws.com/codecademy-content/projects/shutterbugg/app-store.png" width="120px" />
        <img src="https://s3.amazonaws.com/codecademy-content/projects/shutterbugg/google-play.png" width="110px" />
      </div>
    </div>
    <!-- Modules -->
    <script src="js/app.js"></script>
    <!-- Controllers -->
    <script src="js/controllers/MainController.js"></script>
  </body>
</html>
``

The `ng-app` is called a directive. It tells AngularJS that the myApp module will live within the <body> element, termed the application's scope. In other words, we used the ng-app directive to define the application scope.

3. In `MainController.js` create a new controller named MainController. A controller manages the app's data. Here we use the property title to store a string, and attach it to $scope.

``MainController.js
app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Hello World'; 
}]);
``

4. Then, in `index.html`, we added <div class="main" ng-controller="MainController">. Like ng-app, ng-controller is a directive that defines the controller scope. This means that properties attached to $scope in MainController become available to use within <div class="main">.

5. Inside <div class="main"> we accessed $scope.title using {{ title }}. This is called an expression. Expressions are used to display values on the page. The value of title showed up when we viewed the app in the browser. 


## Module
A module contains the different components of an AngularJS app.

## Directive
A directive is used to define the application scope

## Controller
A controller manages the app's data. Here we use the property title to store a string, and attach it to $scope

## Expression
Expressions are used to display values on the page.


## Workflow
So far this is thr typical workflow when making an AngularJS app:

1. Create a module, and use ng-app in the view to define the application scope.

2. Create a controller, and use ng-controller in the view to define the controller scope.

3. Add data to $scope in the controller so they can be displayed with expressions in the view.


### In the App Angualar example
In the controller, we used an object to group together related data about a product. Then in the view = index.html we used dot notation to display the values.

## Filters 
Formats the value of an expression

1. AngularJS filter can be used to format number into currency.
`{{ product.price | currency  }}`

Great! but, how does it work?

1. AngularJS gets the value of product.price.

2. It sends this number into the currency filter. The pipe symbol (|) takes the output on the left and "pipes" it to the right.

3. The filter outputs a formatted currency with the dollar sign and the correct decimal places.

In this way, filters help to separate the content in the controller from its presentation in the view.


# AngularJS comes with a few built-in filters. find out more [here](https://docs.angularjs.org/api/ng/filter).

1. date  `<p class="date">{{ product.pubdate | date }}</p>`

2. uppercase `<p class="title">{{ product.name | uppercase }}</p>`