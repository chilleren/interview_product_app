//mapping of directives to html templates

var directives = angular.module("directives", []);

directives.directive("productList", function() {
  return {
    templateUrl: "partials/product-list.html"
  }
});

directives.directive("productDetails", function() {
  return {
    templateUrl: "partials/product-details.html"
  }
});

directives.directive("categories", function() {
  return {
    templateUrl: "partials/category-list.html"
  }
});