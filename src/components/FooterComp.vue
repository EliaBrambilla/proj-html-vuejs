<template>
  <div class="footer">
      <div class="footerContent">
          <div class="footerText">
              <div>
                  <ul>
                      <li>
                          <h4>FIND OUR RESTAURANT</h4>
                      </li>
                      <li v-for="ele,ind in Restaurants" :key="ind">
                          <a href="#">
                              <div>{{ele.street}}</div>
                              <div>{{ele.city}}</div>
                              <div>{{ele.zipcode}}</div>
                              <div>{{ele.pnumber}}</div>
                          </a>
                      </li>
                  </ul>
              </div>
              <div>
                  <ul>
                      <li><h4>WORKING HOURS</h4></li>
                      <li v-for="elem,ind in OpeningDay" :key="ind">
                          <a href="#">
                            <div>{{elem.day}}</div>
                            <div v-if="elem.KitchenClosed" >Kitchen Closed</div>
                            <div v-else>{{elem.opening}} - {{elem.closing}}</div>
                          </a>
                      </li>
                  </ul>
              </div>
              <div>
              <h2>THE DON PEPPE CREW FIRST AND FOREMOST VALUES AN AUTHENTIC, WELL BAKED SLICE OF PIZZA.</h2>
              </div>
          </div>
          <div class="footerImg">
  
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'FooterComp',
  components: {
  },
  props: {
      Restaurants: Array,
      OpeningDay: Array
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
.footer {
  .footerContent {
      display: flex;
      
      .footerText {
          display: flex;
          justify-content: space-around;
          background-image: url('../assets/img/sky-1475274047050-1d0c0975c63e.jpeg');
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          flex-basis: 50%;
          h2{
              inline-size: 140px;
              overflow-wrap: break-word;
              padding: 100px 0 ;
              font-family: 'Oswald', sans-serif;
              color: white;
          }
          h4 {
              color: red;
          }
          ul {
               padding: 50px 0px;
              li {
                  padding: 10px 0;
                  a {
                      color: white;
                  }
              }
          }
      }
      .footerImg {
          
          flex-basis: 50%;
          background-image: url('../assets/img/footer-img-1.jpg');
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          display: flex;
          justify-content: center;
          img {
              padding: 50px;
              width: 80%;
          }
      }
  }
}
</style>