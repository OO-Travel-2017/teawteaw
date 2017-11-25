<template>
  <div>
      <input type="text"v-model="search" placeholder="search event" />
      <div class=""><event-list v-bind:eventList="searchData"></event-list></div>
      <!-- <div>{{ eventList }}</div> -->
  </div>
</template>

<script>
import eventList from './eventItem.vue'
import {db} from '../firebase'
export default {
    props:['eventAll'],
    components: {
      'event-list':eventList
    },
    data(){
        return {
            search:"",
            eventList:""
        }
    },
    methods:{
    },
    created:function(){
            var eventRef = db.ref("Event");
            var eventAll = []; 
            eventRef.once('value').then(function(dataSnapshot){
                var childKey = null;
                var childData = null;
                dataSnapshot.forEach(function(childSnapshot){
                    childKey = childSnapshot.key;
                    var temp = childSnapshot.val()
                    temp.event_id=childKey;
                    eventAll.push(temp); 
                })
            })
            
            this.eventList = eventAll;
            console.log("eventList : ", this.eventList);
    },
    computed: {
        searchData:function(){
            var dataList = []
            this.eventList.filter((event)=>{
                if(event.event_name.match(this.search)){
                    console.log(dataList.push(event))
                }
            })
           return dataList
        }
    }
}
</script>
<style scoped>
div.container{
    border: 1px solid orange;
    border-radius: 12px;
    padding: 20px 5px 5px 5px;
    margin:  10px 20px 20px 40px
}
</style>
>
