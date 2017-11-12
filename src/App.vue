<template>
  <div id="app">
    <show-page v-bind:eventAll="events" v-bind:user="user"></show-page>
    <search-event v-bind:eventAll="events"
        @typeEvent="handleEvent"
      ></search-event>
  </div>
</template>

<script>
import eventItem from './components/eventItem.vue'
import searchEvent from './components/searchEvent.vue'
import showEventPage from './components/showEventPage.vue'
import firebase from 'firebase'
//import { listAllEvent } from './coke'

// import toastr from 'toastr'
// Initialize Firebase
const config={
    databaseURL: "https://fir-realtimeweb-4eb12.firebaseio.com",
}

firebase.initializeApp(config)
const db = firebase.database()

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
  },
  methods: {
    handleEvent(eventN){
      this.new_event = [];
      var firebaseRef = db.ref("event").orderByChild("eventName").startAt(eventN).endAt(eventN+"\uf8ff");
      firebaseRef.once('value').then(function (dataSnapshot) {
        //split key and value
        dataSnapshot.forEach(function (childSnapshot) {
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            //childData is JSON of data, you can apply to other variable
            console.log(childData);
        })
    });
    }
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
