/**
 * Created by lmy on 2017/3/24.
 */
define(["jquery","template","util"], function ($,template,util) {
    util.setMenu("/course/course_list")
//    查询课程列表数据
    $.ajax({
        type:"get",
        url:"/api/course",
        dataType:"json",
        success: function (data) {
            var html=template("listTpl",{list:data.result})
            $("#listInfo").html(html)
        }
    })

})