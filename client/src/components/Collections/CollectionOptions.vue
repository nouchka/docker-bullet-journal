<template>
   <div id="collection-options">
       <div class="container">
            <div class="option-container ">
                <div class="option-btn option-category">
                    <v-icon name="filter" class="btn-icon" title="Filter: Click to Clear" />
                </div>
                <div class="option-btn">
                    <v-icon name="calendar-day" class="btn-icon" title="By Events" />
                </div>
                <div class="option-btn">
                    <v-icon name="tasks" class="btn-icon" title="By Todos"/>
                </div>
                <div class="option-btn">
                    <v-icon name="list" class="btn-icon" title="Other lists"/>
                </div>
                <div class="option-btn">
                    <v-icon name="square" class="btn-icon outline" title="In Progress"/>
                </div>
                <div class="option-btn">
                    <v-icon name="check-square" class="btn-icon" title="Completed"/>
                </div>
               
            </div>
            <div class="option-container">
                <div class="option-btn option-category">
                    <v-icon name="sort" class="btn-icon" title="Sort: Click to Clear"/>
                </div>
                <div class="option-btn">
                    <v-icon name="history" class="btn-icon" title="By Date: Newest to Oldest"/>
                </div>
                <div class="option-btn">
                    <v-icon name="sort-alpha-down" class="btn-icon" title="Alphabetically"/>
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

.outline {
    fill: none;
    border: 2rem solid rgb(25, 81, 94);
    width: 15rem;
    height: 15rem;
    border-radius: 2rem;
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

.item-icon {

}


</style>