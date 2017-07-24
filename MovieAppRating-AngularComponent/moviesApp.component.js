(function(){
  "use strict";
  
  var moviesApp=angular.module("moviesApp");
  
  function controller($http)
    {
      var vm = this;
      vm.movies = [];
      vm.$onInit = function()
      {
        $http.get('movies.json').then(function(response)
        {
          vm.movies = response.data;
        });
      };
      
      
      vm.upRating = function(movie)
      {
        if(movie.rating < 5){
          movie.rating += 1;
        }
      };
      
      vm.downRating = function(movie){
        if(movie.rating > 1){
          movie.rating -= 1;
        }
      };
    }
    
  moviesApp.component("moviesList", {
    templateUrl: "moviesList.html",
    controllerAs: "vm",
    controller: ["$http", controller]
  });
}());

