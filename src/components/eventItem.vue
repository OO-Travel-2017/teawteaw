<template>
    <div>
        <div class="ConfirmModalWrapper">
            <button class="btn btn-xs" @click="handleActionButton()">Delete</button>
            <div class="modal" v-bind:class="{'is-active': modalState}">
            <div class="modal-backgroud"></div>
            <div class="modal-content">
                <h3>Show</h3>
            </div>
        </div>
        </div>
        
            <div class="panel-heading">{{event.nameEvent}}</div>
            <div class="panel-body" >{{event.dateTime}}</div>
            <div class="panel-body" >{{event.hostEvent}}</div>
        </ul> 
    </div>
</template>
<script>
export default {
    name: 'eventItem',
    props:['eventList'],
    data() {
        return {
            modalState: false
        }
    },
    components:{
        'event-detail-modal': eventDetail
    },
    methods: {
        handleActionButton(){
            this.modalState = true
        },
        handleCloseButton(){
            this.modalState = false
        }
    }
}
</script>

<style scoped>
ul{
    text-align: left;
    padding: 0px 0px 0px 0px;
    margin:  10px 20px 20px 40px
}
</style>
