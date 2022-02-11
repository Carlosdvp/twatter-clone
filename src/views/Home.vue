<template>
  <div class="home">
    <NavBar/>
    <UserProfile/>
  </div>
</template>

<script>
// @ is an alias to /src
import UserProfile from '@/components/UserProfile.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'Home',
  components: {
    UserProfile,
    NavBar
  }
}
</script>
