<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    
    <HeaderComp   :headerMenu='headerMenu' />
    <Section1Comp :Section1images='Section1images' />
    <Section2Comp />
    <Section3Comp :Section3Specials="Section3Specials" />
    <Section4Comp />
    <Section5Comp :Section5images="Section5images"/>
    <Section6Comp :Section6Logos="Section6Logos" />
    <Section7Comp :Section7images="Section7images" />
    <Section8Comp :Section8Events="Section8Events"/>
    <Section9Comp />
    <MainComp />
    <FooterComp  :Restaurants="Restaurants" :OpeningDay="OpeningDay" />

   
  </div>
</template>

<script>
import HeaderComp from   './components/HeaderComp.vue'
import Section1Comp from './components/Section1Comp.vue'
import Section2Comp from './components/Section2Comp.vue'
import Section3Comp from './components/Section3Comp.vue'
import Section4Comp from './components/Section4Comp.vue'
import Section5Comp from './components/Section5Comp.vue'
import Section6Comp from './components/Section6Comp.vue'
import Section7Comp from './components/Section7Comp.vue'
import Section8Comp from './components/Section8Comp.vue'
import Section9Comp from './components/Section9Comp.vue'
import MainComp from './components/MainComp.vue'
import FooterComp from './components/FooterComp.vue'
// import axios from 'axios'
export default {
  name: 'App',
  components: {
    HeaderComp,
    Section1Comp,
    Section2Comp,
    Section3Comp,
    Section4Comp,
    Section5Comp,
    Section6Comp,
    Section7Comp,
    Section8Comp,
    Section9Comp,
    MainComp,
    FooterComp
  },
  data(){
    return{
    
    //HEADER MENU
    
    headerMenu:[
      {
        name:'HOME',
        link:'/',
      },
      {
       name:'PAGES',
       link:'/PAGES', 
      },
      {
        name:'MENU',
        link:'/MENU', 
      },
      {
        name:'EVENT',
        link:'/EVENT', 
      },
      {
       name:'BLOG',
       link:'/BLOG',  
      },
      {
        name:'LANDING',
        link:'/LANDING', 
      },
    ],
    
    // SECTION1 IMAGES
    Section1images:[
      {
       name:'Flyng birds',
       path:'h3-img-1.jpg', 
      },
       {
       name:'Good Pizza',
       path:'h3-img-2.jpg', 
      },
       {
       name:'Elvis',
       path:'h3-img-3.jpg',  
      },
       {
       name:'Big Pizza',
       path:'h3-img-4.jpg',  
      },
    ],
    //SECTION 3 SPECIALS
    Section3Specials:[
      {
        price:'10',
        name:'COMBO PICCOLO',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut aliquam dui.',
      },
            {
        price:'20',
        name:'COMBO MEZZO',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut aliquam dui.',
      },
            {
        price:'20',
        name:'COMBO GRANDE',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut aliquam dui.',
      }
    ],
    
    //SECTION 5 IMAGES
    Section5images:[
      {
       name:'Boy1Team',
       path:'h1-team-1a.jpg', 
      },
       {
       name:'Girl1Team',
       path:'h1-team-2a.jpg', 
      },
       {
       name:'Girl2Team',
       path:'h1-team-3a.jpg',  
      },
       {
       name:'Boy2Team',
       path:'h1-team-4a.jpg',  
      },
    ],
    //SECTION 6 LOGO'S
     Section6Logos:[
      {
       name:'BigCheese',
       path:'h1-clients-img-1.png', 
      },
       {
       name:'BludoosBar',
       path:'h1-clients-img-2.png', 
      },
       {
       name:'Gordon',
       path:'h1-clients-img-3.png',  
      },
       {
       name:'Cowboy',
       path:'h1-clients-img-4.png',  
      },
      {
       name:'Vegan',
       path:'h1-clients-img-5.png',  
      },
    ],
      //SECTION7 IMAGES
     Section7images:[
      {
       name:'BISMARK',
       path:'h3-product-img-1a.png',
       price:'30,00',
       discount:'14',
       discountedPrice:'',
       discountBadge:true,
       sold:false, 
      },
       {
       name:'FIORI DI ZUCCA',
       path:'h3-product-img-2a.png',
       price:'7,00-50,00',
       discount:'',
       discountedPrice:'',
       discountBadge:false,
       sold:false,   
      },
       {
       name:'VALDOSTANA',
       path:'h3-product-img-3a.png',
       price:'55,00',
       discount:'',
       discountedPrice:'',
       discountBadge:false,
       sold:true,    
      },
       {
       name:'PIZZA TARTUFATA',
       path:'h3-product-img-4a.png',
       price:'45,00',
       discount:'',
       discountedPrice:'',
       discountBadge:false,
       sold:false,    
      },
      {
       name:'FRANCESCANA',
       path:'h3-product-img-5a.png',
       price:'25,00',
       discount:'',
       discountedPrice:'',
       discountBadge:false,
       sold:false,    
      },
       {
       name:'CAMPAGNOLA',
       path:'h3-product-img-6a.png',
       price:'50,00-95,00',
       discount:'',
       discountedPrice:'',
       discountBadge:false,
       sold:false,    
      },
    ],
    //SECTION8 EVENTS-CARD
    Section8Events:[
      {
        day:'02',
        month:'NOV',
        title:'TRADITIONAL NEAPOLITAN PIES IN KYOTO PIAZZA MERCATO',
        geoTag:' 204 E. Pizzetta Tommaso'
      },
      {
        day:'03',
        month:'NOV',
        title:'SPACE OPENING THIS WEEKEND',
        geoTag:' 204 E. Pizzetta Tommaso'
      },
      {
        day:'05',
        month:'NOV',
        title:'SIENNA PRIVATE DINING ROOM WITH STÈPHANE BRUNN',
        geoTag:' 204 E. Pizzetta Tommaso'
      }
    ],
    //FOOTER RESTAURANT
    Restaurants:[
      {
        street:'1614 E. Bell Rd #104.',
        city:'Salerno',
        zipcode:'AZ 85022',
        pnumber:'(602) 867-1010',
      },
      {
        street:'204 E. Pizzetta Tommaso',
        city:'Sorrento',
        zipcode:'AZ 85022',
        pnumber:'(358) 867-1010',
      },
      {
        street:'Vale Puglia 54',
        city:'Torre Del Greco AZ',
        zipcode:'85022',
        pnumber:'(359) 867-1010',
      },
      {
        street:'Corso Itali AA',
        city:'Naples',
        zipcode:'AZ 85022',
        pnumber:'(989) 867-1010',
      },
    ],
      
      
    
    //FOOTER OPENING DAY
    OpeningDay:[
      {
        day:'MONDAY',
        opening:'',
        closing:'',
        KitchenClosed:true,
      },
       {
        day:'TUSEDAY',
        opening:'9.00',
        closing:'22.00',
        KitchenClosed:false,
        
      },
       {
        day:'WEDNESDAY',
        opening:'9.00',
        closing:'22.00',
        KitchenClosed:false,
        
      },
       {
        day:'THURSDAY',
        opening:'9.00',
        closing:'22.00',
        KitchenClosed:false,
        
      },
       {
        day:'FRIDAY',
        opening:'9.00',
        closing:'22.00',
        KitchenClosed:false,
        
      },
       {
        day:'SATURDAY',
        opening:'11.00',
        closing:'24.00',
        KitchenClosed:false,
        
      },
       {
        day:'SUNDAY',
        opening:'9.00',
        closing:'22.00',
        KitchenClosed:false,
        
      },
    ]
    }
  },
  mounted(){
  },
  methods:{
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
a{
  text-decoration: none;
}
li{
   list-style-type: none;
}
#app {
 
  font-family: 'Oswald', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>