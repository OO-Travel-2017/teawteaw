<<template>
    <a href="#" class="list-group-item" >
        <div class="media">
            <div class="media-left">
            <a href="#">
                <img v-if="member.profile_picture" class="media-object" :src="'asset/'+member.profile_picture" alt="...">
            </a>
            </div>
            <div class="media-body" style="vertical-align: middle;">
            <h4 class="media-heading" style="text-align: left;">{{member.firstname}} {{member.surname}}</h4>
            </div>
        </div>
    </a>
</template>
<<script>
import {db} from '../firebase'
export default {
    name: 'memberItem',
    props: ['memberID'],
    data(){
        return{
            member:{}
        }
    },
    created:function(){
        var self=this;
        db.ref("User/" + this.memberID).once('value').then(function(dataSnapshot){
            self.member=dataSnapshot.val();
            console.log("ID : ",self.memberID);
            console.log("member : ",self.member);
        });
    }
}
</script>

