angular.module('myApp', [])
	// START DisplayCtrl
	.controller('DisplayCtrl', function($scope) {
		$scope.$on('displayData', function(event, data) {
			$scope.content = data;
			event.stopPropagation();
		}); 
	})
	// END of DisplayCtrl
	// START MultiplicationCtrl
	.controller('MultiplicationCtrl', function($scope, $attrs, $rootScope) {
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
		// the $watch medod watches for changes of properties on the scope
		$scope.$watch('numberLimit', function(limit){
			$scope.numbers = populateNumbers(limit);
		});
		// SET numberLimit to the initialNumberLimit OR 10
		$scope.numberLimit = $attrs.initialNumbersLimit || 10;
		// declare variables to store values
		var activeFactorA, activeFactorB;

		$scope.clearActiveFactors = function() {
			activeFactorA = activeFactorB = null;
		};
		$scope.setActiveFactors = function(a, b) {
			activeFactorA = a;
			activeFactorB = b;
		};
		$scope.matchesFactor = function(a, b) {
			return a === activeFactorA || b === activeFactorB;
		};
		// this is where you send the data to the other controller
		$scope.setActiveNumber = function(number) {
			console.log(number);
			$rootScope.$broadcast('displayData', number);
		};
	}); 
	// END of MultiplicationCtrl
 



