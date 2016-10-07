/**
 * Created by Grim on 2016/9/25.
 */
//主路由
(function (angular) {
  var app=angular.module('starter.route',[
    'test.route',
    'tabs.route',
    'guidePage.route',
    'home.route',
    'category.route',
    'goodsList.route',
    'cart.route',
    'account.route'
  ]);
  //在 config中使用$stateProvider
  app.config(function($stateProvider, $urlRouterProvider) {
    //获取localstorage中的数据
    var guidePage=localStorage.getItem('guidePage');
    if(!guidePage||guidePage!='true'){
      $urlRouterProvider.otherwise('/guidePage');
    }else {
      $urlRouterProvider.otherwise('/tabs/home');
    }


  });
})(angular);
