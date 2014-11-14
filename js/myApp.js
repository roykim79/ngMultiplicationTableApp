angular.module('myApp', [])
	.controller('MultiplicationCtrl', function($scope, $attrs) {
		// write a function that will populate the numbers
		function populateNumbers(x) {
			// create a var to store numbers in an array
			var numbers = [];

			// run a "for" loop from 0 - x that creates the numbers
			for (var i = 0; i < x; i++) {
				numbers[i] = i + 1;
			};

			// return the numbers
			return numbers;
		}

		$scope.compute = function(a, b) {
			return a * b;
		};
		
		$scope.$watch('numberLimit', function(limit){
			$scope.numbers = populateNumbers(limit);
		});

		// SET numberLimit to the initialNumberLimit OR 10
		$scope.numberLimit = $attrs.initialNumbersLimit || 10;
	});