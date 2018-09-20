// pages/RepairOrder/RepairOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['全部订单', '新单', '派单'],
    currentTab: 0,
    NewSingle: [//新单
      {
        CustomeId: '348867486123',
        Address: '龙泉区某某镇某某路',
        OrderType: '新单',
        date: "2018-08-23",
        time: "14:30",
      },
      {
        CustomeId: '23676586787',
        Address: '龙泉区某某镇某某路',
        OrderType: '新单',
        date: "2018-08-23",
        time: "14:30",
      },
    ],
    Distribution: [//已派单
      {
        CustomeId: '348867486123',
        Address: '龙泉区某某镇某某路',
        OrderType: '派单',
        date: "2018-08-23",
        time: "14:30",
      },
      {
        CustomeId: '23676586787',
        Address: '龙泉区某某镇某某路',
        OrderType: '派单',
        date: "2018-08-23",
        time: "14:30",
      },
    ],
  },
  //跳转详情
  details(){
    wx.navigateTo({
      url: '/pages/RepairDetails/RepairDetails',
    })
  },
  //导航控制
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
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

  }
})