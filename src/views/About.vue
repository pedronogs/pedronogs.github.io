<template>
  <v-container>
    <div
      class="d-flex flex-column flex-md-row justify-center align-center"
      style="position: relative; z-index: 10"
    >
      <!-- Photo -->
      <div id="card-photo">
        <img src="../assets/personal-image.jpg" />
      </div>

      <!-- Description -->
      <div class="d-flex flex-column justify-center align-center ml-md-10">
        <div style="min-width: 100%;">
          <v-btn
            class="float-right mb-5"
            color="primary"
            v-if="randomWords.length > 0"
            @click="randomWords = []"
            >Limpar Tela</v-btn
          >
        </div>

        <v-card shaped max-width="100%" class="text-center pa-3">
          <v-card-title class="justify-center text-h5 font-weight-bold">
            👨‍💻 Pedro Henrique Nogueira da Silva 👨‍💻
          </v-card-title>

          <v-card-subtitle>também conhecido como Pedro "Nogs"</v-card-subtitle>

          <v-card-text
            class="text-left mt-5 headline text-body-1 font-weight-bold"
          >
            Graduando em
            <strong>Engenharia de Redes de Comunicação</strong> pela
            Universidade de Brasília <strong>(UNB)</strong>. <br /><br />

            Proeficiente e admirado por: <br />
            <i
              class="fas fa-angle-double-right ml-5 mr-2"
              style="color: var(--primary-color)"
            ></i>
            Redes de computadores (infraestrutura e administração). <br />
            <i
              class="fas fa-angle-double-right ml-5 mr-2"
              style="color: var(--primary-color)"
            ></i>
            Programação (desenvolvimento de software e automação de processos).
          </v-card-text>
        </v-card>

        <!-- Dinamic buttons to display labels -->
        <div class="d-flex justify-space-between mt-5">
          <v-btn
            min-width="25%"
            class="label-button"
            @click="
              labels.languages.count++;
              addRandomWord(labels.languages.values[labels.languages.count]);
            "
          >
            {{ labels.languages.values[labels.languages.count] }}
            <i class="fas fa-angle-right ml-5 mr-2" style="color: white"></i>
          </v-btn>

          <v-btn
            min-width="25%"
            class="label-button ml-5"
            @click="
              labels.frameworks.count++;
              addRandomWord(labels.frameworks.values[labels.frameworks.count]);
            "
          >
            {{ labels.frameworks.values[labels.frameworks.count] }}
            <i class="fas fa-angle-right ml-5 mr-2" style="color: white"></i>
          </v-btn>

          <v-btn
            min-width="25%"
            class="label-button ml-5"
            @click="
              labels.tools.count++;
              addRandomWord(labels.tools.values[labels.tools.count]);
            "
          >
            {{ labels.tools.values[labels.tools.count] }}
            <i class="fas fa-angle-right ml-5 mr-2" style="color: white"></i>
          </v-btn>
        </div>
      </div>
    </div>

    <!-- Random positioned words on screen  -->
    <div id="background-div">
      <span
        :style="{
          top: randomPosition() + 'px',
          right: randomPosition(false) + 'px',
          transform: 'rotate(' + randomPosition(false, true) + 'deg)',
        }"
        class="random-word"
        v-for="(word, index) in randomWords"
        :key="index"
        >{{ word }}</span
      >
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "About",
  data: function() {
    return {
      labels: {
        languages: {
          values: [
            "Programação",
            "JavaScript",
            "TypeScript",
            "Python",
            "C / C++",
            "PHP",
            "Bash",
            "SQL",
          ],
          count: 0,
        },
        frameworks: {
          values: [
            "Frameworks",
            "Vue (WEB, Front-End)",
            "Electron (Desktop, Front-End)",
            "SLIM (WEB, Back-End)",
            "Node (WEB, Back-End)",
            "PostgreSQL (Banco)",
            "OracleSQL (Banco)",
            "MongoDB (Banco)",
          ],
          count: 0,
        },
        tools: {
          values: ["Ferramentas", "GIT", "Docker (Infra)", "Office"],
          count: 0,
        },
      },
      randomWords: [] as Array<string>,
    };
  },

  watch: {
    "labels.languages.count": function(oldValue) {
      if (oldValue >= this.labels.languages.values.length) {
        this.labels.languages.count = 0;
      }
    },

    "labels.frameworks.count": function(oldValue) {
      if (oldValue >= this.labels.frameworks.values.length) {
        this.labels.frameworks.count = 0;
      }
    },

    "labels.tools.count": function(oldValue) {
      if (oldValue >= this.labels.tools.values.length) {
        this.labels.tools.count = 0;
      }
    },
  },

  methods: {
    // Calculates random position between window Height or Width (or rotation between 0 < 90  or 270 < 360)
    randomPosition(vertical = true, rotation = false) {
      if (rotation === true) {
        let degree = Math.floor(Math.random() * 45);

        if (degree % 2 == 0) degree = 360 - degree;

        return degree;
      }

      let position = 0;
      if (vertical === true)
        position = Math.floor(Math.random() * window.innerHeight);
      else position = Math.floor(Math.random() * window.innerWidth);

      return position;
    },

    // Add word to list of random positioned words if it's not present yet
    addRandomWord(word: string) {
      if (!this.randomWords.includes(word)) {
        this.randomWords.push(word);
      }
    },
  },
});
</script>

<style scoped>
#background-div {
  position: fixed !important;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
}

#card-photo {
  width: 30%;
}

#card-photo img {
  width: 100%;

  border: 5px solid white;
  border-radius: 1000px;
}

.label-button {
  color: white !important;
  font-weight: bold;
  background-color: var(--primary-color) !important;
  border: solid 1px white;
}

.random-word {
  position: absolute !important;
  font-size: 0.7rem;
  font-weight: bolder;
  opacity: 0.3;
  color: var(--secondary-color);
}
</style>
