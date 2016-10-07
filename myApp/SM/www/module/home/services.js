/**
 * Created by Grim on 2016/9/26.
 */
(function (angular) {
  var app=angular.module('home.services',[]);
  app.factory('homeFactory',function () {
    return {
      headerSlideData:function () {
        //模拟ajax
        return  [{
          alt: "双十一预热主场会",
          src: "img/home/home-headerSlide-1.jpg"
        }, {
          alt: "11月11天家电低价不停歇",
          src: "img/home/home-headerSlide-2.jpg"
        }, {
          alt: "家具盛典 好货提前抢",
          src: "img/home/home-headerSlide-3.jpg"
        }, {
          alt: "IT抢券节",
          src: "img/home/home-headerSlide-4.jpg"
        }, {
          alt: "潮流数码 双11爽购攻略",
          src: "img/home/home-headerSlide-5.jpg"
        }];
      }
    }
  })
})(angular);
