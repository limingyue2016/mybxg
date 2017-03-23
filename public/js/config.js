/**
 * Created by lmy on 2017/3/18.
 */
require.config({
    baseUrl:"/public/assets",
    paths:{
        jquery:"jquery/jquery.min",
        cookie:"jquery-cookie/jquery.cookie",
        echarts:"echarts/echarts.min",
        nprogress : 'nprogress/nprogress',
        template:"artTemplate/template",
        bootstrap : 'bootstrap/js/bootstrap',
        util:"../js/util",
        overlay:"../js/overlay",
        datepicker : 'bootstrap-datepicker/js/bootstrap-datepicker',
        language : 'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
        validate : 'validate/jquery-validate',
        form : 'jquery-form/jquery.form',
        region : 'jquery-region/jquery.region',
        uploadify : 'uploadify/jquery.uploadify',
        ckeditor : 'ckeditor/ckeditor'
    },
    shim:{
        bootstrap:{
            deps:["jquery"]
        },
        language:{
            deps:["jquery","datepicker"]
        },
        validate:{
            deps:["jquery"]
        },
        uploadify:{
            deps:["jquery"]
        },
        ckeditor:{
            deps:["jquery"],
            exports:"CKEDITOR"
        }
    }
})