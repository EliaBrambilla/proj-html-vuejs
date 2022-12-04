<template>
    <div class="header">
        <!-- navbar -->
        <nav>
            <div>
                <button>ORDER ONLINE</button>
            </div>
            <div class="menu">
                <img class="mustacheSvg" src="../assets/svg/svg-0.svg" alt="">
                <ul>
                    <li v-for="(elem,index) in firstMenu" :key="index"><a  href="#" >{{ elem.name }} </a></li>
                </ul>
                 <img src="../assets/img/h5-logo-divided-header.png" alt="">
                <ul>
                    <li v-for="(elem,index) in secondMenu" :key="index"><a  href="#" >{{ elem.name }} </a></li>
                </ul>

                <!-- cart-search -->
            </div>
            <div class="cartSearch">
                <img class="cartSvg" src="../assets/svg/svg-1.svg" alt="">
                <a href="">CART</a>
                 <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                <a href="">SEARCH</a> 
            </div>
        </nav>
        <!-- img-text-timing -->
        <div class="header-img">
            <div class="pizzaTag" ><img src="../assets/img/h3-rev-img-5.png" alt=""></div>
            <div class="pizzaSlice"><img src="../assets/img/h3-rev-img-4.png" alt=""></div>
            
        </div>
    
    </div>
</template>

<script>
export default {
    name: 'HeaderComp',
    components: {
    },
    props: {
        headerMenu: Array
    },
    data() {
        return {
            prova: [],
            firstMenu: [],
            secondMenu: []
        }
    },
    mounted() {
        this.divideMenu()
    },
    methods: {
        divideMenu() {
            this.firstMenu = this.headerMenu.slice(0, 3)
            //console.log(this.firstMenu)
            this.secondMenu = this.headerMenu.slice(3)
            //console.log(this.secondMenu)
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/style/utility.scss";
li{
   
   
    display: inline;
}
.header {
    color: white;
    padding-bottom: 100px;
    background-image: url('../assets/img/sky-1475274047050-1d0c0975c63e.jpeg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  
    a {
        word-spacing: 10px;
        letter-spacing: 5px;
        font-weight: bold;
        color: white;
        text-decoration: none;
    }
    nav {
        padding-top: 40px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 90%;
        margin: 0 auto;
        .cartSearch {
            display: flex;
             a{
            margin-left: 5px;    
            font-size: 0.8rem;
            font-weight: bold;
            
            }
            .cartSvg{
                filter: invert(100%);
            }
        }
        button {
            color: white;
            background-color: #d2401e;
            border: 0px;
            padding: 10px 20px;
            letter-spacing: 5px;
            font-size: 0.7rem;
            font-weight: bold;
            font-family: 'Oswald', sans-serif;
            cursor: pointer;
        }
        .menu {
            display: flex;
            align-items: center;
            justify-content: center;
            .mustacheSvg{
             filter: invert(100%);
             width: 25px;
            }
            img {
                width: 20%;
            }
        }
    }
    .header-img {
        display: flex;
        justify-content: center;
        position: relative;
        .pizzaTag{
            display: flex;
            justify-content: center;
        }
        .pizzaSlice{
            display: flex;
            justify-content: center;
            position: absolute;
        }
        img {
            width: 80%;
        }
    }
}
</style>