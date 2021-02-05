<template>
    <div id="habit-options" class="footer-options">
        <div class="option-container">
            <div class="habit-edit-options">
                <div class="option-btn" title="Edit Habits" @click="(getHabitMode !== 'edit') ? setHabitMode('edit') : setHabitMode('create')">
                    <v-icon name="pen" class="btn-icon" :class="{'active':getHabitMode === 'edit'}"/>
                </div>
                <div class="option-btn" title="Delete Habits" @click="(getHabitMode !== 'delete') ? setHabitMode('delete') : setHabitMode('create')">
                    <v-icon name="trash" class="btn-icon" :class="{'active':getHabitMode === 'delete'}"/>
                </div>
            </div>
             <input type="date" id="month-year" name="month-year" v-model="currentMonthYear" @change="changeDates()">
        </div>
        
    </div>
</template>



<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    name: "HabitOptions",
    computed: {
        ...mapGetters(['getHabitMode']),
    },
    data() {
        return {
            currentMonthYear: ""
        }
    },
    methods:{
        ...mapActions(['setHabitMode', 'setDateRange']),
        changeDates () {
            const currentDate = this.currentMonthYear.split("-",2);
            this.setDateRange(currentDate);
        }

    },
    created() {
            const current = new Intl.DateTimeFormat('en-GB').format(new Date()).split("/");
            this.currentMonthYear = `${current[2]}-${current[1]}-${current[0]}`;
    }
    
    
}
</script>

<style scoped>

.option-container {
    justify-content: space-between;
}

.habit-edit-options {
    display: flex;
}

#month-year {
    width: 150rem;
    font-size: 14rem;
    outline: none;
}


</style>