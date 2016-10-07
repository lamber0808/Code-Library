/**
 * Created by Grim on 2016/9/26.
 */
(function (angular) {
  var app=angular.module('tabs.route',[]);
  app.config(function ($stateProvider) {
    $stateProvider
      .state('tabs',{
        abstract:true,//抽象路由
        url:'/tabs',
        templateUrl:'module/tabs/view.html'
      })
  })
})(angular);
