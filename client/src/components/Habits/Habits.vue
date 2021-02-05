<template>
   <div id="habits" class="group-container">
        <div class="header"><h1><span>H</span>abits</h1></div>
        <div class="habit-container">
            <div class="wrapper">
                <div class="habit-format dates-container">
                    <div class="habit-content center filler"></div>
                    <div v-for="date in displayMonth" :key="date" class="indicator-box center" :class="{'today':date === today}">
                        <p class='month-date'>{{date}}</p>
                    </div>
                </div>
                <div class="tracker">
                    <div v-for="habit in allHabits" :key="habit._id" class="habit-format">
                        <div class="habit-content center" :title="habit.content">
                            <p @click="execute(habit)" :class="{'animate':getHabitMode !== 'create'}">{{habit.abbr}}</p>
                        </div>
                        <div v-for="date in displayMonth" :key="date" class="indicator-box center" :class="{'today':date === today}" >
                            <v-icon 
                                name="leaf" 
                                class="btn-icon indicator-icon" 
                                :class="{'completed':habit.datesCompleted.includes(date)}"
                            @click="toggleHabit(date, habit)"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <HabitOptions />
    </div>        
</template>

<script>
import HabitOptions from './HabitOptions'
import {mapGetters, mapActions} from 'vuex'

export default {
    name: "Habits",
    components: {
        HabitOptions,
    },
    computed: {
        ...mapGetters(['allHabits','displayMonth', 'getHabitMode'])
    },
    data() {
        return {
            today: "" 
        }
    },
    methods: {
        ...mapActions(["setDateRange", "updateHabit", "setEditHabit", "deleteHabit", 'changePanel']),
        toggleHabit(date, habit) {
            let updatedDates = [];
            if (habit.datesCompleted.includes(date)) {
                updatedDates = habit.datesCompleted.filter((existingDates) => existingDates !== date);
            } else {
                updatedDates = [...habit.datesCompleted, date];
            }

            this.updateHabit({
                ...habit,
                ["datesCompleted"]: updatedDates,
            });
        },
        execute(habit) {
            if (this.getHabitMode === "edit") {
                this.setEditHabit(habit);
                this.changePanel('action');
            } else if (this.getHabitMode === "delete") {
                this.deleteHabit(habit._id);
            }
        }
    },
    created() {
        this.$store.dispatch("initHabits")
        const current = new Intl.DateTimeFormat('en-GB').format( new Date()).split("/");
        this.today= `${current[2]}-${current[1]}-${current[0]}`;
        }
    
}

</script>

<style scoped>

p {
    font-size: 12rem;
}


.animate {
    font-weight: 600;
    animation: float 1s infinite;
}

@keyframes float {
    0%{ transform: translateY(0)}
    50%{ transform: translateY(-2rem)}
    100%{ transform: translateY()}
}

.center {
    display: flex;
    align-items: center;
    justify-content: center;
}

.habit-container {
    position: relative;
    height: 100%;
    padding: 0 5rem 20rem 0;
    border-bottom: 1rem solid rgb(25, 81, 94, 0.5);
}

.wrapper {
    display: flex;
    height: 84%;
    scrollbar-width: none;
}

.tracker::-webkit-scrollbar{
    display: none;
}

.habit-format {
     border-right: 1rem solid rgb(25, 81, 94, 0.5);
     padding: 0 0 0rem;
     height: fit-content;
}

.tracker {
    display: flex;
    overflow-x: scroll;
    max-width: 250rem;
    height: fit-content;
    scrollbar-width: none;
}


.habit-content {
   width: 25rem;
   min-height: 25rem;
   background: rgb(25, 81, 94, 0.2);
   cursor: pointer;
}


.habit-content p {
    border-bottom: none;
}

.habit-content.filler {
    width: 80rem;
}

.month-date {
    height: 13rem;
    width: 80rem;
    padding-left: 5rem;
}

.indicator-box {
    min-height: 20rem;
}

.today {
    background:  rgb(25, 81, 94, 0.1);
}

.indicator-icon {
    width: 12rem;
    height: 12rem;
    fill: rgb(25, 81, 94, 0.2);
}

.indicator-icon.completed {
    fill: rgb(25, 81, 94, 0.7);
}





</style>