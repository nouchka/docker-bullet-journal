<template>
   <div id="collection-options">
            <div class="container">
                <div class="option-container ">
                    <div class="option-btn option-category" @click="filtering('','')" title="Filter: Click to Clear">
                        <v-icon name="filter" class="btn-icon"  />
                    </div>
                    <div class="option-btn" @click="filtering('type', 'event')" title="By Events">
                        <v-icon name="calendar-day" class="btn-icon" :class="{'active':filterConditions.value === 'event'}"  />
                    </div>
                    <div class="option-btn" @click="filtering('type', 'todo')" title="By Todos">
                        <v-icon name="tasks" class="btn-icon" :class="{'active':filterConditions.value === 'todo'}" />
                    </div>
                    <div class="option-btn" @click="filtering('type', 'general')"  title="Other lists">
                        <v-icon name="list" class="btn-icon" :class="{'active':filterConditions.value === 'general'}"/>
                    </div>
                    <div class="option-btn" @click="filtering('completed', false)"  title="In Progress">
                        <v-icon name="square" class="btn-icon outline" :class="{'active':filterConditions.value === false}"/>
                    </div>
                    <div class="option-btn" @click="filtering('completed', true)" title="Completed">
                        <v-icon name="check-square" class="btn-icon" :class="{'active':filterConditions.value === true}"/>
                    </div>
                    <div class="option-btn show-categories" title="By Category">
                        <v-icon name="object-group" class="btn-icon" :class="{'active':filterConditions.property === 'category'}"/>
                        <div class="category-dropup scroll">
                            <p v-for="category in categories" :key="category" 
                                @click="filtering('category', category)">
                            {{category}}
                            </p>
                        </div>
                    </div>
                    
                
                </div>
                <div class="option-container">
                    <div class="option-btn option-category" title="Sort: Click to Clear" @click="changeSort('FIFO')">
                        <v-icon name="sort" class="btn-icon"/>
                    </div>
                    <div class="option-btn" title="By Date Created: Newest to Oldest" @click="changeSort('createdLIFO')">
                        <v-icon name="calendar-plus" class="btn-icon" :class="{'active':sortConditions === 'createdLIFO'}"/>
                    </div>
                    <div class="option-btn" title="By Due Date: Earliest to Latest" @click="changeSort('dueLIFO')">
                        <v-icon name="calendar-check" class="btn-icon" :class="{'active':sortConditions === 'dueLIFO'}" />
                    </div>
                    <div class="option-btn" title="A-Z: Ascending" @click="changeSort('asc')">
                        <v-icon name="sort-alpha-down" class="btn-icon" :class="{'active':sortConditions === 'asc'}"/>
                    </div>

                    
                </div>
            </div>
        </div>
       
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
    name: "CollectionOptions",
    methods: {
        ...mapActions(['changeFilter', 'changeSort']),
        filtering(property, value) {
            const condition = {
                property: property,
                value: value,
            }
            this.changeFilter(condition);
        },
    },
    computed:{
        ...mapGetters(['categories','sortConditions', 'filterConditions'])
    }
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
}

.outline {
    fill: none;
    border: 2rem solid rgb(25, 81, 94);
    width: 15rem;
    height: 15rem;
    border-radius: 2rem;
}

.outline.active {
   border: 2rem solid rgba(3, 190, 3); 
   fill: none;
}

.container {
    display: flex; 
}

.label-icon {
    fill: white;
}

.option-container {
    position: relative;
    display: flex;
    padding: 5rem 10rem;
}

.option-container:nth-child(1) {
    width: 60%;
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

.btn-icon {
    cursor: pointer;
}

.active {
    fill: rgba(3, 190, 3);
}

.show-categories:hover .category-dropup,
.category-dropup:hover {
    display: block;
}

.category-dropup {
    width: 200rem;
    position: absolute;
    bottom: 4vh;
    right: 0;
}

/* .category-dropup p{
    padding: 3rem 5rem;
    border-bottom: 1rem dashed rgb(25, 81, 94, 0.3);
    cursor: pointer;
} */



</style>