 

function MainCtrl ($scope) {
  
    $scope.people = [{
		name: 'Tresa Horney',
		city: 'Portland',
		state: 'Oregon'
	},
	{
		name: 'Ted Deli',
		city: 'Portland',
		state: 'Oregon'
	},
	{
		name: 'Mom and Dad',
		city: 'Howell',
		state: 'Michigan'
    }];


	$scope.addPerson = function() {

		$scope.people.push({
			name: $scope.person_name,
			city: $scope.person_city,
			state: $scope.person_state		
		});

		$scope.person_name= '';
		$scope.person_city= '';
		$scope.person_state='';
	}
}