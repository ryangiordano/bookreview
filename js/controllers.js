angular.module('Lozone')
.controller('BookshelfController', function($scope,$http,Booklist) {
      this.showForm = false;
      this.genres = genres;
    //With ng resource
      // $scope.bookData = Booklist.query()
    //Firebase Three Way binding
       $scope.bookData = Booklist();

})
.controller('BookShowController', function($scope,BookShow){
  $scope.bookShow = BookShow();
});

//controller for the book list

//add a book to the list


//add a review
