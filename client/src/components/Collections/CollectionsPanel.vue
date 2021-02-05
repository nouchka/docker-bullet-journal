<template>
   <div id="collections-panel" class="panel" :class="{'show':showWhichPanel === 'collections'}">
       <Collections />
    </div>        
</template>

<script>
import Collections from "./Collections"
import {mapGetters} from 'vuex'

export default {
    name: "CollectionsPanel",
    components: {
        Collections,
    },
       computed: {
        ...mapGetters(["showWhichPanel"])
    }
}
</script>

<style scoped>


@media only screen and (max-width: 1200px) {
  /* #collections-panel{ 
      height: 70%;
      order: 1;
  } */
}


</style>