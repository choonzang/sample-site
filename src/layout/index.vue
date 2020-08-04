<template>
    <div>
        <top-area @event-data="checksubmenuActive"></top-area>
        <div>
            <router-view/>
        </div>
        <footer-area @event-data="checksubmenuActive"></footer-area>
    </div>
</template>

<script>
    import TopArea from '@/layout/TopArea'
    import FooterArea from '@/layout/FooterArea'

    export default {
        name: "index.vue",
        components: {
            TopArea,
            FooterArea
        },
        data(){
            return{
                submenuActive:'false'
            }
        },
        methods:{
            checksubmenuActive(data){
                this.submenuActive = data;
                console.log(this.submenuActive);
            }
        }
    }
</script>

<style scoped>

</style>