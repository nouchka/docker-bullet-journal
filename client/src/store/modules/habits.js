import axios from "axios";

const state = {
   userId: "60187a50af625cdb99dfb487", //! Will need to update!
   habits: [],
   displayMonth: [],
   newHabit: {
      content: "",
      abbr: "",
      datesCompleted: [],
   },
   habitMode: "create",
};

const getters = {
   allHabits: (state) => state.habits,
   displayMonth: (state) => state.displayMonth,
   newHabit: (state) => state.newHabit,
   getHabitMode: (state) => state.habitMode,
};

const actions = {
   async initHabits({ commit, state, dispatch }) {
      const res = await axios.get(`api/habits/${state.userId}`);

      await dispatch("setDateRange");

      commit("initUserHabits", res.data);
   },
   async addHabit({ commit, state }, newHabit) {
      const res = await axios.post(`api/habits/${state.userId}`, {
         ...newHabit,
         userId: state.userId,
      });

      commit("addStateHabit", res.data);
   },
   async updateHabit({ commit }, updatedHabit) {
      const res = await axios.put(
         `api/habits/${updatedHabit._id}`,
         updatedHabit
      );
      commit("updateStateHabit", res.data);
   },
   async deleteHabit({ commit }, deleteId) {
      const res = await axios.delete(`api/habits/${deleteId}`);
      commit("deleteStateHabit", res.data._id);
   },
   async setDateRange({ commit, state }, year, month) {
      if (state.displayMonth.length === 0) {
         [year, month] = new Date().toISOString().split("-", 2);
      }

      const lastDay = new Date(year, month, 0).getDate() + 1;
      const dateRange = await [...Array(lastDay).keys()];
      dateRange.shift();
      const displayMonth = dateRange.map(
         (day) => `${year}-${month}-${String(day).padStart(2, "0")}`
      );
      commit("setDisplayMonth", displayMonth);
   },
   setEditHabit({ commit }, habit) {
      commit("changeEditHabit", habit);
   },
   setHabitMode({ commit }, mode) {
      console.log(mode);
      commit("changeHabitMode", mode);
   },
};

const mutations = {
   initUserHabits(state, userHabits) {
      state.habits = userHabits;
   },
   addStateHabit(state, newHabit) {
      state.habits.push(newHabit);

      state.newHabit = {
         content: "",
         abbr: "",
         datesCompleted: [],
      };
   },
   updateStateHabit(state, updateHabit) {
      const habitIndex = state.habits.findIndex(
         (existingHabit) => existingHabit._id === updateHabit._id
      );
      state.habits.splice(habitIndex, 1, updateHabit);

      state.newHabit = {
         content: "",
         abbr: "",
         datesCompleted: [],
      };
      state.habitMode = "create";
   },
   deleteStateHabit(state, deleteId) {
      state.habits = state.habits.filter((habit) => habit._id !== deleteId);
   },
   setDisplayMonth(state, displayMonth) {
      state.displayMonth = displayMonth;
   },
   changeEditHabit(state, habit) {
      state.newHabit = habit;
      state.habitMode = "edit";
   },
   changeHabitMode(state, mode) {
      state.habitMode = mode;
   },
};

export default {
   state,
   getters,
   actions,
   mutations,
};
