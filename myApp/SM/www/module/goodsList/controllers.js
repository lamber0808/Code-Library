/**
 * Created by Grim on 2016/9/26.
 */
(function (angular) {
  var app=angular.module('goodsList.controllers',
    [
      'goodsList.services'
    ]);
  app.controller('goodsList.ctrl',function ($scope,goodsListFactory) {
    // 第一次加载数据
    refreshGoodsList();
    function refreshGoodsList() {
      $scope.obj_goodsListData = goodsListFactory.getDataList();
      $scope.newData=goodsListFactory.getDataList();
    };
    // 刷新商品列表
    $scope.refreshGoodsList=function(){
      refreshGoodsList();
      // 广播，通知ionic去隐藏下拉刷新的标签
      $scope.$broadcast('scroll.refreshComplete');
    }
    // $scope.newData;
    // 上拉加载
    $scope.loadMoreGoodsList=function(){
      //在公司开发的时候是去获取分页数据
      var newData= goodsListFactory.getMoreDataLise();
       setTimeout(function () {
        $scope.obj_goodsListData = $scope.obj_goodsListData.concat(newData);
       },5000);
      $scope.$broadcast('scroll.infiniteScrollComplete');
    }
  })
})(angular);
