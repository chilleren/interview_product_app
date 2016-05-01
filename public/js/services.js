var services = angular.module("services", ["ngResource"]);
var apiUrl = "http://awsstaging.flashtalkingfeeds.com/temp/bas/test-api/get.php";

services.factory("Product", ["$resource", function ($resource) {
  return $resource(apiUrl, {}, {
    query: { method: "GET", params: {} } 
  });
}]);