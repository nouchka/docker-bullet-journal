const state = {
   items: [
      {
         id: 1,
         content: "Buy vitamins",
         type: "todo",
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
         type: "todo",
         category: "Baby",
         dateTime: "2021-01-12T18:30",
         completed: false,
      },
   ],
};

const getters = {
   allItems: (state) => state.items,
};

const actions = {
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
};

const mutations = {
   updateStateItems(state, updatedItem) {
      const itemIndex = state.items.findIndex(
         (existingItem) => existingItem.id === updatedItem.id
      );
      state.items.splice(itemIndex, 1, updatedItem);
   },
   addStateItem(state, newItem) {
      state.items.push(newItem);
   },
   deleteStateItem(state, deleteId) {
      state.items = state.items.filter((item) => item.id !== deleteId);
   },
};

export default {
   state,
   getters,
   actions,
   mutations,
};
