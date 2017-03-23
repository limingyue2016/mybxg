/**
 * Created by lmy on 2017/3/22.
 */
define(['jquery','util','template','ckeditor','validate','form'], function ($,util,template,CKEDITOR) {
    util.setMenu("/course/course_add")
    var cs_id=util.qs("cs_id")
    $.ajax({
        url : '/api/course/basic',
        type : 'get',
        data : {cs_id :cs_id},
        success: function (data) {
            var html = template('basicTpl',data.result);
            $('#basic').html(html);
            CKEDITOR.replace('ckeditor');
        //    处理表单提交
        $("#basicForm").validate({
            sendForm:false,
            valid: function () {
                for(var instance in CKEDITOR.instances){
                    CKEDITOR.instances[instance].updateElement();
                }
                $(this).ajaxSubmit({
                    url : '/api/course/update/basic',
                    type : 'post',
                    success: function (data) {
                        if(data.code == 200){
                            location.href = '/course/course_add_picture?cs_id='+data.result.cs_id;

                        }

                    }
                })
            }

        })

        }
    })
})