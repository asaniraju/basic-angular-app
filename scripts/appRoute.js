var app=angular.module("myApp",['ngRoute']) ;

// app.config(["$locationProvider", function($locationProvider){

// 	$locationProvider.hashPrefix('')
// }])

app.config(["$routeProvider","$locationProvider",function($routeProvider, $locationProvider){

$locationProvider.hashPrefix('')
	$routeProvider
		.when("/home",{
			templateUrl:"pages/home.html",
			controller: "myHomeContoller"
		})
		.when("/register",{
			templateUrl:"pages/register.html",
			controller:"myRegistrationController"
		})
		.when("/login",{
			templateUrl:"pages/login.html",
			controller:"myLoginController"
		})
}])

app.controller("myHomeController",["$scope", function($scope){
	$scope.message ="this is my home controller";
	}])

app.controller("myRegistrationController",["$scope",function($scope){
	$scope.message="this is my register controller ";
}])
app.controller("myLoginController",["$scope",function($scope){
	$scope.message="this is my Login controller ";
}])