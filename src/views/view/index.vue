<template>
    <div>
        <div id="content" class="site-content with-sidebar-right">
            <div class="featured-section">
                <div class="featured-slider slider-style-2">
                    <hooper :initialSlide="0" :infiniteScroll="true" :autoPlay="true" :playSpeed="3000" :wheelControl="false" style="height:540px;background-color:#FFFFFF;opacity:0.8;z-index:8;border-bottom:1px solid #e2e2e2;">
                        <slide>
                            <div style="background-color: #e2e2e2;height:100%;background:url('');background-repeat: no-repeat;background-position: center center; background-size: cover;position:realtive;z-index:9;">

                            </div>
                            <div style="width:100%;height:100%;vertical-align:middle;display: block;text-align: center;position:relative;top:40%;position:absolute;z-index:10;">
                                <h2 style="font-family: 'BMEULJIRO';font-weight:100;font-size:36px;padding:0px 20px;word-break: keep-all;">이렇게 해먹으면 얼마나 맛있게요~?</h2>
                                <p>평소에 그냥 먹던 라면, 오늘은 이런식으로 도전해보자~!!</p>
                                <p><span style="font-size:14px;font-weight:400;color:#8ecf58;">매운라면/봉지라면/유탕면</span></p>

                            </div>
                        </slide>
                        <slide>
                            <div style="background-color: #e2e2e2;height:100%;background:url('');background-repeat: no-repeat;background-position: center center; background-size: cover;position:realtive;z-index:9;">

                            </div>
                            <div style="width:100%;height:100%;vertical-align:middle;display: block;text-align: center;position:relative;top:40%;position:absolute;z-index:10;">
                                <h2 style="font-family: 'BMEULJIRO';font-weight:100;font-size:36px;padding:0px 20px;word-break: keep-all;">쿠지라이식 한국 버전으로 개조</h2>
                                <p>한국인의 입맛으로 재해석한 쿠지라이식 라면~!!</p>
                                <p><span style="font-size:14px;font-weight:400;color:#8ecf58;">볶음라면/봉지라면/유탕면</span></p>
                            </div>
                        </slide>
                        <slide>
                            <div style="background-color: #e2e2e2;height:100%;background:url('');background-repeat: no-repeat;background-position: center center; background-size: cover;position:realtive;z-index:9;">

                            </div>
                            <div style="width:100%;height:100%;vertical-align:middle;display: block;text-align: center;position:relative;top:40%;position:absolute;z-index:10;">
                                <h2 style="font-family: 'BMEULJIRO';font-weight:100;font-size:36px;padding:0px 20px;word-break: keep-all;">짜파구리를 넘어선 새로운 도전, 불닭칼국수</h2>
                                <p>두개 라면을 섞은 조합, 새로운 도전</p>
                                <p><span style="font-size:14px;font-weight:400;color:#8ecf58;">매운라면/봉지라면/유탕면</span></p>

                            </div>
                        </slide>
                        <slide>
                            <div style="background-color: #e2e2e2;height:100%;background:url('');background-repeat: no-repeat;background-position: center center; background-size: cover;position:realtive;z-index:9;">

                            </div>
                            <div style="width:100%;height:100%;vertical-align:middle;display: block;text-align: center;position:relative;top:40%;position:absolute;z-index:10;">
                                <h2 style="font-family: 'BMEULJIRO';font-weight:100;font-size:36px;padding:0px 20px;word-break: keep-all;">비빔면</h2>
                                <p>왼손으로 비비고, 오른손으로 비비고</p>
                                <p><span style="font-size:14px;font-weight:400;color:#8ecf58;">매운라면/봉지라면/유탕면</span></p>
                            </div>
                        </slide>
                        <hooper-navigation slot="hooper-addons"></hooper-navigation>
                    </hooper>
                    <!--div class="slider-wrapper slider-for main-slider slick-initialized slick-slider">
                        <button type="button" data-role="none" class="slick-prev slick-arrow" aria-label="Previous"
                                role="button" style="display: block;">Previous
                        </button>
                        <div aria-live="polite" class="slick-list draggable">
                            <div class="slick-track" style="opacity: 1; width: 7200px;" role="listbox">
                                <div class="slider slick-slide" data-slick-index="0" aria-hidden="true"
                                     style="width: 1440px; position: relative; left: 0px; top: 0px; z-index: 998; opacity: 0; transition: opacity 500ms ease 0s;"
                                     tabindex="-1" role="option" aria-describedby="slick-slide10">
                                    <div class="slider-bg"><a class="slider-link"
                                                              href="https://tinysalt.loftocean.com/pasta/the-best-spaghetti-meat-sauce/"
                                                              tabindex="-1">
                                        <div class="slider-bg-img"
                                             style="background-image: url(&quot;https://tinysalt.loftocean.com/wp-content/uploads/2020/03/food-photographer-jennifer-pallian-6S27S6pZ6o0-unsplash.jpg&quot;);"></div>
                                    </a></div>
                                    <div class="slider-content"><h2 class="slider-title"><a
                                            href="https://tinysalt.loftocean.com/pasta/the-best-spaghetti-meat-sauce/"
                                            tabindex="-1">The Best Spaghetti Meat Sauce</a></h2>
                                        <div class="cat-links"><a href="https://tinysalt.loftocean.com/category/pasta/"
                                                                  rel="tag" tabindex="-1">Pasta</a></div>
                                        <div class="meta">
                                            <div class="meta-item view-count"><i class="fas fa-eye"></i> 1.9K</div>
                                            <div class="meta-item like-count" data-post-id="91"><i
                                                    class="fas fa-heart"></i> <span class="count">29</span></div>
                                            <div class="meta-item comment-count"><a
                                                    href="https://tinysalt.loftocean.com/pasta/the-best-spaghetti-meat-sauce/#comments"
                                                    tabindex="-1"><i class="fas fa-comments"></i> 3</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="slider slick-slide" data-slick-index="1" aria-hidden="true"
                                     style="width: 1440px; position: relative; left: -1440px; top: 0px; z-index: 998; opacity: 0; transition: opacity 500ms ease 0s;"
                                     tabindex="-1" role="option" aria-describedby="slick-slide11">
                                    <div class="slider-bg"><a class="slider-link"
                                                              href="https://tinysalt.loftocean.com/vegan/pickled-summer-vegetables/"
                                                              tabindex="-1">
                                        <div class="slider-bg-img"
                                             style="background-image: url(&quot;https://tinysalt.loftocean.com/wp-content/uploads/2020/07/monika-grabkowska-648019-unsplash-small.jpg&quot;);"></div>
                                    </a></div>
                                    <div class="slider-content"><h2 class="slider-title"><a
                                            href="https://tinysalt.loftocean.com/vegan/pickled-summer-vegetables/"
                                            tabindex="-1">Pickled Summer Vegetables</a></h2>
                                        <div class="cat-links"><a href="https://tinysalt.loftocean.com/category/vegan/"
                                                                  rel="tag" tabindex="-1">Vegan</a></div>
                                        <div class="meta">
                                            <div class="meta-item view-count"><i class="fas fa-eye"></i> 1.4K</div>
                                            <div class="meta-item like-count" data-post-id="89"><i
                                                    class="fas fa-heart"></i> <span class="count">52</span></div>
                                            <div class="meta-item comment-count"><a
                                                    href="https://tinysalt.loftocean.com/vegan/pickled-summer-vegetables/#comments"
                                                    tabindex="-1"><i class="fas fa-comments"></i> 0</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="slider slick-slide" data-slick-index="2" aria-hidden="true"
                                     style="width: 1440px; position: relative; left: -2880px; top: 0px; z-index: 998; opacity: 0; transition: opacity 500ms ease 0s;"
                                     tabindex="-1" role="option" aria-describedby="slick-slide12">
                                    <div class="slider-bg"><a class="slider-link"
                                                              href="https://tinysalt.loftocean.com/appetizer/flat-irons-skillet-potatoes/"
                                                              tabindex="-1">
                                        <div class="slider-bg-img"
                                             style="background-image: url(&quot;https://tinysalt.loftocean.com/wp-content/uploads/2020/03/sarah-gualtieri-oOakI-tutBM-unsplash.jpg&quot;);"></div>
                                    </a></div>
                                    <div class="slider-content"><h2 class="slider-title"><a
                                            href="https://tinysalt.loftocean.com/appetizer/flat-irons-skillet-potatoes/"
                                            tabindex="-1">Flat Irons Skillet Potatoes</a></h2>
                                        <div class="cat-links"><a
                                                href="https://tinysalt.loftocean.com/category/appetizer/" rel="tag"
                                                tabindex="-1">Appetizer</a> / <a
                                                href="https://tinysalt.loftocean.com/category/vegan/" rel="tag"
                                                tabindex="-1">Vegan</a></div>
                                        <div class="meta">
                                            <div class="meta-item view-count"><i class="fas fa-eye"></i> 1.1K</div>
                                            <div class="meta-item like-count" data-post-id="76"><i
                                                    class="fas fa-heart"></i> <span class="count">27</span></div>
                                            <div class="meta-item comment-count"><a
                                                    href="https://tinysalt.loftocean.com/appetizer/flat-irons-skillet-potatoes/#comments"
                                                    tabindex="-1"><i class="fas fa-comments"></i> 3</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="slider slick-slide slick-current slick-active current-post"
                                     data-slick-index="3" aria-hidden="false"
                                     style="width: 1440px; position: relative; left: -4320px; top: 0px; z-index: 999; opacity: 1;"
                                     tabindex="-1" role="option" aria-describedby="slick-slide13">
                                    <div class="slider-bg"><a class="slider-link"
                                                              href="https://tinysalt.loftocean.com/bread/10-minutes-magic-orange-sauce/"
                                                              tabindex="0">
                                        <div class="slider-bg-img"
                                             style="background-image: url(&quot;https://tinysalt.loftocean.com/wp-content/uploads/2020/07/taylor-kiser-6RJct18G_3I-unsplash-v3.jpg&quot;);"></div>
                                    </a></div>
                                    <div class="slider-content"><h2 class="slider-title"><a
                                            href="https://tinysalt.loftocean.com/bread/10-minutes-magic-orange-sauce/"
                                            tabindex="0">10 Minutes Magic Orange Sauce</a></h2>
                                        <div class="cat-links"><a
                                                href="https://tinysalt.loftocean.com/category/appetizer/" rel="tag"
                                                tabindex="0">Appetizer</a> / <a
                                                href="https://tinysalt.loftocean.com/category/bread/" rel="tag"
                                                tabindex="0">Bread</a></div>
                                        <div class="meta">
                                            <div class="meta-item view-count"><i class="fas fa-eye"></i> 1K</div>
                                            <div class="meta-item like-count" data-post-id="69"><i
                                                    class="fas fa-heart"></i> <span class="count">67</span></div>
                                            <div class="meta-item comment-count"><a
                                                    href="https://tinysalt.loftocean.com/bread/10-minutes-magic-orange-sauce/#comments"
                                                    tabindex="0"><i class="fas fa-comments"></i> 0</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="slider slick-slide" data-slick-index="4" aria-hidden="true"
                                     style="width: 1440px; position: relative; left: -5760px; top: 0px; z-index: 998; opacity: 0;"
                                     tabindex="-1" role="option" aria-describedby="slick-slide14">
                                    <div class="slider-bg"><a class="slider-link"
                                                              href="https://tinysalt.loftocean.com/bread/norwegian-egg-benedict/"
                                                              tabindex="-1">
                                        <div class="slider-bg-img"
                                             style="background-image: url(&quot;https://tinysalt.loftocean.com/wp-content/uploads/2020/03/chris-ralston-482554-unsplash.jpg&quot;);"></div>
                                    </a></div>
                                    <div class="slider-content"><h2 class="slider-title"><a
                                            href="https://tinysalt.loftocean.com/bread/norwegian-egg-benedict/"
                                            tabindex="-1">Norwegian Egg Benedict</a></h2>
                                        <div class="cat-links"><a href="https://tinysalt.loftocean.com/category/bread/"
                                                                  rel="tag" tabindex="-1">Bread</a> / <a
                                                href="https://tinysalt.loftocean.com/category/salad/" rel="tag"
                                                tabindex="-1">Salad</a></div>
                                        <div class="meta">
                                            <div class="meta-item view-count"><i class="fas fa-eye"></i> 1.1K</div>
                                            <div class="meta-item like-count" data-post-id="55"><i
                                                    class="fas fa-heart"></i> <span class="count">34</span></div>
                                            <div class="meta-item comment-count"><a
                                                    href="https://tinysalt.loftocean.com/bread/norwegian-egg-benedict/#comments"
                                                    tabindex="-1"><i class="fas fa-comments"></i> 0</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="button" data-role="none" class="slick-next slick-arrow" aria-label="Next"
                                role="button" style="display: block;">Next
                        </button>
                    </div>
                    <div class="slider-nav-wrapper">
                        <div class="slider-wrapper slider-nav slick-initialized slick-slider">
                            <div aria-live="polite" class="slick-list draggable">
                                <div class="slick-track"
                                     style="opacity: 1; width: 1140px; transform: translate3d(0px, 0px, 0px);"
                                     role="listbox">
                                    <div class="slider slick-slide slick-active" data-slick-index="0"
                                         aria-hidden="false" style="width: 228px;" tabindex="-1" role="option"
                                         aria-describedby="slick-slide00">
                                        <div class="slider-bg">
                                            <div class="slider-bg-img"
                                                 style="background-image: url(&quot;https://tinysalt.loftocean.com/wp-content/uploads/2020/03/food-photographer-jennifer-pallian-6S27S6pZ6o0-unsplash.jpg&quot;);"></div>
                                        </div>
                                    </div>
                                    <div class="slider slick-slide slick-active" data-slick-index="1"
                                         aria-hidden="false" style="width: 228px;" tabindex="-1" role="option"
                                         aria-describedby="slick-slide01">
                                        <div class="slider-bg">
                                            <div class="slider-bg-img"
                                                 style="background-image: url(&quot;https://tinysalt.loftocean.com/wp-content/uploads/2020/07/monika-grabkowska-648019-unsplash-small.jpg&quot;);"></div>
                                        </div>
                                    </div>
                                    <div class="slider slick-slide slick-active" data-slick-index="2"
                                         aria-hidden="false" style="width: 228px;" tabindex="-1" role="option"
                                         aria-describedby="slick-slide02">
                                        <div class="slider-bg">
                                            <div class="slider-bg-img"
                                                 style="background-image: url(&quot;https://tinysalt.loftocean.com/wp-content/uploads/2020/03/sarah-gualtieri-oOakI-tutBM-unsplash.jpg&quot;);"></div>
                                        </div>
                                    </div>
                                    <div class="slider slick-slide slick-current slick-active" data-slick-index="3"
                                         aria-hidden="false" style="width: 228px;" tabindex="-1" role="option"
                                         aria-describedby="slick-slide03">
                                        <div class="slider-bg">
                                            <div class="slider-bg-img"
                                                 style="background-image: url(&quot;https://tinysalt.loftocean.com/wp-content/uploads/2020/07/taylor-kiser-6RJct18G_3I-unsplash-v3.jpg&quot;);"></div>
                                        </div>
                                    </div>
                                    <div class="slider slick-slide slick-active" data-slick-index="4"
                                         aria-hidden="false" style="width: 228px;" tabindex="-1" role="option"
                                         aria-describedby="slick-slide04">
                                        <div class="slider-bg">
                                            <div class="slider-bg-img"
                                                 style="background-image: url(&quot;https://tinysalt.loftocean.com/wp-content/uploads/2020/03/chris-ralston-482554-unsplash.jpg&quot;);"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div-->
                </div>
            </div><!-- .featured-section -->
            <div class="home-widgets-section">
                <div id="loftocean-homepage-widget-posts-7" class="home-widget default-color">
                    <div class="container">
                        <div class="section-header"><h5 class="section-title"  style="font-family: 'BMEULJIRO';font-size:24px;">가장 인기 있는 레시피</h5></div>
                        <div class="posts layout-grid style-overlay overlay-colorful column-2-3 large-title small-gap">
                            <div class="posts-wrapper">
                                <article
                                        class="post-84 post type-post status-publish format-standard has-post-thumbnail hentry category-sweet tag-bakery tag-easy tag-french-flavour tag-summer">
                                    <div class="featured-img"><a
                                            href="https://tinysalt.loftocean.com/sweet/almond-pastry-cookies/">
                                        <div class="featured-img-container"
                                             style="background-image: url(&quot;https://tinysalt.loftocean.com/wp-content/uploads/2020/03/kawin-harasai-69778-unsplash.jpg&quot;);"></div>
                                    </a></div>
                                    <div class="overlay-label time"><a
                                            href="https://tinysalt.loftocean.com/sweet/almond-pastry-cookies/">
                                        <time class="published" datetime="2020-03-19T03:54:10+00:00">March 19, 2020
                                        </time>
                                    </a></div>
                                    <div class="overlay-label like post-like" data-post-id="84" data-like-count="73"><i
                                            class="fas fa-heart"></i></div>
                                    <div class="post-content">
                                        <header class="post-header"><h2 class="post-title"><a
                                                href="#">단체식으로 여러개 라면 끌일 때</a></h2>
                                            <div><a
                                                    href="https://tinysalt.loftocean.com/category/sweet/" rel="tag">Sweet</a>
                                            </div>
                                            <div class="meta">
                                                <div class="meta-item comment-count"><a
                                                        href="https://tinysalt.loftocean.com/sweet/almond-pastry-cookies/#comments"><i
                                                        class="fas fa-comments"></i> 0</a></div>
                                            </div>
                                        </header>
                                    </div>
                                </article>
                                <article
                                        class="post-78 post type-post status-publish format-gallery has-post-thumbnail hentry category-appetizer category-soup post_format-post-format-gallery">
                                    <div class="featured-img"><a
                                            href="https://tinysalt.loftocean.com/soup/8-easy-instant-pot-recipes/">
                                        <div class="featured-img-container"
                                             style="background-image: url(&quot;https://tinysalt.loftocean.com/wp-content/uploads/2020/03/becca-tapert-YOpIDwj_-R4-unsplash.jpg&quot;);"></div>
                                    </a></div>
                                    <div class="overlay-label time"><a
                                            href="https://tinysalt.loftocean.com/soup/8-easy-instant-pot-recipes/">
                                        <time class="published" datetime="2020-03-19T03:45:02+00:00">March 19, 2020
                                        </time>
                                    </a></div>
                                    <div class="overlay-label format-label gallery-format"><i class="far fa-images"></i>
                                    </div>
                                    <div class="overlay-label like post-like" data-post-id="78" data-like-count="73"><i
                                            class="fas fa-heart"></i></div>
                                    <div class="post-content">
                                        <header class="post-header"><h2 class="post-title"><a
                                                href="https://tinysalt.loftocean.com/soup/8-easy-instant-pot-recipes/">간단하게 먹을수 있는 라면 8종류</a></h2>
                                            <div><a
                                                    href="https://tinysalt.loftocean.com/category/appetizer/" rel="tag">Appetizer</a>
                                                / <a href="https://tinysalt.loftocean.com/category/soup/"
                                                     rel="tag">Soup</a></div>
                                            <div class="meta">
                                                <div class="meta-item comment-count"><a
                                                        href="https://tinysalt.loftocean.com/soup/8-easy-instant-pot-recipes/#comments"><i
                                                        class="fas fa-comments"></i> 2</a></div>
                                            </div>
                                        </header>
                                    </div>
                                </article>
                                <article
                                        class="post-51 post type-post status-publish format-gallery has-post-thumbnail hentry category-bread category-sweet tag-autumn tag-bakery tag-french-flavour tag-healthy tag-medium tag-spring post_format-post-format-gallery">
                                    <div class="featured-img"><a
                                            href="https://tinysalt.loftocean.com/bread/favourite-molten-chocolate-cake/">
                                        <div class="featured-img-container"
                                             style="background-image: url(&quot;https://tinysalt.loftocean.com/wp-content/uploads/2020/03/dale-gray-HDi8KXLm6kg-unsplash.jpg&quot;);"></div>
                                    </a></div>
                                    <div class="overlay-label time"><a
                                            href="https://tinysalt.loftocean.com/bread/favourite-molten-chocolate-cake/">
                                        <time class="published" datetime="2020-03-18T10:56:42+00:00">March 18, 2020
                                        </time>
                                    </a></div>
                                    <div class="overlay-label format-label gallery-format"><i class="far fa-images"></i>
                                    </div>
                                    <div class="overlay-label like post-like" data-post-id="51" data-like-count="72"><i
                                            class="fas fa-heart"></i></div>
                                    <div class="post-content">
                                        <header class="post-header"><h2 class="post-title"><a
                                                href="https://tinysalt.loftocean.com/bread/favourite-molten-chocolate-cake/">김치오모리 라면을 즐겨보세요</a></h2>
                                            <div><a
                                                    href="https://tinysalt.loftocean.com/category/bread/" rel="tag">Bread</a>
                                                / <a href="https://tinysalt.loftocean.com/category/sweet/" rel="tag">Sweet</a>
                                            </div>
                                            <div class="meta">
                                                <div class="meta-item comment-count"><a
                                                        href="https://tinysalt.loftocean.com/bread/favourite-molten-chocolate-cake/#comments"><i
                                                        class="fas fa-comments"></i> 0</a></div>
                                            </div>
                                        </header>
                                    </div>
                                </article>
                                <article
                                        class="post-86 post type-post status-publish format-standard has-post-thumbnail hentry category-bread category-sweet tag-bakery tag-french-flavour tag-medium">
                                    <div class="featured-img"><a
                                            href="https://tinysalt.loftocean.com/bread/rustic-crusty-bread/">
                                        <div class="featured-img-container"
                                             style="background-image: url(&quot;https://tinysalt.loftocean.com/wp-content/uploads/2020/03/food-photographer-jennifer-pallian-QsGtVwWStI8-unsplash.jpg&quot;);"></div>
                                    </a></div>
                                    <div class="overlay-label time"><a
                                            href="https://tinysalt.loftocean.com/bread/rustic-crusty-bread/">
                                        <time class="published" datetime="2020-03-19T04:28:29+00:00">March 19, 2020
                                        </time>
                                    </a></div>
                                    <div class="overlay-label like post-like" data-post-id="86" data-like-count="72"><i
                                            class="fas fa-heart"></i></div>
                                    <div class="post-content">
                                        <header class="post-header"><h2 class="post-title"><a
                                                href="https://tinysalt.loftocean.com/bread/rustic-crusty-bread/">편의점 라면 추천3종</a></h2>
                                            <div><a
                                                    href="https://tinysalt.loftocean.com/category/bread/" rel="tag">Bread</a>
                                                / <a href="https://tinysalt.loftocean.com/category/sweet/" rel="tag">Sweet</a>
                                            </div>
                                            <div class="meta">
                                                <div class="meta-item comment-count"><a
                                                        href="https://tinysalt.loftocean.com/bread/rustic-crusty-bread/#comments"><i
                                                        class="fas fa-comments"></i> 0</a></div>
                                            </div>
                                        </header>
                                    </div>
                                </article>
                                <article
                                        class="post-69 post type-post status-publish format-standard has-post-thumbnail hentry category-appetizer category-bread tag-easy tag-quick-meal tag-summer tag-vegetable">
                                    <div class="featured-img"><a
                                            href="https://tinysalt.loftocean.com/bread/10-minutes-magic-orange-sauce/">
                                        <div class="featured-img-container"
                                             style="background-image: url(&quot;https://tinysalt.loftocean.com/wp-content/uploads/2020/03/taylor-kiser-6RJct18G_3I-unsplash-scaled.jpg&quot;);"></div>
                                    </a></div>
                                    <div class="overlay-label time"><a
                                            href="https://tinysalt.loftocean.com/bread/10-minutes-magic-orange-sauce/">
                                        <time class="published" datetime="2020-03-19T03:07:22+00:00">March 19, 2020
                                        </time>
                                    </a></div>
                                    <div class="overlay-label like post-like" data-post-id="69" data-like-count="65"><i
                                            class="fas fa-heart"></i></div>
                                    <div class="post-content">
                                        <header class="post-header"><h2 class="post-title"><a
                                                href="https://tinysalt.loftocean.com/bread/10-minutes-magic-orange-sauce/">3분만에 즐기는 라면!</a></h2>
                                            <div><a
                                                    href="https://tinysalt.loftocean.com/category/appetizer/" rel="tag">Appetizer</a>
                                                / <a href="https://tinysalt.loftocean.com/category/bread/" rel="tag">Bread</a>
                                            </div>
                                            <div class="meta">
                                                <div class="meta-item comment-count"><a
                                                        href="https://tinysalt.loftocean.com/bread/10-minutes-magic-orange-sauce/#comments"><i
                                                        class="fas fa-comments"></i> 0</a></div>
                                            </div>
                                        </header>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="loftocean-homepage-widget-featured-category-3"
                     class="home-widget featured-categories column-8 light-color" style="background-color: #fcf9f5;">
                    <div class="container">
                        <div class="section-content">
                            <div class="widget tinysalt-widget_cat">
                                <div class="catwidget">
                                    <div class="cat"><a href="https://tinysalt.loftocean.com/category/appetizer/">
                                        <div class="cat-bg"
                                             style="background-image: url(&quot;https://tinysalt.loftocean.com/wp-content/uploads/2020/03/claudia-crespo-1190744-unsplash-600x600.jpg&quot;);"></div>
                                        <div class="cat-meta"><span class="category-name">Appetizer</span></div>
                                    </a></div>
                                    <div class="cat"><a href="https://tinysalt.loftocean.com/category/beverages/">
                                        <div class="cat-bg"
                                             style="background-image: url(&quot;https://tinysalt.loftocean.com/wp-content/uploads/2020/03/food-photographer-jennifer-pallian-sSnCZlEWN5E-unsplash-600x600.jpg&quot;);"></div>
                                        <div class="cat-meta"><span class="category-name">Beverages</span></div>
                                    </a></div>
                                    <div class="cat"><a href="https://tinysalt.loftocean.com/category/bread/">
                                        <div class="cat-bg"
                                             style="background-image: url(&quot;https://tinysalt.loftocean.com/wp-content/uploads/2020/03/food-photographer-jennifer-pallian-QsGtVwWStI8-unsplash-600x600.jpg&quot;);"></div>
                                        <div class="cat-meta"><span class="category-name">Bread</span></div>
                                    </a></div>
                                    <div class="cat"><a href="https://tinysalt.loftocean.com/category/pasta/">
                                        <div class="cat-bg"
                                             style="background-image: url(&quot;https://tinysalt.loftocean.com/wp-content/uploads/2020/03/christine-siracusa-Cs5xVwB50Ps-unsplash-600x600.jpg&quot;);"></div>
                                        <div class="cat-meta"><span class="category-name">Pasta</span></div>
                                    </a></div>
                                    <div class="cat"><a href="https://tinysalt.loftocean.com/category/salad/">
                                        <div class="cat-bg"
                                             style="background-image: url(&quot;https://tinysalt.loftocean.com/wp-content/uploads/2020/03/brooke-lark-229136-unsplash-600x600.jpg&quot;);"></div>
                                        <div class="cat-meta"><span class="category-name">Salad</span></div>
                                    </a></div>
                                    <div class="cat"><a href="https://tinysalt.loftocean.com/category/soup/">
                                        <div class="cat-bg"
                                             style="background-image: url(&quot;https://tinysalt.loftocean.com/wp-content/uploads/2020/03/monika-grabkowska-w-R_sfcakP0-unsplash-600x600.jpg&quot;);"></div>
                                        <div class="cat-meta"><span class="category-name">Soup</span></div>
                                    </a></div>
                                    <div class="cat"><a href="https://tinysalt.loftocean.com/category/sweet/">
                                        <div class="cat-bg"
                                             style="background-image: url(&quot;https://tinysalt.loftocean.com/wp-content/uploads/2020/03/dale-gray-HDi8KXLm6kg-unsplash-600x600.jpg&quot;);"></div>
                                        <div class="cat-meta"><span class="category-name">Sweet</span></div>
                                    </a></div>
                                    <div class="cat"><a href="https://tinysalt.loftocean.com/category/vegan/">
                                        <div class="cat-bg"
                                             style="background-image: url(&quot;https://tinysalt.loftocean.com/wp-content/uploads/2020/03/monika-grabkowska-PnlAbZ17GpE-unsplash-600x600.jpg&quot;);"></div>
                                        <div class="cat-meta"><span class="category-name">Vegan</span></div>
                                    </a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main">
                <div class="container">
                    <div id="primary" class="primary content-area">
                        <div class="section-header"><h5 class="section-title">라면 소식</h5></div>
                        <div class="posts layout-grid img-ratio-1-1 style-normal column-2 large-title">
                            <div class="posts-wrapper">
                                <article
                                        class="post-232 post type-post status-publish format-standard has-post-thumbnail hentry category-beverages category-sweet tag-fruit tag-healthy tag-quick-meal tag-summer">
                                    <div class="featured-img"><a
                                            href="https://tinysalt.loftocean.com/sweet/brain-power-blueberry-smoothie/">
                                        <div class="featured-img-container"
                                             style="background-image: url(&quot;https://image.chosun.com/sitedata/image/202004/08/2020040802404_0.png&quot;);"></div>
                                    </a>
                                        <div class="overlay-label time"><a
                                                href="https://tinysalt.loftocean.com/sweet/brain-power-blueberry-smoothie/">
                                            <time class="published" datetime="2020-03-22T03:13:53+00:00">March 22,
                                                2020
                                            </time>
                                        </a></div>
                                        <div class="overlay-label like post-like" data-post-id="232"
                                             data-like-count="7"><i class="fas fa-heart"></i></div>
                                    </div>
                                    <div class="post-content">
                                        <header class="post-header"><h2 class="post-title"><a
                                                href="https://tinysalt.loftocean.com/sweet/brain-power-blueberry-smoothie/">농심 '칼빔면' 출시!</a></h2>
                                            <div><a
                                                    href="https://tinysalt.loftocean.com/category/beverages/" rel="tag">Beverages</a>
                                                / <a href="https://tinysalt.loftocean.com/category/sweet/" rel="tag">Sweet</a>
                                            </div>
                                            <div class="meta">
                                                <div class="meta-item comment-count"><a
                                                        href="https://tinysalt.loftocean.com/sweet/brain-power-blueberry-smoothie/#comments"><i
                                                        class="fas fa-comments"></i> 4</a></div>
                                            </div>
                                        </header>
                                        <div class="post-excerpt"><p>농심은 새롭게 출시한 ‘칼빔면’ 5000 세트가 6시간 만에 완판됐다고 8일 밝혔다.

                                            농심은 이날 0시부터 온라인 쇼핑몰 11번가에서 칼빔면 한정판 세트를 판매했다. 추후 2차 판매도 준비 중이다. …</p></div>
                                        <footer class="post-footer">
                                            <div class="more-btn"><a class="read-more-btn"
                                                                     href="https://tinysalt.loftocean.com/sweet/brain-power-blueberry-smoothie/"><span>Read More</span></a>
                                            </div>
                                        </footer>
                                    </div>
                                </article>
                                <article
                                        class="post-94 post type-post status-publish format-standard has-post-thumbnail hentry category-beverages tag-cold tag-drinks tag-easy tag-summer tag-tea">
                                    <div class="featured-img"><a
                                            href="https://tinysalt.loftocean.com/beverages/rose-syrup-ice-tea/">
                                        <div class="featured-img-container"
                                             style="background-image: url(&quot;https://tinysalt.loftocean.com/wp-content/uploads/2020/03/food-photographer-jennifer-pallian-sSnCZlEWN5E-unsplash-1440x1801.jpg&quot;);"></div>
                                    </a>
                                        <div class="overlay-label time"><a
                                                href="https://tinysalt.loftocean.com/beverages/rose-syrup-ice-tea/">
                                            <time class="published" datetime="2020-03-19T04:40:50+00:00">March 19,
                                                2020
                                            </time>
                                        </a></div>
                                        <div class="overlay-label like post-like" data-post-id="94"
                                             data-like-count="41"><i class="fas fa-heart"></i></div>
                                    </div>
                                    <div class="post-content">
                                        <header class="post-header"><h2 class="post-title"><a
                                                href="https://tinysalt.loftocean.com/beverages/rose-syrup-ice-tea/">Rose
                                            Syrup Ice Tea</a></h2>
                                            <div><a
                                                    href="https://tinysalt.loftocean.com/category/beverages/" rel="tag">Beverages</a>
                                            </div>
                                            <div class="meta">
                                                <div class="meta-item comment-count"><a
                                                        href="https://tinysalt.loftocean.com/beverages/rose-syrup-ice-tea/#comments"><i
                                                        class="fas fa-comments"></i> 0</a></div>
                                            </div>
                                        </header>
                                        <div class="post-excerpt"><p>Vestibulum ante ipsum primis in faucibus orci
                                            luctus et ultrices posuere cubilia Curae; Fusce porttitor metus eget lectus
                                            consequat, sit amet feugiat magna vulputate. Phasellus …</p></div>
                                        <footer class="post-footer">
                                            <div class="more-btn"><a class="read-more-btn"
                                                                     href="https://tinysalt.loftocean.com/beverages/rose-syrup-ice-tea/"><span>Read More</span></a>
                                            </div>
                                        </footer>
                                    </div>
                                </article>
                                <article
                                        class="post-91 post type-post status-publish format-standard has-post-thumbnail hentry category-pasta tag-main-course tag-meat tag-medium tag-spaghetti tag-spring">
                                    <div class="featured-img"><a
                                            href="https://tinysalt.loftocean.com/pasta/the-best-spaghetti-meat-sauce/">
                                        <div class="featured-img-container"
                                             style="background-image: url(&quot;https://tinysalt.loftocean.com/wp-content/uploads/2020/03/food-photographer-jennifer-pallian-6S27S6pZ6o0-unsplash-1440x2160.jpg&quot;);"></div>
                                    </a>
                                        <div class="overlay-label time"><a
                                                href="https://tinysalt.loftocean.com/pasta/the-best-spaghetti-meat-sauce/">
                                            <time class="published" datetime="2020-03-19T04:37:50+00:00">March 19,
                                                2020
                                            </time>
                                        </a></div>
                                        <div class="overlay-label like post-like" data-post-id="91"
                                             data-like-count="27"><i class="fas fa-heart"></i></div>
                                    </div>
                                    <div class="post-content">
                                        <header class="post-header"><h2 class="post-title"><a
                                                href="https://tinysalt.loftocean.com/pasta/the-best-spaghetti-meat-sauce/">The
                                            Best Spaghetti Meat Sauce</a></h2>
                                            <div><a
                                                    href="https://tinysalt.loftocean.com/category/pasta/" rel="tag">Pasta</a>
                                            </div>
                                            <div class="meta">
                                                <div class="meta-item comment-count"><a
                                                        href="https://tinysalt.loftocean.com/pasta/the-best-spaghetti-meat-sauce/#comments"><i
                                                        class="fas fa-comments"></i> 3</a></div>
                                            </div>
                                        </header>
                                        <div class="post-excerpt"><p>Vestibulum ante ipsum primis in faucibus orci
                                            luctus et ultrices posuere cubilia Curae; Fusce porttitor metus eget lectus
                                            consequat, sit amet feugiat magna vulputate. Phasellus …</p></div>
                                        <footer class="post-footer">
                                            <div class="more-btn"><a class="read-more-btn"
                                                                     href="https://tinysalt.loftocean.com/pasta/the-best-spaghetti-meat-sauce/"><span>Read More</span></a>
                                            </div>
                                        </footer>
                                    </div>
                                </article>
                                <article
                                        class="post-89 post type-post status-publish format-standard has-post-thumbnail hentry category-vegan tag-cold tag-easy tag-quick-meal tag-summer tag-vegetable">
                                    <div class="featured-img"><a
                                            href="https://tinysalt.loftocean.com/vegan/pickled-summer-vegetables/">
                                        <div class="featured-img-container"
                                             style="background-image: url(&quot;https://tinysalt.loftocean.com/wp-content/uploads/2020/03/monika-grabkowska-648019-unsplash-scaled.jpg&quot;);"></div>
                                    </a>
                                        <div class="overlay-label time"><a
                                                href="https://tinysalt.loftocean.com/vegan/pickled-summer-vegetables/">
                                            <time class="published" datetime="2020-03-19T04:32:20+00:00">March 19,
                                                2020
                                            </time>
                                        </a></div>
                                        <div class="overlay-label like post-like" data-post-id="89"
                                             data-like-count="47"><i class="fas fa-heart"></i></div>
                                    </div>
                                    <div class="post-content">
                                        <header class="post-header"><h2 class="post-title"><a
                                                href="https://tinysalt.loftocean.com/vegan/pickled-summer-vegetables/">Pickled
                                            Summer Vegetables</a></h2>
                                            <div><a
                                                    href="https://tinysalt.loftocean.com/category/vegan/" rel="tag">Vegan</a>
                                            </div>
                                            <div class="meta">
                                                <div class="meta-item comment-count"><a
                                                        href="https://tinysalt.loftocean.com/vegan/pickled-summer-vegetables/#comments"><i
                                                        class="fas fa-comments"></i> 0</a></div>
                                            </div>
                                        </header>
                                        <div class="post-excerpt"><p>Etiam sed enim vitae magna pretium tincidunt eget
                                            vel massa. Maecenas porttitor at risus sit amet facilisis. Cras et elit id
                                            velit semper bibendum et …</p></div>
                                        <footer class="post-footer">
                                            <div class="more-btn"><a class="read-more-btn"
                                                                     href="https://tinysalt.loftocean.com/vegan/pickled-summer-vegetables/"><span>Read More</span></a>
                                            </div>
                                        </footer>
                                    </div>
                                </article>
                                <article
                                        class="post-86 post type-post status-publish format-standard has-post-thumbnail hentry category-bread category-sweet tag-bakery tag-french-flavour tag-medium">
                                    <div class="featured-img"><a
                                            href="https://tinysalt.loftocean.com/bread/rustic-crusty-bread/">
                                        <div class="featured-img-container"
                                             style="background-image: url(&quot;https://tinysalt.loftocean.com/wp-content/uploads/2020/03/food-photographer-jennifer-pallian-QsGtVwWStI8-unsplash-1440x1800.jpg&quot;);"></div>
                                    </a>
                                        <div class="overlay-label time"><a
                                                href="https://tinysalt.loftocean.com/bread/rustic-crusty-bread/">
                                            <time class="published" datetime="2020-03-19T04:28:29+00:00">March 19,
                                                2020
                                            </time>
                                        </a></div>
                                        <div class="overlay-label like post-like" data-post-id="86"
                                             data-like-count="72"><i class="fas fa-heart"></i></div>
                                    </div>
                                    <div class="post-content">
                                        <header class="post-header"><h2 class="post-title"><a
                                                href="https://tinysalt.loftocean.com/bread/rustic-crusty-bread/">Rustic
                                            Crusty Bread</a></h2>
                                            <div><a
                                                    href="https://tinysalt.loftocean.com/category/bread/" rel="tag">Bread</a>
                                                / <a href="https://tinysalt.loftocean.com/category/sweet/" rel="tag">Sweet</a>
                                            </div>
                                            <div class="meta">
                                                <div class="meta-item comment-count"><a
                                                        href="https://tinysalt.loftocean.com/bread/rustic-crusty-bread/#comments"><i
                                                        class="fas fa-comments"></i> 0</a></div>
                                            </div>
                                        </header>
                                        <div class="post-excerpt"><p>Aenean quam nunc, condimentum quis orci quis.
                                            Quisque faucibus est purus, et gravida urna molestie eget. Suspendisse vel
                                            leo est. Duis blandit rhoncus nisi, eget …</p></div>
                                        <footer class="post-footer">
                                            <div class="more-btn"><a class="read-more-btn"
                                                                     href="https://tinysalt.loftocean.com/bread/rustic-crusty-bread/"><span>Read More</span></a>
                                            </div>
                                        </footer>
                                    </div>
                                </article>
                                <article
                                        class="post-84 post type-post status-publish format-standard has-post-thumbnail hentry category-sweet tag-bakery tag-easy tag-french-flavour tag-summer">
                                    <div class="featured-img"><a
                                            href="https://tinysalt.loftocean.com/sweet/almond-pastry-cookies/">
                                        <div class="featured-img-container"
                                             style="background-image: url(&quot;https://tinysalt.loftocean.com/wp-content/uploads/2020/03/kawin-harasai-69778-unsplash-1440x1034.jpg&quot;);"></div>
                                    </a>
                                        <div class="overlay-label time"><a
                                                href="https://tinysalt.loftocean.com/sweet/almond-pastry-cookies/">
                                            <time class="published" datetime="2020-03-19T03:54:10+00:00">March 19,
                                                2020
                                            </time>
                                        </a></div>
                                        <div class="overlay-label like post-like" data-post-id="84"
                                             data-like-count="73"><i class="fas fa-heart"></i></div>
                                    </div>
                                    <div class="post-content">
                                        <header class="post-header"><h2 class="post-title"><a
                                                href="https://tinysalt.loftocean.com/sweet/almond-pastry-cookies/">Almond
                                            Pastry Cookies</a></h2>
                                            <div><a
                                                    href="https://tinysalt.loftocean.com/category/sweet/" rel="tag">Sweet</a>
                                            </div>
                                            <div class="meta">
                                                <div class="meta-item comment-count"><a
                                                        href="https://tinysalt.loftocean.com/sweet/almond-pastry-cookies/#comments"><i
                                                        class="fas fa-comments"></i> 0</a></div>
                                            </div>
                                        </header>
                                        <div class="post-excerpt"><p>Vestibulum ante ipsum primis in faucibus orci
                                            luctus et ultrices posuere cubilia Curae; Fusce porttitor metus eget lectus
                                            consequat, sit amet feugiat magna vulputate. Phasellus …</p></div>
                                        <footer class="post-footer">
                                            <div class="more-btn"><a class="read-more-btn"
                                                                     href="https://tinysalt.loftocean.com/sweet/almond-pastry-cookies/"><span>Read More</span></a>
                                            </div>
                                        </footer>
                                    </div>
                                </article>
                                <article
                                        class="post-82 post type-post status-publish format-standard has-post-thumbnail hentry category-bread category-vegan tag-bakery tag-easy tag-quick-meal tag-spring tag-toast">
                                    <div class="featured-img"><a
                                            href="https://tinysalt.loftocean.com/bread/perfect-avocado-toast-for-breakfast/">
                                        <div class="featured-img-container"
                                             style="background-image: url(&quot;https://tinysalt.loftocean.com/wp-content/uploads/2020/03/mariana-medvedeva-379625-unsplash-1440x1920.jpg&quot;);"></div>
                                    </a>
                                        <div class="overlay-label time"><a
                                                href="https://tinysalt.loftocean.com/bread/perfect-avocado-toast-for-breakfast/">
                                            <time class="published" datetime="2020-03-19T03:49:43+00:00">March 19,
                                                2020
                                            </time>
                                        </a></div>
                                        <div class="overlay-label like post-like" data-post-id="82"
                                             data-like-count="33"><i class="fas fa-heart"></i></div>
                                    </div>
                                    <div class="post-content">
                                        <header class="post-header"><h2 class="post-title"><a
                                                href="https://tinysalt.loftocean.com/bread/perfect-avocado-toast-for-breakfast/">Perfect
                                            avocado toast for breakfast</a></h2>
                                            <div><a
                                                    href="https://tinysalt.loftocean.com/category/bread/" rel="tag">Bread</a>
                                                / <a href="https://tinysalt.loftocean.com/category/vegan/" rel="tag">Vegan</a>
                                            </div>
                                            <div class="meta">
                                                <div class="meta-item comment-count"><a
                                                        href="https://tinysalt.loftocean.com/bread/perfect-avocado-toast-for-breakfast/#comments"><i
                                                        class="fas fa-comments"></i> 0</a></div>
                                            </div>
                                        </header>
                                        <div class="post-excerpt"><p>Vestibulum ante ipsum primis in faucibus orci
                                            luctus et ultrices posuere cubilia Curae; Fusce porttitor metus eget lectus
                                            consequat, sit amet feugiat magna vulputate. Phasellus …</p></div>
                                        <footer class="post-footer">
                                            <div class="more-btn"><a class="read-more-btn"
                                                                     href="https://tinysalt.loftocean.com/bread/perfect-avocado-toast-for-breakfast/"><span>Read More</span></a>
                                            </div>
                                        </footer>
                                    </div>
                                </article>
                                <article
                                        class="post-78 post type-post status-publish format-gallery has-post-thumbnail hentry category-appetizer category-soup post_format-post-format-gallery">
                                    <div class="featured-img"><a
                                            href="https://tinysalt.loftocean.com/soup/8-easy-instant-pot-recipes/">
                                        <div class="featured-img-container"
                                             style="background-image: url(&quot;https://tinysalt.loftocean.com/wp-content/uploads/2020/03/becca-tapert-YOpIDwj_-R4-unsplash-1440x960.jpg&quot;);"></div>
                                    </a>
                                        <div class="overlay-label time"><a
                                                href="https://tinysalt.loftocean.com/soup/8-easy-instant-pot-recipes/">
                                            <time class="published" datetime="2020-03-19T03:45:02+00:00">March 19,
                                                2020
                                            </time>
                                        </a></div>
                                        <div class="overlay-label format-label gallery-format"><i
                                                class="far fa-images"></i></div>
                                        <div class="overlay-label like post-like" data-post-id="78"
                                             data-like-count="73"><i class="fas fa-heart"></i></div>
                                    </div>
                                    <div class="post-content">
                                        <header class="post-header"><h2 class="post-title"><a
                                                href="https://tinysalt.loftocean.com/soup/8-easy-instant-pot-recipes/">8
                                            Easy Instant Pot Recipes</a></h2>
                                            <div><a
                                                    href="https://tinysalt.loftocean.com/category/appetizer/" rel="tag">Appetizer</a>
                                                / <a href="https://tinysalt.loftocean.com/category/soup/"
                                                     rel="tag">Soup</a></div>
                                            <div class="meta">
                                                <div class="meta-item comment-count"><a
                                                        href="https://tinysalt.loftocean.com/soup/8-easy-instant-pot-recipes/#comments"><i
                                                        class="fas fa-comments"></i> 2</a></div>
                                            </div>
                                        </header>
                                        <div class="post-excerpt"><p>Vestibulum ante ipsum primis in faucibus orci
                                            luctus et ultrices posuere cubilia Curae; Fusce porttitor metus eget lectus
                                            consequat, sit amet feugiat magna vulputate. Phasellus …</p></div>
                                        <footer class="post-footer">
                                            <div class="more-btn"><a class="read-more-btn"
                                                                     href="https://tinysalt.loftocean.com/soup/8-easy-instant-pot-recipes/"><span>Read More</span></a>
                                            </div>
                                        </footer>
                                    </div>
                                </article>
                                <article
                                        class="post-76 post type-post status-publish format-standard has-post-thumbnail hentry category-appetizer category-vegan tag-easy tag-quick-meal tag-vegetable">
                                    <div class="featured-img"><a
                                            href="https://tinysalt.loftocean.com/appetizer/flat-irons-skillet-potatoes/">
                                        <div class="featured-img-container"
                                             style="background-image: url(&quot;https://tinysalt.loftocean.com/wp-content/uploads/2020/03/sarah-gualtieri-oOakI-tutBM-unsplash-1440x2161.jpg&quot;);"></div>
                                    </a>
                                        <div class="overlay-label time"><a
                                                href="https://tinysalt.loftocean.com/appetizer/flat-irons-skillet-potatoes/">
                                            <time class="published" datetime="2020-03-19T03:39:31+00:00">March 19,
                                                2020
                                            </time>
                                        </a></div>
                                        <div class="overlay-label like post-like" data-post-id="76"
                                             data-like-count="23"><i class="fas fa-heart"></i></div>
                                    </div>
                                    <div class="post-content">
                                        <header class="post-header"><h2 class="post-title"><a
                                                href="https://tinysalt.loftocean.com/appetizer/flat-irons-skillet-potatoes/">Flat
                                            Irons Skillet Potatoes</a></h2>
                                            <div><a
                                                    href="https://tinysalt.loftocean.com/category/appetizer/" rel="tag">Appetizer</a>
                                                / <a href="https://tinysalt.loftocean.com/category/vegan/" rel="tag">Vegan</a>
                                            </div>
                                            <div class="meta">
                                                <div class="meta-item comment-count"><a
                                                        href="https://tinysalt.loftocean.com/appetizer/flat-irons-skillet-potatoes/#comments"><i
                                                        class="fas fa-comments"></i> 3</a></div>
                                            </div>
                                        </header>
                                        <div class="post-excerpt"><p>Vestibulum ante ipsum primis in faucibus orci
                                            luctus et ultrices posuere cubilia Curae; Fusce porttitor metus eget lectus
                                            consequat, sit amet feugiat magna vulputate. Phasellus …</p></div>
                                        <footer class="post-footer">
                                            <div class="more-btn"><a class="read-more-btn"
                                                                     href="https://tinysalt.loftocean.com/appetizer/flat-irons-skillet-potatoes/"><span>Read More</span></a>
                                            </div>
                                        </footer>
                                    </div>
                                </article>
                                <article
                                        class="post-73 post type-post status-publish format-standard has-post-thumbnail hentry category-bread category-sweet">
                                    <div class="featured-img"><a
                                            href="https://tinysalt.loftocean.com/bread/kouign-amann-french-pastries/">
                                        <div class="featured-img-container"
                                             style="background-image: url(&quot;https://tinysalt.loftocean.com/wp-content/uploads/2020/03/monika-grabkowska-318700-unsplash-1440x2179.jpg&quot;);"></div>
                                    </a>
                                        <div class="overlay-label time"><a
                                                href="https://tinysalt.loftocean.com/bread/kouign-amann-french-pastries/">
                                            <time class="published" datetime="2020-03-19T03:24:44+00:00">March 19,
                                                2020
                                            </time>
                                        </a></div>
                                        <div class="overlay-label like post-like" data-post-id="73"
                                             data-like-count="61"><i class="fas fa-heart"></i></div>
                                    </div>
                                    <div class="post-content">
                                        <header class="post-header"><h2 class="post-title"><a
                                                href="https://tinysalt.loftocean.com/bread/kouign-amann-french-pastries/">Kouign-Amann
                                            French Pastries</a></h2>
                                            <div><a
                                                    href="https://tinysalt.loftocean.com/category/bread/" rel="tag">Bread</a>
                                                / <a href="https://tinysalt.loftocean.com/category/sweet/" rel="tag">Sweet</a>
                                            </div>
                                            <div class="meta">
                                                <div class="meta-item comment-count"><a
                                                        href="https://tinysalt.loftocean.com/bread/kouign-amann-french-pastries/#comments"><i
                                                        class="fas fa-comments"></i> 0</a></div>
                                            </div>
                                        </header>
                                        <div class="post-excerpt"><p>Vestibulum ante ipsum primis in faucibus orci
                                            luctus et ultrices posuere cubilia Curae; Fusce porttitor metus eget lectus
                                            consequat, sit amet feugiat magna vulputate. Phasellus …</p></div>
                                        <footer class="post-footer">
                                            <div class="more-btn"><a class="read-more-btn"
                                                                     href="https://tinysalt.loftocean.com/bread/kouign-amann-french-pastries/"><span>Read More</span></a>
                                            </div>
                                        </footer>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <nav class="navigation pagination">
                            <div class="pagination-container load-more"><h2 class="screen-reader-text">Posts
                                Navigation</h2>                <a href="#" data-no-post-text="No More Posts"
                                                                  class="load-more-btn ajax manual"> <span>Load More Posts</span>
                            </a>
                                <div class="tinysalt-loader">
                                    <div id="loader"><span></span></div>
                                    <div id="loader-message">Loading</div>
                                </div>
                            </div>
                        </nav>
                    </div>                            <!-- .sidebar .widget-area -->
                    <aside id="secondary" class="sidebar widget-area sidebar-sticky" data-sticky="sidebar-sticky">
                        <!-- .sidebar-container -->
                        <div class="sidebar-container" style="">

                            <div id="loftocean-widget-ad-3" class="widget tinysal-widget_ad" style="padding-top:82px;"><a
                                    href="https://1.envato.market/agD4M" target="_blank"> <img
                                    src="https://tinysalt.loftocean.com/wp-content/uploads/2020/03/ad-1.jpg" alt="ad-1"
                                    srcset="https://tinysalt.loftocean.com/wp-content/uploads/2020/03/ad-1.jpg 600w, https://tinysalt.loftocean.com/wp-content/uploads/2020/03/ad-1-200x300.jpg 200w"
                                    sizes="(max-width: 600px) 100vw, 600px"> </a>
                            </div>
                            <div id="loftocean-widget-posts-4" class="small-thumbnail widget tinysalt-widget_posts"><h5
                                    class="widget-title">Vegan Recipes</h5>
                                <ul>
                                    <li><a href="https://tinysalt.loftocean.com/vegan/pickled-summer-vegetables/"
                                           class="post-link">
                                        <div class="thumbnail"><img width="150" height="150"
                                                                    src="https://tinysalt.loftocean.com/wp-content/uploads/2020/03/monika-grabkowska-648019-unsplash-150x150.jpg"
                                                                    class="attachment-thumbnail size-thumbnail wp-post-image"
                                                                    alt=""></div>
                                        <div class="post-content"><h4 class="post-title">Pickled Summer Vegetables</h4>
                                            <div class="meta"><span class="meta-item">March 19, 2020</span></div>
                                        </div>
                                    </a></li>
                                    <li>
                                        <a href="https://tinysalt.loftocean.com/bread/perfect-avocado-toast-for-breakfast/"
                                           class="post-link">
                                            <div class="thumbnail"><img width="150" height="150"
                                                                        src="https://tinysalt.loftocean.com/wp-content/uploads/2020/03/mariana-medvedeva-379625-unsplash-150x150.jpg"
                                                                        class="attachment-thumbnail size-thumbnail wp-post-image"
                                                                        alt=""
                                                                        srcset="https://tinysalt.loftocean.com/wp-content/uploads/2020/03/mariana-medvedeva-379625-unsplash-150x150.jpg 150w, https://tinysalt.loftocean.com/wp-content/uploads/2020/03/mariana-medvedeva-379625-unsplash-500x500.jpg 500w, https://tinysalt.loftocean.com/wp-content/uploads/2020/03/mariana-medvedeva-379625-unsplash-600x600.jpg 600w, https://tinysalt.loftocean.com/wp-content/uploads/2020/03/mariana-medvedeva-379625-unsplash-300x300.jpg 300w"
                                                                        sizes="(max-width: 150px) 100vw, 150px"></div>
                                            <div class="post-content"><h4 class="post-title">Perfect avocado toast for
                                                breakfast</h4>
                                                <div class="meta"><span class="meta-item">March 19, 2020</span></div>
                                            </div>
                                        </a></li>
                                    <li><a href="https://tinysalt.loftocean.com/appetizer/flat-irons-skillet-potatoes/"
                                           class="post-link">
                                        <div class="thumbnail"><img width="150" height="150"
                                                                    src="https://tinysalt.loftocean.com/wp-content/uploads/2020/03/sarah-gualtieri-oOakI-tutBM-unsplash-150x150.jpg"
                                                                    class="attachment-thumbnail size-thumbnail wp-post-image"
                                                                    alt=""
                                                                    srcset="https://tinysalt.loftocean.com/wp-content/uploads/2020/03/sarah-gualtieri-oOakI-tutBM-unsplash-150x150.jpg 150w, https://tinysalt.loftocean.com/wp-content/uploads/2020/03/sarah-gualtieri-oOakI-tutBM-unsplash-500x500.jpg 500w, https://tinysalt.loftocean.com/wp-content/uploads/2020/03/sarah-gualtieri-oOakI-tutBM-unsplash-600x600.jpg 600w, https://tinysalt.loftocean.com/wp-content/uploads/2020/03/sarah-gualtieri-oOakI-tutBM-unsplash-300x300.jpg 300w"
                                                                    sizes="(max-width: 150px) 100vw, 150px"></div>
                                        <div class="post-content"><h4 class="post-title">Flat Irons Skillet
                                            Potatoes</h4>
                                            <div class="meta"><span class="meta-item">March 19, 2020</span></div>
                                        </div>
                                    </a></li>
                                </ul>
                            </div>
                            <div id="mc4wp_form_widget-2" class="widget widget_mc4wp_form_widget"><h5
                                    class="widget-title">Never Miss A Recipe!</h5>

                                <!-- Mailchimp for WordPress v4.7.7 - https://wordpress.org/plugins/mailchimp-for-wp/ -->
                                <form id="mc4wp-form-1" class="mc4wp-form mc4wp-form-101" method="post" data-id="101"
                                      data-name="Never Miss a Recipe!">
                                    <div class="mc4wp-form-fields"><p> Join thousands of TinySalt subscribers and get
                                        our best recipes delivered each week! </p>
                                        <div class="fields-container"><input type="email" name="EMAIL"
                                                                             placeholder="Your Email Address"
                                                                             required=""> <input type="submit"
                                                                                                 value="Subscribe">
                                        </div>
                                        <p><label> <input name="AGREE_TO_TERMS" type="checkbox" value="1" required=""> I
                                            have read and agree to the <a href="#" target="_blank">terms &amp;
                                                conditions</a>. </label></p></div>
                                    <label style="display: none !important;">Leave this field empty if you're human:
                                        <input type="text" name="_mc4wp_honeypot" value="" tabindex="-1"
                                               autocomplete="off"></label><input type="hidden" name="_mc4wp_timestamp"
                                                                                 value="1590501110"><input type="hidden"
                                                                                                           name="_mc4wp_form_id"
                                                                                                           value="101"><input
                                        type="hidden" name="_mc4wp_form_element_id" value="mc4wp-form-1">
                                    <div class="mc4wp-response"></div>
                                </form><!-- / Mailchimp for WordPress Plugin --></div>
                            <div id="loftocean-widget-posts-2"
                                 class="bg-thumbnail with-post-number widget tinysalt-widget_posts"><h5
                                    class="widget-title">Featured Recipes</h5>
                                <ul>
                                    <li><a href="https://tinysalt.loftocean.com/sweet/brain-power-blueberry-smoothie/"
                                           class="post-link">
                                        <div class="thumbnail"
                                             style="background-image: url(&quot;https://tinysalt.loftocean.com/wp-content/uploads/2020/03/monika-grabkowska-dGxSJzhgW0o-unsplash-600x864.jpg&quot;);"></div>
                                        <div class="post-content"><h4 class="post-title">Brain Power Blueberry
                                            Smoothie</h4>
                                            <div class="meta"><span class="meta-item">March 22, 2020</span></div>
                                        </div>
                                    </a></li>
                                    <li><a href="https://tinysalt.loftocean.com/beverages/rose-syrup-ice-tea/"
                                           class="post-link">
                                        <div class="thumbnail"
                                             style="background-image: url(&quot;https://tinysalt.loftocean.com/wp-content/uploads/2020/03/food-photographer-jennifer-pallian-sSnCZlEWN5E-unsplash-600x750.jpg&quot;);"></div>
                                        <div class="post-content"><h4 class="post-title">Rose Syrup Ice Tea</h4>
                                            <div class="meta"><span class="meta-item">March 19, 2020</span></div>
                                        </div>
                                    </a></li>
                                    <li><a href="https://tinysalt.loftocean.com/pasta/the-best-spaghetti-meat-sauce/"
                                           class="post-link">
                                        <div class="thumbnail"
                                             style="background-image: url(&quot;https://tinysalt.loftocean.com/wp-content/uploads/2020/03/food-photographer-jennifer-pallian-6S27S6pZ6o0-unsplash-600x900.jpg&quot;);"></div>
                                        <div class="post-content"><h4 class="post-title">The Best Spaghetti Meat
                                            Sauce</h4>
                                            <div class="meta"><span class="meta-item">March 19, 2020</span></div>
                                        </div>
                                    </a></li>
                                </ul>
                            </div>
                        </div> <!-- end of .sidebar-container -->    </aside><!-- .sidebar .widget-area --></div>
            </div>
            <div class="home-widgets-section">
                <div id="loftocean-homepage-widget-posts-4" class="home-widget light-color"
                     style="background-color: #f7f7f7;">
                    <div class="container">
                        <div class="section-header"><h5 class="section-title">Perfect for This Season</h5></div>
                        <div class="posts layout-grid img-ratio-2-3 style-overlay overlay-normal column-3 large-title">
                            <div class="posts-wrapper">
                                <article
                                        class="post-78 post type-post status-publish format-gallery has-post-thumbnail hentry category-appetizer category-soup post_format-post-format-gallery">
                                    <div class="featured-img"><a
                                            href="https://tinysalt.loftocean.com/soup/8-easy-instant-pot-recipes/">
                                        <div class="featured-img-container"
                                             style="background-image: url(&quot;https://tinysalt.loftocean.com/wp-content/uploads/2020/03/becca-tapert-YOpIDwj_-R4-unsplash-1200x800.jpg&quot;);"></div>
                                    </a></div>
                                    <div class="overlay-label time"><a
                                            href="https://tinysalt.loftocean.com/soup/8-easy-instant-pot-recipes/">
                                        <time class="published" datetime="2020-03-19T03:45:02+00:00">March 19, 2020
                                        </time>
                                    </a></div>
                                    <div class="overlay-label format-label gallery-format"><i class="far fa-images"></i>
                                    </div>
                                    <div class="overlay-label like post-like" data-post-id="78" data-like-count="73"><i
                                            class="fas fa-heart"></i></div>
                                    <div class="post-content">
                                        <header class="post-header"><h2 class="post-title"><a
                                                href="https://tinysalt.loftocean.com/soup/8-easy-instant-pot-recipes/">8
                                            Easy Instant Pot Recipes</a></h2>
                                            <div><a
                                                    href="https://tinysalt.loftocean.com/category/appetizer/" rel="tag">Appetizer</a>
                                                / <a href="https://tinysalt.loftocean.com/category/soup/"
                                                     rel="tag">Soup</a></div>
                                            <div class="meta">
                                                <div class="meta-item comment-count"><a
                                                        href="https://tinysalt.loftocean.com/soup/8-easy-instant-pot-recipes/#comments"><i
                                                        class="fas fa-comments"></i> 2</a></div>
                                            </div>
                                        </header>
                                    </div>
                                </article>
                                <article
                                        class="post-51 post type-post status-publish format-gallery has-post-thumbnail hentry category-bread category-sweet tag-autumn tag-bakery tag-french-flavour tag-healthy tag-medium tag-spring post_format-post-format-gallery">
                                    <div class="featured-img"><a
                                            href="https://tinysalt.loftocean.com/bread/favourite-molten-chocolate-cake/">
                                        <div class="featured-img-container"
                                             style="background-image: url(&quot;https://tinysalt.loftocean.com/wp-content/uploads/2020/03/dale-gray-HDi8KXLm6kg-unsplash-1200x1582.jpg&quot;);"></div>
                                    </a></div>
                                    <div class="overlay-label time"><a
                                            href="https://tinysalt.loftocean.com/bread/favourite-molten-chocolate-cake/">
                                        <time class="published" datetime="2020-03-18T10:56:42+00:00">March 18, 2020
                                        </time>
                                    </a></div>
                                    <div class="overlay-label format-label gallery-format"><i class="far fa-images"></i>
                                    </div>
                                    <div class="overlay-label like post-like" data-post-id="51" data-like-count="72"><i
                                            class="fas fa-heart"></i></div>
                                    <div class="post-content">
                                        <header class="post-header"><h2 class="post-title"><a
                                                href="https://tinysalt.loftocean.com/bread/favourite-molten-chocolate-cake/">Enjoy
                                            My Favourite Molten Chocolate Cake</a></h2>
                                            <div><a
                                                    href="https://tinysalt.loftocean.com/category/bread/" rel="tag">Bread</a>
                                                / <a href="https://tinysalt.loftocean.com/category/sweet/" rel="tag">Sweet</a>
                                            </div>
                                            <div class="meta">
                                                <div class="meta-item comment-count"><a
                                                        href="https://tinysalt.loftocean.com/bread/favourite-molten-chocolate-cake/#comments"><i
                                                        class="fas fa-comments"></i> 0</a></div>
                                            </div>
                                        </header>
                                    </div>
                                </article>
                                <article
                                        class="post-84 post type-post status-publish format-standard has-post-thumbnail hentry category-sweet tag-bakery tag-easy tag-french-flavour tag-summer">
                                    <div class="featured-img"><a
                                            href="https://tinysalt.loftocean.com/sweet/almond-pastry-cookies/">
                                        <div class="featured-img-container"
                                             style="background-image: url(&quot;https://tinysalt.loftocean.com/wp-content/uploads/2020/03/kawin-harasai-69778-unsplash-1200x861.jpg&quot;);"></div>
                                    </a></div>
                                    <div class="overlay-label time"><a
                                            href="https://tinysalt.loftocean.com/sweet/almond-pastry-cookies/">
                                        <time class="published" datetime="2020-03-19T03:54:10+00:00">March 19, 2020
                                        </time>
                                    </a></div>
                                    <div class="overlay-label like post-like" data-post-id="84" data-like-count="73"><i
                                            class="fas fa-heart"></i></div>
                                    <div class="post-content">
                                        <header class="post-header"><h2 class="post-title"><a
                                                href="https://tinysalt.loftocean.com/sweet/almond-pastry-cookies/">Almond
                                            Pastry Cookies</a></h2>
                                            <div><a
                                                    href="https://tinysalt.loftocean.com/category/sweet/" rel="tag">Sweet</a>
                                            </div>
                                            <div class="meta">
                                                <div class="meta-item comment-count"><a
                                                        href="https://tinysalt.loftocean.com/sweet/almond-pastry-cookies/#comments"><i
                                                        class="fas fa-comments"></i> 0</a></div>
                                            </div>
                                        </header>
                                    </div>
                                </article>
                                <article
                                        class="post-91 post type-post status-publish format-standard has-post-thumbnail hentry category-pasta tag-main-course tag-meat tag-medium tag-spaghetti tag-spring">
                                    <div class="featured-img"><a
                                            href="https://tinysalt.loftocean.com/pasta/the-best-spaghetti-meat-sauce/">
                                        <div class="featured-img-container"
                                             style="background-image: url(&quot;https://tinysalt.loftocean.com/wp-content/uploads/2020/03/food-photographer-jennifer-pallian-6S27S6pZ6o0-unsplash-1200x1800.jpg&quot;);"></div>
                                    </a></div>
                                    <div class="overlay-label time"><a
                                            href="https://tinysalt.loftocean.com/pasta/the-best-spaghetti-meat-sauce/">
                                        <time class="published" datetime="2020-03-19T04:37:50+00:00">March 19, 2020
                                        </time>
                                    </a></div>
                                    <div class="overlay-label like post-like" data-post-id="91" data-like-count="27"><i
                                            class="fas fa-heart"></i></div>
                                    <div class="post-content">
                                        <header class="post-header"><h2 class="post-title"><a
                                                href="https://tinysalt.loftocean.com/pasta/the-best-spaghetti-meat-sauce/">The
                                            Best Spaghetti Meat Sauce</a></h2>
                                            <div><a
                                                    href="https://tinysalt.loftocean.com/category/pasta/" rel="tag">Pasta</a>
                                            </div>
                                            <div class="meta">
                                                <div class="meta-item comment-count"><a
                                                        href="https://tinysalt.loftocean.com/pasta/the-best-spaghetti-meat-sauce/#comments"><i
                                                        class="fas fa-comments"></i> 3</a></div>
                                            </div>
                                        </header>
                                    </div>
                                </article>
                                <article
                                        class="post-94 post type-post status-publish format-standard has-post-thumbnail hentry category-beverages tag-cold tag-drinks tag-easy tag-summer tag-tea">
                                    <div class="featured-img"><a
                                            href="https://tinysalt.loftocean.com/beverages/rose-syrup-ice-tea/">
                                        <div class="featured-img-container"
                                             style="background-image: url(&quot;https://tinysalt.loftocean.com/wp-content/uploads/2020/03/food-photographer-jennifer-pallian-sSnCZlEWN5E-unsplash-1200x1501.jpg&quot;);"></div>
                                    </a></div>
                                    <div class="overlay-label time"><a
                                            href="https://tinysalt.loftocean.com/beverages/rose-syrup-ice-tea/">
                                        <time class="published" datetime="2020-03-19T04:40:50+00:00">March 19, 2020
                                        </time>
                                    </a></div>
                                    <div class="overlay-label like post-like" data-post-id="94" data-like-count="41"><i
                                            class="fas fa-heart"></i></div>
                                    <div class="post-content">
                                        <header class="post-header"><h2 class="post-title"><a
                                                href="https://tinysalt.loftocean.com/beverages/rose-syrup-ice-tea/">Rose
                                            Syrup Ice Tea</a></h2>
                                            <div><a
                                                    href="https://tinysalt.loftocean.com/category/beverages/" rel="tag">Beverages</a>
                                            </div>
                                            <div class="meta">
                                                <div class="meta-item comment-count"><a
                                                        href="https://tinysalt.loftocean.com/beverages/rose-syrup-ice-tea/#comments"><i
                                                        class="fas fa-comments"></i> 0</a></div>
                                            </div>
                                        </header>
                                    </div>
                                </article>
                                <article
                                        class="post-67 post type-post status-publish format-video has-post-thumbnail hentry category-appetizer category-bread category-sweet post_format-post-format-video">
                                    <div class="featured-img"><a
                                            href="https://tinysalt.loftocean.com/bread/classic-french-croissant/">
                                        <div class="featured-img-container"
                                             style="background-image: url(&quot;https://tinysalt.loftocean.com/wp-content/uploads/2020/03/monika-grabkowska-1361283-unsplash-2-1200x1800.jpg&quot;);"></div>
                                    </a></div>
                                    <div class="overlay-label time"><a
                                            href="https://tinysalt.loftocean.com/bread/classic-french-croissant/">
                                        <time class="published" datetime="2020-03-19T03:02:54+00:00">March 19, 2020
                                        </time>
                                    </a></div>
                                    <div class="overlay-label format-label video-format"><i class="fas fa-play"></i>
                                    </div>
                                    <div class="overlay-label like post-like" data-post-id="67" data-like-count="52"><i
                                            class="fas fa-heart"></i></div>
                                    <div class="post-content">
                                        <header class="post-header"><h2 class="post-title"><a
                                                href="https://tinysalt.loftocean.com/bread/classic-french-croissant/">Classic
                                            French Croissant</a></h2>
                                            <div><a
                                                    href="https://tinysalt.loftocean.com/category/appetizer/" rel="tag">Appetizer</a>
                                                / <a href="https://tinysalt.loftocean.com/category/bread/" rel="tag">Bread</a>
                                                / <a href="https://tinysalt.loftocean.com/category/sweet/" rel="tag">Sweet</a>
                                            </div>
                                            <div class="meta">
                                                <div class="meta-item comment-count"><a
                                                        href="https://tinysalt.loftocean.com/bread/classic-french-croissant/#comments"><i
                                                        class="fas fa-comments"></i> 0</a></div>
                                            </div>
                                        </header>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="loftocean-homepage-widget-posts-6" class="home-widget default-color">
                    <div class="container">
                        <div class="section-header"><h5 class="section-title">Make This Today!</h5></div>
                        <div class="posts layout-large style-overlay overlay-normal">
                            <div class="posts-wrapper">
                                <article
                                        class="post-78 post type-post status-publish format-gallery has-post-thumbnail hentry category-appetizer category-soup post_format-post-format-gallery">
                                    <div class="featured-img"><a
                                            href="https://tinysalt.loftocean.com/soup/8-easy-instant-pot-recipes/"><img
                                            width="1200" height="800"
                                            src="https://tinysalt.loftocean.com/wp-content/uploads/2020/03/becca-tapert-YOpIDwj_-R4-unsplash-1200x800.jpg"
                                            class="attachment-tinysalt_medium size-tinysalt_medium wp-post-image" alt=""
                                            srcset="https://tinysalt.loftocean.com/wp-content/uploads/2020/03/becca-tapert-YOpIDwj_-R4-unsplash-1200x800.jpg 1200w, https://tinysalt.loftocean.com/wp-content/uploads/2020/03/becca-tapert-YOpIDwj_-R4-unsplash-300x200.jpg 300w, https://tinysalt.loftocean.com/wp-content/uploads/2020/03/becca-tapert-YOpIDwj_-R4-unsplash-1024x683.jpg 1024w, https://tinysalt.loftocean.com/wp-content/uploads/2020/03/becca-tapert-YOpIDwj_-R4-unsplash-768x512.jpg 768w, https://tinysalt.loftocean.com/wp-content/uploads/2020/03/becca-tapert-YOpIDwj_-R4-unsplash-1536x1024.jpg 1536w, https://tinysalt.loftocean.com/wp-content/uploads/2020/03/becca-tapert-YOpIDwj_-R4-unsplash-1440x960.jpg 1440w, https://tinysalt.loftocean.com/wp-content/uploads/2020/03/becca-tapert-YOpIDwj_-R4-unsplash-600x400.jpg 600w, https://tinysalt.loftocean.com/wp-content/uploads/2020/03/becca-tapert-YOpIDwj_-R4-unsplash.jpg 1920w"
                                            sizes="(max-width: 1200px) 100vw, 1200px"></a></div>
                                    <div class="overlay-label time"><a
                                            href="https://tinysalt.loftocean.com/soup/8-easy-instant-pot-recipes/">
                                        <time class="published" datetime="2020-03-19T03:45:02+00:00">March 19, 2020
                                        </time>
                                    </a></div>
                                    <div class="overlay-label format-label gallery-format"><i class="far fa-images"></i>
                                    </div>
                                    <div class="overlay-label like post-like" data-post-id="78" data-like-count="73"><i
                                            class="fas fa-heart"></i></div>
                                    <div class="post-content">
                                        <header class="post-header"><h2 class="post-title"><a
                                                href="https://tinysalt.loftocean.com/soup/8-easy-instant-pot-recipes/">8
                                            Easy Instant Pot Recipes</a></h2>
                                            <div><a
                                                    href="https://tinysalt.loftocean.com/category/appetizer/" rel="tag">Appetizer</a>
                                                / <a href="https://tinysalt.loftocean.com/category/soup/"
                                                     rel="tag">Soup</a></div>
                                            <div class="meta">
                                                <div class="meta-item comment-count"><a
                                                        href="https://tinysalt.loftocean.com/soup/8-easy-instant-pot-recipes/#comments"><i
                                                        class="fas fa-comments"></i> 2</a></div>
                                            </div>
                                        </header>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        Hooper,
        Slide,
        Navigation as HooperNavigation
    } from 'hooper';
    import 'hooper/dist/hooper.css';
    export default {
        components: {
            Hooper,
            Slide,
            HooperNavigation
        },
        beforeCreate: function() {
            document.body.className = 'home blog wp-custom-logo wp-embed-responsive theme-tinysalt woocommerce-js front-page light-color  woocommerce woocommerce-page woocommerce-js light-color post-template  single single-post postid-78 single-format-gallery wp-custom-logo wp-embed-responsive theme-tinysalt woocommerce-js post-template-template-3-right-sidebar post-template-template-3-right-sidebar-php post-template-3 light-color';
        }
    }
</script>

<style>
    .slider-title{
        font-family:'BMEULJIRO';
        font-size:3em;
        padding-top:50px;
        color:#000000;
    }
    .post-title{
        font-family:'BMEULJIRO';
        font-weight:100;
    }
    .section-title{
        font-family:'BMEULJIRO';
    }

</style>