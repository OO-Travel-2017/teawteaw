<template>
    <div>
        <h2 class="title"><strong>Create Event</strong></h2>
        <form>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <br>
                            <label for="inputName">Name</label>
                            <input type="text" class="form-control" v-model="event.event_name" placeholder="Enter name event">
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group" id="forminput" >
                                    <label for="inputDate">Date</label>
                                    <input type="date" class="form-control"placeholder="Date" v-model="event.begin_date">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="inputPhone">Social network or phone</label>
                                    <input type="text" class="form-control" id="inputPhone" placeholder="Enter social network or phone" v-model="inputPhone">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <h3><strong>Address</strong></h3>
                            <br>
                            <div class="col-lg-6 form-group">
                                <label>Place Address</label>
                                <input type="text" placeholder="place address" class="form-control" v-model="address.place_name">
                            </div>
                            <div class="col-lg-6 form-group">
                                <label>Place No.</label>
                                <input type="text" placeholder="place number" class="form-control" v-model="address.place_number">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6 form-group">
                                <label>Lane</label>
                                <input type="text" placeholder="lane" class="form-control" v-model="address.lane">
                            </div>
                            <div class="col-lg-6 form-group">
                                <label>Road</label>
                                <input type="text" placeholder="road" class="form-control" v-model="address.road">
                            </div>  
                        </div>
                        <div class="row">
                            <div class="col-lg-6 form-group">
                                <label>Sub-district</label>
                                <input type="text" placeholder="sub-district" class="form-control" v-model="address.sub_district">
                            </div>
                            <div class="col-lg-6 form-group">
                                <label>District</label>
                                <input type="text" placeholder="district" class="form-control" v-model="address.district">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6 form-group">
                                <label>Province</label>
                                <input type="text" placeholder="province" class="form-control" v-model="address.province">
                            </div>
                            <div class="col-lg-6 form-group">
                                <label>Post code</label>
                                <input type="text" placeholder="post code" class="form-control" v-model="address.postcode">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <br>
                    <div class="form-group">
                            <label for="inputMember">Number of participants</label>
                            <input type="text" class="form-control" id="inputMember" placeholder="Enter number of participants" v-model="event.max_member">
                        </div>    
                        <div class ="form-group">
                            <br>
                            <label for="inputDetail">Detail</label>
                            <br>
                            <textarea  class="form-control"id="inputDetail" cols="50" rows="10" v-model="event.explain"></textarea>
                        </div>
                        <br>
                        <button id="buttonCancel"type="button" class="btn btn-danger" v-on:click="Cancel()">Cancel</button>
                        <button id="buttonSuccess"type="button" class="btn btn-success" v-on:click="Success()">Success</button>    
                    </div>
                </div> 
        </form>
    </div>
</template>
<script>
import { db } from "../firebase";
export default {
  data() {
    return {
      event: {
        event_name: "",
        begin_date: "",
        max_member: "",
        explain: ""
      },
      address: {
        place_name: "",
        place_number: "",
        province: "",
        road: "",
        sub_district: "",
        postcode: "",
        lane: "",
        district: "",
        is_user_address: true
      }
    };
  },
  methods: {
    Success() {
      alert(this.event_name);
      var self = this;
      var ref = db.ref("Count");
      ref.once("value").then(function(dataSnapshot) {
        //event
        var countEvent = dataSnapshot.val().Event + 1;
        var eventKey = "EVENT00" + String(countEvent);
        db.ref("Event/" + eventKey).update(self.event);
        db.ref("Count/Event").set(countEvent);
        db.ref("Event/" + eventKey).update({ event_member: ["USER004"] });
        //address
        var countAddress = dataSnapshot.val().Address + 1;
        var addressKey = "ADDRESS00" + String(countAddress);
        db.ref("Address/" + addressKey).update(self.address);
        db.ref("Count/Address").set(countAddress);
        db.ref("Event/" + eventKey).update({ address: addressKey });
        $('form').get(0).reset()
      });
    },
    Cancel() {
        $('form').get(0).reset()
    }
  }
};
</script>
<style>
/* .form-control {
  background: linear-gradient(#66cccc, #66ccff);
} */
/* h1 {
  color: #111;
  font-family: "Helvetica Neue", sans-serif;
  font-size: 100px;
  font-weight: bold;
  letter-spacing: -1px;
  line-height: 1;
  text-align: center;
  background: linear-gradient(#ccffee, #66ccff);
} */
label {
  color: #111;
  font-family: "Helvetica Neue", sans-serif;
  font-size: 14px;
  line-height: 24px;
  margin: 0 0 24px;
  text-align: justify;
  text-justify: inter-word;
}
body {
  background-color: #ccd9ff;
}
</style>


