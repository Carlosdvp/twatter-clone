<template>
  <div class="home">
    <h2>Home</h2>
    <div class="users-list">
      <router-link 
        v-for="user in users" 
        :to="{ name: 'UserProfile', 
        params: { userId: user.id }}"
        :key="user.id"
      >
        {{ user.username }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { users } from "../assets/users"

export default {
  name: 'Home',
  components: {},
  setup() {
    return {
      users
    }
  }
}
</script>

<style scoped>
.home {
  padding: 1rem;
}

.users-list {
  display: flex;
  flex-direction: column;
}

.users-list a {
  text-decoration: none;
  padding: 0.5rem;
}

.users-list a:hover {
  color: steelblue;
  transform: scale(1.1, 1.2);
}


</style>
