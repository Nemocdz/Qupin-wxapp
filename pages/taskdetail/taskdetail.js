// pages/taskdetail/taskdetail.js
const AV = require('../../libs/av-weapp.js');
const Task = require('../../model/Task')
Page({
    data: {
        task: null
    },
    onLoad: function (options) {
        // 页面初始化 options为页面跳转所带来的参数
        var that = this;
        console.log(options);
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