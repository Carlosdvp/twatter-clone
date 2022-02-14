# twatter-clone

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


---------------------------------------------------------------------------

# Project Details

- Using vue-cli for the setup and build steps
- basic project
	- Intermediate level


## Goals

* Get a clear understanding of Vuex and how to implement in a somewhat complex application
* Review the basics of Vue 3 and fil in the gaps in understanding for basic project creation steps.


## Part 1

### Building Single File Components
	- Understand the basics of using:
		- the data() property
		- `watch` different data points inside the component and do something when the change happens
		- `computed properties`
		- `methods`
		- lifecycle hooks, here we saw `mounted()` to start


## Part 2

### Template Conditionals, loops and events

	- use v-if to show/hide items on the screen based on a data point
	- used a v-for loop to render a list from anarray onto the screen
	- create and emit an event from a child component to a parent component
		- use a method in the paent to call the function and use the event emited in the child


## Part 3

### Forms and Handling user input

	- adding a form with a dropdown selector
	- make the default dynamic and clear the text area after each submission
	- using v-model to link elements from the page to methods and data parameters in the app


## Part 4 

### Dynamic Styling. SCSS, and Global styling

	- dynamic stylin is using vue to programatically add/remove css classes, for example, in response to user input
	- SCSS was briefly discussed, not interested
	- global styling mentioned as a complement and alternative to scoped component styles


## Part 5

### The Vue3 composition API

	- a basic intro, could be useful at some point
	- will not be using it here, sticking to Vue3 syntax for now
	- needed to change some of the items from the tutorial to use the standard Vue 3 syntax without the composition api


## Part 6

### Routing with Vue Router

	- created a list of links on the Home page
	- each one routing to one of the preset users
	- added an Admin page and its respective routing
	- added a rule to only allow an admin to view the Admin page to the router index.js file



## Part 7

### Global State Management with Vuex 4

#### Steps - Overview

* Get the user from the store (router/index.js)
* If there is no user, dispatch the set action and get the default user
* this runs the setUser action
* which triggers the SET_USER mutation
* which then changes the state

* to make the code cleaner and more readable for larger applicatons the use of modules is recommended
	- in this case in particular, move the store data from the main store file to it's own Users.js file


## Part 8

### Deploying to Heroku

- 