<template>
   <div id="habits" class="group-container">
        <div class="header"><h1><span>H</span>abits</h1></div>
        <div class="habit-container">
            <div class="habit-dates flex-vertical">
                <p v-for="habitDate in habitDates" :key="habitDate">{{habitDate}}</p>
            </div>
            <div class="habit-tracker"></div>
        </div>

    </div>        
</template>

<script>

export default {
    name: "Habits",
    computed: {
        allHabits: {
            get() {
                return this.$store.getters.allHabits;
            }
        },
        habitDates: {
             get() {
                return this.$store.getters.habitDates;
            }
        }
    },
}

</script>

<style scoped>

.habit-container {
    display: grid;
    grid-template-columns: 1fr 3fr;
    height: 90%;
    padding: 0 10rem;
}

.habit-dates {
     border: 1rem dashed rgb(25, 81, 94);
}

p {
    border-bottom: 1rem dashed rgb(25, 81, 94);
   
}

</style>