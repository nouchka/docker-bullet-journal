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
};

const getters = {
   allItems: (state) => state.items,
   newItem: (state) => state.newItem,
   getMode: (state) => state.createMode,
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
   setEditItem({ commit }, item) {
      commit("changeToEdit", item);
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
         dateTime: new Date().toISOString().substring(0, 16) + "00:00",
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
         dateTime: new Date().toISOString().substring(0, 16) + "00:00",
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
};

export default {
   state,
   getters,
   actions,
   mutations,
};
