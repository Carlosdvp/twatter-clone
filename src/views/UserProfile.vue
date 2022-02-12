<template>
  <div class="user-profile">

    <div class="user-profile_user-panel">

      <h2 class="user-profile_username">{{ state.user.username }}</h2>
      <!-- <h3>{{ userId }}</h3> -->
      <p class="user-profile_admin-badge" v-if="state.user.isAdmin">Admin</p>
      <!-- folower counter -->
      <p class="user-profile_follower-count">
        Followers: <strong>{{ state.followers }}</strong>
      </p>
      <button @click="followUser">Follow</button>
      <hr>

      <!-- Form to input new words and a Text Are for that content-->
      <form 
        class="user-profile_create-word"
        @submit.prevent="createNewWord"
        :class="{'-exceeded': characterCount > 180}"
      >
        <label for="newWord"><p>New Words ({{ characterCount }}/180)</p></label>
        <textarea id="newWord" rows="4" v-model="state.newWordContent"></textarea>
        <!-- Drop down options -->
        <div class="user-profile_create-word-type">
          <label for="newWordType">Type: </label>
          <select id="newWordType" v-model="state.selectedWordType">
            <option :value="option.value" v-for="(option, index) in state.wordTypes" :key="index" >
              {{ option.name }}
            </option>
          </select>
        </div>
        <!-- Form submit button -->
        <button>Create</button>
      </form>
    </div>

    <section>
      <img alt="Santa Maria" src="../assets/logo.png">

      <div class="user-profile_word-wrapper">
        <!-- Child component to hold and show the words saved in the parent component's array -->
        <WordItem 
          v-for="word in state.user.words" 
          :key="word.id" 
          :username="state.user.username"
          :word="word" 
          @favorite="toggleFavorite"
        />
      </div>
    </section>

    <!-- how to iterate through an array and render the contents onscreen -->


  </div>
</template>

<script>
// @ is an alias to /src
import WordItem from '@/components/WordItem.vue'
import { useRoute } from 'vue-router'
import { reactive, computed } from 'vue'
// import the users file - our little mock db
import { users } from '../assets/users'

export default {
  name: 'UserProfile',
  // this is one way to use the compostion api inside am options ali app
  components: {
    WordItem
  },
  setup(props, context) {
    const route = useRoute()

    // COMPUTED PROPERTIES -- composition API
    const characterCount = computed(() => state.newWordContent.length)
    const userId = computed(() => route.params.userId)

    const state = reactive({
      followers: 0,
      // import user data
      user: users[userId.value - 1] || userId.value[0],
      wordTypes: [
        {value: 'draft', name: 'Draft'},
        {value: 'instant', name: 'Instant Creation'}
      ],
      newWordContent: '',
      selectedWordType: 'instant'
    })

    // METHODS -- composition api
    // to submit newly created words
    function createNewWord() {
      if (state.newWordContent && state.selectedWordType !== 'draft') {
        state.user.words.unshift({
          id: state.user.words.length+1,
          content: state.newWordContent
        })
      }
      state.newWordContent = '';
    }

    // counter method
    function followUser() {
      state.followers++
    }

    return {
      state,
      characterCount,
      createNewWord,
      userId,
      followUser
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
    // followUser() { this.followers++ },
    toggleFavorite(id) {
      console.log(`Favored words #${id}`)
    }
  },
  // lifecycle hooks -- mounted runs when the compoenet is first loaded
  // API calls can be implemented here
  // mounted() {
  //   this.followUser() // function is run the moment the component is loaded
  // }

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
  grid-template-columns: 50% 50%;
  width: 100%;
  padding: 1rem 0;
}

.user-profile_user-panel {
  display: flex;
  flex-direction: column;
  margin: 0 3rem;
  padding: 0.5rem 0;
  background-color: whitesmoke;
  border-radius: 7px;
  border: 1px solid lightsteelblue;
  align-content: center;
  width: 33vw;
  height: auto;
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

.user-profile_word-wrapper {}

button {
  width: 3rem;
  margin: 1rem auto;
}

hr {
  width: 100%;
  color: lightsteelblue;
}

/* The Form */

.user-profile_create-word {
  display: flex;
  flex-direction: column;
  align-content: center;
}

textarea#newWord {
  width: 81%;
  align-self: center;
}

.user-profile_create-word-type {
  padding: 1.5rem 0 0;
}

.-exceeded {
  color:  orangered;
  border: 2px dashed orangered;
}

</style>