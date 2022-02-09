<template>
  <div class="user-profile">

    <img alt="Santa Maria" src="../assets/logo.png">

    <div class="user-profile_user-panel">
      <h2 class="user-profile_username">{{ user.username }}</h2>
      <p class="user-profile_admin-badge" v-if="user.isAdmin">Admin</p>
      <p class="user-profile_follower-count">
        Followers: <strong>{{ followers }}</strong>
      </p>

      <button @click="followUser">Follow</button>
    </div>
    <!-- how to iterate through an array and render the contents onscreen -->
    <div class="user-profile_word-wrapper">

      <WordItem 
        v-for="word in user.words" 
        :key="word.id" 
        :username="user.username"
        :word="word" 
      />

    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import WordItem from '@/components/WordItem.vue'

export default {
  name: 'UserProfile',
  components: {
    WordItem
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
        isAdmin: true,
        words: [
          {id: 1, content: 'I am the stars and the infinite space threof.'},
          {id: 2, content: "Practice the yoga of the Serpent's power."},
          {id: 3, content: "She who dwells in everything in the form of power."}
        ]
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

<style scoped>

img {
  border-radius: 360px;
  border: 3px solid goldenrod;
  width: 33vw;
  margin: 0 auto 1.5rem;
  padding: 0.5rem 0;
}

.user-profile {
  display: grid;
  /* grid-template-rows: 1fr 1fr; */
  grid-template-columns: 50% 20%;
  width: 100%;
  padding: 1rem;
}

.user-profile_user-panel {
  display: flex;
  flex-direction: column;
  margin: 0 40px;
  padding: 1rem;
  background-color: whitesmoke;
  border-radius: 7px;
  border: 1px solid lightsteelblue;
  align-content: center;
  width: 100%;
  height: 30vh;
}

.user-profile_admin-badge {
  background: darkviolet;
  color: white;
  border-radius: 3px;
  width: 30%;
  padding: 3px;
  font-size: small;
  align-self: center;
}

.user-profile_word-wrapper {
}

button {
  width: 3rem;
  margin: 1rem auto;
}

</style>