// pages/taskdetail/taskdetail.js
const AV = require('../../libs/av-weapp.js');
const Task = require('../../model/Task')
Page({
    data: {
        task: null,
        size: null
    },
    //图片加载事件:全屏宽度750rpx减去padding值80rpx;计算出比率得到高度,用图片的URL作为key来设置data
    imageLoad: function(e){
        var id = e.currentTarget.dataset.src,
            img_w = e.detail.width,
            img_h = e.detail.height,
            ratio = (750-80)/img_w;

        if((img_w/1)>=(750-80)){
            var imageStyle = 'width: '+(750-80)+'rpx; height:'+ img_h*ratio +'rpx;';
        }else{
            var imageStyle = 'width: '+img_w+'px; height:'+ img_h +'px;';
        }
        this.setData({
            size: imageStyle
        });
    },
    onLoad: function (options) {
        // 页面初始化 options为页面跳转所带来的参数
        var that = this;
        console.log(options.id);
        var query = new AV.Query(Task);
        query.equalTo('objectId', options.id);
        query.first().then(function (result) {
            console.log('refreshing');
            console.log(result);
            that.setData({
                task: result
            })
            console.log(result.url());
        }, function (error) {
            console.log(error.message);
        })
    }

})