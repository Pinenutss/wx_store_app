import { Config } from "config.js";

class Base {
  constructor() {
    this.baseRequestUrl = Config.resUrl;
  }

  request(params) {

    wx.request({
      url: this.baseRequestUrl + params.url,
      data: params.data,
      method: params.method || 'GET',
      header: {
        'content': 'application/json'
      },
      success: function (res) {
        params.sCallback && params.sCallback(res.data);
      },
      fail: function (err) {
        params.fCallback && params.fCallback(err);
      }
    })
  }


}

export { Base };