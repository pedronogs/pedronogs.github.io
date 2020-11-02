<template>
  <div id="app">
    <div id="menu-container">
      <div id="logo-container">
        <div>
          <span>Pedro "Nogs"</span>
        </div>
      </div>

      <div id="routes-container">
        <div>
          <router-link to="/">Sobre</router-link>
        </div>
        <div>
          <router-link to="/contact">Contato</router-link>
        </div>
      </div>

      <div class="spacer-container"></div>
    </div>
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

/* Colors */
:root {
  --background: #121214;
  --primary-color: #ff812d;
  --primary-color-hover: #ff812d;
  --secondary-color: #ded11f;
  --text-color: #eeeeee;
}

/* Global Configuration */
body,
#app {
  width: 100vw;
  height: 100vh;

  padding: 0;
  margin: 0;
  overflow-x: hidden;

  background-color: var(--background);

  font-family: "Roboto", sans-serif;
}

a {
  color: var(--text-color);
  text-decoration: none !important;
}

pre {
  margin: 0;
  margin-top: 10px;
}

/* Navbar (Menu) */
#menu-container {
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 5%;

  padding: 20px;
  justify-content: space-between;
}

#logo-container {
  flex: 1 1 0;
  display: flex;

  align-items: center;
  justify-content: center;

  text-align: center;
}

#logo-container div {
  color: var(--text-color);
  font-weight: bolder;
  font-size: 1.5rem;
}

#routes-container {
  flex: 3 1 0;
  display: flex;

  height: 100%;

  align-items: center;
  justify-content: center;
}

#routes-container div {
  display: flex;

  height: 80%;
  padding: 5px;
  margin-left: 10px;

  align-items: center;
  justify-content: center;
}

#routes-container div a {
  font-size: 1.5rem;
}

#routes-container div:hover {
  background-color: var(--primary-color-hover);
  border-radius: 5px;
}

.router-link-exact-active {
  border-bottom: solid var(--primary-color);
}

.spacer-container {
  flex: 1 1 0;
}
</style>
