import axios from "axios";
import router from "../../router";

const state = {
   userId: "60187a50af625cdb99dfb487",
   activeUser: {
      _id: "test",
      username: "test",
      password: "test",
   },
   hideErrorMessage: true,
};

const getters = {
   getUser: (state) => state.activeUser,
   getErrorMessage: (state) => state.hideErrorMessage,
};

const actions = {
   async loginUser({ commit }, loginInfo) {
      const { username, password } = loginInfo;
      const res = await axios.get(`/api/users/${username}-${password}`);
      if (res.data.length === 0) {
         commit("setErrorMessage", false);
      } else {
         commit("setActiveUser", res.data[0]);
         commit("setErrorMessage", true);
         router.push("/user");
      }
   },
   async signUpUser({ commit }, signUpInfo) {
      const res = await axios.post("/api/users", signUpInfo);
      commit("setActiveUser", res.data);
      router.push("/user");
   },

   // ! STILL NEED TO EDIT USER
   async editUser({ commit }, updatedInfo) {
      const res = await axios.post(
         `/api/users/${updatedInfo._id}`,
         updatedInfo
      );
      commit("setActiveUser", res.data);
      return "/user";
   },
};

const mutations = {
   setActiveUser(state, user) {
      state.activeUser = user;
   },
   setErrorMessage(state, hide) {
      state.hideErrorMessage = hide;
   },
};

export default {
   state,
   getters,
   actions,
   mutations,
};
