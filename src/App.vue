<template>
  <v-app>
    <!-- Navbar -->
    <div class="d-flex justify-space-between pt-5 px-md-16 px-5" id="navbar">
      <span class="text-h5">Pedro <strong>"Nogs"</strong></span>

      <!-- Router for > SM devices -->
      <div class="d-sm-flex d-none">
        <div class="route-item text-h5">
          <router-link to="/">Sobre</router-link>
        </div>

        <div class="text-h5 ml-3">
          <router-link to="/projects">Projetos</router-link>
        </div>
      </div>

      <!-- Social media icons for > SM devices -->
      <div class="d-sm-flex d-none">
        <a href="https://www.linkedin.com/in/pedronogs/">
          <div
            class="social-icons pl-2 pr-2"
            style="background: rgb(10, 102, 194);"
          >
            <i
              class="fab fa-linkedin-in"
              style="transform: translateY(10%)"
            ></i>
          </div>
        </a>

        <a href="https://github.com/pedronogs">
          <div class="social-icons ml-3 pl-2 pr-2" style="background: #10851a;">
            <i
              class="fab fa-github"
              style="transform: translateY(3%) translateX(1%);"
            ></i>
          </div>
        </a>

        <a href="https://instagram.com/pedronogs">
          <div
            class="social-icons ml-3 pl-2 pr-2"
            style="background: rgb(151, 13, 89);"
          >
            <i
              class="fab fa-instagram"
              style="transform: translateX(-2%) translateY(2%)"
            ></i>
          </div>
        </a>
      </div>

      <!-- Sandwich menu icon -->
      <div class="d-sm-none">
        <i class="fas fa-bars" @click="drawer = !drawer"></i>
      </div>

      <!-- Sandwiched navigation drawer -->
      <v-navigation-drawer
        absolute
        right
        class="pa-3"
        style="background-color: #565254"
        v-model="drawer"
      >
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title
              style="color: var(--text-color); letter-spacing: 3px;"
            >
              <strong>MENU</strong>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense nav>
          <v-list-item>
            <v-list-item-icon>
              <i class="fas fa-user" style="color: var(--primary-color)"></i>
            </v-list-item-icon>

            <v-list-item-content>
              <router-link to="/">Sobre</router-link>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <i class="fas fa-tasks" style="color: var(--primary-color)"></i>
            </v-list-item-icon>

            <v-list-item-content>
              <router-link to="/projects">Projetos</router-link>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>

    <v-main class="d-flex align-center">
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",
  data: function() {
    return {
      drawer: false,
    };
  },
});
</script>

<style>
/* Global configurations */
:root {
  --background: #121214;
  --primary-color: #ff812d;
  --primary-color-hover: #ff812d;
  --secondary-color: #ded11f;
  --text-color: #eeeeee;
  --secondary-text-color: #acacac;
}

body,
#app {
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  background-color: var(--background);

  font-family: Helvetica, Arial, sans-serif;
  color: var(--text-color);
}

a {
  color: var(--text-color) !important;
  text-decoration: none !important;
}

a:hover {
  filter: brightness(130%);
}

/* Vuetify customization */
.router-link-active {
  color: var(--secondary-text-color) !important;
}

.router-link-exact-active {
  color: var(--text-color) !important;
}

/* Class styling */
.route-item {
  padding-right: 10px;
  padding-left: 10px;
  border-right: solid 2px var(--primary-color);
}

.social-icons {
  font-size: 1.6rem;
  border-radius: 25px;
}

/* ID styling */
#navbar {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;

  font-size: 1.5rem;
}

/* Media queries */
@media screen and (max-width: 800px) {
}
</style>
