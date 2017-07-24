(function(){
  "use strict";
  
  var moviesApp=angular.module("moviesApp", ["ngRoute"]);
  
  moviesApp.config(function($routeProvider){
    $routeProvider
    .when("/home", {template: "<movies-list></movies-list>"})
    .when("/about", {template: "<app-about></app-about>"})
    .otherwise({redirectTo : "/home"});
  });
  
  moviesApp.component("appAbout", {
    template: "This is About Page"
  });
  
}());

