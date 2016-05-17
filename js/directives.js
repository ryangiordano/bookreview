angular.module('Lozone')
    .directive('bookGenres', function() {
        return {
            restrict: 'E',
            templateUrl: '/partials/book-genres.html',
            replace: true,
            scope:{
              genres:'='
            }
        }
    })
    .directive('bookCover', function() {
        return {
            restrict: 'E',
            templateUrl: '/partials/book-cover.html',
            replace: true
        }
    })
    .directive('reviewForm', function() {
        return {
            restrict: 'E',
            templateUrl: '/partials/review-form.html',
            replace: true,
            controller: function(){
              
              this.book = {genres:{}};
              this.addBook = function(form){
                books.push(this.book);
                this.book ={genres:{}};
                form.$setPristine();
              }
            },
            controllerAs: 'reviewFormCtrl',
            scope: {
              books:"=",
              genres:"="
            }

        }
    });
