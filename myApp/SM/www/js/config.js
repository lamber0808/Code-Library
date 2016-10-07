/**
 * Created by Grim on 2016/9/25.
 */
(function (angular) {
  var app=angular.module('starter.config',[]);
  app.config(function ($ionicConfigProvider) {
    $ionicConfigProvider.platform.android.tabs.position("bottom");
    $ionicConfigProvider.platform.ios.tabs.position("bottom");
  })
})(angular);
