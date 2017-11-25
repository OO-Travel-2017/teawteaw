<<template>
    <div class="container wid">
        <div class="row">
            <div class="col-sm-4">
                <!-- image of event -->
                <center>
                    <img src = "asset/lake.png" class="img-responsive" alt="image of event">
                </center>
                <!-- member List -->
                <div>
                    <h2>Member</h2>
                    <div class="list-group" style="overflow-y:scroll;" v-for="member in event.event_member">
                        <member-item :memberName="'Coke'"></member-item>
                        <member-item :memberName="'Sukee'"></member-item>
                        <member-item :memberName="'Jame'"></member-item>
                    </div>
                </div>
            </div>
            <div class="col-sm-8">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="form-group"style="text-align:left;">
                            <label for="event">Event:</label>
                            <label class="form-control" rows="5" id="event">{{ event.event_name }}</label>
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="form-group"style="text-align:left;">
                            <label for="location">Location:</label>
                            <label class="form-control" rows="5" id="location">{{ event.address }}</label>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group"style="text-align:left;">
                            <label for="host">Host:</label>
                            <label class="form-control" rows="5" id="host">{{event.host}}</label>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group"style="text-align:left;">
                            <label for="date">Date:</label>
                            <label class="form-control" rows="5" id="date">{{event.begin_date}}</label>
                        </div>
                    </div>
                </div>
                <div class="form-group"style="text-align:left;">
                    <label for="detail">Detail:</label>
                    <label class="form-control" style="resize:none;overflow-y:scroll;height:400px;" rows="20" id="detail">{{event.explain}}</label>
                </div>
            </div>
        </div>
    </div>
</template>
<<script>
import {db} from '../firebase'
import memberItem from "./memberItem.vue";
    export default {
        name: 'eventDetail',
        data(){
          return {
            msg: 'this is eventDetial',
            event: "hello"
          }
        },
        created:function(){
            var eventDetail=this;
            console.log("id : ", this.$route.query.event_id);
            var eventRef = db.ref("Event/" + this.$route.query.event_id);
            
            console.log("eventRef",eventRef);
            eventRef.once('value').then(function(dataSnapshot){
                console.log("Data",dataSnapshot.val());
                eventDetail.event=dataSnapshot.val();
                eventDetail.event.event_id=eventDetail.$route.query.event_id;
                console.log("event : ", eventDetail.event);
            })
        },
        components:{
          memberItem
        }
    }
</script>
<<style scoped>
  .wid {
      width:100%;
  }
</style>
