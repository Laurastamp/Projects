var USPS = USPS || {};
USPS.Require = USPS.Require || {}, USPS.Require.requireUtilityBar = USPSRequireNS.require.config({
    baseUrl: "/assets/script/",
    context: "utility-bar",
    paths: {
        jquery: "/global-elements/lib/script/jquery/dist/jquery.min"
    },
    shim: {
        jquery: {
            exports: "$"
        }
    },
    waitSeconds: 30
}), USPS.Require.requireUtilityBar(["require", "jquery", "components/utility-bar"], function(e, t, n) {
    var r = function() {
        var t = function() {};
        t()
    }()
});