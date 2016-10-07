(function(angular){
  'use strict';
  // 正在热映模块
  var app = angular.module('moviecat.in_theaters',['ngRoute','moviecat.jsonp']);

  // 路由配置
  app.config(['$routeProvider',function($routeProvider){
    // 使用路由参数表示多少页
    $routeProvider.when('/movielist/:page?',{
      templateUrl:'./movielist/coming_soon.html',
      controller:'in_theatersController'
    })
  }]);

  // 创建控制器
  app.controller('in_theatersController',[
    '$scope',
    '$http',
    '$routeParams',
    '$route',
    'MyService',
    function($scope,$http,$routeParams,$route,MyService){
      $scope.loading=true;// 表示css加载动画是否显示;
      // console.log($routeParams);
      var count = 5; // 表示每页要显示的数据量
      $scope.page =  ($routeParams.page||'1')-0 // 表示当前要显示第几页
      // 1.   0,1,2,3,4      ,0  (page-1)*count
      // 2.   5,6,7,8,9       ,5
      // 3.   10,11,12,13,14  ,10
      
      var start = ($scope.page-1)*count; // 得到想获取的数据是从第几开始。
      MyService.jsonp('http://api.douban.com/v2/moive/movielist'
        ,{count:count,start:start}
        ,function(data){
          console.log(data);
          $scope.data=data;  // ajax,setInterval,setTimeout.
         var totalPage = Math.ceil($scope.data.total/count);// 得到总页数
         $scope.totalPage=totalPage; // 暴露总页数
         $scope.loading=false;
          $scope.$apply();//如果在异步中操作了数据模型的值，需要调用这个方法通知angular.

      });

      // 通过按钮获取下一页
      $scope.getPage=function(arg){
        var nowPage= $scope.page+arg;
        // console.log(totalPage);
        // console.log($scope.page);
        if(nowPage>$scope.totalPage||nowPage<1){ // 过滤，不请求不符合条件的页码.
          return;
        }
        console.log(nowPage);
         $route.updateParams({page:nowPage})// 更新路由参数；
      }






    // $scope.data=

    // $.ajax({type:'GET',url:'xxx',success:function(){},error:});
    // $.get $.post

    // $http({method:'GET',url:'./movielist/movielist.json'})
    // .then(function(response){
    //   // 成功回调
    // },function(){
    //   // 错误的回调;
    // });

    // $http.get('./movielist/movielist.json')
    // .then(function(response){
    //   console.log(response);
    //   $scope.data=response.data;
    // });
    // $http.post('',{})
    
    // jsonp方法请求回来的是什么数据，字符串,script,src=""//js
    // jquery_1212819
    

    // $http.jsonp('http://api.douban.com/v2/movie/in_theaters?callback=JSON_CALLBACK')
    // .then(function(response){
    //   console.log(response);
    // });
    
    // 调用自己封装的jsonp

  }]);
})(angular)