/**
 * Created by Lam on 2016/9/2.
 */
(function (angular) {
    //正在热映模块
    var app = angular.module('movie.movielist',['ngRoute','movie.jsonp'])

    //路由配置
    app.config(['$routeProvider', function ($routeProvider) {
        //使用路由参数表示多少页
        //:movieType参数表示请求那一个路径；
        $routeProvider.when('/:movieType/:page?',{
            templateUrl:'./movielist/movielist.html',
            //指定一个控制器名字，当匹配到这个规则时，会调用控制器中的方法执行，就能请求数据；
            controller:'in_theatersController'
        })
    }]);

    //创建控制器模块,请求本地数据方法;
    //app.controller('in_theatersController',['$scope','$http', function ($scope,$http) {
    //    //$http({method:'GET',url:'./movielist/movielist.json'})
    //    //快捷方式
    //    $http.get('./movielist/movielist.json').then(function (res) {
    //        console.log(res);
    //        //存储到数据模型中
    //        $scope.data = res.data;
    //    })
    //}])

    /*分页
    * count:每页显示的数量
    * start：得到想获取的距是从第几页开始；
    * page:表示当前要显示第几页
    * totalPage：暴露总页数
    * */

    //创建控制器模块,请求跨域方法;
    app.controller('in_theatersController',[
        '$scope',
        '$http',
        'MyService',
        '$routeParams',
        '$route',
        function ($scope,$http,MyService,$routeParams,$route) {
            //开始加载开始loading;
            $scope.loading = true
            //表示每页要显示的数据量；
            var count = 5;
            //表示当前要显示第几页
            $scope.page = ($routeParams.page||'1')-0;
            //得到想获取的数据是从第几开始；
            var start = ($scope.page-1)*count

            MyService.jsonp(
                //$routeParams.movieType得到请求的参数;
                'http://api.douban.com/v2/movie/'+$routeParams.movieType,
                //,q:$routeParams.q应用于搜索
                {count:count,start:start,q:$routeParams.q},

                function (data) {
                    //console.log(data)
                    //请求回来的数据暴露出去；
                    $scope.data = data;
                    //得到总页数
                    var totalPage = Math.ceil($scope.data.total/count);
                    //暴露总页数
                    $scope.totalPage = totalPage;
                    //关闭loading
                    $scope.loading = false;
                    //同步执行；
                    $scope.$apply();
                }
            )
            //通过按钮获取下一页
            $scope.getPage = function (arg) {
                var nowPage = $scope.page + arg;
                //过滤，不请求不符合条件的页码
                if (nowPage>$scope.totalPage||nowPage<1){
                    return
                }
                //更新路由参数
                $route.updateParams({page:nowPage})
            }
    }])
})(angular)
