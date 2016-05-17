angular.module('Lozone', ['ngResource','firebase','ngRoute']).
config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/books/:id',{
    templateUrl:'partials/book/show.html',
    controller: 'BookShowController',
    controllerAs:'bookShowCtrl'
  })
  .when('/',{
    templateUrl:'partials/home'
  })
  .otherwise({
    redirectTo: '/partials/home'
  })
}]);


var genres = ["Science fiction", "Satire", "Drama", "Action and Adventure", "Romance", "Mystery", "Horror", "Self help", "Health", "Guide", "Travel", "Childrens", "Religion", "Spirituality & New Age", "Science", "History", "Math", "Anthology", "Poetry", "Encyclopedias", "Dictionaries", "Comics", "Art", "Cookbooks", "Diaries", "Journals", "Prayer books", "Series", "Trilogy", "Biographies","Autobiographies", "Fantasy"];
