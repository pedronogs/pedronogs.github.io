<template>
  <v-app>
    <!-- Sandwiched navigation drawer for SM devices -->
    <v-navigation-drawer
      fixed
      right
      class="pa-3"
      style="background-color: #565254; z-index: 20 !important;"
      v-model="drawer"
    >
      <div class="d-flex flex-column pa-3" style="height: 100%;">
        <span class="text-h5 font-weight-bold">MENU</span>

        <div
          class="my-3"
          style="border-bottom: solid 1px var(--primary-color)"
        ></div>

        <div class="d-flex mt-5">
          <i
            class="fas fa-lg fa-user"
            style="color: var(--primary-color); padding-top: 2px;"
          ></i>

          <router-link to="/" class="text-body-1 font-weight-bold ml-5"
            >Sobre</router-link
          >
        </div>

        <div class="d-flex mt-8">
          <i
            class="fas fa-lg fa-tasks"
            style="color: var(--primary-color); padding-top: 2px;"
          ></i>

          <router-link to="/projects" class="text-body-1 font-weight-bold ml-5"
            >Projetos</router-link
          >
        </div>

        <!-- Social media icons inside menu -->
        <div
          class="d-flex flex-column align-center pa-6 mt-auto"
          style="border-top: solid 1px var(--primary-color)"
        >
          <h3 class="text-button mb-3"><strong>Mídias Sociais</strong></h3>

          <div class="d-flex justify-space-between">
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
              <div
                class="social-icons ml-3 pl-2 pr-2"
                style="background: #10851a;"
              >
                <i
                  class="fab fa-github"
                  style="transform: translateY(4%) translateX(0%);"
                ></i>
              </div>
            </a>

            <a href="https://instagram.com/pedronogs">
              <div
                class="social-icons ml-3 pl-2 pr-2"
                style="background: #d3117c;"
              >
                <i
                  class="fab fa-instagram"
                  style="transform: translateX(2%) translateY(5%)"
                ></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </v-navigation-drawer>

    <!-- Navbar -->
    <div
      class="d-flex align-center justify-space-between pt-5 px-md-16 px-5"
      id="navbar"
    >
      <div class="d-flex align-center">
        <img
          src="./assets/logo_light.png"
          style="width: 60px; height: 60px; border: 2px solid var(--primary-color); border-radius: 30px;"
        />

        <span class="text-h6 ml-5" style="text-transform: uppercase;">
          Pedro <strong class="text-primary">"Nogs"</strong>
        </span>
      </div>

      <!-- Router for > SM devices -->
      <div class="d-sm-flex d-none">
        <div class="route-item text-button">
          <router-link to="/" class="pa-3">Sobre Mim</router-link>
        </div>

        <div class="route-item text-button">
          <router-link to="/projects" class="pa-3">Projetos</router-link>
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
          <div class="social-icons ml-3 pl-2 pr-2" style="background: #d3117c;">
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
    </div>

    <v-main class="d-flex align-center">
      <transition name="fade">
        <keep-alive>
          <router-view />
        </keep-alive>
      </transition>
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
  --primary-color: #f26531;
  --primary-color-hover: #ff812d;
  --secondary-color: #f3e413;
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

/* Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  display: none;
  opacity: 0;
}

.fade-enter-to,
.fade-leave {
  display: none;
  opacity: 1;
}

/* Vuetify customization */
.router-link-exact-active {
  color: var(--text-color) !important;
  border-bottom: solid 2px var(--primary-color);
}

/* Class styling */
.text-primary {
  color: var(--primary-color);
}

.text-secondary {
  color: var(--secondary-color);
}

.route-item {
  padding-right: 10px;
  padding-left: 10px;
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
</style>
