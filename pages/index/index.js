//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    list: [
      {
        name: '科学岛一号食堂',
        content: [
          {
            name: '早餐',
            content: [
              {
                name: '粥类',
                content: ['八宝粥', '辣糊汤'].join('、')
              },
              {
                name: '面点',
                content: ['酱肉包'].join('、')
              },
              {
                name: '油炸类',
                content: ['春卷','油条','糍糕', '紫薯糕', '油炸狮子头','鸡蛋煎馍', '煎包'].join('、')
              },
              {
                name: '蒸煎类',
                content: ['香菇青菜包'].join('、')
              },
              {
                name: '炒饭类',
                content: ['雪菜炒饭'].join('、')
              },
              {
                name: '鸡蛋',
                content: ['五香卤蛋'].join('、')
              }
            ]
          },
          {
            name: '午餐',
            content: [
              {
                name: '粥类',
                content: ['八宝粥', '辣糊汤'].join('、')
              },
              {
                name: '面点',
                content: ['酱肉包'].join('、')
              },
              {
                name: '油炸类',
                content: ['春卷'].join('、')
              },
              {
                name: '蒸煎类',
                content: ['香菇青菜包'].join('、')
              },
              {
                name: '炒饭类',
                content: ['雪菜炒饭'].join('、')
              },
              {
                name: '鸡蛋',
                content: ['五香卤蛋'].join('、')
              }
            ]
          },
          {
            name: '晚餐',
            content: [
              {
                name: '粥类',
                content: ['八宝粥', '辣糊汤'].join('、')
              },
              {
                name: '面点',
                content: ['酱肉包'].join('、')
              },
              {
                name: '油炸类',
                content: ['春卷'].join('、')
              },
              {
                name: '蒸煎类',
                content: ['香菇青菜包'].join('、')
              },
              {
                name: '炒饭类',
                content: ['雪菜炒饭'].join('、')
              },
              {
                name: '鸡蛋',
                content: ['五香卤蛋'].join('、')
              }
            ]
          }
        ]
      },
      {
        name: '科学岛二号食堂',
        content: [
          {
            name: '早餐',
            content: [
              {
                name: '粥类',
                content: ['八宝粥', '辣糊汤'].join('、')
              },
              {
                name: '面点',
                content: ['酱肉包'].join('、')
              },
              {
                name: '油炸类',
                content: ['春卷','油条','糍糕', '紫薯糕', '油炸狮子头','鸡蛋煎馍', '煎包'].join('、')
              },
              {
                name: '蒸煎类',
                content: ['香菇青菜包'].join('、')
              },
              {
                name: '炒饭类',
                content: ['雪菜炒饭'].join('、')
              },
              {
                name: '鸡蛋',
                content: ['五香卤蛋'].join('、')
              }
            ]
          },
          {
            name: '午餐',
            content: [
              {
                name: '粥类',
                content: ['八宝粥', '辣糊汤'].join('、')
              },
              {
                name: '面点',
                content: ['酱肉包'].join('、')
              },
              {
                name: '油炸类',
                content: ['春卷'].join('、')
              },
              {
                name: '蒸煎类',
                content: ['香菇青菜包'].join('、')
              },
              {
                name: '炒饭类',
                content: ['雪菜炒饭'].join('、')
              },
              {
                name: '鸡蛋',
                content: ['五香卤蛋'].join('、')
              }
            ]
          },
          {
            name: '晚餐',
            content: [
              {
                name: '粥类',
                content: ['八宝粥', '辣糊汤'].join('、')
              },
              {
                name: '面点',
                content: ['酱肉包'].join('、')
              },
              {
                name: '油炸类',
                content: ['春卷'].join('、')
              },
              {
                name: '蒸煎类',
                content: ['香菇青菜包'].join('、')
              },
              {
                name: '炒饭类',
                content: ['雪菜炒饭'].join('、')
              },
              {
                name: '鸡蛋',
                content: ['五香卤蛋'].join('、')
              }
            ]
          }
        ]
      },
      {
        name: '科学岛三号食堂',
        content: [
          {
            name: '早餐',
            content: [
              {
                name: '粥类',
                content: ['八宝粥', '辣糊汤'].join('、')
              },
              {
                name: '面点',
                content: ['酱肉包'].join('、')
              },
              {
                name: '油炸类',
                content: ['春卷','油条','糍糕', '紫薯糕', '油炸狮子头','鸡蛋煎馍', '煎包'].join('、')
              },
              {
                name: '蒸煎类',
                content: ['香菇青菜包'].join('、')
              },
              {
                name: '炒饭类',
                content: ['雪菜炒饭'].join('、')
              },
              {
                name: '鸡蛋',
                content: ['五香卤蛋'].join('、')
              }
            ]
          },
          {
            name: '午餐',
            content: [
              {
                name: '粥类',
                content: ['八宝粥', '辣糊汤'].join('、')
              },
              {
                name: '面点',
                content: ['酱肉包'].join('、')
              },
              {
                name: '油炸类',
                content: ['春卷'].join('、')
              },
              {
                name: '蒸煎类',
                content: ['香菇青菜包'].join('、')
              },
              {
                name: '炒饭类',
                content: ['雪菜炒饭'].join('、')
              },
              {
                name: '鸡蛋',
                content: ['五香卤蛋'].join('、')
              }
            ]
          },
          {
            name: '晚餐',
            content: [
              {
                name: '粥类',
                content: ['八宝粥', '辣糊汤'].join('、')
              },
              {
                name: '面点',
                content: ['酱肉包'].join('、')
              },
              {
                name: '油炸类',
                content: ['春卷'].join('、')
              },
              {
                name: '蒸煎类',
                content: ['香菇青菜包'].join('、')
              },
              {
                name: '炒饭类',
                content: ['雪菜炒饭'].join('、')
              },
              {
                name: '鸡蛋',
                content: ['五香卤蛋'].join('、')
              }
            ]
          }
        ]
      }
    ],
    today: '10',
    current: 1
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    /*if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }*/
    const today  = new Date()
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const day = today.getDay();
    const daymap={
      1: '星期一',
      2: '星期二',
      3: '星期三',
      4: '星期四',
      5: '星期五',
      6: '星期六',
      0: '星期日',
    }
    this.setData({
      today: `${year}年${month}月${date}日  ${daymap[day]}`
    })
    wx.setNavigationBarTitle({
      title: this.data.list[this.data.current].name
    })
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  swiperChange(event) {
    const {current} = event.detail
    wx.setNavigationBarTitle({
      title: this.data.list[current].name
    })
  }
})
