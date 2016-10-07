/**
 * Created by Grim on 2016/9/26.
 */
(function (angular) {
  var app=angular.module('goodsList.route',[
    'goodsList.controllers'
  ]);
  app.config(function ($stateProvider) {
    $stateProvider
      .state('goodsList',{
        url:'/goodsList/:typeNumber',
        controller:'goodsList.ctrl',
        templateUrl:'module/goodsList/view.html'
      })
  })
})(angular);
