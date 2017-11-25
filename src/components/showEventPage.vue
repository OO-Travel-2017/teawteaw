<<template>
    <div>
        <ul class="nav nav-tabs">
            <li class="active"v-on:click="isHost()"><a data-toggle="tab" href="#">All Event</a></li>
            <li v-on:click="isHost()"><a data-toggle="tab" href="#">Host Event</a></li>
            <li v-on:click="isMember()"><a data-toggle="tab" href="#">Member Event</a></li>
        </ul>
        <event-list v-if="all"v-bind:eventList="filterAllEvent"></event-list>
        <event-list v-if="host"v-bind:eventList="filterEventOfHost"></event-list>
        <event-list v-if="member"v-bind:eventList="filterEventOfMember()"></event-list>
  </div>
</template>
<<script>
import eventList from './eventItem.vue'
var memberList = []
export default {
    props:['eventAll','user'],
    components: {
      'event-list':eventList
    },
    data(){
        return {
            all: true,
            host: false,
            member: false,
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
            this.member = true
            this.host = false
       },
       filterEventOfMember: function(){
            memberList = []
            for(event of this.eventAll){
                if(event.member.indexOf(this.user)>=0){
                    console.log(memberList.push(event))
                }
            }
            return memberList
        }
    },
    computed:{
       filterEventOfHost: function (){
           return this.eventAll.filter((event)=>{
               return event.hostEvent.match(this.user)
           })
       },
       filterAllEvent: function () {
           return this.eventAll
       }
       
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