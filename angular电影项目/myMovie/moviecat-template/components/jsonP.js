/**
 * Created by Lam on 2016/9/3.
 */
// jsonp服务
(function(angular){
    'use strict';
    // 创建服务模块
    var app = angular.module('movie.jsonp',[]);

    // 创建服务
    app.service('MyService',['$window',function($window){
        this.jsonp=function(url,obj,fn){
            // 拼接url
            var queryString='';
            for(var key in obj){
                queryString+=key+'='+obj[key]+'&' // a=b&c=d&
            }
            // callback
            // 回调的方法名不能够写死，否则会被覆盖。
            var funcName= 'erqi'+$window.Math.random().toString().substr(2);
            queryString+='callback='+funcName;
            url+='?'+queryString;
            // 创建一个方法用来回调
            $window[funcName]=function(arg){
                fn(arg);
            }

            // 创建script标签，设置src属性
            var ele = $window.document.createElement('script');
            ele.src=url;
            $window.document.body.appendChild(ele);
        }
    }]);
})(angular)