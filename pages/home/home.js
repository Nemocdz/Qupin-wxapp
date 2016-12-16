const AV = require('../../libs/av-weapp.js');
const Task = require('../../model/Task')
Page({
    data: {
        tasks: []
    },
    onItemClick: function (event) {
        var id = event.target.dataset.key;
        wx.navigateTo({
          url: '/pages/index/index?id='+id}
          )
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
        query.find().then(function (results) {
            console.log('refreshing');
            that.setData({
                tasks: results
            })
        }, function (error) {
            wx.showToast(error.message);
        })
    }
})