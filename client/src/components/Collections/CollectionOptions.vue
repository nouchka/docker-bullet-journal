<template>
   <div id="collection-options">
       <div class="container">
            <div class="option-container ">
                <div class="option-btn option-category">
                    <v-icon name="filter" class="item-icon"/>
                </div>
                <div class="option-btn">
                    <v-icon name="calendar-day" class="item-icon"/>
                </div>
                <div class="option-btn">
                    <v-icon name="check-square" class="item-icon"/>
                </div>
                <div class="option-btn">
                    <v-icon name="list" class="item-icon"/>
                </div>
            </div>
            <div class="option-container">
                <div class="option-btn option-category">
                    <v-icon name="sort" class="item-icon"/>
                </div>
                <div class="option-btn">
                    <v-icon name="clock" class="item-icon"/>
                </div>
                <div class="option-btn">
                    <v-icon name="sort-alpha-down" class="item-icon"/>
                </div>
                
            </div>
        </div>
    </div>
       
</template>

<script>
export default {
    name: "CollectionOptions"
}
</script>

<style scoped>

h3 {
    margin: 0 auto;
}

#collection-options {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 5vh;
    background: rgb(25, 81, 94, 0.2);
    overflow: hidden;
}

.container {
    display: flex; 
}

.label-icon {
    fill: white;
}

.option-container {
    width: 50%;
    display: flex;
    padding: 5rem 10rem;
}



.option-category {
    border-right: 1rem solid  rgb(25, 81, 94);    
}


.option-btn {
    width: 30rem;
    height: 30rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5rem;
}


</style>