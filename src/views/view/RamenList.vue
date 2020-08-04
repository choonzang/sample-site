<template>
    <div id="content" class="site-content">
        <header class="woocommerce-products-header page-header">
            <div class="page-header-bg"
                 :style="'background-image: url('+this.$t(this.squery.searchQuery+'.image_url')+');'"></div>
            <div class="page-header-text">
                <nav class="woocommerce-breadcrumb"><a @click="gotoPath('/')">Home</a>&nbsp;/&nbsp;<a
                        href="https://tinysalt.loftocean.com/shop/">{{$t(this.squery.about)}}</a>&nbsp;/&nbsp;{{$t(this.squery.searchQuery+'.menu_title')}}
                </nav>
                <h1 class="woocommerce-products-header__title page-title" style="font-family: var(--body-font);">{{$t(this.squery.searchQuery+'.menu_title')}}</h1>
            </div>
        </header>
        <div id="page" class="main">
            <div class="container">
                <div id="primary" class="primary content-area">
                    <div class="woocommerce-notices-wrapper"></div>
                    <p class="woocommerce-result-count"> 1–8 of 9 개의 결과</p>
                    <form class="woocommerce-ordering" method="get">
                        <select name="orderby" class="orderby" aria-label="Shop order">
                        <option value="menu_order" selected="selected">기본 정렬</option>
                        <option value="popularity">인기도 정렬</option>
                        <option value="rating">평균평점 정렬</option>
                        <option value="date">출시일 정렬</option>
                        <option value="price">가격 정렬</option>
                    </select> <input type="hidden" name="paged" value="1"></form>
                    <ul class="products columns-4">
                        <li class="product type-product post-574 status-publish first instock product_cat-storage product_tag-jars product_tag-spoon has-post-thumbnail shipping-taxable purchasable product-type-simple">
                            <div class="product-image">
                                <a @click="goDetails('ns_1')"
                                   class="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                    <img width="300" height="300"
                                         src="http://image.nongshim.com/non/pro/03_product.jpg"
                                         class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt=""
                                         srcset="http://image.nongshim.com/non/pro/03_product.jpg 300w, http://image.nongshim.com/non/pro/03_product.jpg 150w, http://image.nongshim.com/non/pro/03_product.jpg 500w, http://image.nongshim.com/non/pro/03_product.jpg 600w, http://image.nongshim.com/non/pro/03_product.jpg 100w"
                                         sizes="(max-width: 300px) 100vw, 300px"></a><a
                                    @click="goDetails('ns_1')" data-quantity="1"
                                    class="button product_type_simple add_to_cart_button ajax_add_to_cart"
                                    data-product_id="574" data-product_sku="TNSL1255"
                                    aria-label="Add “Ceramic Canister Set W/Spoon” to your cart" rel="nofollow">상세보기</a>
                            </div>
                            <a @click="goDetails('ns_1')"
                               class="woocommerce-LoopProduct-link woocommerce-loop-product__link"><h2
                                    class="woocommerce-loop-product__title">신라면</h2>
                                <div class="star-rating" role="img" aria-label="Rated 5.00 out of 5"><span
                                        style="width:100%">Rated <strong class="rating">5.00</strong> out of 5</span>
                                </div>
                            </a></li>

                        <!--<li class="product type-product post-1477 status-publish last instock product_cat-dining has-post-thumbnail shipping-taxable purchasable product-type-simple">
                            <div class="product-image"><a
                                    href="https://tinysalt.loftocean.com/product/traditional-tea-bowl/"
                                    class="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                <img width="300"
                                     height="300"
                                     src="https://tinysalt.loftocean.com/wp-content/uploads/2020/04/jose-alejandro-cuffia-g8oKXNizjjw-unsplash-2-300x300.jpg"
                                     class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                     alt=""
                                     srcset="https://tinysalt.loftocean.com/wp-content/uploads/2020/04/jose-alejandro-cuffia-g8oKXNizjjw-unsplash-2-300x300.jpg 300w, https://tinysalt.loftocean.com/wp-content/uploads/2020/04/jose-alejandro-cuffia-g8oKXNizjjw-unsplash-2-150x150.jpg 150w, https://tinysalt.loftocean.com/wp-content/uploads/2020/04/jose-alejandro-cuffia-g8oKXNizjjw-unsplash-2-500x500.jpg 500w, https://tinysalt.loftocean.com/wp-content/uploads/2020/04/jose-alejandro-cuffia-g8oKXNizjjw-unsplash-2-600x600.jpg 600w, https://tinysalt.loftocean.com/wp-content/uploads/2020/04/jose-alejandro-cuffia-g8oKXNizjjw-unsplash-2-100x100.jpg 100w"
                                     sizes="(max-width: 300px) 100vw, 300px"></a><a
                                    href="?add-to-cart=1477" data-quantity="1"
                                    class="button product_type_simple add_to_cart_button ajax_add_to_cart"
                                    data-product_id="1477" data-product_sku=""
                                    aria-label="Add “Traditional Tea Bowl” to your cart" rel="nofollow">Add to cart</a>
                            </div>
                            <a href="https://tinysalt.loftocean.com/product/traditional-tea-bowl/"
                               class="woocommerce-LoopProduct-link woocommerce-loop-product__link"><h2
                                    class="woocommerce-loop-product__title">Traditional Tea Bowl</h2>    <span
                                    class="price"><span class="woocommerce-Price-amount amount"><span
                                    class="woocommerce-Price-currencySymbol">$</span>99.00</span></span> </a></li>-->
                    </ul>
                    <nav class="woocommerce-pagination">
                        <ul class="page-numbers">
                            <li><span aria-current="page" class="page-numbers current">1</span></li>
                            <li><a class="page-numbers" href="https://tinysalt.loftocean.com/shop/page/2/">2</a></li>
                            <li><a class="next page-numbers" href="https://tinysalt.loftocean.com/shop/page/2/">→</a>
                            </li>
                        </ul>
                    </nav>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {Common} from "../../minxins/common";

    export default {
        name: "RamenList.vue",
        mixins: [Common],
        data(){
            return{
                squery: this.uriTojson(localStorage.getItem("squery"))
            }
        },
        created(){
            if (this.squery.offset > 0) {
                this.squery.offset = 0
                localStorage.setItem('squery', this.jsonTouri(this.squery))
            }
            //console.log(ramenList);
        },
        methods: {
            getSubVisual(){
                return 'background-image: url(/images/brand/'+this.squery.searchQuery+'_subvisual.png);'
            }
        },
        watch: {
            '$route': {
                handler: function () {
                    this.squery = this.uriTojson(localStorage.getItem('squery'))
                    //this.foundWines = []
                    //this.term = []
                    //this.searchWine()
                }
            },
            squery(newVal) {
                localStorage.setItem('squery', this.jsonTouri(newVal))
            }
        },
        beforeCreate: function () {
            //본문 바디의 class 를 지정해서 매 페이지마다 원하는 레이아웃을 불러옴
            document.body.className = 'archive post-type-archive post-type-archive-product wp-custom-logo wp-embed-responsive theme-tinysalt woocommerce woocommerce-page woocommerce-js light-color';
        }
    }
</script>

<style scoped>

</style>