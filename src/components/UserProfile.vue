<template>
  <div class="user-profile">

    <div class="user-profile_user-panel">

      <h2 class="user-profile_username">{{ user.username }}</h2>
      <p class="user-profile_admin-badge" v-if="user.isAdmin">Admin</p>
      <!-- folower counter -->
      <p class="user-profile_follower-count">
        Followers: <strong>{{ followers }}</strong>
      </p>
      <button @click="followUser">Follow</button>
      <hr>

      <!-- Form to input new words and a TExt Are for that content-->
      <form 
        class="user-profile_create-word" 
        @submit.prevent="createNewWord"
        :class="{'-exceeded': characterCount > 180}"
      >
        <label for="newWord"><p>New Words ({{ characterCount }}/180)</p></label>
        <textarea id="newWord" rows="4" v-model="newWordContent"></textarea>
        <!-- Drop down options -->
        <div class="user-profile_create-word-type">
          <label for="newWordType">Type: </label>
          <select id="newWordType" v-model="selectedWordType">
            <option :value="option.value" v-for="(option, index) in wordTypes" :key="index" >
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
          v-for="word in user.words" 
          :key="word.id" 
          :username="user.username"
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
        isAdmin: false,
        words: [
          {id: 1, content: 'I am the stars and the infinite space threof.'},
          {id: 2, content: "Practice the yoga of the Serpent's power."},
          {id: 3, content: "She who dwells in everything in the form of power."}
        ]
      },
      wordTypes: [
        {value: 'draft', name: 'Draft'},
        {value: 'instant', name: 'Instant Creation'}
      ],
      newWordContent: '',
      selectedWordType: 'instant'
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
    },
    // lets keep a count of the number of characters written
    characterCount() {
      return this.newWordContent.length;
    }
  },
  methods: {
    // first method
    followUser() {
      this.followers++
    },
    toggleFavorite(id) {
      console.log(`Favored words #${id}`)
    },
    // method to submit newly created words
    createNewWord() {
      if (this.newWordContent && this.selectedWordType !== 'draft') {
        this.user.words.unshift({
          id: this.user.words.length+1,
          content: this.newWordContent
        })
      }
      this.newWordContent = '';
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