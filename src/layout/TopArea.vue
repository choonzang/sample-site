<template>
    <div>
        <header id="masthead" class="site-header site-header-layout-2 light-color" data-sticky="sticky-scroll-up" style="margin-bottom:0px !important;">
            <div class="header-top-bar">
                <div class="container">
                    <nav id="secondary-navigation" class="secondary-navigation">
                        <ul id="menu-secondary-menu" class="secondary-menu">
                            <li id="menu-item-980"
                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-980"><a
                                    @click="gotoPath('/view/about')">'라면공방'이란?</a></li>
                            <li id="menu-item-981"
                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-981"><a>연락처</a></li>
                            <li id="menu-item-999"
                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-999"><a>뉴스레터</a></li>
                            <li id="menu-item-998"
                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-999"><a @click="$i18n.locale='ko'">Korean</a></li>
                            <li id="menu-item-997"
                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-999"><a @click="$i18n.locale='en'">English</a></li>
                        </ul>
                    </nav>
                    <nav class="social-navigation">
                        <ul id="menu-social-menu" class="social-nav menu">
                            <li id="menu-item-103"
                                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-103"><a
                                    href="https://www.facebook.com/#">Facebook</a></li>
                            <li id="menu-item-104"
                                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-104"><a
                                    href="https://www.twitter.com/#">Twitter</a></li>
                            <li id="menu-item-105"
                                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-105"><a
                                    href="https://www.instagram.com/#">Instagram</a></li>
                            <li id="menu-item-106"
                                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-106"><a
                                    href="https://www.pinterest.com/#">Pinterest</a></li>
                            <li id="menu-item-107"
                                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-107"><a
                                    href="https://www.youtube.com/#">YouTube</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div class="site-header-main">
                <div class="container">
                    <!-- .site-branding -->
                    <div class="header-section branding header-left">
                        <div class="site-branding hide-title-tagline" style="background: url('/images/ramen_logo1.png');background-repeat: no-repeat;background-size: contain;">
                            <a @click="gotoPath('/')" rel="home">
                                <span style="font-family: 'BMEULJIRO';font-size:34px;padding-left:55px;">라면공방</span>
                            </a>
                            <p class="site-title"><a href="https://tinysalt.loftocean.com/" rel="home">Ramengongbang</a></p>
                            <p class="site-description">Personal Korean Ramen Blog</p>
                        </div>
                    </div> <!-- end of .site-branding -->
                    <div class="header-section menu">
                        <nav id="site-navigation" class="main-navigation">
                            <ul id="menu-main-menu" class="primary-menu">
                                <li id="menu-item-97"
                                    class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-97">
                                    <a @click="gotoPath('/')" aria-current="page">Home</a>
                                </li>
                                <li id="menu-item-214"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-214">
                                    <a href="">라면DB</a>
                                    <ul class="sub-menu" style="">
                                        <li id="menu-item-1145"
                                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1145">
                                            <a href="#">브랜드 별</a>
                                            <ul class="sub-menu" style="">
                                                <li id="menu-item-1160"
                                                    class="menu-item menu-item-type-post_type menu-item-object-post menu-item-1160">
                                                    <a @click="goBrandList('ns')">농심</a></li>
                                                <li id="menu-item-1153"
                                                    class="menu-item menu-item-type-post_type menu-item-object-post menu-item-1153">
                                                    <a @click="goBrandList('ot')">오뚜기</a></li>
                                                <li id="menu-item-1147"
                                                    class="menu-item menu-item-type-post_type menu-item-object-post menu-item-1147">
                                                    <a @click="goBrandList('sy')">삼양</a></li>
                                                <li id="menu-item-1162"
                                                    class="menu-item menu-item-type-post_type menu-item-object-post menu-item-1162">
                                                    <a @click="goBrandList('pd')">팔도</a></li>
                                                <li id="menu-item-1144"
                                                    class="menu-item menu-item-type-post_type menu-item-object-post menu-item-1144">
                                                    <a @click="goBrandList('pm')">풀무원</a></li>
                                                <li id="menu-item-1144"
                                                    class="menu-item menu-item-type-post_type menu-item-object-post menu-item-1144">
                                                    <a @click="goBrandList('pb')">편의점PB</a></li>
                                            </ul>
                                        </li>
                                        <li id="menu-item-215"
                                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1145">
                                            <a href="#">면 타입별</a>
                                            <ul class="sub-menu" style="">
                                                <li id="menu-item-1160"
                                                    class="menu-item menu-item-type-post_type menu-item-object-post menu-item-1160">
                                                    <a @click="goTypeList('oil')">유탕면</a></li>
                                                <li id="menu-item-1153"
                                                    class="menu-item menu-item-type-post_type menu-item-object-post menu-item-1153">
                                                    <a @click="goTypeList('dry')">건면</a></li>
                                                <li id="menu-item-1153"
                                                    class="menu-item menu-item-type-post_type menu-item-object-post menu-item-1153">
                                                    <a @click="goTypeList('live')">생면</a></li>
                                                <li id="menu-item-1153"
                                                    class="menu-item menu-item-type-post_type menu-item-object-post menu-item-1153">
                                                    <a @click="goTypeList('etc')">기타</a></li>
                                            </ul>
                                        </li>
                                        <li id="menu-item-215"
                                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1145">
                                            <a href="#">용기 타입별</a>
                                            <ul class="sub-menu" style="">
                                                <li id="menu-item-1160"
                                                    class="menu-item menu-item-type-post_type menu-item-object-post menu-item-1160">
                                                    <a @click="goBowlList('plastic')">봉지라면</a></li>
                                                <li id="menu-item-1153"
                                                    class="menu-item menu-item-type-post_type menu-item-object-post menu-item-1153">
                                                    <a @click="goBowlList('cup')">용기면</a></li>
                                            </ul>
                                        </li>
                                        <li id="menu-item-216"
                                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1145">
                                            <a @click="goNoselList('notsel')">단종된 라면</a>
                                        </li>
                                    </ul>
                                </li>
                                <!--
                                <li id="menu-item-99"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-214">
                                    <a href="https://tinysalt.loftocean.com/#">라면 레시피</a>
                                    <ul class="sub-menu" style="">
                                        <li id="menu-item-1191"
                                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1191">
                                            <a href="https://tinysalt.loftocean.com/#">매운 라면</a>
                                        </li>
                                        <li id="menu-item-1145"
                                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1145">
                                            <a href="https://tinysalt.loftocean.com/#">순한 라면</a>

                                            <ul class="sub-menu" style="">
                                                <li id="menu-item-1160"
                                                    class="menu-item menu-item-type-post_type menu-item-object-post menu-item-1160">
                                                    <a href="https://tinysalt.loftocean.com/bread/kouign-amann-french-pastries/">Post
                                                        Template 2: Right Sidebar</a></li>
                                                <li id="menu-item-1153"
                                                    class="menu-item menu-item-type-post_type menu-item-object-post menu-item-1153">
                                                    <a href="https://tinysalt.loftocean.com/sweet/almond-pastry-cookies/">Post
                                                        Template 3</a></li>
                                                <li id="menu-item-1147"
                                                    class="menu-item menu-item-type-post_type menu-item-object-post menu-item-1147">
                                                    <a href="https://tinysalt.loftocean.com/pasta/the-best-spaghetti-meat-sauce/">Post
                                                        Template 3: Left Sidebar</a></li>
                                                <li id="menu-item-1162"
                                                    class="menu-item menu-item-type-post_type menu-item-object-post menu-item-1162">
                                                    <a href="https://tinysalt.loftocean.com/salad/lentil-salad-with-fried-cheese/">Post
                                                        Template 3: Right Sidebar</a></li>
                                                <li id="menu-item-1144"
                                                    class="menu-item menu-item-type-post_type menu-item-object-post menu-item-1144">
                                                    <a href="https://tinysalt.loftocean.com/beverages/rose-syrup-ice-tea/">Post
                                                        Template 4</a></li>
                                            </ul>
                                        </li>
                                        <li id="menu-item-1192"
                                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1192">
                                            <a href="https://tinysalt.loftocean.com/#">Post Format</a>
                                            <ul class="sub-menu" style="">
                                                <li id="menu-item-1193"
                                                    class="menu-item menu-item-type-post_type menu-item-object-post menu-item-1193">
                                                    <a href="https://tinysalt.loftocean.com/pasta/the-best-spaghetti-meat-sauce/">Standard
                                                        Post</a></li>
                                                <li id="menu-item-1156"
                                                    class="menu-item menu-item-type-post_type menu-item-object-post menu-item-1156">
                                                    <a href="https://tinysalt.loftocean.com/soup/8-easy-instant-pot-recipes/">Gallery
                                                        Post</a></li>
                                                <li id="menu-item-1194"
                                                    class="menu-item menu-item-type-post_type menu-item-object-post menu-item-1194">
                                                    <a href="https://tinysalt.loftocean.com/bread/favourite-molten-chocolate-cake/">Gallery
                                                        Post 2</a></li>
                                                <li id="menu-item-1169"
                                                    class="menu-item menu-item-type-post_type menu-item-object-post menu-item-1169">
                                                    <a href="https://tinysalt.loftocean.com/bread/classic-french-croissant/">Video
                                                        Post</a></li>
                                                <li id="menu-item-1190"
                                                    class="menu-item menu-item-type-post_type menu-item-object-post menu-item-1190">
                                                    <a href="https://tinysalt.loftocean.com/soup/spicy-pumpkin-soup/">Video
                                                        Post 2</a></li>
                                            </ul>
                                        </li>
                                        <li id="menu-item-255"
                                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-255">
                                            <a href="https://tinysalt.loftocean.com/#">Elements</a>
                                            <ul class="sub-menu" style="">
                                                <li id="menu-item-906"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-906">
                                                    <a href="https://tinysalt.loftocean.com/portfolio-gallery/">Justified
                                                        Gallery</a></li>
                                                <li id="menu-item-1252"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1252">
                                                    <a href="https://tinysalt.loftocean.com/slider-gallery/">Slider
                                                        Gallery</a></li>
                                                <li id="menu-item-1275"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1275">
                                                    <a href="https://tinysalt.loftocean.com/video-block/">Video Block</a>
                                                </li>
                                                <li id="menu-item-1255"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1255">
                                                    <a href="https://tinysalt.loftocean.com/buttons/">Buttons &amp;
                                                        Dividers</a></li>
                                                <li id="menu-item-1253"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1253">
                                                    <a href="https://tinysalt.loftocean.com/tabs-accordions/">Accordions
                                                        &amp; Tabs</a></li>
                                            </ul>
                                        </li>
                                        <li id="menu-item-1204"
                                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1204">
                                            <a href="https://tinysalt.loftocean.com/#">Elements</a>
                                            <ul class="sub-menu" style="">
                                                <li id="menu-item-1274"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1274">
                                                    <a href="https://tinysalt.loftocean.com/products-block/">Products
                                                        Block</a></li>
                                                <li id="menu-item-1334"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1334">
                                                    <a href="https://tinysalt.loftocean.com/product-categories/">Product
                                                        Categories</a></li>
                                                <li id="menu-item-1273"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1273">
                                                    <a href="https://tinysalt.loftocean.com/cover-block/">Cover Block</a>
                                                </li>
                                                <li id="menu-item-1272"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1272">
                                                    <a href="https://tinysalt.loftocean.com/misc-blocks/">Misc Blocks</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                -->

                                <li id="menu-item-100"
                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-100">
                                    <a>새소식</a>
                                    <ul class="sub-menu" style="">
                                        <li id="menu-item-583"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-583">
                                            <a @click="gotoPath('/view/news/ramen')">신규 출시 라면</a></li>
                                        <li id="menu-item-961"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-961">
                                            <a @click="gotoPath('/view/news/press')">라면 관련 뉴스</a></li>

                                    </ul>
                                </li>
                                <li id="menu-item-1129"
                                    class="mega-menu cat-list menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1129">
                                    <a>라면 레시피</a>
                                    <ul class="sub-menu" style="left:-53vw;">
                                        <li id="menu-item-1130"
                                            class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1130">
                                            <div class="cat"><a href="/">
                                                <div style="background-image: url(&quot;/images/hot_soup.jpg&quot;);"
                                                     class="cat-bg"></div>
                                                <div class="cat-meta"><span class="category-name">라면(매운맛)</span></div>
                                            </a></div>
                                        </li>
                                        <li id="menu-item-1131"
                                            class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1131">
                                            <div class="cat"><a href="/">
                                                <div style="background-image: url(&quot;/images/nothot_soup.jpeg&quot;);"
                                                     class="cat-bg"></div>
                                                <div class="cat-meta"><span class="category-name">라면(담백한맛)</span></div>
                                            </a></div>
                                        </li>
                                        <li id="menu-item-1132"
                                            class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1132">
                                            <div class="cat"><a href="/">
                                                <div style="background-image: url(&quot;/images/jjajang.jpg&quot;);"
                                                     class="cat-bg"></div>
                                                <div class="cat-meta"><span class="category-name">짜장라면</span></div>
                                            </a></div>
                                        </li>
                                        <li id="menu-item-1133"
                                            class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1133">
                                            <div class="cat"><a href="/">
                                                <div style="background-image: url(&quot;/images/bibim.jpeg&quot;);"
                                                     class="cat-bg"></div>
                                                <div class="cat-meta"><span class="category-name">비빔라면</span></div>
                                            </a></div>
                                        </li>
                                        <li id="menu-item-1134"
                                            class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1134">
                                            <div class="cat"><a href="/">
                                                <div style="background-image: url(&quot;/images/bokum.jpeg&quot;);"
                                                     class="cat-bg"></div>
                                                <div class="cat-meta"><span class="category-name">볶음라면</span></div>
                                            </a></div>
                                        </li>
                                        <li id="menu-item-1135"
                                            class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1135">
                                            <div class="cat"><a href="/">
                                                <div style="background-image: url(&quot;/images/white_soup.jpg&quot;);"
                                                     class="cat-bg"></div>
                                                <div class="cat-meta"><span class="category-name">하얀국물</span></div>
                                            </a></div>
                                        </li>
                                    </ul>
                                </li>
                                <!--
                                <li id="menu-item-571"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-571">
                                    <a href="https://tinysalt.loftocean.com/shop/">Shop</a>
                                    <ul class="sub-menu" style="">
                                        <li id="menu-item-781"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-781">
                                            <a href="https://tinysalt.loftocean.com/shop/">Shop Page</a></li>
                                        <li id="menu-item-1322"
                                            class="menu-item menu-item-type-post_type menu-item-object-product menu-item-1322">
                                            <a href="https://tinysalt.loftocean.com/product/kitchen-pantry-simple-wall-shelf/">Single
                                                Product</a></li>
                                        <li id="menu-item-570"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-570">
                                            <a href="https://tinysalt.loftocean.com/cart/">Cart</a></li>
                                        <li id="menu-item-569"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-569">
                                            <a href="https://tinysalt.loftocean.com/checkout/">Checkout</a></li>
                                        <li id="menu-item-568"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-568">
                                            <a href="https://tinysalt.loftocean.com/my-account/">My account</a></li>
                                    </ul>
                                </li>
                                <li id="menu-item-1496"
                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1496"><a
                                        target="_blank" rel="noopener noreferrer" href="https://1.envato.market/agD4M">Purchase</a>
                                </li>
                                -->
                            </ul>
                        </nav>
                    </div>
                    <div class="header-section header-right">
                        <div class="search">
                            <form role="search" method="get" action="https://tinysalt.loftocean.com/"><i
                                    class="fa fa-search"></i><input type="search" placeholder="라면검색"
                                                                    class="search-input" autocomplete="off" name="s"></form>
                        </div>
                        <button id="menu-toggle" class="menu-toggle" @click="openSubmenu">Menu</button>
                    </div>
                </div>
            </div><!-- .site-header-main -->
        </header>


    </div>
</template>

<script>
    import {Common} from "../minxins/common";

    export default {
        name: "TopArea.vue",
        data(){
            return{

            }
        },
        mixins: [Common],
        methods: {
            openSubmenu(){
                //p(".sidemenu").addClass("show"), p("body").css("overflow", "hidden");
                console.log('상위로 true 전달')
                let changeData = 'true';
                this.$emit('event-data', changeData)
            }

        }
    }
</script>

<style scoped>

</style>