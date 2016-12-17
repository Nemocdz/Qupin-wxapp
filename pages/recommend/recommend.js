// pages/recommend/recommend.js
Page({
    data: {
        classNameA: null,
        classNameB: null,
        classNameC: null
    },
    onLoad: function (options) {

        // 页面初始化 options为页面跳转所带来的参数
    },
    onReady: function () {
        // 页面渲染完成
    },
    onShow: function () {
        // 页面显示
    },
    onHide: function () {
        // 页面隐藏
    },
    onUnload: function () {
        // 页面关闭
    },
    openhome: function (event) {
        wx.navigateTo({
            url: '/pages/home/home'
        });
    },
    selecta: function (event) {
        var that = this;
        var className = null;
        if (!this.data.classNameA) {
            className = "selected";
        }
        that.setData({
            classNameA: className,
        })
    },
    selectb: function (event) {
        var that = this;
        var className = null;
        if (!this.data.classNameB) {
            className = "item selected";
        }
        that.setData({
            classNameB: className,
        })
    },
    selectc: function (event) {
        var that = this;
        var className = null;
        if (!this.data.classNameC) {
            className = "selected";
        }
        that.setData({
            classNameC: className,
        })
    },
})