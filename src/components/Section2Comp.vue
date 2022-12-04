<template>
    <div class="section2">
      <div class="section2-text">
       <div class="quote" ><font-awesome-icon icon="fa-solid fa-quote-left" /></div>
       <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto eveniet incidunt sed excepturi</h1> 
      </div>
      

    </div>
</template>

<script>
     export default {
        name:'Section2Comp',
        components:{
        },
        props:{
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
.section2{
    height: 40vh;
    
    background-image: url('../assets/img/h3-testimonials-bckgrnd.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    .section2-text{
        width: 60%;
        margin: 0 auto;
        .quote{
             text-align: center;
             font-size: 4rem;
        }
       h1{
       
        text-align: center;
    } 
    } 
    
}
</style>