<template>
   <div id="habits" class="group-container">
        <div class="header"><h1><span>H</span>abits</h1></div>
        <div class="habit-container">
            <div class="vertical-scroll">
                <div class="habit-format dates-container">
                    <div class="habit-content center filler"></div>
                    <div v-for="date in displayMonth" :key="date" class="indicator-box center">
                        <p class='month-date'>{{date}}</p>
                    </div>
                </div>
                <div class="tracker">
                    <div v-for="habit in allHabits" :key="habit._id" class="habit-format">
                        <div class="habit-content center" :title="habit.content">
                            <p @click="execute(habit)" :class="{'animate':getHabitMode !== 'create'}">{{habit.abbr}}</p>
                        </div>
                        <div v-for="date in displayMonth" :key="date" class="indicator-box center" >
                            <div class="indicator" :class="{'completed':habit.datesCompleted.includes(date)}"
                            @click="toggleHabit(date, habit)"
                            >
                            </div>
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
    methods: {
        ...mapActions(["setDateRange", "updateHabit", "setEditHabit", "deleteHabit"]),
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
            } else if (this.getHabitMode === "delete") {
                this.deleteHabit(habit._id);
            }
        }
    },
    created() {
        this.$store.dispatch("initHabits");
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
    height: 80vh;
    overflow-y: scroll;
    overflow-x: hidden;
    padding: 0 5rem 0 0;

}

.habit-container::-webkit-scrollbar,
.tracker::-webkit-scrollbar{
    display: none;
}

.habit-format {
     border-right: 1rem solid rgb(25, 81, 94, 0.5);
     padding: 0 0 0rem;
     min-height: 85vh;
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
    border-bottom: 1rem solid rgb(25, 81, 94, 0.5);
    min-height: 20rem;
    
}

.indicator {
    width: 11rem;
    height: 11rem;
    border: 1rem solid rgb(25, 81, 94, 0.5);
    border-radius: 50%;
    cursor: pointer;
}

.indicator.completed {
    background:  rgb(25, 81, 94, 0.7);
}

.dates-container {
    overflow: hidden;

}

.tracker {
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
}

.vertical-scroll {
    display: flex;
    /* height: 85vh; */
}


</style>