// pages/main/main.js
Page({
  data: {
    banner : {
      bannerImgUrls: [  'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
         'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
         'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000,
      currentIndex:0
    },
    mainContents: [
      [
        {
          title: "五一长假",
          subTitle: "放假3天",
          iconUrl: "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg"
        },
        {
          title: "端午短假",
          subTitle: "放假3天",
          iconUrl: "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg"
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
          iconUrl: "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg"
        }
      ]
    ],

    subContents: [
      [
        {
          title: "美食",
          iconUrl: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"
        },
        {
          title: "服装",
          iconUrl: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"
        },
        {
          title: "求租",
          iconUrl: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"
        },
        {
          title: "出租",
          iconUrl: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"
        },
        {
          title: "出行",
          iconUrl: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"
        }
      ],
      [
        {
          title: "学习",
          iconUrl: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"
        },
        {
          title: "旅游",
          iconUrl: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"
        },
        {
          title: "灌水",
          iconUrl: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"
        }, {
          title: "招领",
          iconUrl: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"
        }, {
          title: "寻物",
          iconUrl: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"
        },
      ]
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  /**
   * 顶部滚动的广告，滚动啦
   */
  onBannerSwiperChange:function(event){
    console.log(event.detail.current);
  },

  /**
   * 顶部滚动的广告，被点击啦
   */
  onBannerSwiperClick: function (event) {
    wx.navigateTo({
      url: "food/food"
    })
  }
})