<template>
   <div id="collections">
       <div class="header"><h1><span>C</span>ollections</h1></div>
       <div class="item-container">
           <div v-for="item in allItems" :key="item.id">
               <Item v-bind:item="item"/>
           </div>
       </div>
       <CollectionOptions />

    </div>        
</template>

<script>
import Item from "./Item"
import CollectionOptions from "./CollectionOptions"
import {mapGetters} from "vuex"

export default {
    name: "Collections",
    components: {
        Item,
        CollectionOptions,
    },
    computed: mapGetters(["allItems"])
}
</script>

<style scoped>

#collections {
    position: relative;
    border-radius: 10rem;
    width: 100%;
    height: 100%;
    background: rgb(255, 255, 255, 0.4);
    backdrop-filter: blue(10rem);
    overflow: hidden;
}

.header {
   padding-left: 20rem; 
}

.item-container {
    display: grid;
    grid-gap: 10rem;
    grid-template-columns: repeat(auto-fit, minmax(230rem, 1fr));
    /* align-items: center; */
    padding: 10rem;
    overflow-y: scroll;
    max-height: 80vh;
}

.item-container::-webkit-scrollbar {
    display: none;
}

</style>