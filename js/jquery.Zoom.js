(function($) {

    $.fn.imageZoom = function(options) {

        var defaults = {
            scaling: 0.3,
            small :"small",
            large : "large",
            magnify:"magnify"


        };
        options = $.extend(defaults, options),
            native_width = 0,
            native_height = 0,
            current_width = 0,
            current_height = 0,

            magnify="."+options.magnify;

        small="."+options.small;
        $small=$(small);

        large="."+options.large;
        $large=$(large);

        $(magnify).mousemove(function(e) {

            var image_object = new Image();

            image_object.src = $small.attr('src');

            if(!+[1,]) {

                native_height = image_object.height;

                native_width = image_object.width;

            }
            else {
                image_object.onload = function() {
                    image_object.onload = null;
                    native_height = image_object.height;
                    native_width = image_object.width;
                }
            }
            current_height = $small.height();
            current_width = $small.width();
            var magnify_offset = $(this).offset();
            var mx = e.pageX - magnify_offset.left;
            var my = e.pageY - magnify_offset.top;

            if (mx < $(this).width() && my <$(this).height() && mx > 0 && my > 0) {

                $large.fadeIn(100);

            } else {
                $large.fadeOut(100);
            }
            if ($large.is(":visible")) {
                var rx = Math.round(mx / $small.width() * native_width - $large.width() / 2) * -1,
                    ry = Math.round(my / $small.height() * native_height - $large.height() / 2) * -1,
                    bgp = rx + "px " + ry + "px",
                    px = mx - $large.width() / 2,
                    py = my - $large.height() / 2;
                $large.css({
                    left: px,
                    top: py,
                    backgroundPosition: bgp
                });
            }

            //}
        });
    };
})(jQuery);


$(".magnify").bind('DOMMouseScroll mousewheel onmousewheel', function(e) {
});



$(".magnify").bind('DOMMouseScroll mousewheel onmousewheel', function(e) {

    // cross-browser wheel delta
    var e = window.event || e; // old IE support.
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
});


// Gets the image scaling height and width.
native_height += (native_height * scaling * delta);
native_width += (native_width * scaling * delta);

// Update backgroud image size.
$large.css('background-size', native_width + "px " + native_height + "px");



