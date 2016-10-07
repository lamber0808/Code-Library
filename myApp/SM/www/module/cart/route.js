/**
 * Created by Grim on 2016/9/28.
 */
(function (angular) {
  var app=angular.module('cart.route',[
    'cart.controllers'
  ]);
  app.config(function ($stateProvider) {
    $stateProvider
      .state('cart',{
        url:'/cart',
        templateUrl:'module/cart/view.html',
        controller:'cart.ctrl'
      })
  })
})(angular);
