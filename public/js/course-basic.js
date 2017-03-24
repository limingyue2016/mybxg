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
            //�Ӽ����ദ��
            $('#topCategory').change(function(){
                var cg_id = $(this).val();
                $.ajax({
                    type : 'get',
                    url : '/api/category/child',
                    data : {cg_id:cg_id},
                    dataType : 'json',
                    success : function(data){
                        var tpl = '{{each list as item}}<option value="{{item.cg_id}}">{{item.cg_name}}</option>{{/each}}';
                        var render = template.compile(tpl);
                        var html = render({list:data.result});
                        $('#childCategory').html(html);
                    }
                });
            });
            //���ı�����
            CKEDITOR.replace('ckeditor');
        //    ������ύ
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