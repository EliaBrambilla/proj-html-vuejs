<template>
    <div class="section4">
        <div class="sec4Text">
          <h2>GO AHEAD AND</h2>
          <h2>BUILD YOUR </h2>
          <h2>OWN PIZZA </h2>
          <h2>WE WON'T </h2>
          <h2>JUDJE!</h2>  
        </div>
      
    </div>
</template>

<script>
     export default {
        name:'Section4Comp',
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
.section4{
    display: flex;
    
    
    height: 80vh;
    background-image:url('../assets/img/h3-background-img.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    .sec4Text{
    line-height: 4.5rem;    
    font-family: 'Oswald', sans-serif;
    margin: 50px 300px;    
    font-size: 3rem;       
    //inline-size: 450px;
    //overflow-wrap: break-word;
    color:white;
    }
}
</style>