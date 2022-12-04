<template>
    <div class="section6">
        
        <div class="sec6img">
            <img v-for='(elem,index) in Section6Logos' :key="index" :src="require(`../assets/img/${elem.path}`) " alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Sectio6Comp',
    components: {
    },
    props: {
        Section6Logos: Array
    },
    data() {
        return {
        }
    },
    mounted() {
    },
    methods: {
    }
}
</script>

<style lang="scss" scoped>
.section6 {
    padding:50px 40px;
    width: calc(100% / 4);
    .sec6img {
        display: flex;
        img {
            width: 100%;
        }
    }
}
</style>