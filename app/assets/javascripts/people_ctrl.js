(function() {
  "use strict"

  angular.module("app").controller("peopleCtrl", function($scope) {

    $scope.people = [{

      name:"Marlyne Mahoro",
      bio: "quiet in class and ... outside",
      bioVisible: false
    },

    {

      name: "Jean Luc Abayo",
      bio: "the best procrastinator",
      bioVisible: false

    }, 

    {

      name: "Dieudone Mukunzi",
      bio: "19_seconds designer",
      bioVisible: false
    }];

    $scope.shuffleBio = function (index) {
      if ($scope.people[index].bioVisible == false){
        $scope.people[index].bioVisible = true
      } else {
        $scope.people[index].bioVisible = false
      };
    };

    $scope.removePerson = function(index) {
      
      $scope.people.splice(index, 1);
    }



    $scope.addPerson = function(name, bio) {
      if (name && bio) {
      var person = {
        name: name,
        bio: bio,
        bioVisible: false
      };
      $scope.people.push(person);


      $scope.newPersonName = null;
      $scope.newPersonBio = null;
        
      }

    $scope.countPeople = $scope.people.length;

    };

    $scope.countPeople = $scope.people.length;




    window.$scope = $scope;
  });

})();
