/**
 * Created by Grim on 2016/9/25.
 */
//全局变量
(function (angular) {
  var app=angular.module('starter.global',[]);
  app.constant('GlobalValue',{
    'SERVER_PATH':'www.itcast.cn',
    'VERSION':'1.0.0'
  })
})(angular);
