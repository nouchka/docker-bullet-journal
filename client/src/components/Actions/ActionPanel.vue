<template>
   <div id="action-panel" class="panel">
       <div>
       </div>
       <CreateItem />
       <CreateHabit />

    </div>        
</template>

<script>
import CreateItem from "./CreateItem"
import CreateHabit from "./CreateHabit"

export default {
    name: "ActionPanel",
    components: {
        CreateItem,
        CreateHabit,
    }
}
</script>

<style scoped>

#action-panel {
    display: grid;
    grid-template-rows: 5fr 4fr 3fr;
    grid-gap: 10rem;
}

</style>

<style>


#action-panel .header {
    height: 30rem;
    padding: 5rem 10rem;
}

input {
  padding: 5rem 0;
}


</style>