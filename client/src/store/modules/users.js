import axios from "axios";
import router from "../../router";

const state = {
   token: localStorage.getItem("auth-token") || "",
   activeUser: "",
   errorMessage: "",
};

const getters = {
   getUser: (state) => state.activeUserId,
   getErrorMessage: (state) => state.errorMessage,
   getLoggedIn: (state) => state.token !== "",
};

const actions = {
   async isLoggedIn({ commit, rootState }) {
      const res = await axios.post("api/items/token", {
         token: rootState.users.token,
      });
      commit("setActiveUser", res.data);
   },
   async loginUser({ commit }, loginInfo) {
      const res = await axios.post("/api/users/login", loginInfo);
      console.log(res.data);
      if (typeof res.data === "string") {
         commit("setErrorMessage", res.data);
      } else {
         localStorage.setItem("auth-token", res.data.token);
         commit("setToken", res.data.token);
         commit("setActiveUser", res.data.user);
         commit("setErrorMessage", "");
         router.push("/user");
      }
   },
   async signUpUser({ commit }, signUpInfo) {
      const res = await axios.post("/api/users/signup", signUpInfo);
      localStorage.setItem("auth-token", res.data.token);
      commit("setToken", res.data.token);
      commit("setActiveUser", res.data.user);
      router.push("/user");
   },
   logUserOut({ commit }) {
      console.log("entered");
      localStorage.removeItem("auth-token");
      commit("setToken", "");
      commit("setActiveUser", "");
      router.push("/");
   },
};

const mutations = {
   setActiveUser(state, user) {
      state.activeUser = user._id;
   },
   setErrorMessage(state, message) {
      state.errorMessage = message;
   },
   setToken(state, token) {
      state.token = token;
   },
};

export default {
   state,
   getters,
   actions,
   mutations,
};
