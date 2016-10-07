/**
 * Created by Grim on 2016/9/26.
 */
(function (angular) {
  var app=angular.module('category.route',[
    'category.controllers'
  ]);
  app.config(function ($stateProvider) {
    $stateProvider
      .state('tabs.category',{
        url:'/category',
        views:{
          'tabs-category':{
            templateUrl:'module/category/view.html',
            controller:'category.ctrl'
          }
        }
      })
  })
})(angular);
