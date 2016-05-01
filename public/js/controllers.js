angular.module("controllers.categories", [])
.controller("CategoryCtrl", ["$scope", "Product", function ($scope, Product) {
  $scope.categories = [];

  Product.query({}, function (categories) {
    $scope.categories = categories.Data;
  });
}]);

angular.module("controllers.productDetails", [])
.controller("ProductDetailsCtrl", ["$scope", "$routeParams", "Product", function ($scope, $routeParams, Product) {
  $scope.product = {};

  Product.query({category: $routeParams.categoryId, product: $routeParams.productId}, function (product) {
    $scope.product = product.Data;
  });
}]);

angular.module("controllers.productList", [])
.controller("ProductListCtrl", ["$scope", "$routeParams", "Product", function ($scope, $routeParams, Product) {
  $scope.products = [];
  $scope.categoryId = $routeParams.categoryId;

  Product.query({category: $routeParams.categoryId}, function (products) {
    $scope.products = products.Data;
    console.log(products)
  });
}]);