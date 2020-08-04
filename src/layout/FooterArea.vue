<template>
    <div>
        <footer id="colophon" class="site-footer">
            <div class="site-footer-signup">
                <div class="container">
                    <div class="widget widget_mc4wp_form_widget"><h5 class="widget-title">새로운 레시피를 놓치지마세요!</h5>
                        <!-- Mailchimp for WordPress v4.7.7 - https://wordpress.org/plugins/mailchimp-for-wp/ -->
                        <form id="mc4wp-form-2" class="mc4wp-form mc4wp-form-101" method="post" data-id="101"
                              data-name="Never Miss a Recipe!">
                            <div class="mc4wp-form-fields"><p> 라면공방의 메일링에 가입하세요. 그리고 매주 새로운 라면 레시피를 받아보세요.</p>
                                <div class="fields-container"><input type="email" name="EMAIL"
                                                                     placeholder="Your Email Address" required=""> <input
                                        type="submit" value="가입"></div>
                                <p><label> <input name="AGREE_TO_TERMS" type="checkbox" value="1" required=""> 약관을 읽었으며, <a href="https://tinysalt.loftocean.com/#" target="_blank">동의 합니다</a>. </label></p></div>
                            <label style="display: none !important;">Leave this field empty if you're human: <input
                                    type="text" name="_mc4wp_honeypot" value="" tabindex="-1"
                                    autocomplete="off"></label><input type="hidden" name="_mc4wp_timestamp"
                                                                      value="1590155498"><input type="hidden"
                                                                                                name="_mc4wp_form_id"
                                                                                                value="101"><input
                                type="hidden" name="_mc4wp_form_element_id" value="mc4wp-form-2">
                            <div class="mc4wp-response"></div>
                        </form><!-- / Mailchimp for WordPress Plugin -->                    </div>
                </div>
            </div>

            <div class="site-footer-bottom">
                <div class="container">
                    <div class="widget widget_nav_menu">
                        <div id="footer-bottom-menu-container" class="menu-footer-bottom-menu-container">
                            <ul id="footer-bottom-menu" class="menu">
                                <li id="menu-item-263"
                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-263"><a @click="gotoPath('/view/about')">'라면공방' 이란?</a></li>
                                <li id="menu-item-262"
                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-262"><a
                                        href="https://tinysalt.loftocean.com/#">개인정보보호정책</a></li>
                                <li id="menu-item-1001"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1001"><a
                                        href="https://tinysalt.loftocean.com/contact/">연락처</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="widget widget_text">
                        <div class="textwidget"><strong>Cook &amp; Write with <span style="color: red" class="heart-beat"><i
                                class="fas fa-heart"></i></span></strong> by choonzang.<br>라면공방 © Copyright 2020. All
                            rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <a href="#" class="to-top"></a>
    <!-- end of #page -->
        <div class="sidemenu dark-color" v-bind:class="{show: submenuActive}">
            <div class="container" ><span class="close-button" @click="closeSubmenu">Close</span>
                <div class="mobile-menu-logo" style="background: url('/images/ramen_logo1_w.png');background-repeat: no-repeat;background-size: contain;background-position: 22% 0%;"><a @click="gotoPath('/')" class="custom-logo-link" rel="home"><span style="font-size:34px;font-family: 'BMEULJIRO';">라면공방</span></a></div>
                <nav id="sidemenu-navigation" class="main-navigation">
                    <ul id="sidemenu-main-menu" class="primary-menu">
                        <li class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-has-children menu-item-97">
                            <a class="menulink" @click="gotoPath('/')" aria-current="page">Home</a>
                        </li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-214">
                            <a>라면DB</a>
                            <button class="dropdown-toggle" aria-expanded="false"><span class="screen-reader-text">expand child menu</span>
                            </button>
                            <ul class="sub-menu">
                                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-215"><a>브랜드별 라면</a>
                                    <button class="dropdown-toggle" aria-expanded="false"><span class="screen-reader-text">expand child menu</span>
                                    </button>
                                    <ul class="sub-menu">
                                        <li class="menu-item menu-item-type-post_type menu-item-object-post menu-item-1183"><a class="menulink" @click="goBrandList('ns')">농심</a></li>
                                        <li class="menu-item menu-item-type-post_type menu-item-object-post menu-item-1179"><a class="menulink" @click="goBrandList('ot')">오뚜기</a></li>
                                        <li class="menu-item menu-item-type-post_type menu-item-object-post menu-item-1158"><a class="menulink" @click="goBrandList('sy')">삼양</a></li>
                                        <li class="menu-item menu-item-type-post_type menu-item-object-post menu-item-1150"><a class="menulink" @click="goBrandList('pd')">팔도</a></li>
                                        <li class="menu-item menu-item-type-post_type menu-item-object-post menu-item-1155"><a class="menulink" @click="goBrandList('pm')">풀무원</a></li>
                                        <li class="menu-item menu-item-type-post_type menu-item-object-post menu-item-1155"><a class="menulink" @click="goBrandList('pb')">편의점PB</a></li>
                                    </ul>
                                </li>
                                <li class="menu-item menu-item-type-post_type menu-item-object-post menu-item-780"><a>면타입별 라면</a>
                                    <button class="dropdown-toggle" aria-expanded="false"><span class="screen-reader-text">expand child menu</span>
                                    </button>
                                    <ul class="sub-menu">
                                        <li class="menu-item menu-item-type-post_type menu-item-object-post menu-item-1183"><a @click="goTypeList('oil')">유탕면</a></li>
                                        <li class="menu-item menu-item-type-post_type menu-item-object-post menu-item-1179"><a @click="goTypeList('dry')">건면</a></li>
                                        <li class="menu-item menu-item-type-post_type menu-item-object-post menu-item-1179"><a @click="goTypeList('live')">생면</a></li>
                                        <li class="menu-item menu-item-type-post_type menu-item-object-post menu-item-1179"><a @click="goTypeList('etc')">기타</a></li>

                                    </ul>
                                </li>
                                <li class="menu-item menu-item-type-post_type menu-item-object-post menu-item-1203"><a>용기별 라면</a>
                                    <button class="dropdown-toggle" aria-expanded="false"><span class="screen-reader-text">expand child menu</span>
                                    </button>
                                    <ul class="sub-menu">
                                        <li class="menu-item menu-item-type-post_type menu-item-object-post menu-item-1183"><a @click="goBowlList('plastic')">봉지면</a></li>
                                        <li class="menu-item menu-item-type-post_type menu-item-object-post menu-item-1179"><a @click="goBowlList('cup')">용기면</a></li>

                                    </ul>
                                </li>
                                <li class="menu-item menu-item-type-post_type menu-item-object-post menu-item-754"><a @click="goNoselList('notsel')">단종된 라면</a></li>


                            </ul>
                        </li>
                        <li class="mega-menu column-5 has-arrow menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-99">
                            <a>새소식</a>
                            <button class="dropdown-toggle" aria-expanded="false"><span class="screen-reader-text">expand child menu</span>
                            </button>
                            <ul class="sub-menu">
                                <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1191">
                                    <a @click="gotoPath('/view/news/ramen')">신규 출시 라면</a>
                                </li>
                                <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1145">
                                    <a @click="gotoPath('/view/news/press')">라면 관련 기사</a>
                                </li>
                            </ul>
                        </li>
                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-100">
                            <a href="https://tinysalt.loftocean.com/#">라면 레시피</a>
                            <button class="dropdown-toggle" aria-expanded="false"><span class="screen-reader-text">expand child menu</span>
                            </button>
                            <ul class="sub-menu">
                                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-583">
                                    <a>라면(매운맛)</a></li>
                                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-961">
                                    <a>라면(담백한맛)</a></li>
                                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-585">
                                    <a>짜장라면</a></li>
                                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-962">
                                    <a>비빔라면</a></li>
                                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1000">
                                    <a>볶음라면</a></li>
                                <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-779">
                                    <a>하얀국물</a></li>
                            </ul>
                        </li>

                    </ul>
                </nav>
                <nav id="sidemenu-secondary-navigation" class="secondary-navigation">
                    <ul id="sidemenu-secondary-menu" class="secondary-menu">
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-980"><a @click="gotoPath('/view/about')">라면공방 이란?</a></li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-981"><a>연락처</a></li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-999"><a>뉴스레터</a></li>
                    </ul>
                </nav>
                <nav id="sidemenu-social-navigation" class="social-navigation">
                    <ul id="sidemenu-social-menu" class="social-nav menu">
                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-103"><a
                                href="https://www.facebook.com/#">Facebook</a></li>
                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-104"><a
                                href="https://www.twitter.com/#">Twitter</a></li>
                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-105"><a
                                href="https://www.instagram.com/#">Instagram</a></li>
                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-106"><a
                                href="https://www.pinterest.com/#">Pinterest</a></li>
                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-107"><a
                                href="https://www.youtube.com/#">YouTube</a></li>
                    </ul>
                </nav>
                <div class="text">Your custom text © Copyright 2020. All rights reserved.</div>
            </div>
        </div>
        <div class="popup-signup dark-color has-overlay">
            <div class="screen-bg"
                 style="background-image: url(&quot;https://tinysalt.loftocean.com/wp-content/uploads/2020/03/jose-tebar-548649-unsplash.jpg&quot;);"></div>
            <span class="close-button">Close</span>
            <div class="container">
                <div class="container-inner">
                    <div class="widget widget_mc4wp_form_widget"><h5 class="widget-title">Never Miss a Recipe!</h5>
                        <!-- Mailchimp for WordPress v4.7.7 - https://wordpress.org/plugins/mailchimp-for-wp/ -->
                        <form id="mc4wp-form-3" class="mc4wp-form mc4wp-form-101" method="post" data-id="101"
                              data-name="Never Miss a Recipe!">
                            <div class="mc4wp-form-fields"><p> Join thousands of TinySalt subscribers and get our best recipes
                                delivered each week! </p>
                                <div class="fields-container"><input type="email" name="EMAIL" placeholder="Your Email Address"
                                                                     required=""> <input type="submit" value="Subscribe"></div>
                                <p><label> <input name="AGREE_TO_TERMS" type="checkbox" value="1" required=""> I have read and
                                    agree to the <a href="https://tinysalt.loftocean.com/#" target="_blank">terms &amp;
                                        conditions</a>. </label></p></div>
                            <label style="display: none !important;">Leave this field empty if you're human: <input type="text"
                                                                                                                    name="_mc4wp_honeypot"
                                                                                                                    value=""
                                                                                                                    tabindex="-1"
                                                                                                                    autocomplete="off"></label><input
                                type="hidden" name="_mc4wp_timestamp" value="1590155498"><input type="hidden"
                                                                                                name="_mc4wp_form_id"
                                                                                                value="101"><input type="hidden"
                                                                                                                   name="_mc4wp_form_element_id"
                                                                                                                   value="mc4wp-form-3">
                            <div class="mc4wp-response"></div>
                            <input type="hidden" name="action" value="tinysalt-popup-form"></form>
                        <!-- / Mailchimp for WordPress Plugin -->                </div>
                </div>
            </div>
            <div class="popup-exit"><a href="https://tinysalt.loftocean.com/#" class="tinysalt-disable-popup-signup-form">No,
                thanks. Please don't show again.</a> <a href="https://tinysalt.loftocean.com/#"
                                                        class="tinysalt-exit-popup-signup-form">Close and continue browsing</a>
            </div>
        </div>

    </div>

</template>

<script>

    import {Common} from "../minxins/common";

    export default {
        name: "FooterArea.vue",
        data(){
            return{
                submenuActive:''
            }
        },
        mixins: [Common],
        methods: {
            closeSubmenu(){
                //p(".sidemenu").removeClass("show"), p("body").css("overflow", "");
                console.log('상위로 false 전달')
                this.submenuActive = 'false';
                this.$emit('event-data', this.submenuActive);
            },
            gotoPath(a) {
                this.$router.push({
                    path: a
                }).catch(() => {
                })
                this.submenuActive = 'false';
            }
        }
    }
</script>

<style scoped>

</style>