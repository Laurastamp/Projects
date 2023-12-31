USPSRequireNS.define(["jquery"], function(e) {
    var t = function() {
        var t = {},
            n = function() {
                r(), i(), f()
            },
            r = function() {
                t.utilityBar = e("#utility-bar"), t.languageTool = e("#nav-tool-multilingual", t.utilityBar), t.languageToolLink = e(".anchor, .multi-link", t.languageTool), t.languageToolContent = e(".nav-window", t.languageTool), t.loginTool = e("#nav-tool-login", t.utilityBar), t.loginToolLink = e("a, input", t.loginTool), t.loginToolContent = e(".nav-window", t.loginTool), t.loginForm = e("#login-form"), t.buttonSubmit = e("#btn-header-hidden-input-signin"), t.buttonLogin = e("#btn-header-input-signin"), t.tUsername = e("#input-username"), t.tPassword = e("#input-password"), t.errorMessage = e("#login-error-message")
            },
            i = function() {
                t.languageTool.hover(s, o), t.languageToolLink.on("focus", s), t.languageToolLink.on("blur", o), t.loginTool.hover(u, a), t.loginToolLink.on("focus", u), t.loginToolLink.on("blur", a)
            },
            s = function() {
                t.languageToolContent.css({
                    height: "auto"
                }), t.languageTool.addClass("hover")
            },
            o = function() {
                t.languageToolContent.css({
                    height: "0"
                }), t.languageTool.removeClass("hover")
            },
            u = function() {
                t.loginToolContent.css({
                    height: "auto"
                }), t.loginTool.addClass("hover"), e("html").on("touchstart", function(t) {
                    var n = e(t.target);
                    n.closest("#login-register").size() === 0 && a()
                })
            },
            a = function() {
                t.loginToolContent.css({
                    height: "0"
                }), t.loginTool.removeClass("hover"), e("html").off("touchstart")
            },
            f = function() {
                typeof isUserLoggedIn != "undefined" && !isUserLoggedIn && (t.loginForm.on("submit", c), t.buttonLogin.on("click", c))
            },
            l = function(r) {
                r ? (t.errorMessage.removeClass("hide"), e("#login-error-message-anchor").focus()) : t.errorMessage.addClass("hide")
            },
            c = function(r) {
                var i = e.trim(t.tUsername.val()),
                    s = e.trim(t.tPassword.val());
                r.preventDefault(), l(!1);
                if (i.length === 0 || s.length === 0) return l(!0), !1;
                t.loginForm[0].submit()
            };
        return n(), {
            init: n
        }
    }();
    return t
});