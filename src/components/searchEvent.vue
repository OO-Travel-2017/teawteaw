<template>
  <div>
      <input type="text"v-model="search" placeholder="search event" 
        @change="typeEvent(search)" />
      <event-list v-bind:eventList="filteredEvent"></event-list>
  </div>
</template>

<script>
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

<style scoped>

</style>
>
