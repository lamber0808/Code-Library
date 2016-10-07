/**
 * Created by Lam on 2016/9/5.
 */
(function (angular) {
    var app = angular.module('top250', ['ngRoute', 'jsonp'])

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/top250/:page?', {
           templateUrl:'./top250/top250.html',
            controller:'top250Controller'
        }
        )
    }])
    /*分页
     * count:每页显示的数量
     * start：得到想获取的距是从第几页开始；
     * page:表示当前要显示第几页
     * totalPage：暴露总页数
     * */
    
    app.controller('top250Controller',
        ['$scope','MyService', '$route','$routeParams',
            function ($scope,MyService,$route,$routeParams) {

        //表示每页要显示的数量;
        var count = 4;

        //表示当前要显示第几页
        $scope.page = ($routeParams.page||'1')-0;
        //得到想获取的数据是从第几页开始
        var start = ($scope.page-1)*count;

        MyService.jsonp('http://api.douban.com/v2/movie/top250',
            {count:count,start:start},
            function (res) {
                console.log(res);
           //请求回来的数据
            $scope.data = res.subjects;

            //如果在异步中操作了数据模型的值，需要调用这个方法通知angular.这个非常重要;
            //否则不会显示数据
            $scope.$apply();
            }
        )
        $scope.getPage = function (arg) {
            var nowPage = $scope.page +arg
            //更新路由参数
            $route.updateParams({page:nowPage})
        }

    }])



})(angular);
