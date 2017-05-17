var app=angular.module("myApp",[])

app.controller("myController",["$scope", function($scope){

	$scope.message="Hello world";
	/*$scope.firstname="raju";*/
	$scope.employeeList=[

		{name:'sunder',age:33,city:'mysore',mobile:'99123456'},
		{name:'raju',age:24,city:'hyd',mobile:'991234576'},
		{name:'usha',age:35,city:'ramnagar',mobile:'991234506'},
		{name:'allu',age:40,city:'singh',mobile:'991234056'}

	]

}]);