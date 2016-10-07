/**
 * Created by Grim on 2016/9/25.
 */
(function (angular) {
  var app=angular.module('test.controllers',
    [
      'test.services'
    ]);
  app.controller('test.ctrl',function (
    $scope) {
    var mySwiper = new Swiper('#swiper-container', {
     // autoplay: 500,//播放时间
      initialSlide:0, //初始化slide
      direction:'horizontal',//水平和垂直滚动  vertical horizontal
      //speed:3000, //速度
      autoplayDisableOnInteraction:true,// 切换slide以后禁止autoplay播放
      pagination:'.swiper-pagination', //分页器
      paginationType : 'fraction',//分页器类型
      prevButton:'.swiper-button-prev',
      nextButton:'.swiper-button-next',
      scrollbar:'.swiper-scrollbar',
      onSlideChangeEnd:function (swiper) {
        console.log(swiper.activeIndex);
      }
    })
  })
})(angular);
