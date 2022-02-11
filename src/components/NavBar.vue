
<template>

<nav>
	<a class="navbar-brand" href="/">
		<p class="logo-text">The Divine</p> 
	</a>
</nav>

</template>



<script>
	
export default {
  name: 'NavBar'
}

</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


body {
  margin: 0;
  font-family: system-ui, sans-serif;
}

nav {
	width: 100%;
  box-shadow: 2px 2px 4px rgba(100,0,255,0.6);
  display: grid;
  grid-template-columns: 30% 1fr 20% 1fr 20% 1fr 30% 1fr;
  grid-auto-rows: auto;
  align-items: center;
  text-align: center;
  padding: 1rem 0;
  border: 1px solid lightslategray;
  margin: 0  0 33px 0;
  background-color: rgba(20, 8, 244, .7);
}

/* for the burger menu */
.navbar-brand {
  grid-column: 1;
  display: grid;
  grid-template-columns: 30% 70%;
  justify-items: start;
  align-items: center;
}

.logo-text {
	grid-column: 2;
	margin: 0;
	padding: 0 .5em;
	font-size: .7em;
	color: ghostwhite;
  text-shadow: 1px 1px lightslategray;
}

.navbar {
	grid-column: 7;
}

#logo-navbrand {
	width: auto;
	margin: .2em .5em;
  grid-column: 1;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 50px;
}

nav a {
	color: ghostwhite;
	text-decoration: none;
	font-size: 2em;
  transition: .4s all ease-in-out;
}


/* Only stick if you can fit */
@media (min-height: 300px) {
  nav ul {
    position: sticky;
    top: 0;
  }
}

/* Medium sized screens - Tablets */
@media only screen and (max-width: 799px) {
  .navbar-brand {
    grid-column: 1;
    display: grid;
    grid-template-columns: 40% 1fr 60% 1fr;
    justify-items: center;
    align-items: center;
  }

  .logo-text {
    grid-column: 3;
    margin: 0;
    padding: 0 .5em;
    font-size: .7em;
    color: black;
  }

  .navbar-nav {
    display: grid;
    grid-template-columns: 1fr;
  }

  /* Responsive Nav Menu */
  .burger-menu, #burger {
    display: inline-block;
    width: 40px;
    grid-column: 7;
    justify-self: center;
  }
}

/* Small screens - Mobile  */
@media only screen and (max-width: 420px) {
  .navbar-brand {
    grid-column: 1;
    display: grid;
    grid-template-columns: 50% 50%;
    justify-items: center;
    align-items: center;
  }

  #logo-navbrand {
    height: 40px;
  }

  .logo-text {
    grid-column: 2;
    margin: 0.3em;
    padding: 0 .5em;
    font-size: .5em;
    color: black;
  }
}

</style>