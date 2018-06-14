//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    mainContents: [
      {
        title: "Hello",
        subTitle: "世界你好",
        iconUrl: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"
      },
      {
        title: "Hello",
        subTitle: "世界你好",
        iconUrl: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"
      },
      {
        title: "Hello",
        subTitle: "世界你好",
        iconUrl: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"
      },
      {
        title: "Hello",
        subTitle: "世界你好",
        iconUrl: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"
      }
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
