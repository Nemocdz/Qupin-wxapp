const AV = require('../../libs/av-weapp.js');
Page({
    data:{
        tasks: []
    },
    onLoad:function(options){
        // 页面初始化 options为页面跳转所带来的参数
        console.log('onLoad')
        var query = new AV.Query('Task');
        query.find().then(function (results) {
            console.log(results);
            this.setData({
                tasks: results
            })
        })

    },
    onReady:function(){
        // 页面渲染完成

    },
    onShow:function(){
        // 页面显示

    },
    onHide:function(){
        // 页面隐藏

    },
    onUnload:function(){
        // 页面关闭

    }
})