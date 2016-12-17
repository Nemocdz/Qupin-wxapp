const AV = require('../../libs/av-weapp.js');
const Task = require('../../model/Task')
Page({
    data: {
        tasks: []
    },
    my: function () {
        wx.navigateTo({
                url: '/pages/my/my'
            }
        )
    },
    newTask: function () {
        wx.navigateTo({
                url: '/pages/newtask/newtask'
            }
        )
    },
    onItemClick: function (event) {
        var id = event.target.dataset.key;
        wx.navigateTo({
                url: '/pages/taskdetail/taskdetail?id=' + id
            }
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
        query.descending('createdAt');
        query.find().then(function (results) {
            console.log('refreshing');
            console.log(results);
            that.setData({
                tasks: results
            })
        }, function (error) {
            wx.showToast(error.message);
        })
    },
    onShow: function () {
        // 页面显示
        this.freshData();
    },
})