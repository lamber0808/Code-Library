(function(angular){
    'use strict';
    // 首页模块
    var app = angular.module('moive',['ngRoute']);

    // 配置路由规则
    app.config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/moive',{
            // 路径是从主模块所在目录算起的
            templateUrl:'./moive/moive.html',
            controller:'moiveController'
        })

    }]);
    app.controller('moiveController',['$scope','$http', function ($scope,$http) {
           $http.get('./conming_soon/moive.json').then(function (res) {
             $scope.data = res.data.subjects;
           })
    }])


})(angular)
