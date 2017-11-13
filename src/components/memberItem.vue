<<template>
    <a href="#" class="list-group-item" >
        <div class="media">
            <div class="media-left">
            <a href="#">
                <img class="media-object" :src="image" alt="...">
            </a>
            </div>
            <div class="media-body" style="vertical-align: middle;">
            <h4 class="media-heading" style="text-align: left;">{{memberName}}</h4>
            </div>
        </div>
    </a>
</template>
<<script>
export default {
    name: 'memberItem',
    props: ['memberName'],
    computed: {
        image: function(){
            return 'asset/'+this.memberName+'.png'
        }
    }
}
</script>

