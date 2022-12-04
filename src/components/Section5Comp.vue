<template>
    <div class="section5">
        <div class="sec5img">
            <img v-for='(elem,index) in Section5images' :key="index" :src="require(`../assets/img/${elem.path}`) " alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Section5Comp',
    components: {
    },
    props: {
        Section5images: Array
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
.section5 {
    
    width: calc(100% / 4);
    .sec5img{
        display:flex;
        img{
        width: 100%;
        }
    }
    
}
</style>