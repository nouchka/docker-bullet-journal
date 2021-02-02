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

.action-boxes {
    position: relative;
    border-radius: 10rem;
    width: 100%;
    height: 100%;
    background: rgb(255, 255, 255, 0.7);
    backdrop-filter: blue(10rem);
    overflow: hidden;
}
#action-panel .header {
    height: 30rem;
    padding: 5rem 10rem;
}

form {
    padding: 10rem;
}

input {
  padding: 5rem 0;
}


</style>