<template>
  <div id="app">
    <show-page v-bind:eventAll="events" v-bind:user="user"></show-page>
    <search-event v-bind:eventAll="events"></search-event>
    <!-- <img src="http://vuejs.org/images/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="https://github.com/vuejs/vueify" target="_blank">vueify</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul> -->
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
        {nameEvent:'Japan Go Go',dateTime:'22 Jan 2560',hostEvent:'sukee',member:Array('oat','paint','coke'),show:false},
        {nameEvent:'Korea Go Go',dateTime:'22 Jan 2560',hostEvent:'oat',member:Array('sukee','paint','coke'),show:false},
        {nameEvent:'Thailand Go Go',dateTime:'22 Jan 2560',hostEvent:'sukee',member:Array('oat','paint','coke'),show:false},
        {nameEvent:'England Go Go',dateTime:'22 Jan 2560',hostEvent:'coke',member:Array('oat','paint','sukee'),show:false},
        {nameEvent:'England Go Go',dateTime:'22 Jan 2560',hostEvent:'coke',member:Array('oat','paint','sukee'),show:false}
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
