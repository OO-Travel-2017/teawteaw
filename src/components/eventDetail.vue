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
                    <div class="list-group" style="overflow-y:scroll;" >
                        <member-item :memberID="member" v-for="member in event.event_member"></member-item>
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
                <div class="row">
                    <div class="form-group"style="text-align:left;">
                        <label for="detail">Detail:</label>
                        <label class="form-control" style="resize:none;overflow-y:scroll;height:400px;" rows="20" id="detail">{{event.explain}}</label>
                    </div>
                </div>
                <div class="row">
                    <center>
                        <button id="joinButton"type="button" class="btn btn-success" v-on:click="Join()">Join</button>    
                    </center>
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
            var self=this;
            var eventRef = db.ref("Event/" + this.$route.query.event_id);
            eventRef.once('value').then(function(dataSnapshot){
                self.event=dataSnapshot.val();
                self.event.event_id=self.$route.query.event_id;
                db.ref("Address/" + self.event.address).once('value').then(function(dataSnapshot){
                    var tempData = dataSnapshot.val();
                    var tempString = tempData.place_name+" "+
                                    tempData.place_number+" "+
                                    tempData.lane+" "+
                                    tempData.road+" "+
                                    tempData.sub_district+" "+
                                    tempData.district+" "+
                                    tempData.province+" "+
                                    tempData.postcode
                    console.log("Address : ",tempString)
                    self.event.address = tempString;
                })
                db.ref("User/" + self.event.host).once('value').then(function(dataSnapshot){
                    var tempData = dataSnapshot.val();
                    var tempString = tempData.firstname+" "+
                                    tempData.surname
                    console.log("name : ",tempString)
                    self.event.host = tempString;
                })
            })
        },
        components:{
          memberItem
        },
        methods: {
            Join() {
            var self = this;
            self.event.event_member.push("USER004");
            db.ref("Event/"+self.event.event_id+"/event_member").update(self.event.event_member);
            }
        }
    }
</script>
<<style scoped>
  .wid {
      width:100%;
  }
</style>
