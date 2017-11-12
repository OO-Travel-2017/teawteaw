<<template>
    <div>
        <ul v-for="event in eventList" v-on:click="event.show=!event.show">
            <h3>{{event.nameEvent}}</h3>
            <h3 v-show="event.show">{{event.dateTime}}</h3>
            <h3 v-show="event.show">{{event.hostEvent}}</h3>
        </ul>
    </div>
</template>
<<script>
export default {
  props:['eventList'],
  data() {
      return {

      }
  }
}
</script>

<<style scoped>
ul{
    text-align: left;
    border: 2px solid Orange;
    border-radius: 20px;
    background-color: Orange;
    padding: 10px 20px 20px 40px;
    margin:  10px 20px 20px 40px
}
</style>
>
>
>