/**
 * Created by Grim on 2016/9/26.
 */
(function (angular) {
  var app=angular.module('home.controllers',
    [
      'home.services'
    ]);
  app.controller('home.ctrl',function ($scope,$interval,homeFactory) {
    //获取swiper需要的数据
    $scope.headerSlideData=homeFactory.headerSlideData();
    timeKill();
    $scope.$on('$ionicView.enter',function () {
      //只有当ion-view完全加载完成以后，在去创建dom对象
      ShowHeaderSlider();
      toutiaoslider();
      topColorChange();
      goTop();
    });
    //顶部颜色渐变
    function topColorChange(){
      // 注册滚动事件
      var content = document.getElementById('home-content');
      var headBar = document.getElementById('headerBar-bg');
      var nowOpacity = 0;
      content.onscroll=function(){
        // this.scrollTop 得到滚动条的高度
        // 500 nowOpacity 1
        nowOpacity = this.scrollTop/500;// 根据页面滚动的高度得到透明度
        headBar.style.opacity=nowOpacity;
      }
    }
    //回到顶部功能
    function goTop(){
      // 注册滚动
      var content = document.getElementById('home-content');
      var goTop = document.querySelector('.back_top');

      // 这里不要再用=了
      content.addEventListener('scroll',function(){

        if(this.scrollTop>=250){
          goTop.style.display='block';
          goTop.style.opacity=1;
        }else{
          goTop.style.display='none';
        }
      });

      // 注册点击事件，滚动到顶部。
      goTop.onclick=function(){
        content.scrollTop=0;
      }
    }





    //头部滚动条
    function ShowHeaderSlider() {
      var swiper=new Swiper('#headerSlider',{
        autoplay:1000,
        pagination:'.swiper-pagination',
        loop:true //循环
      });
    }
    //今日头条滚动
    function toutiaoslider() {
      var swiper=new Swiper('#toutiaoSlider',{
        autoplay:800,
        direction : 'vertical',
        loop:true
      });
    }
    //限时秒杀
    function timeKill() {
      //限时时间
      var timeLeft={h:01,m:00,s:00};
      //循环递减，按照每一秒减一秒
      $interval(function () {
        if(timeLeft.s>0){
          timeLeft.s--;
        }else{
          if(timeLeft.m>0){
            timeLeft.m--;
            timeLeft.s=59;
          }else{
            if(timeLeft.h>0){
              timeLeft.h--;
              timeLeft.m=59;
              timeLeft.s=59;
            }
          }
        }
        $scope.hour={
          A:getTime().A(timeLeft.h),
          B:getTime().B(timeLeft.h),
        };
        $scope.minute={
          A:getTime().A(timeLeft.m),
          B:getTime().B(timeLeft.m),
        };
        $scope.second={
          A:getTime().A(timeLeft.s),
          B:getTime().B(timeLeft.s),
        };
       // console.log(timeLeft);
      },1000);
    }
    function getTime() {
      return {
        A:function (time) {
          //处理十位数 18
          if(time>=10){
           return parseInt(time/10);
          }else{
            return 0;
          }
        },
        B:function (time) {
          //处理个位数
          return time%10
        }
      }
    }
  })
})(angular);
