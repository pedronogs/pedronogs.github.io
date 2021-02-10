<template>
  <v-container>
    <div
      class="d-flex flex-column flex-md-row justify-center align-center"
      id="about-container"
    >
      <!-- Photo and label -->
      <div class="d-flex flex-column align-center" id="photo-container">
        <img id="photo" src="../assets/personal-image.jpg" />

        <div class="mt-3">
          <span class="justify-center text-h6 text-md-h5 font-weight-bold">
            Pedro Henrique Nogueira da Silva <br />
          </span>

          <sup>também conhecido como <strong>Pedro "Nogs"</strong></sup>
        </div>
      </div>

      <!-- Main Card - About description -->
      <div
        class="d-flex flex-column justify-center align-center mt-5 mt-md-0 ml-md-10"
      >
        <div style="min-width: 100%;">
          <v-btn
            class="float-right mb-5"
            color="primary"
            v-if="randomWords.length > 0"
            @click="
              randomWords = [];
              resetLabelCount();
            "
            >Limpar Tela</v-btn
          >
        </div>

        <v-card
          shaped
          color="black"
          class="text-center pa-2"
          style="border-left: solid 2px var(--secondary-color) !important;"
        >
          <!-- prettier-ignore -->
          <v-card-text class="text-justify text-body-2 text-md-body-1 font-weight-bold" style="color: white;">
            <strong class="text-primary">pedronogs: ~# </strong>
            Graduando em 
            <span style="border-bottom: solid 1px var(--primary-color)">Engenharia de Redes de Comunicação</span>
            pela Universidade de Brasília
            (UNB), atualmente cursando o 8º semestre. 
            
            <br /><br />

            <strong class="text-primary">pedronogs: ~# </strong>
            Proeficiente e inspirado a trabalhar com: 
            
            <br />

            <i class="fas fa-angle-double-right ml-5 mr-2" style="color: var(--primary-color)"></i>
            <strong>Redes de computadores</strong> (infraestrutura e administração). 
            
            <br />

            <i class="fas fa-angle-double-right ml-5 mr-2" style="color: var(--primary-color)"></i>
            <strong>Programação </strong>(desenvolvimento de software e automação de processos).
          </v-card-text>
        </v-card>

        <div class="mt-4">
          <h3>HABILIDADES</h3>
        </div>

        <!-- Dinamic buttons to display labels -->
        <div
          class="d-flex flex-column flex-md-row justify-space-between mt-5 mb-16 mb-md-0"
        >
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
            class="label-button ml-0 ml-md-5 mt-5 mt-md-0"
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
            class="label-button ml-0 ml-md-5 mt-5 mt-md-0"
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
        class="random-word text-caption text-md-body-1"
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
            "Linguagens",
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
    // Calculates random position between window Height or Width (or rotation between 0 < 30  or 330 < 360)
    randomPosition(vertical = true, rotation = false) {
      if (rotation === true) {
        let degree = Math.floor(Math.random() * 30);

        if (degree % 2 == 0) degree = 360 - degree;

        return degree;
      }

      let position = 0;
      if (vertical === true)
        position = Math.floor(Math.random() * (window.innerHeight - 200) + 100);
      else
        position = Math.floor(Math.random() * (window.innerWidth - 200) + 100);

      return position;
    },

    // Add word to list of random positioned words if it's not present yet
    addRandomWord(word: string) {
      if (!this.randomWords.includes(word)) {
        this.randomWords.push(word);
      }
    },

    // Reset all label counting (return labels to default value)
    resetLabelCount() {
      this.labels.languages.count = 0;
      this.labels.frameworks.count = 0;
      this.labels.tools.count = 0;
    },
  },
});
</script>

<style scoped>
#about-container {
  position: relative;
  z-index: 10;
}

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

#photo {
  width: 50%;

  border-radius: 1000px;
}

.label-button {
  color: white !important;
  font-weight: bold;
  background-color: var(--primary-color) !important;
}

.random-word {
  position: absolute !important;
  font-weight: bolder;
  opacity: 0.3;
  color: var(--secondary-color);
}

/* Media queries */
@media screen and (max-width: 960px) {
  #about-container {
    margin-top: 13vh !important;
  }
}

@media screen and (min-width: 960px) {
  #photo-container {
    width: 80%;
  }
}
</style>
