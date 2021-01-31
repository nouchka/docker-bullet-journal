const state = {
   habits: [
      {
         id: 1,
         content: "Drink Water",
         abbr: "Wa",
         history: [
            {
               date: "2021-01-20",
               completed: true,
            },
            {
               date: "2021-01-21",
               completed: false,
            },
            {
               date: "2021-01-22",
               completed: true,
            },
            {
               date: "2021-01-23",
               completed: true,
            },
         ],
      },
      {
         id: 2,
         content: "Exercise",
         abbr: "Ex",
         history: [
            {
               date: "2021-01-22",
               completed: true,
            },
            {
               date: "2021-01-23",
               completed: true,
            },
            {
               date: "2021-01-24",
               completed: false,
            },
            {
               date: "2021-01-25",
               completed: true,
            },
         ],
      },
   ],
   habitDates: [
      "2021-01-24", //first date will be join date // unshift when initializing
      "2021-01-23",
      "2021-01-22",
      "2021-01-21",
      "2021-01-20",
   ],
};

const getters = {
   allHabits: (state) => state.habits,
   habitDates: (state) => state.habitDates,
};

const actions = {};
const mutations = {};

export default {
   state,
   getters,
   actions,
   mutations,
};
