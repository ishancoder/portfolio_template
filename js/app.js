var app = angular.module("portFolio", [ ]);

app.factory("projectData", function(){
	var object = {
		bio:{
			msgHead:"Example!!!!",
			msgBody:"<Enter your example message body here!>",
			name:"Your Name",
			gplus:"",
			twitter:"",
			facebook:"",
			website:""
		},
		projects:[
			{
				imgSrc:"./resources/img.png",
				header:"AweSome Projects",
				description:"Some Example description replace this with your own project description."
			},
			{
				imgSrc:"./resources/img.png",
				header:"AweSome Projects",
				description:"Some Example description replace this with your own project description."
			},
			{
				imgSrc:"./resources/img.png",
				header:"AweSome Projects",
				description:"Some Example description replace this with your own project description."
			},
			{
				imgSrc:"./resources/img.png",
				header:"AweSome Projects",
				description:"Some Example description replace this with your own project description."
			},
			{
				imgSrc:"./resources/img.png",
				header:"AweSome Projects",
				description:"Some Example description replace this with your own project description."
			},
			{
				imgSrc:"./resources/img.png",
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