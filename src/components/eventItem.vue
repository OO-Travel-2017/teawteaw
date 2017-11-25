<template>
    <div>
        <router-link :to= "{ path: 'event', query: { event_id: event.event_id }}" v-for="event in eventList">
        <ul type="button" class="panel panel-primary">
            <div class="panel-heading">{{event.event_name}}</div>
            <div class="panel-body" >{{event.begin_date}}</div>
            <div class="panel-body" >{{event.host}}</div>
        </ul>
        </router-link>
    </div>
</template>
<script>
import {db} from '../firebase'
export default {
  props:['eventList'],
  data() {
      return {
      }
  },
  methods:{
    translate(UserID){
        db.ref("User/" + UserID).once('value').then(function(dataSnapshot){
            var tempData = dataSnapshot.val();
            var tempString = tempData.firstname+" "+
                            tempData.surname
            console.log("Name : ",tempString)
            return tempString;
        })
    }
  }
}
</script>

<style scoped>
ul{
    text-align: left;
    padding: 0px 0px 0px 0px;
    margin:  10px 20px 20px 40px
}
</style>
