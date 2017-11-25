<template>
  <div>
      <input type="text"v-model="search" placeholder="search event" 
        @change="typeEvent(search)" />
      <div class=""><event-list v-bind:eventList="filteredEvent"></event-list></div>

  </div>
</template>

<script>
import eventList from './eventItem.vue'
export default {
    name: 'searchEvent',
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
        typeEvent(eventN){
            console.log("Emit!")
            this.$emit('typeEvent', this.search)
      }
    },
    computed: {
        filteredEvent:function () {
         this.$emit('typeEvent', this.search)
            return this.eventAll.filter((event)=>{
                return event.nameEvent.match(this.search)
            })
        }
    }

}
</script>
<<style scoped>
div.container{
    border: 1px solid orange;
    border-radius: 12px;
    padding: 20px 5px 5px 5px;
    margin:  10px 20px 20px 40px
}
</style>
>
