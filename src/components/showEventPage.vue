<<template>
  <div>
        <button v-on:click="isHost()">Host Event</button>
        <button v-on:click="isMember()">Member Event</button>
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
            host: true,
            member: false,
        }
    },
    methods:{
        isHost: function () {
            this.host = true
            this.member = false
       },
       isMember: function (){
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
       
    }
}
</script>
<<style scoped>

</style>
>
>
>