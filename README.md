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

	- 