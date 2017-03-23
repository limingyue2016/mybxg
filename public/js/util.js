/**
 * Created by lmy on 2017/3/19.
 */
//工具方法
define(["jquery"],function ($) {
    return {
        setMenu : function (pathname) {
            $(".navs a[href='"+pathname+"']").addClass("active").closest('ul').show()
        },
        qs: function (pname) {
            // '?username=lisi&age=12&gender=male';
            var pathname=location.search
            var pathname=pathname.slice(1)
            var obj={}
            if(pathname){
                var arr =pathname.split("&")
                for(var i=0;i<arr.length;i++){
                    var kv=arr[i].split("=")
                    obj[kv[0]]=kv[1]
                }

            }
            return obj[pname];
        }
    }
})