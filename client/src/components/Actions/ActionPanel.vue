<template>
   <div id="action-panel" class="panel" :class="{'show':showWhichPanel === 'action'}">
       <div class="image-container">
       </div>
       <CreateItem />
       <CreateHabit />
    </div>        
</template>

<script>
import CreateItem from "./CreateItem"
import CreateHabit from "./CreateHabit"
import {mapGetters, mapActions} from "vuex"

export default {
    name: "ActionPanel",
    components: {
        CreateItem,
        CreateHabit,
    },
    computed: {
        ...mapGetters(["showWhichPanel", "getMobileMode"]),    
    },
    methods: mapActions(["changePanel"])
}
</script>

<style scoped>

#action-panel {
    display: grid;
    grid-template-rows: 5fr 4fr 3fr;
    grid-gap: 10rem;
}



@media only screen and (max-width: 1200px) {
    #action-panel {
        position: absolute;
        z-index: 10;
        width: 100%;
        height: 40%;
        bottom: -100%;
        padding: 15rem;
        grid-gap: 20rem;
        grid-template-rows: none;
        grid-template-columns: repeat(auto-fit, minmax(382rem, 1fr));
        backdrop-filter: blur(10rem);
        transition: all 1s;
        box-shadow: 0 -3rem 10rem 5rem rgb(25, 81, 94, 0.2);
    }

    .image-container {
        display: none;
    }

    #action-panel.show {
        bottom: 0;
    }

}

@media only screen and (max-width: 850px) {

    #action-panel {
         width: 95%;
         height: 100%;
         padding: 10rem;
         grid-template-columns: none;
    }

    #action-panel.show{
        bottom: 20%;
    }

}

</style>

<style>


#action-panel .header {
    height: 30rem;
    padding: 5rem 10rem;
    border-radius: 10rem 10rem 0 0;
}

input {
  padding: 7rem 0;
}


#action-panel button {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 96%;
    margin-left: 2%;
    
}



</style>