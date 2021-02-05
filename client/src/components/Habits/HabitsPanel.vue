<template>
   <div id="habits-panel" class="panel" :class="{'show':showWhichPanel === 'habits'}">
       <Habits />
    </div>        
</template>

<script>
import Habits from "./Habits"
import {mapGetters} from 'vuex'

export default {
    name: "HabitsPanel",
    components: {
        Habits
    },
    computed: mapGetters(["showWhichPanel"])
}
</script>
