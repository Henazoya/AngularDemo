(function(){
  
  "use strict";
  
  var moviesApp = angular.module("moviesApp");
  moviesApp.component("movieRating", {
    templateUrl: "movie-rating-component.html",
    bindings: {
      value : "<"
    },
    transclude: true,
    controllerAs: "vm",
    controller: function(){
      var vm = this;
      
      vm.$onInit = function(){
        vm.entries = new Array(vm.value);
      };
      
      vm.$onChanges = function(){
        vm.entries = new Array(vm.value);
      };
    }
    
    
  });
}());