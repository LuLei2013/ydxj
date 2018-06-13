//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '元都新景',
    avatarUrl: './img/avatar.png'
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../main/main'
    })
  },
  onLoad: function () {
  }
})
