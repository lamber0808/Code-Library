/**
 * Created by Grim on 2016/9/25.
 */
(function (angular) {
  var app=angular.module('guidePage.route',
    [
      'guidePage.controllers'
    ]);
  app.config(function ($stateProvider) {
    $stateProvider
      .state('guidePage',{
        'url':'/guidePage',
        controller:'guidePage.ctrl',
        templateUrl:'module/guidePage/view.html'
      })
  });
})(angular);
