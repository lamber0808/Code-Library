/**
 * Created by Grim on 2016/9/25.
 */
(function (angular) {
  var app=angular.module('test.route',
    [
      'test.controllers'
    ]);
  app.config(function ($stateProvider) {
    $stateProvider
      .state('test',{
        url:'/test',
        templateUrl:'module/test/view.html',
        controller:'test.ctrl'
      })
  })
})(angular);
