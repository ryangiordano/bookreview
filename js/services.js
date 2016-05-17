//
// angular.module('Lozone')
// .factory("Booklist",['$http',function($http){
//   return{
//     all:function(){
//       return $http({method:'GET', url:'/js/json/booklist.json'});
//     }
//   };
// }]);

// Firebase Way
angular.module('Lozone').factory('Booklist',function BooklistFactory($firebaseArray){
  return function(){
    //creating the snapshot of the data
    var ref = new Firebase('https://lozone.firebaseio.com/books');
    //return a synced array(three way binding firebase database->view->model)
    return $firebaseArray(ref);
  };
});

// Firebase Way
angular.module('Lozone').factory('BookShow',function BookShowFactory($firebaseObject, $routeParams){
  return function(){
    //creating the snapshot of the data
    var ref = new Firebase('https://lozone.firebaseio.com/books/'+$routeParams.id);
    //return a synched array(three way binding firebase database->view->model)
    return $firebaseObject(ref);

  };
});

// Firebase Way Normal RESTful Call
// angular.module('Lozone')
// .factory('Booklist',function BooklistFactory($resource){
//   return $resource('https://lozone.firebaseio.com/books/:id.json',{},{
//     update:{
//         method:"PUT"
//     }
//   });
// });
