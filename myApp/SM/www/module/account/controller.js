/**
 * Created by Grim on 2016/9/28.
 */
(function (angular) {
  var app=angular.module('account.controllers',[]);
  app.controller('account.ctrl',function ($scope,$ionicActionSheet) {
    //点击头像显示actionsheet
    $scope.showActionSheet=function () {
      $ionicActionSheet.show({
        buttons: [
          { text: '<b>打开相机</b>' },
          { text: '打开相册' },
        ],
        // destructiveText: 'Delete',
        titleText: '选择头像',
        cancelText: '取消',
        buttonClicked: function(index) {
          console.log(index);
          switch(index){
            case 0:
              //调用相机
               break;
            case 1:
              //打开相册
                  break;
          }
          return true;
        }
      });
    }
  })
})(angular);
