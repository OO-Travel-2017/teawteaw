<<template>
    <div>
        <ul class="nav nav-tabs">
            <li class="active" v-on:click="isDefault()"><a data-toggle="tab" >All Event</a></li>
            <li v-on:click="isHost()"><a data-toggle="tab">Host Event</a></li>
            <li v-on:click="isMember()"><a data-toggle="tab">Member Event</a></li>
        </ul>
        <event-list v-if="all"v-bind:eventList="eventList"></event-list>
        <event-list v-if="host"v-bind:eventList="filterEventOfHost()"></event-list>
        <event-list v-if="member"v-bind:eventList="filterEventOfMember()"></event-list>
  </div>
</template>
<<script>
import eventList from './eventItem.vue'
import {db} from '../firebase'
var memberList = []
export default {
    props:['eventAll'],
    components: {
      'event-list':eventList
    },
    data(){
        return {
            all: true,
            host: false,
            member: false,
            eventList:"",
            user : {
                user_id : "USER004",
                address  :  "ADDRESS005",
                birth_date  :  "16/8/2538",
                email  :  "sukee_believe@gmail.com",
                firstname  :  "วัชนันท์",
                gender  :  "Female",
                introduct  :  "-",
                line_id  :  "sukee_believe",
                max_word  :  "250",
                phone  :  "0894758631",
                profile_picture  :  "-",
                surname  :  "บุญช่วยเหลือ",
                website  :  "-"
            }
        }
    },
    methods:{
        isDefault: function (){
            this.all = true
            this.host = false
            this.member = false
        },
        isHost: function () {
            this.all = false
            this.host = true
            this.member = false
       },
       isMember: function (){
           this.all = false
            this.host = false
            this.member = true
       },
       filterEventOfMember: function () {
           var memberList = [] 
           this.eventList.filter((event)=>{
               event.event_member.forEach((member)=>{
                   if(member==this.user.user_id){
                       console.log(memberList.push(event))
                   }
               }) 
           })
           return memberList
       },
       filterEventOfHost: function() {
           var hostList = []
           this.eventList.filter((event)=>{
                if(event.host==this.user.user_id){
                    console.log(hostList.push(event))
                }
            })
           return hostList
       }
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
    computed:{
       }    
    }
</script>
<<style scoped>
ul.nav.nav-tabs{
    padding: 20px 5px 0px 5px;
    margin:  10px 20px 0px 40px;
}
</style>
>
>
>