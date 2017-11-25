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
                    <div class="list-group" style="overflow-y:scroll;">
                        <member-item :memberName="'Coke'"></member-item>
                        <member-item :memberName="'Sukee'"></member-item>
                        <member-item :memberName="'Jame'"></member-item>
                    </div>
                </div>
            </div>
            <div class="col-sm-8">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="form-group"style="text-align:left;">
                            <label for="event">Event:</label>
                            <label class="form-control" rows="5" id="event">kick Sukee's ass</label>
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="form-group"style="text-align:left;">
                            <label for="location">Location:</label>
                            <label class="form-control" rows="5" id="location">Chulalongkorn University</label>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group"style="text-align:left;">
                            <label for="host">Host:</label>
                            <label class="form-control" rows="5" id="host">Sukee</label>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group"style="text-align:left;">
                            <label for="date">Date:</label>
                            <label class="form-control" rows="5" id="date">dd/mm/yyyy</label>
                        </div>
                    </div>
                </div>
                <div class="form-group"style="text-align:left;">
                    <label for="detail">Detail:</label>
                    <label class="form-control" style="resize:none;overflow-y:scroll;height:400px;" rows="20" id="detail"></label>
                </div>
            </div>
        </div>
    </div>
</template>
<<script>
    import memberItem from "./memberItem.vue";
        export default {
        name: 'eventDetail',
        data(){
          return {
            msg: 'this is eventDetial'
          }
        },
        components:{
          memberItem
        }
    }
</script>
<<style scoped>
  .wid {
      width:100%;
  }
</style>
