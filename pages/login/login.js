/**
 * Created by Peng on 2016/12/16.
 */
const AV = require('../../libs/av-weapp.js');
Page({
    data: {
        errorPhone: null,
        errorCode: null,
        phone: '',
        code: ''
    },
    onLoad: function () {
        if (AV.User.current()) {
            wx.navigateTo({
                url: '/pages/home/home'
            });
        }
    },
    login: function () {
        console.log(this.data.phone);
        this.setData({
            errorPhone: null
        });
        const phone = this.data.phone;
        var regex = new RegExp('^([1][3|5|8]+\\d{9})');
        if (phone.match(regex)) {
            // wx.request({
            //     url: 'https://www.baidu.com', //仅为示例，并非真实的接口地址
            //     header: {
            //         'content-type': 'application/json'
            //     },
            //     success: function(res) {
            //         console.log(res.data)
            //     }
            // })
            // console.log('match');
            // AV.Cloud.requestSmsCode(phone).then(function (success) {
            //     console.log('send msg success');
            //
            // }, function (error) {
            //     console.log(error.message);
            //     this.setData({
            //         errorPhone: error.message
            //     })
            // });
            var query = new AV.Query('_User');
            query.equalTo('username', phone);
            query.first().then(function (result) {
                console.log(result);
                if (!result) {
                    // 新建 AVUser 对象实例
                    var user = new AV.User();
                    // 设置用户名
                    user.setUsername(phone);
                    // 设置密码
                    user.setPassword('123456');
                    user.signUp().then(function (loginUser) {
                        console.log(loginUser);
                    }, function (error) {
                        console.log(error.message);
                        this.setData({
                            errorPhone: error.message
                        })
                    });
                } else {
                    AV.User.logIn(phone, '123456').then(function (loginUser) {
                        console.log(loginUser);
                        wx.navigateTo({
                          url: '/pages/home/home'
                        })

                    }, function (error) {
                        console.log(error.message);
                        this.setData({
                            errorPhone: error.message
                        })
                    });
                }
            }, function (error) {
                console.log(error.message);
                this.setData({
                    errorPhone: error.message
                })
            });


        } else {
            this.setData({
                errorPhone: '不是手机号码'
            })
        }
    },
    phone: function (input) {
        this.setData({
            phone: input.detail.value
        })
    },
    code: function (input) {
        this.setData({
            code: input.detail.value
        })
    }

});
