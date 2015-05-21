var app = angular.module('myBasicApp', []);
app.controller('FormController', ['$scope',function($scope) {
    $scope.firstname="";
    $scope.email="";
    $scope.message = "";
   
    $scope.submitapp=function(){
        console.log($scope.firstname + " " + $scope.email)
        $scope.message = "Name : " + $scope.firstname + " Email : " + $scope.email;
    }
}]);