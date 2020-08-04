!function (p) {
    "use strict";
    var c = p(window).innerWidth(), u = p(window).innerHeight(), f = p("body").hasClass("rtl"), m = p("body"),
        t = (p("#page"), p(".home-widget.tinysalt-bannr.fullwidth.large-banner-special .section-content"));

    function g() {
        var t = p("#page"), e = p("#page").offset().left;
        p("#masthead .primary-menu .mega-menu").each(function () {
            f ? p(this).children("ul").css("right", -(t.width() - p(this).offset().left - p(this).outerWidth(!0, !0) + e)) : p(this).children("ul").css("left", -(p(this).offset().left - e))
        }), p("#masthead .sub-menu").css("display", "")
    }

    function e() {
        1024 <= c ? t.each(function () {
            p(this).data("custom-height") && p(this).css("height", parseInt(p(this).data("custom-height"), 10)), p(this).data("bg-image") && p(this).css("background-image", p(this).data("bg-image"))
        }) : t.css({height: "", "background-image": ""})
    }

    tinysalt = tinysalt || {}, tinysalt.pages = tinysalt.pages || {}, tinysalt.pages.all = {
        loaded: !1, masonry: !1, init: function () {
            var s = this;
            this.fix_css_variable(), this.fix_primary_menu();
            var i = p(window);
            i.previousTop = i.scrollTop(), s.maybe_sticky_header(p(window).scrollTop(), !1), s.check_site_footer(), p(window).on("load", function () {
                s.load(p(this).scrollTop()), s.fix_footer_top_logo()
            }).on("tinysalt.window.scroll", function () {
                var t = p(this).scrollTop(), e = !1;
                2 < Math.abs(t - i.previousTop) && (e = t < i.previousTop, i.previousTop = t, s.scroll(t, e))
            }).on("tinysalt.window.resize", function () {
                p(this);
                p(".site-header").length && (p(".site-header").removeAttr("data-threhold"), s.scroll(p(this).scrollTop(), !1))
            })
        }, load: function (t) {
            this.loaded = !0, 0 < t && (this.maybe_sticky_sidebar(t, !1), this.maybe_sticky_header(t, !1))
        }, fix_footer_top_logo: function () {
            var t;
            !p(".site-footer .site-footer-signup, .site-footer .site-footer-instagram").length || (t = p(".site-footer-top-logo")).length && t.find(".footer-logo img").length && t.css("margin-bottom", -t.find(".footer-logo img").outerHeight() / 2)
        }, check_site_footer: function () {
            p(".site-footer .site-footer-signup, .site-footer .site-footer-instagram").length || p(".site-footer-top-logo").css("margin-bottom", "")
        }, scroll: function (t, e) {
            this.loaded && (this.maybe_sticky_sidebar(t, e), this.maybe_sticky_header(t, e))
        }, get_sticky_sidebar_offset: function () {
            var t = 20 + (p("body").offset().top - parseInt(p("#page").css("margin-top"), 10)), e = p(".site-header");
            if (e.length && !e.hasClass("hide") && e.attr("data-sticky") && "sticky" == e.attr("data-sticky")) {
                if (e.attr("data-threhold")) return e.attr("data-threhold");
                var s = (e.find(".header-section.menu-and-misc").length ? e.find(".header-section.menu-and-misc") : e.find(".site-header-main")).outerHeight(!0, !0) + t;
                return e.attr("data-threhold", s), s
            }
            return t
        }, maybe_sticky_sidebar: function (t, e) {
            var s;
            this.loaded && (s = this.get_sticky_sidebar_offset(), p(document).trigger("tinysalt.sidebar.change", [t, s, e]))
        }, sticky_site_header_threshold: function () {
            var t = p(".site-header");
            if (!t.length || t.hasClass("hide")) return 0;
            if (t.data("sticky-threshold")) return t.data("sticky-threshold");
            var e = parseInt(t.outerHeight(!0, !0), 10) + parseInt(p("#page").offset().top, 10);
            return t.data("sticky-threshold", e), e
        }, maybe_sticky_header: function (t, e) {
            var s, i, a, n = p(".site-header"), o = p(".site-header-image"), r = o.length ? o : p("#content");
            n.length && r.length && n.attr("data-sticky") && (s = n.attr("data-sticky"), i = this.sticky_site_header_threshold(), a = (n.find(".header-section.menu-and-misc").length ? n.find(".header-section.menu-and-misc") : n.find(".site-header-main")).outerHeight(!0, !0), "sticky" == s ? !n.hasClass("sticky") && i <= t ? (n.addClass("sticky"), r.css("padding-top", a)) : n.hasClass("sticky") && t < i && (n.removeClass("sticky"), r.css("padding-top", "")) : !n.hasClass("is-sticky") && i <= t ? (n.addClass("is-sticky"), r.css("padding-top", a)) : !e && n.hasClass("is-sticky") ? n.removeClass("show-header").addClass("hide-header") : e && n.hasClass("is-sticky") && i <= t ? n.removeClass("hide-header").addClass("show-header") : n.hasClass("is-sticky") && t < i && (n.removeClass("is-sticky show-header hide-header"), r.css("padding-top", "")))
        }, fix_css_variable: function () {
            var t, e, s;
            tinysalt && tinysalt.fallbackStyles && tinysalt.fallbackStyles.handler && p("#" + tinysalt.fallbackStyles.handler).length && (t = document.createElement("span"), e = tinysalt.fallbackStyles, t.style.setProperty("--opacity", "0.3"), t.style.setProperty("opacity", "var(--opacity)"), document.head.appendChild(t), "0.3" !== getComputedStyle(t).opacity && (s = p("#" + e.handler), e.customStyles && s.after(p("<style>", {
                type: "text/css",
                text: e.customStyles
            })), e.urls && Array.isArray(e.urls) && p.each(e.urls, function (t, e) {
                s.after(p("<link>", {href: e, type: "text/css", media: "all"}))
            })), document.head.removeChild(t))
        }, fix_primary_menu: function () {
            var s,
                t = p("#masthead #site-navigation > ul > li, #masthead.site-header-layout-3 #main-navigation-right > ul > li");
            t.length && t.filter(".menu-item-has-children").not(".mega-menu").length && (s = parseInt(window.innerWidth - p("#page").offset().left - 10, 10), t.filter(".menu-item-has-children").not(".mega-menu").on("hover", function (t) {
                var e;
                p(this).hasClass("right") || (e = p(this)).find("ul.sub-menu").each(function () {
                    return f && p(this).offset().left < parseInt(p("#page").offset().left + 10, 10) || !f && p(this).offset().left + p(this).outerWidth(!0, !0) > s ? (e.addClass("right"), !1) : void 0
                })
            }), p(window).resize(function () {
                s = parseInt(window.innerWidth - p("#page").offset().left - 10, 10), t.filter(".menu-item-has-children").removeClass("right")
            }))
        }, process_masonry: function (t, e) {
            var s, i = t && t.length ? t : p(".posts.layout-masonry");
            i.length && (((s = this).masonry = i).data("mobile-mode", !1).each(function () {
                var t, e = p(this);
                p(this).find(".post").length ? (t = [], e.find(".post").each(function () {
                    t.unshift(p(this))
                }), e.data("post-list", t)) : e.data("post-list", !1)
            }), p(window).on("tinysalt.window.resize", function () {
                var t = s.is_mobile_device(s.masonry), e = s.masonry.first().data("mobile-mode");
                t && !e ? s.masonry_mobile_mode(s.masonry) : t || i.each(function () {
                    s.masonry_change_column_settings(p(this)), s.masonry_reset_posts(p(this)), s.masonry_desktop_mode(p(this))
                })
            }), s.is_mobile_device(i) ? s.masonry_mobile_mode(i) : e ? s.process_desktop_masonry(i) : p(window).on("load", function () {
                s.process_desktop_masonry(i)
            }))
        }, process_desktop_masonry: function (t) {
            var e = this;
            t.each(function () {
                e.masonry_change_column_settings(p(this)), e.masonry_desktop_mode(p(this), !0)
            })
        }, masonry_change_column_settings: function (t) {
            768 < c ? c < 1024 ? t.data("masonry-column", 2) : t.hasClass("adaptive-column") ? 1440 < c ? t.data("masonry-column", 5) : 1280 < c ? t.data("masonry-column", 4) : t.data("masonry-column", 3) : t.data("masonry-column", t.find(".masonry-column").length) : t.data("masonry-column", !1)
        }, is_mobile_device: function (t) {
            return t.length && t.find(".post").length && c < 768
        }, masonry_mobile_mode: function (t) {
            var e = this;
            t.data("mobile-mode", !0).each(function () {
                e.masonry_reset_posts(p(this))
            })
        }, masonry_reset_posts: function (t) {
            var e, s;
            t.data("post-list") && (e = t.data("post-list"), s = t.find(".masonry-column").data("column-height", 0).first(), e.forEach(function (t) {
                s.prepend(t)
            }), t.data("current", 0))
        }, masonry_desktop_mode: function (t, e) {
            var s = e ? {"trigger-sidebar-resize": !0} : {};
            t.data("current", 0).find(".masonry-column").data("column-height", 0), t.data("mobile-mode", !1).tinysalt_masonry(s)
        }
    }, tinysalt.sidebar = {
        is_sticky: !1,
        primary: !1,
        secondary: !1,
        container: !1,
        afterSingleContent: !1,
        mainContent: !1,
        upThreshholdSet: !1,
        downThresholdSet: !1,
        sidebarMarginTop: "",
        sidebarHeight: "",
        primaryHeight: "",
        delta: "",
        previousAction: "",
        thresholdMax: "",
        thresholdMin: "",
        init: function () {
            var a = this;
            a.primary = p("#primary"), a.secondary = p("#secondary"), a.container = p("#secondary .sidebar-container"), a.afterSingleContent = p("body.single-post .content-after-post"), a.mainContent = p("#content"), a.afterSingleContent.length && a.primary.length && a.container.length && a.container.find(".widget").length && (p(window).on("tinysalt.window.resize", function () {
                a.change_single_post_after_main_content_position()
            }), a.change_single_post_after_main_content_position()), a.container.length && a.container.find(".widget").length && a.primary.length && "sidebar-sticky" == a.secondary.attr("data-sticky") && (p(window).on("load", function () {
                a.resize()
            }).on("tinysalt.window.resize", function () {
                a.resize(), a.fix_sidebar()
            }), p(document).on("tinysalt.sidebar.change", function (t, e, s, i) {
                a.recalculate(e, s, i)
            }).on("tinysalt.sidebar.resize loftocean.facebook.rendered ajaxSuccess tinysalt.mainContent.changed loftocean.mainContent.changed", function () {
                a.resize(), a.fix_sidebar()
            }))
        },
        change_single_post_after_main_content_position: function () {
            c < 1120 && !this.afterSingleContent.data("mobile-mode") ? (this.primary.append(this.afterSingleContent), this.afterSingleContent.data("mobile-mode", !0)) : 1120 <= c && this.afterSingleContent.data("mobile-mode") && (this.mainContent.append(this.afterSingleContent), this.afterSingleContent.data("mobile-mode", !1))
        },
        resize: function () {
            this.sidebarMarginTop = parseFloat(this.secondary.css("margin-top")), this.primaryHeight = this.primary.height(), this.sidebarHeight = this.secondary.hasClass("sidebar-sticky") ? this.container.outerHeight(!0, !0) : this.secondary.outerHeight(!0, !0) - this.sidebarMarginTop, this.delta = this.primaryHeight - this.sidebarHeight, this.is_sticky = this.test_sticky()
        },
        test_sticky: function () {
            return this.primary.outerWidth(!0, !0) < this.primary.parent().width() && 0 < this.delta - this.sidebarMarginTop
        },
        fix_sidebar: function () {
            var t, e, s, i, a, n, o, r, l, d, h, c;
            this.is_sticky && "fixed" != this.container.css("position") ? "static" == this.container.css("position") ? this.recalculate(p(window).scrollTop(), tinysalt.pages.all.get_sticky_sidebar_offset(), !1) : (t = this, e = !1, h = c = d = s = "", i = p(window).scrollTop(), a = t.primary.offset().top, n = parseFloat(t.sidebarHeight), o = parseFloat(t.primaryHeight), t.sidebarHeight > u ? this.downThresholdSet || (h = (d = a - u) + o, (c = d + n) <= i && i <= h ? (s = i - t.sidebarHeight + u - a, e = !0) : h < i && (s = t.delta, e = !0)) : (r = parseFloat(t.delta), l = parseFloat(t.sidebarMarginTop), c = (d = a - tinysalt.pages.all.get_sticky_sidebar_offset()) + l, (h = d + r) < i ? (s = r, e = !0) : c <= i && i <= h && (s = i - a + l, e = !0)), e && t.container.animate({top: s}, 170, function () {
                t.recalculate(i, tinysalt.pages.all.get_sticky_sidebar_offset(), !1)
            })) : this.is_sticky || (this.secondary.removeClass("sidebar-sticky"), this.container.css({
                position: "",
                top: ""
            }))
        },
        recalculate: function (t, e, s) {
            var i, a, n, o, r, l, d, h, c, p = this.primary, f = this.secondary, m = this.container, g = !0;
            this.is_sticky ? (i = parseFloat(this.sidebarMarginTop), a = parseFloat(this.sidebarHeight), n = parseFloat(this.primaryHeight), o = p.offset().top, r = m.offset().top, l = parseFloat(this.delta), f.addClass("sidebar-sticky"), s || a <= u ? (c = (d = o - e) + l, h = d + i, this.downThresholdSet = !1, "down" == this.previousAction ? ("fixed" == m.css("position") && m.css({
                position: "relative",
                top: t - o - a + u
            }), this.thresholdMin = m.offset().top - e, g = !(this.upThreshholdSet = !0)) : this.upThreshholdSet && t > this.thresholdMin ? g = !1 : (this.upThreshholdSet = !1, c < t ? (m.css({
                position: "relative",
                top: l + "px"
            }), g = !1) : h <= t && t <= c && (m.css({
                position: "fixed",
                top: e + "px"
            }), g = !1)), this.previousAction = "up") : (h = (d = o - u) + a, c = d + n, this.upThreshholdSet = !1, "up" == this.previousAction ? ("fixed" == m.css("position") && m.css({
                position: "relative",
                top: r - o
            }), this.thresholdMax = parseFloat(r) + parseFloat(a) - u, g = !(this.downThresholdSet = !0)) : this.downThresholdSet && t < this.thresholdMax ? g = !1 : (this.downThresholdSet = !1, h <= t && t <= c ? (m.css({
                position: "fixed",
                top: u - a + "px"
            }), g = !1) : c < t && (m.css({
                position: "relative",
                top: l + "px"
            }), g = !1)), this.previousAction = "down")) : (f.removeClass("sidebar-sticky"), this.previousAction = ""), g && m.css({
                position: "",
                top: ""
            })
        }
    }, tinysalt.pages.single_post = {
        init: function () {
            this.process_media(), this.process_related(), this.process_template4(), this.process_recipe()
        }, process_recipe: function () {
            var t = p(".wprm-recipe-container");
            t.length && t.each(function () {
                p(this).fadeIn(800)
            })
        }, process_related: function () {
            p(".related-posts .related-wrapper").length && p(".related-posts .related-wrapper").on("init", function (t, e) {
                p(this).find(".related-post").removeClass("hide")
            }).slick({
                rtl: f,
                dots: !1,
                arrows: !0,
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: !0,
                speed: 500,
                autoplay: !1,
                appendArrows: ".related-posts .slider-arrows",
                responsive: [{breakpoint: 800, settings: {slidesToShow: 2}}, {
                    breakpoint: 480,
                    settings: {slidesToShow: 1}
                }]
            })
        }, process_template4: function () {
            p("body.post-template-4, body.page-template-4").length && (this.template4(), p(window).on("load tinysalt.window.scroll", this.template4))
        }, template4: function () {
            var t = p(".entry-header .entry-header-inner"), e = p(".entry-wrapper"), s = e.height(),
                i = e.offset().top + e.height(), a = t.outerHeight(!0, !0), n = p(window).scrollTop();
            767 < c ? a < s ? n > i - p(window).height() + 30 ? t.css({
                position: "absolute",
                top: e.height() - t.outerHeight(!0, !0)
            }) : t.removeAttr("style") : t.css({position: "absolute", top: -30}) : t.removeAttr("style")
        }, process_media: function () {
            var t, e;
            tinysalt.postFeaturedVideo && tinysalt.postTemplate && (!(t = "post-template-4" == tinysalt.postTemplate ? p(".entry-wrapper .entry-content") : p(".featured-media-section.has-video")).length || (e = new tinysaltPostFeaturedVideo(tinysalt.postFeaturedVideo, t)) && e.deferred.done(function () {
                e.show()
            }))
        }
    }, p.fn.tinysalt_masonry = function (t) {
        var a = p.extend({}, {post: ".post", append: !1, "trigger-sidebar-resize": !1}, t || {});
        return p(this).each(function () {
            var i = p(this), t = a.post;
            if (i.hasClass("layout-masonry") && i.find(t).length) {
                for (var n = [], o = i.data("masonry-column") ? i.data("masonry-column") : 2, r = i.data("current") || 0, e = i.find(".masonry-column"), s = 0; s < o; s++) n.push(e.eq(s).data("column-height") || 0);
                i.find(t).each(function (t, e) {
                    var s = p(e), i = 0;
                    n[r] += parseInt(s.outerHeight(!0, !0), 10), s.addClass("masonry-column-" + r), i = n[r];
                    for (var a = o - 1; 0 <= a; a--) n[a] <= i && (i = n[a], r = a)
                }), e.each(function (t, e) {
                    var s = "masonry-column-" + t;
                    p(this).append(i.find(".post." + s).removeClass(s).detach()), p(this).data("column-height", n[t])
                }), i.data("current", r)
            }
        }), p(document).trigger("tinysalt.mainContent.changed"), this
    }, p.fn.tinysalt_slick_gallery = function () {
        var a = {
            rtl: f,
            dots: !1,
            infinite: !0,
            speed: 500,
            fade: !0,
            cssEase: "linear",
            autoplay: !0,
            autoplaySpeed: 5e3
        };
        return p(this).each(function () {
            var t = p(this), e = t.closest(".posts"), i = !1, s = p.extend({}, a);
            e.length ? (i = p("<div>", {class: "slider-arrows"}), t.parent().after(i), p.extend(s, {appendArrows: i})) : t.closest(".featured-media-section").length ? p.extend(s, {
                arrows: !0,
                swipeToSlide: !0
            }) : t.closest(".post-content-gallery").length ? (i = p("<div>", {class: "slider-arrows"}), t.after(i), p.extend(s, {appendArrows: i})) : t.closest(".popup-slider").length && (i = p("<div>", {class: "slider-arrows"}), t.after(i), p.extend(s, {
                appendArrows: i,
                autoplay: !1
            })), t.on("init", function (t) {
                var e, s;
                p(this).find(".gallery-item").removeClass("hide"), e = p(this), s = i, e.hasClass("image-gallery") && s && s.length && tinysalt.mobile_slider_arrow_style && s.addClass(tinysalt.mobile_slider_arrow_style)
            }).slick(s)
        })
    }, t.length && (p(window).on("tinysalt.window.resize", function (t) {
        e()
    }), e()), tinysalt.pages.all.process_masonry(), p(document).ready(function () {
        var t, e, s, i, n, a = p(document), o = p(".to-top"), r = p(window),
            l = p(".comment-content img, .post-entry img");
        g(), tinysalt.pages.single_post.init(), tinysalt.sidebar.init(), tinysalt.pages.all.init(), p("body.page #primary iframe, body.single #primary iframe").length && p("body.page #primary, body.single #primary").fitVids({customSelector: 'iframe[src*="wordpress.com"]'}), p(window).resize(function () {
            p(this).scrollTop(), p("#masthead"), p("#content");
            c = p(window).innerWidth(), u = p(window).innerHeight(), g()
        }).load(function () {
            var t;
            window.location.hash && "#comments" == window.location.hash && p("#comments").length && (t = p("#comments").offset().top - tinysalt.pages.all.get_sticky_sidebar_offset(), p("html, body").animate({scrollTop: t}, 200))
        }), a.on("ajaxSuccess", function (t, e, s) {
            var i;
            -1 !== s.url.indexOf("wc-ajax=") && (i = p("#site-header-cart .cart-contents"), e.responseJSON && e.responseJSON.cart_hash ? i.find(".cart-notification").length || i.append(p("<span>", {class: "cart-notification"})) : i.find(".cart-notification").length && i.find(".cart-notification").remove())
        }).on("tinysalt.window.scroll", function (t, e) {
            100 < r.scrollTop() ? o.addClass("show") : o.removeClass("show")
        }).on("click", ".to-top.show", function (t) {
            t.preventDefault(), p("html, body").animate({scrollTop: 0}, Math.max(800, Math.round(r.scrollTop() / 5)))
        }).on("click", ".site-header #offcanvas-sidebar-toggle", function (t) {
            p(".offcanvas-sidebar").addClass("show"), m.css("overflow", "hidden")
        }).on("click", ".offcanvas-sidebar .close-button", function (t) {
            m.css("overflow", ""), p(".offcanvas-sidebar").removeClass("show")
        }).on("click", ".single #primary .post-footer .comments-link a", function (t) {
            t.preventDefault();
            var e, s = p("#comments");
            s.length && (e = s.offset().top - tinysalt.pages.all.get_sticky_sidebar_offset(), p("html, body").animate({scrollTop: e}, 200))
        }).on("click", "#masthead #menu-toggle", function (t) {
            t.preventDefault(), p(".sidemenu").addClass("show"), p("body").css("overflow", "hidden")
        }).on("click", ".menu-item > a", function (t) {
            t.preventDefault(), p(".sidemenu").removeClass("show"), p("body").css("overflow", "")
        }).on("click", ".sidemenu .close-button", function (t) {
            t.preventDefault(), p(".sidemenu").removeClass("show"), p("body").css("overflow", "")
        }).on("click", ".sidemenu", function (t) {
            var e = p(t.target);
            e.hasClass("sidemenu") && e.hasClass("show") && p(".sidemenu .close-button").trigger("click")
        }).on("hover", "#masthead .primary-menu .mega-menu .sub-cat-list li", function () {
            var t;
            p(this).hasClass("current") || (t = p(this).parents(".sub-cat-list").first().siblings(".sub-cat-posts").first(), p(this).siblings(".current").removeClass("current").end().addClass("current"), t.children(".current").removeClass("current"), t.children("." + p(this).attr("data-id")).addClass("current"))
        }).on("click", ".sidemenu.show .primary-menu .dropdown-toggle, .sidemenu.show #sidemenu-secondary-navigation .dropdown-toggle", function (t) {
            t.preventDefault(), p(this).hasClass("toggled-on") ? p(this).parent().find(".toggled-on").removeClass("toggled-on") : (p(this).parent().siblings("li").find(".toggled-on").removeClass("toggled-on"), p(this).addClass("toggled-on"))
        }).on("click", function (t) {
            var e = p("#masthead .menu-item.focused");
            e.length && e.removeClass("focused")
        }).on("keyup", function (t) {
            var e, s, i;
            9 === (t.keyCode || t.which) && (e = p(t.target), s = p("#masthead .menu-item"), e.hasClass("menu-item") || e.parents(".menu-item").length ? (i = e.parents(".menu-item").length ? e.parents(".menu-item").last() : e, s.removeClass("focused"), i.addClass("focused")) : s.removeClass("focused"))
        }), l.length && l.each(function () {
            p(this).parent("a").length && p(this).parent("a").addClass("image-link")
        }), m.hasClass("front-page") && m.find(".featured-section .featured-slider").length && (t = tinysalt.featured_area_slider_type, (e = m.find(".featured-slider .slider-wrapper.main-slider")).find(".slider").length, s = p(".featured-section .slider-wrapper.slider-nav"), tinysalt.featured_area_slider_settings && tinysalt.featured_area_slider_settings[t] && (i = tinysalt.featured_area_slider_settings[t], n = "current-post", -1 !== ["slider-style-2", "slider-style-5", "slider-style-6"].indexOf(t) && (s.length ? s.on("init", function (t, e) {
            p(this).find(".slider").removeClass("hide")
        }).slick(tinysalt.featured_area_slider_settings[t + "-nav"]) : delete i.asNavFor), e.on("init", function (t, e) {
            p(this).find(".slider").removeClass("hide").parents(".featured-section").removeClass("hide");
            var s = e.slickCurrentSlide();
            p(this).find(".slider").css("display", "").filter("[data-slick-index=" + s + "]").addClass(n), p(this).find(".slick-cloned").length && p.fn.loftocean_image_preloader && p(this).find(".slick-cloned").loftocean_image_preloader()
        }).on("afterChange", function (t, e, s) {
            var i = p(this).find(".slider").length, a = (s - 1 + i) % i;
            p(this).find("[data-slick-index=" + s + "]").first().addClass(n), p(this).find("[data-slick-index=" + a + "]").first().removeClass(n)
        }).slick(i), a.on("tinysalt.window.resize", function () {
            e.slick("setPosition")
        })));
        var d = p(".posts .format-gallery .image-gallery").add(p(".post-header .image-gallery")).add(p(".single-format-gallery  .featured-media-section .image-gallery.single-img-gallery")).add(p(".post-content-gallery.gallery-slider .image-gallery")).add(p(".loftocean-popup-sliders .popup-slider.gallery-slider .image-gallery"));
        d.length && d.tinysalt_slick_gallery();
        var h = p(".post-content-gallery.gallery-justified");
        h.length && h.each(function () {
            p(this).children(".image-gallery").justifiedGallery({
                rtl: f,
                rowHeight: p(this).data("row-height"),
                lastRow: p(this).data("last-row"),
                margins: p(this).data("margin"),
                captions: !1
            }).on("jg.complete", function (t) {
                p(this).parent().addClass("justified-gallery-initialized"), p(document).trigger("tinysalt.mainContent.changed")
            })
        })
    })
}(jQuery);
