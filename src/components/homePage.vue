<template>

  <div id="home" class="container">
      <div class="row">
        <div id="" class="col-sm-12 header-bar" >
            <div class="col-sm-4 user-tag" style="float:right;" id="">
                <p>{{user}} <img src = "asset/people.png" class="img-user"></p>
            </div>
        </div>
        <img src = "asset/header.jpg" class="img-responsive" alt="header" style="width:100%">
        
            <!-- <div class="col-sm-12"> -->
        <div class="tabs">
            <div id="" class="col-sm-3 homeLeft">
                <button class="btn btn-primary  btn-md but-left" v-for="(tab, index) in tabs"
                        :class="{active : currentTab === index}"
                        @click="currentTab = index">{{tab}}</button>
            </div>
            <div class="col-sm-9 homeRight tab-content">
                <div v-show="currentTab === 0">
                    <!-- <search-event v-bind:eventAll="events"></search-event> -->
                    <search-event v-bind:eventAll="events" @typeEvent="handleEvent"></search-event>
                </div>
                <div v-show="currentTab === 1">
                    <show-page v-bind:eventAll="events" v-bind:user="user"></show-page>
                </div>
                <div v-show="currentTab === 2">
                    <event-detail></event-detail>
                </div>
            </div>
        </div>

      </div>

  </div>
</template>

<script>
    import eventDetail from "./eventDetail.vue";
    import eventItem from './eventItem.vue'
    import searchEvent from './searchEvent.vue'
    import showEventPage from './showEventPage.vue'
    import Firebase from "firebase";
    import VueFire from 'vuefire';

    let config = {
        apiKey: "AIzaSyB4a_UPCTlPDVe6r2grNYKP_TQZbfe4DgA",
        authDomain: "fir-realtimeweb-4eb12.firebaseapp.com",
        databaseURL: "https://fir-realtimeweb-4eb12.firebaseio.com",
        projectId: "fir-realtimeweb-4eb12",
        storageBucket: "fir-realtimeweb-4eb12.appspot.com",
        messagingSenderId: "186732470338"
    };

    let firebaseApp = Firebase.initializeApp(config);
    let db = firebaseApp.database();

    // var firebase = require('firebase');
    // Vue.use(VueFire);

    // var vm = new Vue({
    //     el:'#demo',
    //     firebase:{
    //         anArray: db.ref('https://fir-realtimeweb-4eb12.firebaseio.com'),
    //         anObject:{
    //             source: db.ref="https://fir-realtimeweb-4eb12.firebaseio.com/Event",
    //             asObject: true

    //         }
    //     }
    // })

    export default {
        name: 'homePage',
        props: ['user'],
            data(){
                return {
                    // user: "painter",
                    currentTab: 0,
                    tabs: ['HOME', 'YOUR EVENT', 'CREATE EVENT'],
                    events:[
                        {nameEvent:'Japan Go Go',dateTime:'22 Jan 2560',hostEvent:'sukee',member:Array('oat','paint','coke'),show:false,pic:"../assets/image.png"},
                        {nameEvent:'Korea Go Go',dateTime:'22 Jan 2560',hostEvent:'oat',member:Array('sukee','paint','coke'),show:false,pic:"../assets/image.png"},
                        {nameEvent:'Thailand Go Go',dateTime:'22 Jan 2560',hostEvent:'sukee',member:Array('oat','paint','coke'),show:false,pic:"../assets/image.png"},
                        {nameEvent:'England Go Go',dateTime:'22 Jan 2560',hostEvent:'coke',member:Array('oat','paint','sukee'),show:false,pic:"../assets/image.png"},
                        {nameEvent:'England Go Go',dateTime:'22 Jan 2560',hostEvent:'coke',member:Array('oat','paint','sukee'),show:false,pic:"../assets/image.png"}
                    ]
                }
            },
            components: {
                eventDetail,
                'event-item': eventItem,
                'search-event': searchEvent,
                'show-page':showEventPage
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
    };
</script>

<style>

    .header-bar {
        width: 100%;
        height: 70px;
        background-color: darkblue;
    }

    .homeLeft, .homeRight {
        /* border: 10px solid; */
        padding-top: 10px;
        padding-bottom: 10px; 
        border-radius: 5px;
        /* border-color: darkblue; */
        background-color:#C7DDF7; 
    }

    .homeRight {
        background-color:#C7DDF7; 
        /* #34455A      #36E0FA */
    }

    /* #home {
        margin: 0px;
        width: 100%;
        height: 100%;
        padding: 0px;
    } */

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
    .but-left {
        width: 70%;
        align-content: center;
        position: center;
        margin: 5%;
    }
</style>
