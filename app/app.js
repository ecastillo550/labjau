var app = angular.module('myApp', ['ui.materialize', 'ngRoute'])
.controller('AppCtrl', function($scope) {
	var imagePath = 'img/list/60.jpeg';
	$scope.messages = [{
		face : imagePath,
		what: 'Brunch this weekend?',
		who: 'Min Li Chan',
		when: '3:08PM',
		notes: " I'll be in your neighborhood doing errands"
	}, {
		face : imagePath,
		what: 'Brunch this weekend?',
		who: 'Min Li Chan',
		when: '3:08PM',
		notes: " I'll be in your neighborhood doing errands"
	}, {
		face : imagePath,
		what: 'Brunch this weekend?',
		who: 'Min Li Chan',
		when: '3:08PM',
		notes: " I'll be in your neighborhood doing errands"
	}, {
		face : imagePath,
		what: 'Brunch this weekend?',
		who: 'Min Li Chan',
		when: '3:08PM',
		notes: " I'll be in your neighborhood doing errands"
	}, {
		face : imagePath,
		what: 'Brunch this weekend?',
		who: 'Min Li Chan',
		when: '3:08PM',
		notes: " I'll be in your neighborhood doing errands"
	}];
})

.controller('ListCtrl', function($scope) {
	$scope.toppings = [
	{ name: 'Pepperoni', wanted: true },
	{ name: 'Sausage', wanted: false },
	{ name: 'Black Olives', wanted: true },
	{ name: 'Green Peppers', wanted: false }
	];
	$scope.settings = [
	{ name: 'Wi-Fi', extraScreen: 'Wi-fi menu', icon: 'device:network-wifi', enabled: true },
	{ name: 'Bluetooth', extraScreen: 'Bluetooth menu', icon: 'device:bluetooth', enabled: false },
	];
	$scope.messages = [
	{id: 1, title: "Message A", selected: false},
	{id: 2, title: "Message B", selected: true},
	{id: 3, title: "Message C", selected: true},
	];
	$scope.people = [
	{ name: 'Janet Perkins', img: 'img/100-0.jpeg', newMessage: true },
	{ name: 'Mary Johnson', img: 'img/100-1.jpeg', newMessage: false },
	{ name: 'Peter Carlsson', img: 'img/100-2.jpeg', newMessage: false }
	];
});