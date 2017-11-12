<<template>
    <div>
        <ul href="#" role="button" class="panel panel-danger" v-for="event in eventList">
            <div class="panel-heading">{{event.nameEvent}}</div>
            <div class="panel-body" >{{event.dateTime}}</div>
            <div class="panel-body" >{{event.hostEvent}}</div>
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
    padding: 0px 0px 0px 0px;
    margin:  10px 20px 20px 40px
}
</style>
>
>
>