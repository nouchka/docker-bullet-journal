<template>
   <div id="create-item" class="action-boxes">
       <div class="header"><h3><span>{{title()[0]}}</span>{{title()[1]}} <span>I</span>tem</h3></div>
       <form @submit="addingItem">
            <div class="type-container">
                <input type="radio" id="type-general" value="general" v-model="newItem.type">
                <label for="type-general"><h4>General</h4></label>
                <input type="radio" id="type-todo" value="todo" v-model="newItem.type">
                <label for="type-todo" class="center"><h4>To Do</h4></label>
                <input type="radio" id="type-event" value="event" v-model="newItem.type">
                <label for="type-event"><h4>Event</h4></label>
            </div>
            <input type="text" placeholder="Item" v-model="newItem.content" required/>
            <input type="text" placeholder="Category (optional)" 
                v-model="newItem.category" 
                class="category-input" 
                @focusin ="showCategory = true"
                @focusout="showCategory = false"
            />
            <div class="category-dropup scroll" :class="{'show':(showCategory === true)}">
                <p v-for="category in categories" :key="category"
                @click="fillCategory(category)">{{category}}</p>
            </div>
            <input type="datetime-local" v-model="newItem.dateTime" :min="today"/>
            <button type="submit"><h5>Submit</h5></button>
        </form>

    </div>        
</template>

<script>
import {mapGetters, mapActions} from "vuex"

export default {
    name: "CreateItem",
    components: {
    },
    data() {
        return {
            showCategory: false,
            today: new Date().toISOString().substring(0,11) + "00:00" ,
        }
    },
    computed: {
        ...mapGetters(['categories', 'newItem', 'getItemMode']),
    },
    methods: {
        ...mapActions(['addItem', 'updateItem','fillCategory']),
        addingItem(e) {
            e.preventDefault();

            if (this.getItemMode === "create") {
                this.addItem(this.newItem);
            } else {
                this.updateItem(this.newItem);
            }
        },
        title() {
            return [this.getItemMode.substring(0,1), this.getItemMode.substring(1)] ;
        },   
    }
}
</script>

<style scoped>

#create-item {
    min-height: 210rem;
}

h4 {
    text-align: center;
}

label {
    width: 100%;
    cursor: pointer;
}

input[type="radio"]:checked + label {
    background:#19515e;
}

input[type="radio"]:checked + label h4{
    color: white;
}

.type-container {
    display: flex;
    border-radius: 5rem;
    justify-content: space-between;
    border: 1rem solid #19515e;
    margin-bottom: 10rem;
}

.selected {
    background:  #19515e;
    color: white;
}

.center {
    border-left: 1rem solid #19515e;
    border-right: 1rem solid  #19515e;
}

.category-dropup.show,
.category-dropup:hover {
    display: block;
}

</style>