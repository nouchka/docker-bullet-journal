<template>
    <div id="habit-options" class="footer-options">
        <div class="option-container">
            <div class="option-btn" title="Edit Habits" @click="(getHabitMode !== 'edit') ? setHabitMode('edit') : setHabitMode('create')">
                <v-icon name="pen" class="btn-icon" :class="{'active':getHabitMode === 'edit'}"/>
            </div>
            <div class="option-btn" title="Delete Habits" @click="(getHabitMode !== 'delete') ? setHabitMode('delete') : setHabitMode('create')">
                <v-icon name="trash" class="btn-icon" :class="{'active':getHabitMode === 'delete'}"/>
            </div>
        </div>
        
    </div>
</template>



<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    name: "HabitOptions",
    computed: {
        ...mapGetters(['getHabitMode'])
    },
    methods:{
        ...mapActions(['setHabitMode'])
    }
    
}
</script>

<style scoped>

.option-container {
    position: absolute;
    right: 0;
}

</style>