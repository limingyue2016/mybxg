/**
 * Created by lmy on 2017/3/22.
 */
define(["jquery","util","validate","form"], function ($,util) {
    util.setMenu("/course/course_add")
    $("#addForm").validate({
        sendForm : false,
        valid: function () {
            $(this).ajaxSubmit({
                url : '/api/course/create',
                type : 'post',
                success: function (data) {
                    if(data.code==200){
                        location.href="/course/course_add_basic?cs_id="+data.result.cs_id
                    }
                }
            })
        }

    })
})