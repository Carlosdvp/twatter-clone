import { createStore } from 'vuex'
// import the module file
import { UserModule } from './Users'

export default createStore({
  state: {
  },

  // Mutations are functions that affect the State
  mutations: {
  },

  // Actions are functions used to call a mutation throughout the application
  actions: {
  },

  modules: {
    User: UserModule
  }
})

// mutations are the only ones that affect the state
// actions are the only ones that can call a mutation

// in the application code the .dispatch(_action, _data-to-be-called) method is used to run actions
