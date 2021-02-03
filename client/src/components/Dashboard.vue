<template>
  <div id="dashboard">
     <ActionPanel/>
     <CollectionsPanel/>
     <HabitsPanel />

  </div>
</template>

<script>
import ActionPanel from "./Actions/ActionPanel"
import CollectionsPanel from "./Collections/CollectionsPanel"
import HabitsPanel from "./Habits/HabitsPanel"


export default {
  name: 'Dashboard',
  components: {
    ActionPanel,
    CollectionsPanel,
    HabitsPanel,
  },   
  
}
</script>

<style scoped>

#dashboard {
  position: relative;
  width: 95vw;
  height: 95vh;
  display: grid;
  grid-template-columns: 4fr 7fr 2fr;
}

</style>

<style>

.item-icon {
  cursor: pointer;
}

.panel {
    position: relative;
    border-radius: 10rem;
    width: 95%;
    height: 95vh;
    justify-self: center;
    background: rgb(255, 255, 255, 0.3);
    padding: 10rem;
}

.header {
   background: rgb(25, 81, 94);
   height: 50rem;
   padding: 10rem;
   display: flex;
   align-items: flex-end;
}

.group-container {
    position: relative;
    border-radius: 10rem;
    width: 100%;
    height: 100%;
    background: rgb(255, 255, 255, 0.4);
    overflow: hidden;
}

.category-dropup {
    background: rgb(255, 255, 255);
    display: none;
    height: 100rem;
    border: 1rem dashed rgb(25, 81, 94, 0.3);
    overflow-y: scroll;
}

.scroll::-webkit-scrollbar {
  width: 10rem;
  height: 10rem;
}

/* Track */
.scroll::-webkit-scrollbar-track {
  background: rgb(25, 81, 94, 0.5);
}

/* Handle */
.scroll::-webkit-scrollbar-thumb {
  background: rgb(25, 81, 94);
}

/* Handle on hover */
.scroll::-webkit-scrollbar-thumb:hover {
  background: rgb(25, 81, 94,0.6);
}

.category-dropup p{
    padding: 3rem 5rem;
    border-bottom: 1rem dashed rgb(25, 81, 94, 0.3);
    cursor: pointer;
}



/* Footer Options */

.footer-options {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40rem;
    background: rgb(25, 81, 94, 0.2);
}

.option-container {
    position: relative;
    display: flex;
    padding: 5rem 10rem;
}

.option-btn {
    width: 30rem;
    height: 30rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5rem;
}

.btn-icon {
    cursor: pointer;
}

svg.active {
    fill: rgba(3, 190, 3);
}

</style>
