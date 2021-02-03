<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
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
  background: linear-gradient(#c1dfc4 0%, #b7e2f0 100%);
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

form {
    position: relative;
    padding: 10rem;
    height: 85%;
}

#app {
  position: relative;
  font: 16rem 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #19515e;
  padding: 2.5vh 2.5vw;

}

.action-boxes {
    position: relative;
    border-radius: 10rem;
    width: 100%;
    height: 100%;
    background: rgb(255, 255, 255, 0.7);
    backdrop-filter: blue(10rem);
    overflow: hidden;
}

</style>
