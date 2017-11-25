<template>

  <!-- <div id="home" class="container">
      <div class="row">
        <div id="" class="col-sm-12 header-bar" >
            <div class="col-sm-4 user-tag" style="float:right;" id="">
                <p>{{user}} <img src = "asset/people.png" class="img-user"></p>
            </div>
        </div>
        <img src = "asset/header.jpg" class="img-responsive" alt="header" style="width:100%">
         -->
            <!-- <div class="col-sm-12"> -->
        <div class="tabs" >
            <div id="" class="col-sm-3 homeLeft">
                <button class="btn btn-primary  btn-md but-left" v-for="(tab, index) in tabs"
                        :class="{active : currentTab === index}"
                        @click="currentTab = index">{{tab}}</button>
            </div>
            <div class="col-sm-9 homeRight tab-content">
                <div v-show="currentTab === 0">
                    <!-- <search-event v-bind:eventAll="events"></search-event> -->
                    <search-event v-bind:eventAll="events"></search-event>
                </div>
                <div v-show="currentTab === 1">
                    <show-page v-bind:eventAll="events"></show-page>
                </div>
                <div v-show="currentTab === 2">
                    <create-event></create-event>
                </div>
            <!-- </div>
        </div> -->

      </div>

  </div>
</template>

<script>
import createEvent from "./createEvent.vue";
import eventItem from "./eventItem.vue";
import searchEvent from "./searchEvent.vue";
import showEventPage from "./showEventPage.vue";
import Firebase from "firebase";
import VueFire from "vuefire";
import { db } from "../firebase";
export default {
  name: "homePage",
  firebase: {},
  data() {
    return {
      currentTab: 0,
      tabs: ["HOME", "YOUR EVENT", "CREATE EVENT"],
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
    "create-event":createEvent,
    "event-item": eventItem,
    "search-event": searchEvent,
    "show-page": showEventPage
  },
  methods: {}
};
</script>

<style>
/* 
    .header-bar {
        width: 100%;
        height: 70px;
        background-color: darkblue;
    } */

.homeLeft,
.homeRight {
  /* border: 10px solid; */
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 5px;
  /* border-color: darkblue; */
  /* background-color: white; */
}
/* 
.homeRight {
  background-color: #c7ddf7;
    #34455A      #36E0FA  
} */

/* #home {
        margin: 0px;
        width: 100%;
        height: 100%;
        padding: 0px;
    } */

/* .img-user {
        width: 50px;
        height: 50px;
        margin: 10px;
        position: center;
    }

    .user-tag {
        font-size: 16px;
        color: white;
    } */
.but-left {
  width: 70%;
  align-content: center;
  position: center;
  margin: 5%;
}
</style>
