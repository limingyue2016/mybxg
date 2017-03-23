/**
 * Created by lmy on 2017/3/22.
 */
define(["jquery","util","template","uploadify",], function ($,util,template) {
    util.setMenu("/course/course_add")
    var cs_id=util.qs("cs_id")

    $.ajax({
        url: '/api/course/picture',
        data: {cs_id: cs_id},
        type: 'get',
        success: function (data) {
            if(data.code==200){
                var html=template("tpl",data.result)
                $('#picture').html(html)
            }
            $("#upfile").uploadify({
                buttonText : '',
                width : 120,
                height : 120,
                fileObjName:'cs_cover_original',
                swf : '/public/assets/uploadify/uploadify.swf',
                uploader:'/api/uploader/cover',
                onUploadSuccess: function (file,data) {
                    data=JSON.parse(data)
                    $(".preview img").attr("src",data.result.path)
                }
            });
        }
    })
})