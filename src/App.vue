<template>
  <div id="app">
    <!--<home-page v-bind:user="user"></home-page> -->
    <!--<event-detail></event-detail>-->
    <div id="home" class="container">
      <div class="row">
        <div id="" class="col-sm-12 header-bar" >
            <div class="col-sm-4 user-tag" style="float:right;" id="">
                <p>{{user.firstname}} {{user.surname}}<img src = "asset/Sukee.png" class="img-user"></p>
            </div>
        </div>
        <img src = "asset/header.jpg" class="img-responsive" alt="header" style="width:100%">
        
        <router-view></router-view>
    <!-- <show-page v-bind:eventAll="events" v-bind:user="user"></show-page> -->
      </div>
    </div>
  </div>
</template>

<script>
import homePage from "./components/homePage.vue";
import eventDetail from "./components/eventDetail.vue";
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
import { db } from "./firebase";
export default {
  name: "app",
  data() {
    return {
      user: {
        user_id: "USER004",
        address: "ADDRESS005",
        birth_date: "16/8/2538",
        email: "sukee_believe@gmail.com",
        firstname: "วัชนันท์",
        gender: "Female",
        introduct: "-",
        line_id: "sukee_believe",
        max_word: "250",
        phone: "0894758631",
        profile_picture: "-",
        surname: "บุญช่วยเหลือ",
        website: "-"
      }
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
#home {
  background-color: white;
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

.header-bar {
  width: 100%;
  height: 70px;
  background-color: #337ab7;
}
.img-user {
  width: 50px;
  height: 50px;
  margin: 10px;
  position: center;
}

.user-tag {
  font-size: 16px;
  color: white;
}
</style>
