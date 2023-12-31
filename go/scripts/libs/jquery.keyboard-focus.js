if (typeof jQuery == "undefined") {
    if (console && console.log) {
        console.log("Keyboard Focus plugin could not be initialised because jQuery is not available")
    }
} else {
    jQuery.keyFocus = {};
    jQuery.keyFocus.conf = {
        keyFocusClass: "keyboard-focus",
        mouseFocusClass: "mouse-focus",
        focusClass: "focus",
        mouseTimeout: 50
    };
    (function(a) {
        a(document).ready(function() {
            a("body").trackFocus()
        });
        a.fn.trackFocus = function() {
            a(this).data("last-device-used", "");
            a(this).bind("mousedown", function(b) {
                a(this).data("last-device-used", "mouse");
                a(this).data("last-device-used-when", new Date().getTime())
            }).bind("keydown", function(b) {
                a(this).data("last-device-used", "keyboard")
            }).bind("focusin", function(b) {
                if (a(this).data("last-device-used") != "mouse") {
                    a(b.target).addClass(a.keyFocus.conf.keyFocusClass)
                } else {
                    a(b.target).addClass(a.keyFocus.conf.mouseFocusClass)
                }
                a(b.target).addClass(a.keyFocus.conf.focusClass)
            }).bind("focusout", function(b) {
                a("." + a.keyFocus.conf.keyFocusClass + ", ." + a.keyFocus.conf.mouseFocusClass).removeClass(a.keyFocus.conf.keyFocusClass + " " + a.keyFocus.conf.mouseFocusClass);
                a(b.target).removeClass(a.keyFocus.conf.focusClass)
            })
        }
    })(jQuery)
};