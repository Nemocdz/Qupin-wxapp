const AV = require('../../libs/av-weapp.js');
const Task = require('../../model/Task')
Page({
    data: {
        tasks: []
    },
    onLoad: function (options) {
        // 页面初始化 options为页面跳转所带来的参数
        console.log('onLoad')
        this.freshData()
    },
    onPullDownRefresh: function () {
        this.freshData();
    },
    freshData: function () {
        var that = this;
        var query = new AV.Query(Task);
        query.descending('createdAt');
        query.equalTo('publisher', AV.User.current());
        query.find().then(function (results) {
            console.log('refreshing');
            console.log(results);
            that.setData({
                tasks: results
            })
        }, function (error) {
            console.log(error.message);
        })
    }
})