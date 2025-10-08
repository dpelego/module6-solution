(function () {
'use strict';

var MAX_ITEMS = 3;

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){
  $scope.message = "";
  $scope.borderClass = "";
  $scope.messageClass = "";

  $scope.checkLunch = function() {
    var lunchItemString = $scope.lunchItems;
    // The instructions said " AngularJS ng-model already performs the trimming for you"
    // When I had an empty input, the result ended up being undefined and not an empty string so hence the double if clauses
    if (!lunchItemString || lunchItemString.trim() === ""){
      $scope.messageClass = "error";
      $scope.borderClass = "error-border";
      $scope.message = "Please enter data first";
      return;
    }

    var lunchItems = lunchItemString.split(",");
    // Remove any empty or whitespace only strings. Not using arrow functions to maintain ES5 compatibility 
    var filteredItems = lunchItems.filter(function(item) { return item.trim() !== ''; });

    // Both too much and enjoy have a green border and text
    $scope.borderClass = "success-border";
    $scope.messageClass = "success";
    // The only thing that differs is the actual message
    $scope.message = filteredItems.length > MAX_ITEMS ? "Too much!" : "Enjoy!";
  }

}

})();
