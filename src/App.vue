<template>
  <div id="app">
    <!-- <show-page v-bind:eventAll="events" v-bind:user="user"></show-page> -->
    <search-event v-bind:eventAll="events"></search-event>
  </div>
</template>

<script>
import eventItem from './components/eventItem.vue'
import searchEvent from './components/searchEvent.vue'
import showEventPage from './components/showEventPage.vue'
import Firebase from 'firebase'
// import toastr from 'toastr'
// Initialize Firebase
let config = {
  apiKey: "AIzaSyB4a_UPCTlPDVe6r2grNYKP_TQZbfe4DgA",
  authDomain: "fir-realtimeweb-4eb12.firebaseapp.com",
  databaseURL: "https://fir-realtimeweb-4eb12.firebaseio.com",
  projectId: "fir-realtimeweb-4eb12",
  storageBucket: "fir-realtimeweb-4eb12.appspot.com",
  messagingSenderId: "186732470338"
  };

let firebaseApp = Firebase.initializeApp(config)
let db = firebaseApp.database()


export default {
  name: 'app',
  data () {
    return {
      events:[
        {nameEvent:'Japan Go Go',dateTime:'22 Jan 2560',hostEvent:'sukee',member:Array('oat','paint','coke'),show:false,pic:"../assets/image.png"},
        {nameEvent:'Korea Go Go',dateTime:'22 Jan 2560',hostEvent:'oat',member:Array('sukee','paint','coke'),show:false,pic:"../assets/image.png"},
        {nameEvent:'Thailand Go Go',dateTime:'22 Jan 2560',hostEvent:'sukee',member:Array('oat','paint','coke'),show:false,pic:"../assets/image.png"},
        {nameEvent:'England Go Go',dateTime:'22 Jan 2560',hostEvent:'coke',member:Array('oat','paint','sukee'),show:false,pic:"../assets/image.png"},
        {nameEvent:'England Go Go',dateTime:'22 Jan 2560',hostEvent:'coke',member:Array('oat','paint','sukee'),show:false,pic:"../assets/image.png"}
     ],
     user:'sukee'
    }
  },
  components: {
    'event-item': eventItem,
    'search-event': searchEvent,
    'show-page':showEventPage
    //'eventList':eventList
    //'all-event': allEvent
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  width: 200px;
  height: 200px;
}

h1, h2 {
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
