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

    },
    sendMsg: function () {
        console.log(this.data.phone);
        this.setData({
            errorPhone: null
        });
        const phone = this.data.phone;
        var regex = new RegExp('^([1][3|5|8]+\\d{9})');
        if (phone.match(regex)) {
            console.log('match');
            AV.Cloud.requestSmsCode(phone).then(function (success) {
                console.log('send msg success');

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
    login: function () {
        console.log('click')
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
