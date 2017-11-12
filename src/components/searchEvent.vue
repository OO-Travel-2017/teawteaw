<<template>
  <div>
      <input type="text"v-model="search" placeholder="search event"/>
      <event-list v-bind:eventList="filteredEvent"></event-list>
  </div>
</template>

<<script>
import eventList from './eventItem.vue'
export default {
    props:['eventAll'],
    components: {
      'event-list':eventList
    },
    data(){
        return {
            search:""
        }
    },
    methods:{

    },
    computed: {
        filteredEvent:function () {
            return this.eventAll.filter((event)=>{
                return event.nameEvent.match(this.search)
            })
        }
    }

}
</script>

<<style scoped>

</style>
>
>
>