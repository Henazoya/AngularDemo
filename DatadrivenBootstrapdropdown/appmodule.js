(function(){
  
"use strict";

var app = angular.module('appModule', []);
app.component('projectApp', {

  templateUrl: "projectAppComponent.html",
  controllerAs: "vm",
  controller: function($http) {
    var vm = this;

    vm.$onInit = function() {
      vm.ProjectCount = 2;
      $http.get('project.json').then(function(response) {

        vm.projects = response.data;
      });
    };
  }

});

app.filter('highlightWord', function($sce) {
  return function(text, phrase) {
    if (phrase && text) {
      text = text.replace(new RegExp('(' + phrase + ')', 'gi'), '<strong class="highlighted">$1</strong>');
    }
    return $sce.trustAsHtml(text);
  };


});

}());

