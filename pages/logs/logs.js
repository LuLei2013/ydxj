//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    mainContents: [ 
      [
        {
          title: "五一长假",
          subTitle: "放假3天",
          iconUrl: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"
        },
        {
          title: "端午短假",
          subTitle: "放假3天",
          iconUrl: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"
        }
      ],
      [
        {
          title: "国庆假期",
          subTitle: "放假7天",
          iconUrl: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"
        },
        {
          title: "春节假期",
          subTitle: "放假7天",
          iconUrl: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"
        }
      ]
    ]
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
