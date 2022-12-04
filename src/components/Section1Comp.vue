<template>
    <div class="section1">
     <div class="sec1img">
        <img v-for='(elem,index) in Section1images' :key="index" :src="require(`../assets/img/${elem.path}`) " alt="">
     </div>
    </div>
</template>

<script>
     export default {
        name:'Section1Comp',
        components:{
        },
        props:{
        Section1images:Array
        },
        data(){
            return{
            }
        },
        mounted(){
        },
        methods:{
            
        }
    }
</script>

<style lang="scss" scoped>
.section1 {
    
    width: calc(100% / 4);
    .sec1img{
        display:flex;
        img{
        width: 100%;
        }
    }
    
}
</style>