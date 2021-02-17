<template>
  <div
    class="d-flex flex-wrap justify-center align-center"
    id="projects-container"
  >
    <v-card
      class="ml-0 ml-sm-3 mt-3"
      max-width="350px"
      min-height="500px"
      v-for="repo in repoData.slice(repoIndex, repoIndex + 4)"
      :key="repo.id"
    >
      <v-img class="white--text align-end" height="200px" src=""> </v-img>

      <v-card-title>{{ repo.name }}</v-card-title>

      <v-card-subtitle>
        Atualizado em: {{ convertDateFormat(repo.updated_at) }} <br />
        Linguagem principal: {{ repo.language }}
      </v-card-subtitle>

      <v-card-text class="text--primary">
        {{ repo.description }}
      </v-card-text>

      <v-card-actions class="d-flex justify-center">
        <v-btn color="orange" text :href="repo.html_url">
          Link para o repositório
        </v-btn>
      </v-card-actions>
    </v-card>
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

  mounted: function() {
    this.getRepositoriesData();
  },

  methods: {
    // Convert date string from API to DD/MM/YYYY
    convertDateFormat: function(date: string) {
      const dateValue = date.split("T")[0];
      const formattedDate = dateValue.split("-");

      return `${formattedDate[2]}/${formattedDate[1]}/${formattedDate[0]}`;
    },

    // Send request to Github's API to get all repositories data
    getRepositoriesData: function() {
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
