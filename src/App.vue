<template>

  <NavBar/>
  <router-view/>

</template>


<script>
import NavBar from './components/NavBar.vue'
// import the store
import { useStore } from 'vuex'
// we also need to use computed properties
import { computed } from 'vue'

export default {
  name: 'App',
  components: {
    NavBar
  },
  setup() {
    const store = useStore()
    // we need a local variable to hold our user data
    const user = computed(() => store.state.User.user)
    
    return {
      user
    }
  }
}
</script>



<style>

body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
