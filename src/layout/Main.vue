<template>
    <div>
        <div>
            <top-area></top-area>
            <div>
                <div>
                    <h2>라면 검색</h2>
                    <h3>면식수행자를 위한 라면 포털 서비스</h3>
                    <div><input type="text"><button>검색</button></div>
                </div>
                <div>
                    <h2>새로운 출시 라면</h2>
                    <div>
                        <img src="">
                        <h3>출시라면명</h3>
                        <p>내용 소개</p>
                    </div>
                </div>
                <div>
                    <h2>라면 통계</h2>
                    <h3>g당 칼로리가 가장 낮은 라면</h3>
                </div>
            </div>
            <!--
            <div>
                <router-view/>
            </div>
            -->
            <footer-area></footer-area>
        </div>
    </div>
</template>

<script>
    import TopArea from '@/layout/TopArea'
    import FooterArea from '@/layout/FooterArea'

    export default {
        name: "Main.vue",
        components: {
            TopArea,
            FooterArea
        }
    }
</script>

<style scoped>

</style>