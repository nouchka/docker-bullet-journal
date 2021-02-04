<template>
  <div id="user">
    <v-icon @click="logUserOut()" name="sign-out-alt" flip="horizontal" class="btn-icon logout" title="Log Out"/>
    <Dashboard/>
  </div>
</template>

<script>
import Dashboard from "../components/Dashboard"
import {mapActions} from 'vuex'

export default {
  name: 'User',
  components: {
    Dashboard
  },
  methods:  mapActions(['logUserOut'])
  
}
</script>

<style scoped>
  .logout {
    position: absolute;
    top: 10rem;
    left: 10rem;
  }
</style>  

