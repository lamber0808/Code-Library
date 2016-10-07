/**
 * Created by Grim on 2016/9/26.
 */
(function (angular) {
  var app=angular.module('category.controllers',
    [
      'category.services'
    ]);
  app.controller('category.ctrl',function ($scope,categoryFactory) {
    getCategoryData();
    getCategoryDetailData();
    //获取商品分类
    function getCategoryData() {
      $scope.categoryData=categoryFactory.categoryData;
    }
    //获取商品分类详细
    function getCategoryDetailData(typeNumber) {
      //随机获取商品分类详细
      var number = Math.random();
      if(number>0.5){
        $scope.categoryDetailData=categoryFactory.categoryDetailData1;
      }else{
        $scope.categoryDetailData=categoryFactory.categoryDetailData2;
      }

    }
    $scope.categoryLeftClick = function(e,typeNumber){
      var nowItem =  angular.element(e.target);
      // 移除所有兄弟结点的nav-current样式，并加上nva-blur样式
      nowItem.parent().children().removeClass('nav-current').addClass('nav-blur');
      // 给当前点击元素移除nav-blur样式，并加上nav-current
      nowItem.removeClass('nav-blur').addClass('nav-current');
      // 获取指定分类的数据
      getCategoryDetailData(typeNumber);
    }
});
})(angular);
