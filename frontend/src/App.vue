<template>
  <div id="app">
    <Dashboard/>
  </div>
</template>

<script>
import Dashboard from "./components/Dashboard"

export default {
  name: 'App',
  components: {
    Dashboard
  },
  data() {
    return {
      items: []
    }
  }
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 6.25%;
}

body {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

h1, h3 {
  color: white;
  font-weight: 300;
  text-transform: uppercase;
 
}

h1 {
  letter-spacing: 10rem;
  font-size: 20rem;
}

h1 span {
  font-size: 25rem;
}

h2 {
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 5rem;
  font-size: 18rem;
}

h3 {
  letter-spacing: 3rem;
  font-size: 15rem;
}

h3 span {
  letter-spacing: 3rem;
  font-size: 18rem;
}

h4 {
  font-weight: 500;
}


h5 {
  font-weight: 300;
}

input, button {
  border: none;
  background: none;
  outline: none;
  font: inherit;
  width: 100%;
}

input {
  border-bottom: 1rem solid rgb(25, 81, 94, 0.3);
  font: inherit;
  color:  #19515e;
}

input[type='radio'] {
  display: none;
}

button {
  background:  rgb(25, 81, 94, 0.7);
  color: white;
  padding: 5rem;
  margin: 10rem 0;
  cursor: pointer;

}

.panel {
    position: relative;
    border-radius: 10rem;
    width: 95%;
    height: 95vh;
    justify-self: center;
    background: rgb(255, 255, 255, 0.3);
    padding: 10rem;
}

.header {
   background: rgb(25, 81, 94);
   height: 50rem;
   padding: 10rem;
   display: flex;
   align-items: flex-end;
}

#app {
  font: 16rem 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #19515e;
  padding: 2.5vh 2.5vw;
  background: linear-gradient(#c1dfc4 0%, #b7e2f0 100%);
}
</style>
