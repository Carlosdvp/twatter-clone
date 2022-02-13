import { createRouter, createWebHistory } from 'vue-router'
// import the views
import Home from '../views/Home.vue'
import UserProfile from '../views/UserProfile.vue'
import Admin from '../views/Admin.vue'
// import the store from the local folder
import store from '../store'
// import the users so we can use that data
import { users } from '../assets/users'



// the Routes
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user/:userId',
    name: 'UserProfile',
    component: UserProfile
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: {
      requiresAdmin: true
    }
  }
]

// the Router Object
const router = createRouter({
  history: createWebHistory(), // removes the hashtag from the url
  routes
})

// Router instructions
router.beforeEach(async (to, from, next) => {

  // using Vuex
  const user = store.state.User.user;

  // is there a user passed in?
  if (!user) {
    // for actions and mutations now that we are using a store module we need to call is as shown below: (User/setUser)
    await store.dispatch('User/setUser', users[0])
  }

  // checking for admin privileges to show the Admin page
  const isAdmin = true;
  const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin);

  if (requiresAdmin && !isAdmin) {
    next({ name: 'Home' })
  } else {
    next()
  }
})

export default router
