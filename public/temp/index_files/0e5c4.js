!function(g){g.fn.tinysaltWaitForImages=function(){var a=g(this).find("img"),e=g(this).find(".gallery-item.first"),t=null,n=g.Deferred(),o=0,i=0,d=/url\(\s*(['"]?)(.*?)\1\s*\)/g;if(a.length||e.length){var s=[];if(g.each(a,function(){g(this).attr("src")&&s.push(g(this).attr("src"))}),g.each(e,function(){for(;t=d.exec(g(this).children(":first").css("background-image"));)s.push(t[2])}),s.length)return o=s.length,g.each(s,function(a,e){g(new Image).on("load",function(){++i==o&&n.resolve()}).attr("src",e)}),n.promise();throw new TypeError(tinysalt.errorText.noMediaFound)}},tinysaltAjaxLoadMore&&g(".load-more-btn.ajax, .pagination-container.load-more.infinite").length&&(g(document).on("tinysaltAjaxLoadMoreDone",function(a,e){var t=e.target.closest(".navigation.pagination").siblings(".posts");if(t.length&&t.hasClass("posts")&&g(e.data.items).length){var n=g("<div>").append(e.data.items),o=n.find(".image-gallery"),i=o.length,d=n.find("img").length||i,s=g.fn.loftocean_image_preloader,r=!!d&&n.tinysaltWaitForImages();if(n.children().addClass("new-added post").css("opacity","0"),t.hasClass("layout-masonry")){var l=t.data("post-list")?t.data("post-list"):[],c=t.find(".masonry-column");n.children().each(function(){l.unshift(g(this))}),t.data("post-list",l),t.data("mobile-mode")?(c.first().append(n.children()),t.find(".new-added").removeClass("new-added").fadeTo(300,1),g(document).trigger("loftcean/moreContent/loaded"),s&&t.loftocean_image_preloader()):d?r.done(function(){c.first().append(n.children()),t.tinysalt_masonry({post:".post.new-added",append:!0}),i&&o.tinysalt_slick_gallery(),t.find(".new-added").removeClass("new-added").fadeTo(300,1),g(document).trigger("loftcean/moreContent/loaded"),s&&t.loftocean_image_preloader()}):(c.first().append(n.children()),t.tinysalt_masonry({post:".post.new-added"}),i&&o.tinysalt_slick_gallery(),t.find(".new-added").removeClass("new-added").fadeTo(300,1),g(document).trigger("loftcean/moreContent/loaded"),s&&t.loftocean_image_preloader())}else t.find(".posts-wrapper").append(n.children()),t.find(".new-added").removeClass("new-added").fadeTo(300,1),g(document).trigger("loftcean/moreContent/loaded"),d?r.done(function(){i&&o.tinysalt_slick_gallery(),g(document).trigger("tinysalt.mainContent.changed")}):g(document).trigger("tinysalt.mainContent.changed"),s&&t.loftocean_image_preloader()}}),g("body").on("tinysaltAjaxLoadMoreStart",".pagination-container.load-more",function(a){a.preventDefault();var e=g(this);if(e.data("loading"))return!1;e.data("loading",!0).addClass("loading");var t=tinysaltAjaxLoadMore.data;"tinysaltAjaxRecipeData"in window&&(t=tinysaltAjaxRecipeData(t,!1)),g.post(tinysaltAjaxLoadMore.url,t).done(function(a){a.success?(g(document).trigger("tinysaltAjaxLoadMoreDone",{data:a.data,target:e}),setTimeout(function(){a.data&&a.data.more?tinysaltAjaxLoadMore.data.query.paged++:e.hasClass("infinite")?e.removeClass("infinite").append(g("<span>",{class:"no-more-posts-message",text:tinysaltAjaxLoadMore.noMoreText})):(e.find(".load-more-btn.ajax.manual").remove(),e.append(g("<span>",{class:"no-more-posts-message",text:tinysaltAjaxLoadMore.noMoreText}))),e.data("loading",!1).removeClass("loading")},280)):e.data("loading",!1).removeClass("loading")}).fail(function(){e.data("loading",!1).removeClass("loading")})}).on("click",".load-more-btn.ajax.manual",function(a){a.preventDefault(),g(this).closest(".pagination-container.load-more").trigger("tinysaltAjaxLoadMoreStart")}),g(document).on("tinysalt.window.scroll",function(a){var e=g(this),t=g(window).scrollTop(),n=g(".pagination-container.load-more.infinite");if(n.length&&e.data("previousTop")&&e.data("previousTop")<t){var o=parseInt(t,10)+parseInt(g(window).height(),10);n.each(function(){var a=g(this).closest(".navigation.pagination").offset().top;if(t<a&&a<o)return g(this).trigger("tinysaltAjaxLoadMoreStart"),!1})}e.data("previousTop",t)}))}(jQuery);
