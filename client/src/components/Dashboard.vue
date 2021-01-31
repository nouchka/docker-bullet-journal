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
  border: 1rem solid blue;
  width: 95vw;
  height: 95vh;
  display: grid;
  grid-template-columns: 4fr 5fr 3fr;
}

</style>

<style>

.group-container {
    position: relative;
    border-radius: 10rem;
    width: 100%;
    height: 100%;
    background: rgb(255, 255, 255, 0.4);
    overflow: hidden;
}

.header {
   padding-left: 20rem; 
}

</style>
