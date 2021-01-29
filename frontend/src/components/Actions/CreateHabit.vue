<template>
   <div id="create-habit">
       <div class="header"><h3><span>C</span>reate <span>H</span>abit</h3></div>
       <form>
            <input type="text" placeholder="Habit" name="content" minLength="1"/>
            <input type="text" placeholder="Abbreviation (max 2 characters)" name="content" minLength="1" maxLength="2"/>
            <button type="submit"><h5>Submit</h5></button>
        </form>

    </div>        
</template>

<script>

export default {
    name: "CreateHabit",
    components: {
    }
}
</script>

<style scoped>

#create-habit {
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
    background: rgb(25, 81, 94);
}

form {
    padding: 10rem;
}

input {
  padding: 5rem 0;
}



</style>