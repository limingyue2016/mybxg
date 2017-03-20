/**
 * Created by lmy on 2017/3/19.
 */
define(["jquery","template","util","overlay","bootstrap"], function ($,template,util) {
    //设置菜单选中
    util.setMenu(location.pathname)
//实现教师数据列表加载
    $.ajax({
        type:"get",
        url:"/api/teacher",
        dataType:"json",
        success: function (data) {
            console.log(data);
            var html=template("teacherTpl",{list:data.result})
            $("#teacherList").html(html)
            //    查看功能
            $(".teacherBtns").find("a:eq(0)").click(function () {
                var tc_id=$(this).parent("td").attr("data-tcid")
                $.ajax({
                    type:"get",
                    url:"/api/teacher/view",
                    dataType:"json",
                    data:{tc_id :tc_id},
                    success: function (data) {
                        if(data.code==200){
                            data.result.tc_hometown=data.result.tc_hometown.replace(/\|/g," ")
                            var html=template("teacherInfoModal",data.result)
                            $("#teacherInfo").html(html)
                            $("#teacherModal").modal()
                        }
                    }
                })
            });
            //    启用和注销讲师
            $('.teacherBtns').find('a:eq(2)').click(function () {
                var tc_id = $(this).parents('td').attr('data-tcid');
                var tc_status = $(this).parents('td').attr('data-status');
                var that=this
                var td=$(this).parent("td")
                $.ajax({
                    type : 'post',
                    url : '/api/teacher/handle',
                    dataType:"json",
                    data:{tc_id:tc_id,tc_status:tc_status},
                    success: function (data) {
                        //修改状态对应的文本
                        if(data.result.tc_status==1){
                            $(that).text("启用")
                        }else{
                            $(that).text("注销")
                        }
                        //修改浏览器端状态
                        td.attr('data-status',data.result.tc_status);
                    }
                })


            })


        }
    });
})