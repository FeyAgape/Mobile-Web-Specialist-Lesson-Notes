app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'This Month\'s Bestsellers'; 
  $scope.promo = 'The most popular books this month.';
  $scope.product = { 
  name: 'The Book of Trees', 
  price: 19,
  pubdate: new Date('2014', '03', '08')  
};
}]);
