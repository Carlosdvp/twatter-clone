<template>
  <div class="home">
    <UserProfile/>
  </div>
</template>

<script>
// @ is an alias to /src
import UserProfile from '@/components/UserProfile.vue'

export default {
  name: 'Home',
  components: {
    UserProfile
  }
}
</script>
