var productApp = angular.module("productApp", [
  "ngRoute",
  "controllers.productList",
  "controllers.productDetails",
  "controllers.categories",
  "directives",
  "services"
]);

productApp.config(["$routeProvider", function ($routeProvider) {
  $routeProvider
    .when("/categories/:categoryId", {
      templateUrl: "partials/product-list.html",
      controller: "ProductListCtrl"
    })
    .when("/categories/:categoryId/products/:productId", {
      templateUrl: "partials/product-details.html",
      controller: "ProductDetailsCtrl"
    })
    .otherwise({redirectTo: "/categories/jackets"})
}])