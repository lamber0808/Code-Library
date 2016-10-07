/**
 * Created by Grim on 2016/9/25.
 */
(function (angular) {
  var app=angular.module('test.controllers',
    [
      'test.services'
    ]);
  app.controller('test.ctrl',function ($scope,testFactory) {
    $scope.test='测试';
    console.log(testFactory.test);
  })
})(angular);
