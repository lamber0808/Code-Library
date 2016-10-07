/**
 * Created by Grim on 2016/9/25.
 */
(function (angular) {
  var app=angular.module('test.controllers',
    [
      'test.services'
    ]);
  app.controller('test.ctrl',function (
    $scope,
    $ionicPopup,
    $ionicActionSheet,
    $ionicModal,
    $ionicPopover,
    testFactory) {
    //popover
    $ionicPopover.fromTemplateUrl('my-popover.html'// script标签的id,或者静态文件
      ,{scope:$scope
      }).then(function(popover){
      $scope.popover=popover;
    });
    $scope.openPopover=function($event){
      console.log();
      $scope.popover.show($event);
    }
    $scope.closePopover = function(){
      $scope.popover.hide();
    }
    //Modal
    //创建模态框
    $ionicModal.fromTemplateUrl('my-modal.html',{
      scope: $scope,// 表示我们可以在模板中直接使用当前的$scope
      animation:'slide-in-up'
    }).then(function(modal){
        $scope.modal=modal;
    });
    //显示
    $scope.showModal=function () {
      $scope.modal.show();
    };
    //隐藏
    $scope.hideModal=function () {
      $scope.modal.hide();
    }
    //ActionSheet
    $scope.showActionSheet=function () {
      $ionicActionSheet.show({
        buttons:[//最终需要显示的普通按钮
          {text:'<b>打开相机</b>'},
          {text:'打开相册'}
        ],
        destructiveText:'删除',// 删除按钮
        cancelText:'Cancel',// 取消按钮
        cancel:function(){
          console.log('Cancel')
        },
        buttonClicked:function(index){
          console.log(index);
          //hidesheet();//隐藏弹框
          // return true
        },
        destructiveButtonClicked:function(){
          console.log('删除');
        }
      });
    };
    //Popup演示
    $scope.data={};
    $scope.showPopup=function () {
      var myPopup = $ionicPopup.show({
        template: '<input type="password" ng-model="data.wifi">',//模版
        title: 'Enter Wi-Fi Password 主标题',//主标题
        subTitle: 'Please use normal things 子标题',//子标题
        scope: $scope,
        buttons: [ //按钮
          {
            text: 'Cancel按钮 123' ,
            onTap:function (e) {
              myPopup.close();
            }
          },
          {
            text: '<b>Save</b>',
            type: 'button-positive',
            onTap: function(e) { //按钮的点击事件
              if (!$scope.data.wifi) {
                //不允许用户关闭，除非他键入wifi密码
                //e.preventDefault();//阻止弹窗关闭
              } else {
                console.log($scope.data.wifi);
                return $scope.data.wifi;
              }
            }
          },
        ]
      });
    }

  })
})(angular);
