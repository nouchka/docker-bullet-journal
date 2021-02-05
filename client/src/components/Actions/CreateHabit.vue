<template>
   <div id="create-habit" class="action-boxes">
       <div class="header"><h3><span>{{title()[0]}}</span>{{title()[1]}} <span>H</span>abit</h3></div>
       <form @submit.prevent="addingHabit">
            <input type="text" v-model="newHabit.content" placeholder="Habit" name="content" required/>
            <input type="text" v-model="newHabit.abbr" placeholder="Abbreviation (max 2 characters)" name="content" maxLength="2" required/>
            <button type="submit"><h5>Submit</h5></button>
        </form>

    </div>        
</template>

<script>
import {mapGetters, mapActions} from "vuex";

export default {
    name: "CreateHabit",
    computed: {
        ...mapGetters(['newHabit', 'getHabitMode']),
    },
    methods: {
        ...mapActions(['addHabit', 'updateHabit', 'changePanel']),
        addingHabit() {
            if (this.getHabitMode === "create") {
                this.addHabit(this.newHabit);
            } else {
                this.updateHabit(this.newHabit);
                this.changePanel('collections');
            }
        },
        title() {
            return [this.getHabitMode.substring(0,1), this.getHabitMode.substring(1)] ;
        },   
    }

}
</script>

<style scoped>

#create-habit {
    min-height: 170rem;
}
</style>