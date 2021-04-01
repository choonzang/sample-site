!function(f){"use strict";var c=f(window).innerWidth(),u=f(window).innerHeight(),p=f("body").hasClass("rtl"),m=f("body"),t=(f("#page"),f(".home-widget.tinysalt-bannr.fullwidth.large-banner-special .section-content"));function g(){var t=f("#page"),e=f("#page").offset().left;f("#masthead .primary-menu .mega-menu").each(function(){p?f(this).children("ul").css("right",-(t.width()-f(this).offset().left-f(this).outerWidth(!0,!0)+e)):f(this).children("ul").css("left",-(f(this).offset().left-e))}),f("#masthead .sub-menu").css("display","")}function e(){1024<=c?t.each(function(){f(this).data("custom-height")&&f(this).css("height",parseInt(f(this).data("custom-height"),10)),f(this).data("bg-image")&&f(this).css("background-image",f(this).data("bg-image"))}):t.css({height:"","background-image":""})}tinysalt=tinysalt||{},tinysalt.pages=tinysalt.pages||{},tinysalt.pages.all={loaded:!1,masonry:!1,init:function(){var s=this;this.fix_css_variable(),this.fix_primary_menu();var i=f(window);i.previousTop=i.scrollTop(),s.maybe_sticky_header(f(window).scrollTop(),!1),s.check_site_footer(),f(window).on("load",function(){s.load(f(this).scrollTop()),s.fix_footer_top_logo()}).on("tinysalt.window.scroll",function(){var t=f(this).scrollTop(),e=!1;2<Math.abs(t-i.previousTop)&&(e=t<i.previousTop,i.previousTop=t,s.scroll(t,e))}).on("tinysalt.window.resize",function(){f(this);f(".site-header").length&&(f(".site-header").removeAttr("data-threhold"),s.scroll(f(this).scrollTop(),!1))})},load:function(t){this.loaded=!0,0<t&&(this.maybe_sticky_sidebar(t,!1),this.maybe_sticky_header(t,!1))},fix_footer_top_logo:function(){if(f(".site-footer .site-footer-signup, .site-footer .site-footer-instagram").length){var t=f(".site-footer-top-logo");t.length&&t.find(".footer-logo img").length&&t.css("margin-bottom",-t.find(".footer-logo img").outerHeight()/2)}},check_site_footer:function(){f(".site-footer .site-footer-signup, .site-footer .site-footer-instagram").length||f(".site-footer-top-logo").css("margin-bottom","")},scroll:function(t,e){this.loaded&&(this.maybe_sticky_sidebar(t,e),this.maybe_sticky_header(t,e))},get_sticky_sidebar_offset:function(){var t=20+(f("body").offset().top-parseInt(f("#page").css("margin-top"),10)),e=f(".site-header");if(e.length&&!e.hasClass("hide")&&e.attr("data-sticky")&&"sticky"==e.attr("data-sticky")){if(e.attr("data-threhold"))return e.attr("data-threhold");var s=(e.find(".header-section.menu-and-misc").length?e.find(".header-section.menu-and-misc"):e.find(".site-header-main")).outerHeight(!0,!0)+t;return e.attr("data-threhold",s),s}return t},maybe_sticky_sidebar:function(t,e){if(this.loaded){var s=this.get_sticky_sidebar_offset();f(document).trigger("tinysalt.sidebar.change",[t,s,e])}},sticky_site_header_threshold:function(){var t=f(".site-header");if(!t.length||t.hasClass("hide"))return 0;if(t.data("sticky-threshold"))return t.data("sticky-threshold");var e=parseInt(t.outerHeight(!0,!0),10)+parseInt(f("#page").offset().top,10);return t.data("sticky-threshold",e),e},maybe_sticky_header:function(t,e){var s=f(".site-header"),i=f(".site-header-image"),a=i.length?i:f("#content");if(s.length&&a.length&&s.attr("data-sticky")){var n=s.attr("data-sticky"),o=this.sticky_site_header_threshold(),r=(s.find(".header-section.menu-and-misc").length?s.find(".header-section.menu-and-misc"):s.find(".site-header-main")).outerHeight(!0,!0);"sticky"==n?!s.hasClass("sticky")&&o<=t?(s.addClass("sticky"),a.css("padding-top",r)):s.hasClass("sticky")&&t<o&&(s.removeClass("sticky"),a.css("padding-top","")):!s.hasClass("is-sticky")&&o<=t?(s.addClass("is-sticky"),a.css("padding-top",r)):!e&&s.hasClass("is-sticky")?s.removeClass("show-header").addClass("hide-header"):e&&s.hasClass("is-sticky")&&o<=t?s.removeClass("hide-header").addClass("show-header"):s.hasClass("is-sticky")&&t<o&&(s.removeClass("is-sticky show-header hide-header"),a.css("padding-top",""))}},fix_css_variable:function(){if(tinysalt&&tinysalt.fallbackStyles&&tinysalt.fallbackStyles.handler&&f("#"+tinysalt.fallbackStyles.handler).length){var t=document.createElement("span"),e=tinysalt.fallbackStyles;if(t.style.setProperty("--opacity","0.3"),t.style.setProperty("opacity","var(--opacity)"),document.head.appendChild(t),"0.3"!==getComputedStyle(t).opacity){var s=f("#"+e.handler);e.customStyles&&s.after(f("<style>",{type:"text/css",text:e.customStyles})),e.urls&&Array.isArray(e.urls)&&f.each(e.urls,function(t,e){s.after(f("<link>",{href:e,type:"text/css",media:"all"}))})}document.head.removeChild(t)}},fix_primary_menu:function(){var t=f("#masthead #site-navigation > ul > li, #masthead.site-header-layout-3 #main-navigation-right > ul > li");if(t.length&&t.filter(".menu-item-has-children").not(".mega-menu").length){var s=parseInt(window.innerWidth-f("#page").offset().left-10,10);t.filter(".menu-item-has-children").not(".mega-menu").on("hover",function(t){if(!f(this).hasClass("right")){var e=f(this);e.find("ul.sub-menu").each(function(){return p&&f(this).offset().left<parseInt(f("#page").offset().left+10,10)||!p&&f(this).offset().left+f(this).outerWidth(!0,!0)>s?(e.addClass("right"),!1):void 0})}}),f(window).resize(function(){s=parseInt(window.innerWidth-f("#page").offset().left-10,10),t.filter(".menu-item-has-children").removeClass("right")})}},process_masonry:function(t,e){var s=t&&t.length?t:f(".posts.layout-masonry");if(s.length){var i=this;(i.masonry=s).data("mobile-mode",!1).each(function(){var t=f(this);if(f(this).find(".post").length){var e=[];t.find(".post").each(function(){e.unshift(f(this))}),t.data("post-list",e)}else t.data("post-list",!1)}),f(window).on("tinysalt.window.resize",function(){var t=i.is_mobile_device(i.masonry),e=i.masonry.first().data("mobile-mode");t&&!e?i.masonry_mobile_mode(i.masonry):t||s.each(function(){i.masonry_change_column_settings(f(this)),i.masonry_reset_posts(f(this)),i.masonry_desktop_mode(f(this))})}),i.is_mobile_device(s)?i.masonry_mobile_mode(s):e?i.process_desktop_masonry(s):f(window).on("load",function(){i.process_desktop_masonry(s)})}},process_desktop_masonry:function(t){var e=this;t.each(function(){e.masonry_change_column_settings(f(this)),e.masonry_desktop_mode(f(this),!0)})},masonry_change_column_settings:function(t){768<c?c<1024?t.data("masonry-column",2):t.hasClass("adaptive-column")?1440<c?t.data("masonry-column",5):1280<c?t.data("masonry-column",4):t.data("masonry-column",3):t.data("masonry-column",t.find(".masonry-column").length):t.data("masonry-column",!1)},is_mobile_device:function(t){return t.length&&t.find(".post").length&&c<768},masonry_mobile_mode:function(t){var e=this;t.data("mobile-mode",!0).each(function(){e.masonry_reset_posts(f(this))})},masonry_reset_posts:function(t){if(t.data("post-list")){var e=t.data("post-list"),s=t.find(".masonry-column").data("column-height",0).first();e.forEach(function(t){s.prepend(t)}),t.data("current",0)}},masonry_desktop_mode:function(t,e){var s=e?{"trigger-sidebar-resize":!0}:{};t.data("current",0).find(".masonry-column").data("column-height",0),t.data("mobile-mode",!1).tinysalt_masonry(s)}},tinysalt.sidebar={is_sticky:!1,primary:!1,secondary:!1,container:!1,afterSingleContent:!1,mainContent:!1,upThreshholdSet:!1,downThresholdSet:!1,sidebarMarginTop:"",sidebarHeight:"",primaryHeight:"",delta:"",previousAction:"",thresholdMax:"",thresholdMin:"",init:function(){var a=this;a.primary=f("#primary"),a.secondary=f("#secondary"),a.container=f("#secondary .sidebar-container"),a.afterSingleContent=f("body.single-post .content-after-post"),a.mainContent=f("#content"),a.afterSingleContent.length&&a.primary.length&&a.container.length&&a.container.find(".widget").length&&(f(window).on("tinysalt.window.resize",function(){a.change_single_post_after_main_content_position()}),a.change_single_post_after_main_content_position()),a.container.length&&a.container.find(".widget").length&&a.primary.length&&"sidebar-sticky"==a.secondary.attr("data-sticky")&&(f(window).on("load",function(){a.resize()}).on("tinysalt.window.resize",function(){a.resize(),a.fix_sidebar()}),f(document).on("tinysalt.sidebar.change",function(t,e,s,i){a.recalculate(e,s,i)}).on("tinysalt.sidebar.resize loftocean.facebook.rendered ajaxSuccess tinysalt.mainContent.changed loftocean.mainContent.changed",function(){a.resize(),a.fix_sidebar()}))},change_single_post_after_main_content_position:function(){c<1120&&!this.afterSingleContent.data("mobile-mode")?(this.primary.append(this.afterSingleContent),this.afterSingleContent.data("mobile-mode",!0)):1120<=c&&this.afterSingleContent.data("mobile-mode")&&(this.mainContent.append(this.afterSingleContent),this.afterSingleContent.data("mobile-mode",!1))},resize:function(){this.sidebarMarginTop=parseFloat(this.secondary.css("margin-top")),this.primaryHeight=this.primary.height(),this.sidebarHeight=this.secondary.hasClass("sidebar-sticky")?this.container.outerHeight(!0,!0):this.secondary.outerHeight(!0,!0)-this.sidebarMarginTop,this.delta=this.primaryHeight-this.sidebarHeight,this.is_sticky=this.test_sticky()},test_sticky:function(){return this.primary.outerWidth(!0,!0)<this.primary.parent().width()&&0<this.delta-this.sidebarMarginTop},fix_sidebar:function(){if(this.is_sticky&&"fixed"!=this.container.css("position"))if("static"==this.container.css("position"))this.recalculate(f(window).scrollTop(),tinysalt.pages.all.get_sticky_sidebar_offset(),!1);else{var t=this,e=!1,s="",i="",a="",n="",o=f(window).scrollTop(),r=t.primary.offset().top,l=parseFloat(t.sidebarHeight),d=parseFloat(t.primaryHeight);if(t.sidebarHeight>u)this.downThresholdSet||(n=(i=r-u)+d,(a=i+l)<=o&&o<=n?(s=o-t.sidebarHeight+u-r,e=!0):n<o&&(s=t.delta,e=!0));else{var h=parseFloat(t.delta),c=parseFloat(t.sidebarMarginTop);a=(i=r-tinysalt.pages.all.get_sticky_sidebar_offset())+c,(n=i+h)<o?(s=h,e=!0):a<=o&&o<=n&&(s=o-r+c,e=!0)}e&&t.container.animate({top:s},170,function(){t.recalculate(o,tinysalt.pages.all.get_sticky_sidebar_offset(),!1)})}else this.is_sticky||(this.secondary.removeClass("sidebar-sticky"),this.container.css({position:"",top:""}))},recalculate:function(t,e,s){var i=this.primary,a=this.secondary,n=this.container,o=!0;if(this.is_sticky){var r=parseFloat(this.sidebarMarginTop),l=parseFloat(this.sidebarHeight),d=parseFloat(this.primaryHeight),h=i.offset().top,c=n.offset().top,f=parseFloat(this.delta);if(a.addClass("sidebar-sticky"),s||l<=u){var p=(g=h-e)+f,m=g+r;this.downThresholdSet=!1,"down"==this.previousAction?("fixed"==n.css("position")&&n.css({position:"relative",top:t-h-l+u}),this.thresholdMin=n.offset().top-e,o=!(this.upThreshholdSet=!0)):this.upThreshholdSet&&t>this.thresholdMin?o=!1:(this.upThreshholdSet=!1,p<t?(n.css({position:"relative",top:f+"px"}),o=!1):m<=t&&t<=p&&(n.css({position:"fixed",top:e+"px"}),o=!1)),this.previousAction="up"}else{var g;m=(g=h-u)+l,p=g+d;this.upThreshholdSet=!1,"up"==this.previousAction?("fixed"==n.css("position")&&n.css({position:"relative",top:c-h}),this.thresholdMax=parseFloat(c)+parseFloat(l)-u,o=!(this.downThresholdSet=!0)):this.downThresholdSet&&t<this.thresholdMax?o=!1:(this.downThresholdSet=!1,m<=t&&t<=p?(n.css({position:"fixed",top:u-l+"px"}),o=!1):p<t&&(n.css({position:"relative",top:f+"px"}),o=!1)),this.previousAction="down"}}else a.removeClass("sidebar-sticky"),this.previousAction="";o&&n.css({position:"",top:""})}},tinysalt.pages.single_post={init:function(){this.process_media(),this.process_related(),this.process_template4(),this.process_recipe()},process_recipe:function(){var t=f(".wprm-recipe-container");t.length&&t.each(function(){f(this).fadeIn(800)})},process_related:function(){f(".related-posts .related-wrapper").length&&f(".related-posts .related-wrapper").on("init",function(t,e){f(this).find(".related-post").removeClass("hide")}).slick({rtl:p,dots:!1,arrows:!0,slidesToShow:3,slidesToScroll:1,infinite:!0,speed:500,autoplay:!1,appendArrows:".related-posts .slider-arrows",responsive:[{breakpoint:800,settings:{slidesToShow:2}},{breakpoint:480,settings:{slidesToShow:1}}]})},process_template4:function(){f("body.post-template-4, body.page-template-4").length&&(this.template4(),f(window).on("load tinysalt.window.scroll",this.template4))},template4:function(){var t=f(".entry-header .entry-header-inner"),e=f(".entry-wrapper"),s=e.height(),i=e.offset().top+e.height(),a=t.outerHeight(!0,!0),n=f(window).scrollTop();767<c?a<s?n>i-f(window).height()+30?t.css({position:"absolute",top:e.height()-t.outerHeight(!0,!0)}):t.removeAttr("style"):t.css({position:"absolute",top:-30}):t.removeAttr("style")},process_media:function(){if(tinysalt.postFeaturedVideo&&tinysalt.postTemplate){var t="post-template-4"==tinysalt.postTemplate?f(".entry-wrapper .entry-content"):f(".featured-media-section.has-video");if(t.length){var e=new tinysaltPostFeaturedVideo(tinysalt.postFeaturedVideo,t);e&&e.deferred.done(function(){e.show()})}}}},f.fn.tinysalt_masonry=function(t){var a=f.extend({},{post:".post",append:!1,"trigger-sidebar-resize":!1},t||{});return f(this).each(function(){var i=f(this),t=a.post;if(i.hasClass("layout-masonry")&&i.find(t).length){for(var n=[],o=i.data("masonry-column")?i.data("masonry-column"):2,r=i.data("current")||0,e=i.find(".masonry-column"),s=0;s<o;s++)n.push(e.eq(s).data("column-height")||0);i.find(t).each(function(t,e){var s=f(e),i=0;n[r]+=parseInt(s.outerHeight(!0,!0),10),s.addClass("masonry-column-"+r),i=n[r];for(var a=o-1;0<=a;a--)n[a]<=i&&(i=n[a],r=a)}),e.each(function(t,e){var s="masonry-column-"+t;f(this).append(i.find(".post."+s).removeClass(s).detach()),f(this).data("column-height",n[t])}),i.data("current",r)}}),f(document).trigger("tinysalt.mainContent.changed"),this},f.fn.tinysalt_slick_gallery=function(){var a={rtl:p,dots:!1,infinite:!0,speed:500,fade:!0,cssEase:"linear",autoplay:!0,autoplaySpeed:5e3};return f(this).each(function(){var t=f(this),e=t.closest(".posts"),i=!1,s=f.extend({},a);e.length?(i=f("<div>",{class:"slider-arrows"}),t.parent().after(i),f.extend(s,{appendArrows:i})):t.closest(".featured-media-section").length?f.extend(s,{arrows:!0,swipeToSlide:!0}):t.closest(".post-content-gallery").length?(i=f("<div>",{class:"slider-arrows"}),t.after(i),f.extend(s,{appendArrows:i})):t.closest(".popup-slider").length&&(i=f("<div>",{class:"slider-arrows"}),t.after(i),f.extend(s,{appendArrows:i,autoplay:!1})),t.on("init",function(t){var e,s;f(this).find(".gallery-item").removeClass("hide"),e=f(this),s=i,e.hasClass("image-gallery")&&s&&s.length&&tinysalt.mobile_slider_arrow_style&&s.addClass(tinysalt.mobile_slider_arrow_style)}).slick(s)})},t.length&&(f(window).on("tinysalt.window.resize",function(t){e()}),e()),tinysalt.pages.all.process_masonry(),f(document).ready(function(){var t=f(document),s=f(".to-top"),i=f(window),e=f(".comment-content img, .post-entry img");if(g(),tinysalt.pages.single_post.init(),tinysalt.sidebar.init(),tinysalt.pages.all.init(),f("body.page #primary iframe, body.single #primary iframe").length&&f("body.page #primary, body.single #primary").fitVids({customSelector:'iframe[src*="wordpress.com"]'}),f(window).resize(function(){f(this).scrollTop(),f("#masthead"),f("#content");c=f(window).innerWidth(),u=f(window).innerHeight(),g()}).load(function(){if(window.location.hash&&"#comments"==window.location.hash&&f("#comments").length){var t=f("#comments").offset().top-tinysalt.pages.all.get_sticky_sidebar_offset();f("html, body").animate({scrollTop:t},200)}}),t.on("tinysalt.window.scroll",function(t,e){100<i.scrollTop()?s.addClass("show"):s.removeClass("show")}).on("click",".to-top.show",function(t){t.preventDefault(),f("html, body").animate({scrollTop:0},Math.max(800,Math.round(i.scrollTop()/5)))}).on("click",".site-header #offcanvas-sidebar-toggle",function(t){f(".offcanvas-sidebar").addClass("show"),m.css("overflow","hidden")}).on("click",".offcanvas-sidebar .close-button",function(t){m.css("overflow",""),f(".offcanvas-sidebar").removeClass("show")}).on("click",".single #primary .post-footer .comments-link a",function(t){t.preventDefault();var e=f("#comments");if(e.length){var s=e.offset().top-tinysalt.pages.all.get_sticky_sidebar_offset();f("html, body").animate({scrollTop:s},200)}}).on("click","#masthead #menu-toggle",function(t){t.preventDefault(),f(".sidemenu").addClass("show"),f("body").css("overflow","hidden")}).on("click",".sidemenu .close-button",function(t){t.preventDefault(),f(".sidemenu").removeClass("show"),f("body").css("overflow","")}).on("click",".sidemenu",function(t){var e=f(t.target);e.hasClass("sidemenu")&&e.hasClass("show")&&f(".sidemenu .close-button").trigger("click")}).on("hover","#masthead .primary-menu .mega-menu .sub-cat-list li",function(){if(!f(this).hasClass("current")){var t=f(this).parents(".sub-cat-list").first().siblings(".sub-cat-posts").first();f(this).siblings(".current").removeClass("current").end().addClass("current"),t.children(".current").removeClass("current"),t.children("."+f(this).attr("data-id")).addClass("current")}}).on("click",".sidemenu.show .primary-menu .dropdown-toggle",function(t){t.preventDefault(),f(this).hasClass("toggled-on")?f(this).parent().find(".toggled-on").removeClass("toggled-on"):(f(this).parent().siblings("li").find(".toggled-on").removeClass("toggled-on"),f(this).addClass("toggled-on"))}).on("click",function(t){var e=f("#masthead .menu-item.focused");e.length&&e.removeClass("focused")}).on("keyup",function(t){if(9===(t.keyCode||t.which)){var e=f(t.target),s=f("#masthead .menu-item");if(e.hasClass("menu-item")||e.parents(".menu-item").length){var i=e.parents(".menu-item").length?e.parents(".menu-item").last():e;s.removeClass("focused"),i.addClass("focused")}else s.removeClass("focused")}}),e.length&&e.each(function(){f(this).parent("a").length&&f(this).parent("a").addClass("image-link")}),m.hasClass("front-page")&&m.find(".featured-section .featured-slider").length){var a=tinysalt.featured_area_slider_type,n=m.find(".featured-slider .slider-wrapper.main-slider"),o=(n.find(".slider").length,f(".featured-section .slider-wrapper.slider-nav"));if(tinysalt.featured_area_slider_settings&&tinysalt.featured_area_slider_settings[a]){var r=tinysalt.featured_area_slider_settings[a],l="current-post";-1!==["slider-style-2","slider-style-5","slider-style-6"].indexOf(a)&&(o.length?o.on("init",function(t,e){f(this).find(".slider").removeClass("hide")}).slick(tinysalt.featured_area_slider_settings[a+"-nav"]):delete r.asNavFor),n.on("init",function(t,e){f(this).find(".slider").removeClass("hide").parents(".featured-section").removeClass("hide");var s=e.slickCurrentSlide();f(this).find(".slider").css("display","").filter("[data-slick-index="+s+"]").addClass(l),f(this).find(".slick-cloned").length&&f.fn.loftocean_image_preloader&&f(this).find(".slick-cloned").loftocean_image_preloader()}).on("afterChange",function(t,e,s){var i=f(this).find(".slider").length,a=(s-1+i)%i;f(this).find("[data-slick-index="+s+"]").first().addClass(l),f(this).find("[data-slick-index="+a+"]").first().removeClass(l)}).slick(r),t.on("tinysalt.window.resize",function(){n.slick("setPosition")})}}var d=f(".posts .format-gallery .image-gallery").add(f(".post-header .image-gallery")).add(f(".single-format-gallery  .featured-media-section .image-gallery.single-img-gallery")).add(f(".post-content-gallery.gallery-slider .image-gallery")).add(f(".loftocean-popup-sliders .popup-slider.gallery-slider .image-gallery"));d.length&&d.tinysalt_slick_gallery();var h=f(".post-content-gallery.gallery-justified");h.length&&h.each(function(){f(this).children(".image-gallery").justifiedGallery({rtl:p,rowHeight:f(this).data("row-height"),lastRow:f(this).data("last-row"),margins:f(this).data("margin"),captions:!1}).on("jg.complete",function(t){f(this).parent().addClass("justified-gallery-initialized"),f(document).trigger("tinysalt.mainContent.changed")})})})}(jQuery);