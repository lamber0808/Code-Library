/**
 * 
 * Created by Lam on 2016/9/23.
 */
(function (angular) {
    var app=angular.module('starter.global',[]);
    //创建全局变量
    //1全局变量名称
    //2对象
    app.constant('GlobalValue',{
        'SERVER_PATH':'http://www.itcast.cn',
        'VERSION':'1.0.0'
    })
})(angular);
