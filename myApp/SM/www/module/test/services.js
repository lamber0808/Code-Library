/**
 * Created by Grim on 2016/9/25.
 */
(function (angular) {
  var app=angular.module('test.services',[]);
  //服务名称，方法
  app.factory('testFactory',function () {
    return {
      'test':'factoryTest'
    }
  })
})(angular);
