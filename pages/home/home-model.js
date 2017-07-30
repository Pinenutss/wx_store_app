import { Base } from "../../utils/base.js";

class Home extends Base{
    constructor(){
        super();
    }
    getBannerData(id,Callback){
        var params = {
            url : "/album/"+id,
            data : "",
            method : "GET",
            sCallback : function(res){
                Callback && Callback(res);
            },
            fCallback : function(err){
                Callback && Callback(err);
            }
        }

        this.request(params);
    }
}

export { Home };