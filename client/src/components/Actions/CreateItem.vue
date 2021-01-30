<template>
   <div id="create-item">
       <div class="header"><h3><span>C</span>reate <span>I</span>tem</h3></div>
       <form @submit="addingItem">
            <div class="type-container">
                <input type="radio" id="type-general" value="general" v-model="type">
                <label for="type-general"><h4>General</h4></label>
                <input type="radio" id="type-todo" value="todo" v-model="type">
                <label for="type-todo" class="center"><h4>To Do</h4></label>
                <input type="radio" id="type-event" value="event" v-model="type">
                <label for="type-event"><h4>Event</h4></label>
            </div>
            <input type="text" placeholder="Item" v-model="content"/>
            <input type="text" placeholder="Category (optional)" v-model="category"/>
            <input type="datetime-local" v-model="dateTime"/>
            <button type="submit"><h5>Submit</h5></button>
        </form>

    </div>        
</template>

<script>
import {mapActions} from "vuex"

export default {
    name: "CreateItem",
    components: {
    },
    data(){
        return {
            type: "general",
            content: "",
            category: "",
            dateTime: "",
        }
    },
    methods: {
        ...mapActions(['addItem']),
        addingItem(e) {
            e.preventDefault();
            const newItem = {
                id: 4,
                content: this.content,
                type: this.type,
                category: this.category,
                dateTime: this.dateTime,
                completed: false,
            }

            this.addItem(newItem);
        }
    }
}
</script>

<style scoped>

#create-item {
    position: relative;
    border-radius: 10rem;
    width: 100%;
    height: 100%;
    background: rgb(255, 255, 255, 0.7);
    backdrop-filter: blue(10rem);
    overflow: hidden;
}

.header {
    height: 30rem;
    padding: 5rem 10rem;
}

input[type="radio"]:checked + label {
    background:#19515e;
}

input[type="radio"]:checked + label h4{
    color: white;
}

form {
    padding: 10rem;
}

input {
  padding: 5rem 0;
}


.type-container {
    display: flex;
    border-radius: 5rem;
    justify-content: space-between;
    border: 1rem solid #19515e;
    margin-bottom: 10rem;
}

label {
    width: 100%;
    cursor: pointer;
}

.selected {
    background:  #19515e;
    color: white;
}


.center {
    border-left: 1rem solid #19515e;
    border-right: 1rem solid  #19515e;
}

h4 {
    text-align: center;
}

</style>