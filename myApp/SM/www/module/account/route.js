/**
 * Created by Grim on 2016/9/28.
 */
(function (angular) {
  var app=angular.module('account.route',
    [
      'account.controllers'
    ]);
  app.config(function ($stateProvider) {
    $stateProvider
      .state('tabs.account',{
        url:'/account',
        views:{
          'tabs-account':{
            templateUrl:'module/account/view.html',
            controller:'account.ctrl'
          }
        }
      })
  })
})(angular);
