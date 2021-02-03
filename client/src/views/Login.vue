<template>
  <div id="login">
    <h1 class="greeting"><span>W</span>elcome</h1>
    <div class="form-container">
        <div class="action-boxes">
            <div class="header"><h1>Login</h1></div>
            <form @submit="loggingIn">
                <div>
                    <label for="loginUsername"><h3>Username</h3></label>
                    <input type="text" id="loginUsername" v-model="loginInfo.username" required>
                    <label for="loginPassword"><h3>Password</h3></label>
                    <input :type="showLoginPW ? 'text' : 'password'" id="loginPassword" v-model="loginInfo.password" required>
                    <h6 @click="showLoginPW = !showLoginPW" :class="{'active':showLoginPW}">Show password</h6>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
        <div class="action-boxes">
            <div class="header"><h1>Sign Up</h1></div>
            <form @submit="signingUp">
                <div>
                    <label for="signUpUsername"><h3>Username</h3></label>
                    <input type="text" id="signUpUsername" v-model="signUpInfo.username" required>
                    <label for="signUpPassword"><h3>Password</h3></label>
                    <input :type="showSignUpPW ? 'text' : 'password'" id="signUpPassword" v-model="signUpInfo.password" placeholder="Minimum 5 characters" minLength="5" required>
                    <label for="signUpVerify"><h3>Re-enter Password</h3></label>
                    <input :type="showSignUpPW ? 'text' : 'password'" id="signUpVerify" v-model="signUpInfo.verifyPw" required>
                    <h6 @click="showSignUpPW = !showSignUpPW" :class="{'active':showSignUpPW}">Show passwords</h6>
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    </div>
    <h4 :class="{'no-display': getErrorMessage}">This user does not exist. Please try again or sign up for a new account.</h4>
    <h4 :class="{'no-display': matchingPW}">Passwords do not match. Please try again.</h4>
    
    
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'

export default {
  name: 'Login',
  computed: mapGetters(['getErrorMessage']),
  data() {
      return {
        loginInfo: {
          username: "",
          password: ""
        },
        showLoginPW: false, 
        signUpInfo: {
          username: "",
          password: "",
          verifyPw: "",
        },
        showSignUpPW: false,
        matchingPW: true,
      } 
  },
  methods: {
      ...mapActions(['loginUser', 'signUpUser']),
      loggingIn(e) {
          e.preventDefault();
          this.loginUser(this.loginInfo);
      },
      signingUp(e){
        e.preventDefault();
        if (this.signUpInfo.password === this.signUpInfo.verifyPw) {
            this.matchingPW = true;
            this.signUpUser(
                {
                    username: this.signUpInfo.username,
                    password: this.signUpInfo.password,
                }
            );
        } else {
            this.matchingPW = false;
        }
      }
  }
}
</script>

<style scoped>

h1 {
    margin: 0 auto;
}



h3 {
    color:  rgb(25, 81, 94);
    font-weight: 500;
}

input {
    margin: 5rem 0 15rem;
}

h6 {
    cursor: pointer;
    display: inline-block;
}

h6.active {
    color: rgba(3, 190, 3);
}

button {
    position: absolute;
    width: 93%;
    bottom: 0;
}

form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

#login {
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.greeting {
    font-size: 35rem;
    color:  rgb(25, 81, 94);
}

.greeting span {
    font-size: 38rem;
}

.action-boxes {
    width: 90%;
    max-width: 400rem;
    height: 330rem;

}

.form-container {
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350rem, 1fr));
    width: 70%;
    grid-gap: 20rem;
    justify-items: center;
    /* border: 1rem solid blue; */
    margin: 2%;
}

.no-display {
    display: none;
}

</style>