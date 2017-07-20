var app=angular.module('appModule',[]);
app.component('projectApp',{
  
  templateUrl:"projectAppComponent.html",
  controllerAs:"vm",
  controller:function($http)
  {
    var vm=this;
   
     vm.$onInit = function() {
         
        $http.get('project.json').then(function(response){
          
          vm.projects=response.data;
        });
    };
     vm.moveDown = function (event) {
    event.preventDefault();
    console.log("move down")
  }
    
    
  }
  
});

app.filter('highlightWord', function($sce) {
        return function (text, phrase) {
                if (phrase && text) {
                    text = text.replace(new RegExp('(' + phrase + ')', 'gi'), '<strong class="highlighted">$1</strong>');
                }
                return $sce.trustAsHtml(text);
            };
});