<template>
  <div class="home">
    <img alt="Santa Maria" src="../assets/logo.png">
    <p>{{ user.username }} -- {{ fullname }}</p>
    <p>Followers: <strong>{{ followers }}</strong></p>
    <button @click="followUser">Follow</button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      followers: 0,
      // placeholder usr object
      user: {
        id: 1,
        username: 'Queen of Heaven',
        firstName: 'Santa',
        lastName: 'Maria',
        email: 'Gunner@bullets.com',
        isAdmin: true
      }
    }
  },
  watch: {
    // watches a method or computed property
    // everytime the item watched changes we do something
    followers(newFollowerCount, oldFollowerCount) {
      if (oldFollowerCount < newFollowerCount) {
        console.log(`${this.user.username} has gained a new follower.`)
      }
    }
  },
  computed: {
    // first computed property
    fullname() {
      return `${this.user.firstName} ${this.user.lastName}`
    }
  },
  methods: {
    // first method
    followUser() {
      this.followers++
    }
  },
  // lifecycle hooks -- mounted runs when the compoenet is first loaded
  // API calls can be implemented here
  mounted() {
    this.followUser() // function is run the moment the component is loaded
  }

}
</script>
