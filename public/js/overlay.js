/**
 * Created by lmy on 2017/3/19.
 */
define(["jquery","nprogress"], function ($,nprogress) {
    $(document).ajaxStart(function () {
        $('.overlay').show();

    })
    $(document).ajaxStop(function () {
        $('.overlay').hide();
    });
    nprogress.start();
    nprogress.done();
})