const state = {
   items: [
      {
         id: 1,
         content: "Buy vitamins",
         type: "general",
         category: "Health",
         dateTime: "2021-01-20T13:30",
         completed: false,
      },
      {
         id: 2,
         content: "Build crib",
         type: "todo",
         category: "Baby",
         dateTime: "2021-02-12T18:30",
         completed: false,
      },
      {
         id: 3,
         content: "Something",
         type: "event",
         category: "Baby",
         dateTime: "2021-01-12T18:30",
         completed: false,
      },
   ],
   newItem: {
      content: "",
      type: "general",
      category: "",
      dateTime: new Date().toISOString().substring(0, 11) + "00:00",
      completed: false,
   },
   createMode: "create",
   filterConditions: {
      property: "",
      value: "",
   },
   sortConditions: "FIFO",
};

const getters = {
   allItems: (state) => state.items,
   newItem: (state) => state.newItem,
   getMode: (state) => state.createMode,
   categories: (state) => [
      ...new Set(state.items.map((item) => item.category)),
   ],
   filterConditions: (state) => state.filterConditions,
   sortConditions: (state) => state.sortConditions,
};

const actions = {
   // initialize({ commit }) {
   //    axios - 1. fetch allItems, 2. copy to displayItems
   //    console.log("initialize");
   // },
   updateItem({ commit }, updatedItem) {
      //axios stuff
      commit("updateStateItems", updatedItem);
   },
   addItem({ commit }, newItem) {
      // axios stuff
      commit("addStateItem", newItem);
   },
   deleteItem({ commit }, deleteId) {
      // axios stuff
      commit("deleteStateItem", deleteId);
   },
   setEditItem({ commit }, item) {
      commit("changeToEdit", item);
   },
   changeFilter({ commit }, condition) {
      commit("setFilter", condition);
   },
   changeSort({ commit }, condition) {
      commit("setSort", condition);
   },
};

const mutations = {
   updateStateItems(state, updatedItem) {
      const itemIndex = state.items.findIndex(
         (existingItem) => existingItem.id === updatedItem.id
      );
      state.items.splice(itemIndex, 1, updatedItem);

      state.newItem = {
         content: "",
         type: "general",
         category: "",
         dateTime: new Date().toISOString().substring(0, 11) + "00:00",
         completed: false,
      };
      state.createMode = "create";
   },
   addStateItem(state, newItem) {
      state.items.push(newItem);

      state.newItem = {
         content: "",
         type: "general",
         category: "",
         dateTime: new Date().toISOString().substring(0, 11) + "00:00",
         completed: false,
      };
   },
   deleteStateItem(state, deleteId) {
      state.items = state.items.filter((item) => item.id !== deleteId);
   },
   changeToEdit(state, item) {
      state.newItem = item;
      state.createMode = "edit";
   },
   setFilter(state, condition) {
      state.filterConditions = condition;
   },
   setSort(state, condition) {
      state.sortConditions = condition;
   },
};

export default {
   state,
   getters,
   actions,
   mutations,
};
