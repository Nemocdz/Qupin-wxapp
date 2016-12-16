var isPicSelected = false;
const AV = require('../../libs/av-weapp.js');
Page({
    data: {
        pic: "../../icon/添加.png",
        title: null,
        contact: null,
        date: null,
        money: null,
        detail: null,
        error: null
    },
    choosePic: function () {
        var that = this;
        wx.chooseImage({
            count: 1, // 最多可以选择的图片张数，默认9
            sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
            sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
            loading: function (res) {
                that.setData({
                    pic: res.tempFilePaths
                });
                isPicSelected = true;
            },
            fail: function () {
                // fail
                isPicSelected = false;
            },
            complete: function () {
                // complete
            }
        })
    },
    title: function (input) {
        this.setData({
            title: input.detail.value
        })
    },
    contact: function (input) {
        this.setData({
            contact: input.detail.value
        })
    },
    date: function (input) {
        this.setData({
            date: input.detail.value
        })
    },
    money: function (input) {
        this.setData({
            money: input.detail.value
        })
    },
    detail: function (input) {
        this.setData({
            detail: input.detail.value
        })
    },
    newTask: function () {
        this.setData({
            error: null
        });
        const {pic, title, contact, date, money, detail} = this.data;
        if (!title) {
            wx.showToast({
                title: '请将数据填写完整',
                icon: 'loading',
                duration: 1000
            });
            return;
        }
        if (!money) {
            wx.showToast({
                title: '请将数据填写完整',
                icon: 'loading',
                duration: 1000
            });
            return;
        }
        if (!date) {
            wx.showToast({
                title: '请将数据填写完整',
                icon: 'loading',
                duration: 1000
            });
            return;
        }
        if (!contact) {
            wx.showToast({
                title: '请将数据填写完整',
                icon: 'loading',
                duration: 1000
            });
            return;
        }
        // if (!isPicSelected) {
        //     wx.showToast('请添加图片');
        //     return;
        // }
        var task = new AV.Object("Task");
        task.set('title', title);
        task.set('money', money);
        task.set('date', date);
        task.set('day', date);
        task.set('contact', contact);
        if (isPicSelected) {
            task.set('pic', new AV.File('pic', pic));
        }
        task.save().then(function (task) {
             wx.showToast({
                title: '创建成功',
                icon: 'success',
                duration: 1000
            });
            wx.navigateBack();
        }, function (error) {
            console.log(error.message);
        })

    },
    onLoad: function (options) {
        // 页面初始化 options为页面跳转所带来的参数

    }
})