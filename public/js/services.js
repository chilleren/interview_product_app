var services = angular.module("services", ["ngResource"]);

services.factory("Product", ["$resource", function ($resource) {
  var apiUrl = "http://awsstaging.flashtalkingfeeds.com/temp/bas/test-api/get.php";
  
  return $resource(apiUrl, {}, {
    query: { method: "GET", params: {} } 
  });
}]);