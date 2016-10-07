/**
 * Created by Grim on 2016/9/26.
 */
(function (angular) {
  var app=angular.module('home.route',[
    'home.controllers'
  ]);
  app.config(function ($stateProvider) {
    $stateProvider
      .state('tabs.home',{
        url:'/home',
        views:{
          //指定不同的ui-view视图，根据视图的名称
          'tabs-home':{
            templateUrl:'module/home/view.html',
            controller:'home.ctrl'
          }
        }

      })
  })
})(angular);
