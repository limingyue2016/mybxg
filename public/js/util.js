/**
 * Created by lmy on 2017/3/19.
 */
//���߷���
define(["jquery"],function ($) {
    return {
        setMenu : function (pathname) {
            $(".navs a[href='"+pathname+"']").addClass("active")
        }
    }
})