
import { Home } from "home-model.js";
var home = new Home();

Page({
  data:{},
  onLoad:function(){
    this._loadData();
  },
  _loadData:function(){
    var id = 74539453;
    home.getBannerData(id,this.dataCallback);
   
  },
  dataCallback:function(res){
    console.log(res);
  }
  
})