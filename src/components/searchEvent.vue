<template>
  <div>
<<<<<<< HEAD
      <input type="text"v-model="search" placeholder="search event"/>
      <div class=""><event-list v-bind:eventList="filteredEvent"></event-list></div>
=======
      <input type="text"v-model="search" placeholder="search event" 
        @change="typeEvent(search)" />
      <event-list v-bind:eventList="filteredEvent"></event-list>
>>>>>>> 9dce7d8f1dc6cbece05f7297a2eb81da78e86456
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

<<<<<<< HEAD
<<style scoped>
div.container{
    border: 1px solid orange;
    border-radius: 12px;
    padding: 20px 5px 5px 5px;
    margin:  10px 20px 20px 40px
}
=======
<style scoped>

>>>>>>> 9dce7d8f1dc6cbece05f7297a2eb81da78e86456
</style>
>
