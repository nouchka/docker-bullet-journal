<template>
   <div class="item">
       <!-- <h2>{{item.content}}</h2> -->
       <form>
           <input class="item-content" type="text" v-bind:value="item.content" name="content" disabled/>
           
           <div class="details-container">
                <h5>{{formatDateTime(item.dateTime)}}</h5>
                <div class="btn-container">
                    <v-icon @click="toggleCompleted(item)" name="check" class="item-icon" v-bind:class="{'completed':item.completed}"/>
                    <v-icon name="pen" class="item-icon"/>
                    <v-icon name="trash" class="item-icon"/>
                </div>
            </div>
           
        </form>
    </div>
</template>

<script>
import {mapActions} from "vuex";


export default {
    name: "Item",
    props: ["item"],
    methods: {
       ...mapActions(["updateItem"]),
      formatDateTime(dateTime) {
      const date = new Date(dateTime);
      const weekday = new Intl.DateTimeFormat("default", {
         weekday: "narrow",
      }).format(date);

      const time = new Intl.DateTimeFormat("default", {
         hour12: true,
         hour: "numeric",
         minute: "numeric",
      }).format(date);

      return (`${weekday} ${dateTime.substring(0, 10)} | ${time}`);
   },
   toggleCompleted(item) {
       const updatedItem =  {
           ...item,
           ["completed"]: !item.completed
       }

        console.log(updatedItem);
       this.updateItem(updatedItem);
   }
    } 
}
</script>

<style scoped>



.item {
    border-radius: 10rem;
    width: 100%;
    background: rgb(255, 255, 255, 0.6);
    backdrop-filter: blue(10rem);
    overflow: hidden;
    padding: 5rem 10rem;
    /* margin-bottom: 15rem; */
}

.item-content{
    margin: 10rem 0;
    width: 100%;
}

.details-container {
    display: flex;
    justify-content: space-between;
}


.btn-container {
    padding: 0 5rem;
}

svg.item-icon {
    width: 20rem;
    height: 20rem;
    padding: 0 5rem;
    cursor: pointer;
}

.completed {
    fill: rgb(0, 255, 0);
}

</style>