(function (angular) {
    "use strict";

    // start your ride
    var app = angular.module('movie',[
        'ngRoute',
        'movie.home_page',
        // 规则是先申请先匹配，先引用先匹配，注意这里要放在movielist前面
        'movie.details',
        'movie.movielist',
        //自定义指令
        'movie.autoactive'
    ])

    //创建主控制器，主要应用于搜索
    app.controller('mainController',
        ['$scope','$location','$route',
        function ($scope,$location,$route) {
          //搜索
            $scope.query = "";
            $scope.search = function () {
                // $location.url('/search');
                $route.updateParams({movieType:'search',page:'1',q:$scope.query})
            }
    }])

})(angular);