describe('AppMarketApp', function(){

  beforeEach(module('AppMarketApp'));

  it('Did you create $scope.apps and set it equal to an array?', inject(function($controller) {
    var scope = {},
          ctrl = $controller('MainController', {$scope:scope});

    expect(scope.apps).toBeDefined();
    expect(scope.apps.length).toBeGreaterThan(1);
  }));

});