/**
 * Created by lmy on 2017/3/21.
 */
define(["jquery",'template','ckeditor','region','datepicker','language',"validate",'form','uploadify'], function ($,template,CKEDITOR) {
//查询个人中心信息
    $.ajax({
        type:"get",
        url : '/api/teacher/profile',
        dataType:"json",
        success: function (data) {
            //填充数据
            var html=template("profileTpl",data.result);
            $("#profileInfo").html(html)
            //    处理上传文件
            $("#upfile").uploadify({
                buttonText : '',
                width : 120,
                height : 120,
                fileObjName:'tc_avatar',
                swf : '/public/assets/uploadify/uploadify.swf',
                uploader:'/api/uploader/avatar',
                onUploadSuccess: function (file,data) {
                    data=JSON.parse(data)
                    $(".preview img").attr("src",data.result.path)
                }
            });
            //    处理三级联动
            $(".hometown").region({
                url : '/public/assets/jquery-region/region.json'
            })
            //    富文本处理
            CKEDITOR.replace("ckeditor",{
                toolbarGroups : [
                    { name: 'clipboard',   groups: [ 'clipboard', 'undo' ] }
                ]
            });
            // 省市县信息
            var p = $('#p option:selected').text();
            var c = $('#c').find('option:selected').text();
            var d = $('#d').find('option:selected').text();
            var hometown = p + '|' + c + '|' + d;
            //    表单验证
            $("#profileForm").validate({
                sendForm:false,
                valid: function () {
                    //    同步更新富文本的内容
                    for(var instance in CKEDITOR.instances){
                        CKEDITOR.instances[instance].updateElement();
                    }
                    //    提交表单
                    $(this).ajaxSubmit({
                        type:"post",
                        url:"/api/teacher/modify",
                        data:{tc_hometown:hometown},
                        dataType:"json",
                        success: function (data) {
                            if(data.code==200){
                                location.href="/index/settings"
                            }
                        }
                    })
                }
            })

        }
    });
})