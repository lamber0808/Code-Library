/**
 * Created by Grim on 2016/9/25.
 */
(function (angular) {
  var app=angular.module('guidePage.controllers',[]);
  app.controller('guidePage.ctrl',function ($scope,$state) {
    var mySwiper = new Swiper('#guideSlide', {
      onSlideChangeEnd:function (swiper) {
        console.log(swiper.activeIndex);//检测slide下标
        var index=swiper.activeIndex;
        // console.log('tips-' + index);
        var tips=document.getElementById('tips-'+(index+1));
        angular.element(tips).removeClass('hidden').addClass('guide-show');
      }
    })
    //点击跳转到home页面里面去
    $scope.gotoHome=function () {
      //往localstorage中写参数，并且监视变量值是否第一次进入guidePage
      localStorage.setItem('guidePage','true');
      //按照路由名称进行跳转
      $state.go('tabs.home');

    }
  })
})(angular);
