var app = angular.module("portFolio", [ ]);

app.factory("projectData", function(){
	var object = {
		projects:[
			{
				imgSrc:"something",
				header:"AweSome Projects",
				description:"Some Example description replace this with your own project description."
			},
			{
				imgSrc:"something",
				header:"AweSome Projects",
				description:"Some Example description replace this with your own project description."
			},
			{
				imgSrc:"something",
				header:"AweSome Projects",
				description:"Some Example description replace this with your own project description."
			},
			{
				imgSrc:"something",
				header:"AweSome Projects",
				description:"Some Example description replace this with your own project description."
			},
			{
				imgSrc:"something",
				header:"AweSome Projects",
				description:"Some Example description replace this with your own project description."
			}
		]
	};
	return object;
});

app.controller("MainCtrl",["$scope","projectData", function($scope, projectData) {
	$scope.data = projectData;
}]);