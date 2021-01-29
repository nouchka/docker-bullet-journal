<template>
   <div id="create-item">
       <div class="header"><h3><span>C</span>reate <span>I</span>tem</h3></div>
       <form>
            <div class="type-container">
                <input type="radio" id="type-general" name="item-type" value="general">
                <input type="radio" id="type-todo" name="item-type" value="todo">
                <input type="radio" id="type-event" name="item-type" value="event">
                <label for="type-general"><h4>General</h4></label>
                <label for="type-todo" class="center"><h4>To Do</h4></label>
                <label for="type-event"><h4>Event</h4></label>
                <!-- <div><h4>Todo</h4></div>
                <div><h4>Event</h4></div> -->
            </div>
            <input type="text" placeholder="Item" name="content"/>
            <input type="text" placeholder="Category (optional)" name="category"/>
            <input type="datetime-local" name="dateTime"/>
            <button type="submit"><h5>Submit</h5></button>
        </form>

    </div>        
</template>

<script>

export default {
    name: "CreateItem",
    components: {
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