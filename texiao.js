so(function() {
    var G = [];
    function q(a) {
        var b = -1;
        G.forEach(function(c, d) {
            c.url == a && (b = d)
        });
        return b
    }
    function c() {
        var a = so.nowUrl()
          , b = q(a)
          , c = null
          , d = null
          , f = so(".js-sojson-right-click-back")
          , e = so(".js-sojson-right-click-forward")
          , B = so(".js-sojson-right-click-reload");
        0 < b && (c = G[b - 1],
        d = G[b + 1]);
        b = document.title.split(" - " + document.title);
        B.v({
            href: a,
            "data-title": b[0]
        });
        c ? f.removeClass("disabled").v({
            href: c.url,
            "data-title": c.title
        }) : f.addClass("disabled").v({
            href: "",
            "data-title": ""
        });
        d ? e.removeClass("disabled").v({
            href: d.url,
            "data-title": d.title
        }) : e.addClass("disabled").v({
            href: "",
            "data-title": ""
        })
    }
    var x = so("#top_ishow")
      , b = function() {
        200 <= (document.documentElement && document.documentElement.scrollTop || document.body.scrollTop) ? x.addClass("_ishow") : x.removeClass("_ishow")
    }
    ;
    so.w.addEventListener("scroll", b, false);
    b();
    x.on("click", function() {
        return so('html,body').stop().animate({
            scrollTop: 0
        }, 500),
        !1
    });
    document.addEventListener("keydown", function(a) {
        if (so("[_off]").attr('_off') == 'open') {
            a = a || so.w.event;
            var b = parseInt(a.keyCode);
            if (a.ctrlKey && (115 === b || 83 === b)) {
                a.returnValue = false,
                a.preventDefault(),
                layer.msg("保存不了吧。<br>加QQ群：259217951。", function() {})
            } else if (123 === b || a.ctrlKey && a.shiftKey && 73 === b || a.ctrlKey && 85 === b) {
                a.returnValue = false,
                a.preventDefault(),
                layer.msg("FireBug出不来了吧。<br>加QQ群：259217951。", function() {})
            }
        }
    });
    var a1 = document.getElementById("sojson-right-click");
    var b = function() {
        a1.style.display = "none"
    }
    ;
    document.addEventListener("contextmenu", function(b) {
        b = b || so.w.event;
        b.preventDefault();
        b.stopPropagation();
        var target = b.target;
        if (target && (so(target).is('a')) && so(target).v('href').search('javascript') !== 0) {
            so("#__openLink").p().v('href', so(target).v('href'));
            so("#__openNewLink").p().v({
                'href': so(target).v('href'),
                'target': '_blank'
            });
            a1 = document.getElementById("sojson-right-click-link")
        } else {
            a1 = document.getElementById("sojson-right-click")
        }
        var c = so(so.w).width()
          , d = so(so.w).height()
          , f = b.clientX;
        b = b.clientY;
        var e = f
          , g = b
          , c = c - 140
          , d = d - 160;
        f >= c && (e = c);
        b >= d && (g = d);
        a1.style.display = "block";
        a1.style.left = e + "px";
        a1.style.top = g + "px"
    }, false);
    document.addEventListener("scroll", b, false);
    document.addEventListener("click", b, false);
    so('#_texiao').p().on('click', function(e) {
        e.preventDefault();
        var vc = so("canvas[id^=c_n]");
        if (vc && vc.length) {
            var _cn_ = layer.confirm('确定关闭？<br>右键可以再次开启。', function() {
                vc.add(so('script#c_n_script')).remove();
                so.setCookie("_texiao", !1, '.sojson.com');
                layer.close(_cn_);
                so('#_texiao').text('显示特效'),
                so('#_texiao_ico').v('class', 'glyphicon glyphicon-ok')
            })
        } else {
            so.setCookie("_texiao", !0, '.sojson.com');
            _texiao()
        }
    });
    so(".js-sojson-right-click-reload").click(function() {
        layer.load();
        so.refresh(so.nowUrl(), 1)
    });
    _texiao()
});
function _texiao() {
    var _ = so.getCookie('_texiao');
    if (_ === 'true' || _ === '') {
        var script = document.createElement('script')
          , vp = {
            type: "text/javascript",
            id: "c_n_script",
            src: "//cdn.sojson.com/js/common/canvas-nest.min.js",
            color: '47,135,193',
            'opacity': '0.5',
            zIndex: '-2',
            'count': '200'
        };
        so(script).v(vp);
        so(script).appendTo(so('body'));
        so('#_texiao').text('关闭特效'),
        so('#_texiao_ico').attr('class', 'glyphicon glyphicon-remove')
    }
}
