<template>
  <div id="app">
    <!--<home-page v-bind:user="user"></home-page> -->
    <!-- <event-detail></event-detail> -->
    
    <router-view></router-view>
    <!-- <show-page v-bind:eventAll="events" v-bind:user="user"></show-page> -->

  </div>
</template>

<script>
  import homePage from './components/homePage.vue'
  import eventDetail from './components/eventDetail.vue'
  import Firebase from "firebase";
  // import toastr from 'toastr'
  // Initialize Firebase

  // let config = {
  //   apiKey: "AIzaSyB4a_UPCTlPDVe6r2grNYKP_TQZbfe4DgA",
  //   authDomain: "fir-realtimeweb-4eb12.firebaseapp.com",
  //   databaseURL: "https://fir-realtimeweb-4eb12.firebaseio.com",
  //   projectId: "fir-realtimeweb-4eb12",
  //   storageBucket: "fir-realtimeweb-4eb12.appspot.com",
  //   messagingSenderId: "186732470338"
  // };
  
  // let firebaseApp = Firebase.initializeApp(config);
  // let db = firebaseApp.database();
  
  export default {
    name: "app",
    data() {
      return {
        user:'sukee'
      };
    },
    components: {
      homePage,
      eventDetail
    }
  };

</script>

<style scoped>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* margin-top: 60px; */
  }
  
  img {
    width: 200px;
    height: 200px;
  }
  
  h1,
  h2 {
    font-weight: normal;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }
</style>
