<template>
    <div class="section7">
        <div class="sec7Text">
            <h6>CHOOSE YOUR FLAVOUR</h6>
            <h2>THE BEST PIZZA MENU IN TOWN</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae cupiditate mollitia</p>
        </div>
        <div  class="sec7Card">
            <div v-for='(elem,index) in Section7images' :key="index"  class="sec7Content">
              <div class="pizza">
                <img :src="require(`../assets/img/${elem.path}`) " alt="">
                <div v-if="elem.discountBadge"  class="discount"> {{elem.discount}}%</div>
                <div v-if="elem.sold"  class="sold">SOLD</div>
              </div>
                <div>{{elem.name}}</div>
                <div class="price">
                <div :class="(elem.discountBadge == true ) ?  'priceGrey' : 'priceRed'">${{elem.price}}</div>
                <div class="priceRed" v-if="elem.discountBadge" >${{discountPrice(elem)}}</div>   
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Section7Comp',
    components: {
    },
    props: {
        Section7images: Array
    },
    data() {
        return {
        
        }
    },
    mounted() {
    //this.discountPrice()
    },
    methods: {
    discountPrice(pizza){
        //console.log(parseInt(pizza.price))
        //console.log(parseInt(pizza.discount))
        let discountedPrice =  parseInt(pizza.price) - (parseInt(pizza.price) * parseInt(pizza.discount) / 100 ) 
        console.log(discountedPrice)
        return discountedPrice
    
       
      
      
    }
    }
}
</script>

<style lang="scss" scoped>
.section7 {
    .sec7Text {
      padding: 50px 0px;
        text-align: center;
        font-family: 'Oswald', sans-serif;
        h6 {
            color: #d7573c;
        }
    }
    .sec7Card {
       padding: 50px 0px;
        display: flex;
        text-align: center;
        .price{
         display: flex;
         justify-content: center;   
        .priceRed{
            color: red;
        }
        .priceGrey{
            color: grey;
            text-decoration: line-through;
        }   
        }
        .sec7Content{
           width: calc(100% / 6);
          img {
            width: 100%;
           }
           .pizza{
            position: relative;
           .discount,.sold{
            color: white;
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 60px;
            height:60px;
            border-radius: 50%;
           }
           .discount{
           top: 10px;
           background-color: red;
           }
           .sold{
            right: 0px;
            top: 10px;
            background-color:brown;
           }
           }
        }
        
    }
}
</style>