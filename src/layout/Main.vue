<template>
    <div style="width:100%;display: block;">
        <div style="max-width:1200px;border:1px solid #CCC;display:block;margin:0 auto;">
            <top-area></top-area>
            <div>
                <router-view/>
            </div>
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