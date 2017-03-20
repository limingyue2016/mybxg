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
        overlay:"../js/overlay"


    },
    shim:{
        bootstrap:{
            deps:["jquery"]
        }
    }
})