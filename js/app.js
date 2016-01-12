var app = angular.module("portFolio", [ ]);

app.factory("projectData", function(){
	var object = {
		pageHeader:{
			heading:"Page Header Goes Here!",
			subHeading:"This is the subheading for the page header"
		},
		bio:{
			msgHead:"Example!!!!",
			msgBody:"<Enter your example message body here!>",
			name:"Your Name",
		},
		contact:{
			gplus:"google plus",
			twitter:"twitter",
			facebook:"facebook",
			website:"yourwebsite"
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