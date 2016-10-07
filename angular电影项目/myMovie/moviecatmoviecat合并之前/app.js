(function (angular) {
    "use strict";

    // start your ride
    var app = angular.module('moviecat',[
        'moviecat.home_page',
        'moviecat.in_theaters',
        'moviecat.coming_soon',
        'moviecat.top250'
    ]);

})(angular);