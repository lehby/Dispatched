// pages/OrderList/OrderList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    DivisionModal: false,//控制配送工弹框按钮
    allotModal: false,//控制分单弹框按钮
    navbar: ['全部订单', '新单', '分组', '派单'],
    currentTab: 0,
    //每个状态的显示和隐藏
    Grouping: 0,
    GroupName: "",
    //创建组
    CreateGroup: [
      // {
      //   GroupOrder: "1个订单",
      //   GroupName: "某某组"
      // },
    ],
    PaymentItems: [//支付方式选择
      { name: '配送工1', vehicle: '三轮', checked: true },
      { name: '配送工2', vehicle: '三轮', checked: false },
      { name: '配送工3', vehicle: '三轮', checked: false },
      { name: '配送工4', vehicle: '三轮', checked: false },
    ],
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
    Division: [//分单
      {
        OrderType: '分组',
        singlelist: [
          {
            CustomeId: '348867486123',
            Address: '龙泉区某某镇某某路',
            OrderType: '派单',
            date: "2018-08-23",
            time: "14:30",
          },
          {
            CustomeId: '348867486123',
            Address: '龙泉区某某镇某某路',
            OrderType: '派单',
            date: "2018-08-23",
            time: "14:30",
          }
        ]
      },
      {
        OrderType: '分组',
        singlelist: [
          {
            CustomeId: '348867486123',
            Address: '龙泉区某某镇某某路',
            OrderType: '派单',
            date: "2018-08-23",
            time: "14:30",
          },
          {
            CustomeId: '348867486123',
            Address: '龙泉区某某镇某某路',
            OrderType: '派单',
            date: "2018-08-23",
            time: "14:30",
          }
        ]
      },
    ]
  },
  // 获取ipt分组名称值
  voteTitle(e) {
    let value = e.detail.value
    if (value !== "") {
      console.log(value)
      this.setData({
        GroupName: value
      })
      let CreateGroup = this.data.CreateGroup;
      let obj = {};
      obj.GroupName = this.data.GroupName
      obj.GroupOrder = "1个订单"
      CreateGroup.push(obj);
      this.setData({ CreateGroup })
    }
  },
  //保存分组点击事件
  onPreservation() {
    this.setData({
      Grouping: 2,
      GroupName: ""
    })
  },
  // 创建分组点击事件
  onCreate() {
    this.setData({
      Grouping: 3
    })
  },
  /**
   * 分组弹出框蒙层截断touchmove事件
   */
  preventTouchMove: function () {
  },
  /**
   * 分组隐藏模态对话框
   */
  allotModal: function () {
    this.setData({
      allotModal: false
    });
  },
  /**
   * 分组对话框取消按钮点击事件
   */
  allotCancel: function () {
    this.allotModal();
  },
  /**
   * 分组对话框确认按钮点击事件
   */
  allotConfirm: function () {
    this.allotModal();
  },
  //分组点击事件
  allot() {
    this.setData({
      allotModal: true,
    })
    if (this.data.CreateGroup[0] === undefined) {
      this.setData({
        Grouping: 1
      })
    } else {
      this.setData({
        Grouping: 2
      })
    }
  },


  //配送工选项框点击事件
  PaymentChange: function (e) {
    var checked = e.detail.value
    var changed = {}
    for (var i = 0; i < this.data.PaymentItems.length; i++) {
      if (checked.indexOf(this.data.PaymentItems[i].name) !== -1) {
        changed['PaymentItems[' + i + '].checked'] = true
      } else {
        changed['PaymentItems[' + i + '].checked'] = false
      }
    }
    console.log(changed)
    this.setData(changed)
  },


  /**
   * 配送工弹出框蒙层截断touchmove事件
   */
  preventTouchMove: function () {
  },
  /**
   * 配送工隐藏模态对话框
   */
  DivisionModal: function () {
    this.setData({
      DivisionModal: false
    });
  },
  /**
   * 配送工对话框取消按钮点击事件
   */
  DivisionCancel: function () {
    this.DivisionModal();
  },
  /**
   * 配送工对话框确认按钮点击事件
   */
  DivisionConfirm: function () {
    this.DivisionModal();
  },
  /**
   * 配送工点击显示弹框
   */
  onDivision() {
    this.setData({
      DivisionModal: true,
    })
  },

  //派单跳转订单详情
  Details() {
    wx.navigateTo({
      url: '/pages/Details/Details',
    })
  },
  //新单跳转订单详情
  onDetails() {
    wx.navigateTo({
      url: '/pages/Details/Details',
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