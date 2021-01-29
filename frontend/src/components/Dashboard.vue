<template>
  <div id="dashboard">
     <ActionPanel/>
     <CollectionsPanel/>
     <Habits/>

  </div>
</template>

<script>
import ActionPanel from "./Actions/ActionPanel"
import CollectionsPanel from "./Collections/CollectionsPanel"
import Habits from "./Habits"


export default {
  name: 'Dashboard',
  components: {
    ActionPanel,
    CollectionsPanel,
    Habits,
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
  grid-template-columns: 3fr 5fr 4fr;
}


</style>
