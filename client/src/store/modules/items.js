import axios from "axios";

const state = {
   userId: "60187a50af625cdb99dfb487", //! Will need to update!
   items: [],
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
   async initItems({ commit, state }) {
      const res = await axios.get(`api/items/${state.userId}`);
      commit("initUserItems", res.data);
   },
   async addItem({ commit, state }, newItem) {
      const res = await axios.post(`api/items/${state.userId}`, {
         ...newItem,
         userId: state.userId,
      });

      commit("addStateItem", res.data);
   },
   async updateItem({ commit }, updatedItem) {
      const res = await axios.put(`api/items/${updatedItem._id}`, updatedItem);
      commit("updateStateItems", res.data);
   },
   async deleteItem({ commit }, deleteId) {
      const res = await axios.delete(`api/items/${deleteId}`);
      commit("deleteStateItem", res.data._id);
   },
   fillCategory({ commit }, category) {
      commit("fillCategory", category);
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
   initUserItems(state, userItems) {
      state.items = userItems;
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
   updateStateItems(state, updatedItem) {
      const itemIndex = state.items.findIndex(
         (existingItem) => existingItem._id === updatedItem._id
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
   deleteStateItem(state, deleteId) {
      state.items = state.items.filter((item) => item._id !== deleteId);
   },
   fillCategory(state, category) {
      state.newItem.category = category;
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
