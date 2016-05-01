var productServices = angular.module('productServices', ['ngResource']);


productServices.factory('Product', ['$resource', function ($resource) {
  return $resource('http://awsstaging.flashtalkingfeeds.com/temp/bas/test-api/get.php', {}, {
    //query string ?category=jackets &product=blue-jacket
    query: {method: 'GET', params: {}} 
  });
}]);
