/**
 * Created by Lam on 2016/9/4.
 */
/*导航获取焦点*/
(function (angular) {
    //创建模块
    var app = angular.module('movie.autoactive', []);
    //自定义指令
    app.directive('autoActive', ['$location', function ($location) {
        return {
            link: function (scope, element, attributes) {
                //在模型中定义一个loca变量，用于监听变化；
                scope.loca = $location
                scope.$watch('loca.url()', function (now, old) {
                    //判断锚点值是否包含了a标签的href属性；
                    var hash = element.children()[0].hash.substr(1);

                    // startsWith判断一个元素是否以另一个元素开始
                    //判断loca.url()是否包含hash，如果包含就让当前的element添加active;
                    if (now.startsWith(hash)) {
                        element.parent().children().removeClass('active')
                        element.addClass('active')
                        console.log(element);
                    }
                })

            }
        }
    }])
})(angular);