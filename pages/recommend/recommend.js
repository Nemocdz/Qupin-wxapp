// pages/recommend/recommend.js
Page({
  data:{
    classNameA: "item",
    classNameB: "item",
    classNameC: "item",
  },
  onLoad:function(options){
   
    // 页面初始化 options为页面跳转所带来的参数
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
  },
  openhome:function(event){
     wx.navigateTo({
                url: '/pages/home/home'
            });
  },
  selecta: function(event) {
    var that = this
    that.setData({
      classNameA: "item selected",
    })
  },
  selectb: function(event) {
    var that = this
    that.setData({
      classNameB: "item selected",
    })
  },
  selectc: function(event) {
    var that = this
    that.setData({
      classNameC: "item selected",
    })
  },
})