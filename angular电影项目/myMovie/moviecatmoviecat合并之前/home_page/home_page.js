(function(angular){
  'use strict';
  // 首页模块
  var app = angular.module('moviecat.home_page',['ngRoute']);

  // 配置路由规则
  app.config(['$routeProvider',function($routeProvider){
     $routeProvider.when('/home_page',{
      // 路径是从主模块所在目录算起的
       templateUrl:'./home_page/home_page.html',
         controller:'homeController'
     })

  }]);
    app.controller('homeController',['$scope', function ($scope) {
        console.log(1);
    }])
})(angular)