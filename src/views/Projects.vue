<template>
  <div class="d-flex flex-column justify-center align-center">
    <h1 class="d-none d-md-block">PRINCIPAIS REPOSITÓRIOS</h1>

    <!-- Repository cards -->
    <div
      class="d-flex flex-wrap justify-center align-center mt-5"
      id="projects-container"
    >
      <h1 class="d-md-none text-center">PRINCIPAIS REPOSITÓRIOS</h1>

      <!-- Skeleton loader for cards -->
      <v-skeleton-loader
        v-if="repoData.length == 0"
        class="pa-5"
        width="350px"
        type="card-avatar, article, actions"
        tile="true"
      ></v-skeleton-loader>

      <!-- Skeleton loader for cards -->
      <v-skeleton-loader
        v-if="repoData.length == 0"
        class="pa-5"
        width="350px"
        type="card-avatar, article, actions"
        tile="true"
      ></v-skeleton-loader>

      <v-card
        class="ml-0 ml-sm-3 mt-3"
        width="350px"
        height="500px"
        v-for="repo in repoData.slice(repoIndex, repoIndex + 4)"
        :key="repo.id"
      >
        <div
          class="align-end ma-3"
          style="border: thin solid grey; background-color: black !important; width: 325px; height: 200px;"
        >
          <v-img
            class="white--text"
            height="100%"
            lazy-src="../assets/github-logo.png"
          >
          </v-img>
        </div>

        <v-card-title>{{ repo.name }}</v-card-title>

        <v-card-subtitle>
          Atualizado em: {{ convertDateFormat(repo.updated_at) }} <br />
          Linguagem principal: {{ repo.language }}
        </v-card-subtitle>

        <v-card-text class="text--primary text-justify">
          {{ repo.description }}
        </v-card-text>

        <v-card-actions class="d-flex justify-center">
          <v-btn color="orange" text :href="repo.html_url">
            Link para o repositório
          </v-btn>
        </v-card-actions>
      </v-card>

      <a class="d-none d-md-block" @click="incrementRepoIndex">
        <i class="fas fa-3x fa-angle-double-right ml-15"></i>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  name: "Projects",
  data: function() {
    return {
      repoData: [] as Array<object>,
      repoIndex: 0,
    };
  },

  created: function() {
    this.getRepositoriesData();
  },

  methods: {
    // Convert date string from API to DD/MM/YYYY
    convertDateFormat(date: string) {
      const dateValue = date.split("T")[0];
      const formattedDate = dateValue.split("-");

      return `${formattedDate[2]}/${formattedDate[1]}/${formattedDate[0]}`;
    },

    // Send request to Github's API to get all repositories data
    getRepositoriesData() {
      axios({
        method: "GET",
        url: "https://api.github.com/users/pedronogs/repos",
      })
        .then((response) => {
          this.repoData = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    incrementRepoIndex() {
      if (this.repoIndex + 5 < this.repoData.length) {
        this.repoIndex += 4;
        return;
      }

      this.repoIndex = 0;
    },
  },
});
</script>

<style scoped>
/* Media queries */
@media screen and (max-width: 1264px) {
  #projects-container {
    margin-top: 16vh !important;
  }
}
</style>
