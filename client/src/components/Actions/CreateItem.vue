<template>
   <div id="create-item">
       <div class="header"><h3><span>{{title()[0]}}</span>{{title()[1]}} <span>I</span>tem</h3></div>
       <form @submit="addingItem">
            <div class="type-container">
                <input type="radio" id="type-general" value="general" v-model="wipItem.type">
                <label for="type-general"><h4>General</h4></label>
                <input type="radio" id="type-todo" value="todo" v-model="wipItem.type">
                <label for="type-todo" class="center"><h4>To Do</h4></label>
                <input type="radio" id="type-event" value="event" v-model="wipItem.type">
                <label for="type-event"><h4>Event</h4></label>
            </div>
            <input type="text" placeholder="Item" v-model="wipItem.content" required/>
            <input type="text" placeholder="Category (optional)" v-model="wipItem.category"/>
            <input type="datetime-local" v-model="wipItem.dateTime" :min="wipItem.dateTime"/>
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
    computed: {
        wipItem: {
            get() {
                return this.$store.getters.newItem;
            }
        },
        createMode: {
            get() {
                return this.$store.getters.getMode;
            }
        }
    },
    methods: {
        ...mapActions(['addItem', 'updateItem']),
        addingItem(e) {
            e.preventDefault();

            if (this.createMode === "create") {
                this.addItem(this.wipItem);
            } else {
                this.updateItem(this.wipItem);
            }
        },
        title() {
            return [this.createMode.substring(0,1), this.createMode.substring(1)] ;
        },
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