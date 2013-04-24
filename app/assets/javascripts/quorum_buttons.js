$(function () {
    $(window).resize(function () {
        $.plax.disable();
            sizes();
        $.plax.enable();
    });
    function sizes() { $(".bgs").center(); }

    $.fn.center = function () {
        var w = $(window).width(),
            wl = $(this).width(),
            resw = parseInt((w - wl) / 2),
            $this = $(this);
        return this.each(function () {
            $this.css({ left: resw });
        });
    }
    sizes();


    
});