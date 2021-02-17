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
        <!-- Curriculum download only appear on > MD devices -->
        <v-btn
          class="d-none d-md-flex ml-auto mb-3"
          min-width="25%"
          color="primary"
          href="curriculo.pdf"
          download="Curriculo_PedroHenrique"
        >
          BAIXAR CURRÍCULO
          <i class="fas fa-download ml-3"></i>
        </v-btn>

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
            <span><strong>Redes</strong> (infraestrutura e administração de redes). </span>
            
            <br />

            <i class="fas fa-angle-double-right ml-5 mr-2" style="color: var(--primary-color)"></i>
            <span><strong>Programação </strong>(desenvolvimento de software e automação de processos).</span>
          </v-card-text>
        </v-card>

        <!-- Button to trigger details modal -->
        <div class="d-flex align-center justify-center mt-5 mb-8 mb-md-0">
          <v-btn
            min-width="25%"
            class="label-button"
            @click="modals.details.visible = true"
          >
            VER MAIS
            <i class="fas fa-angle-down ml-5 mr-2" style="color: white"></i>
          </v-btn>

          <v-btn
            class="d-md-none ml-3 ml-md-0"
            min-width="25%"
            color="primary"
            href="curriculo.pdf"
            download="Curriculo_PedroHenrique"
          >
            BAIXAR CURRÍCULO
            <i class="fas fa-download ml-3"></i>
          </v-btn>
        </div>
      </div>
    </div>

    <!-- Modal to show more information on abilities etc... -->
    <v-dialog
      v-model="modals.details.visible"
      class="pa-15"
      max-width="750px"
      overlay-opacity="0.8"
    >
      <v-tabs
        v-model="modals.details.tabs"
        dark
        grow
        show-arrows
        color="var(--primary-color)"
      >
        <v-tab>
          Linguagens
        </v-tab>

        <v-tab>
          Ferramentas
        </v-tab>
      </v-tabs>

      <v-tabs-items dark v-model="modals.details.tabs">
        <!-- Programming languages tab -->
        <v-tab-item :key="'languages'">
          <ul
            class="d-flex flex-column flex-md-row justify-space-between py-8 pr-10"
          >
            <li>
              <strong>WEB e Desktop:</strong>
              <ul>
                <li class="list-item text-body-2">
                  HTML / CSS.
                </li>
                <li class="list-item text-body-2">
                  Javascript.
                </li>
                <li class="list-item text-body-2">
                  Typescript.
                </li>
                <li class="list-item text-body-2">
                  PHP.
                </li>
              </ul>
            </li>

            <li class="mt-3 mt-md-0">
              <strong>Scripting e Geral:</strong>
              <ul>
                <li class="list-item text-body-2">
                  Python.
                </li>
                <li class="list-item text-body-2">
                  C / C++.
                </li>
                <li class="list-item text-body-2">
                  Bash (Shell scripting).
                </li>
              </ul>
            </li>

            <li class="mt-3 mt-md-0">
              <strong>Banco de Dados:</strong>
              <ul>
                <li class="list-item text-body-2">
                  MySQL.
                </li>
                <li class="list-item text-body-2">
                  PostgreSQL.
                </li>
                <li class="list-item text-body-2">
                  OracleSQL.
                </li>
                <li class="list-item text-body-2">
                  MongoDB.
                </li>
              </ul>
            </li>
          </ul>

          <div
            class="d-flex flex-column flex-md-row align-center justify-center pa-5"
          >
            <v-btn
              style="width: 30%;"
              color="var(--primary-color)"
              @click="modals.details.visible = false"
            >
              FECHAR
            </v-btn>
          </div>
        </v-tab-item>

        <!-- Frameworks and tools tab  -->
        <v-tab-item :key="'frameworks'">
          <ul
            class="d-flex flex-column flex-md-row justify-space-between py-8 pr-10"
          >
            <li>
              <strong>Frameworks Front-End:</strong>
              <ul>
                <li class="list-item text-body-2">
                  Vue & Vuetify.
                </li>
                <li class="list-item text-body-2">
                  Electron.
                </li>
                <li class="list-item text-body-2">
                  Bootstrap & JQuery.
                </li>
              </ul>
            </li>

            <li class="mt-3 mt-md-0">
              <strong>Frameworks Back-End:</strong>
              <ul>
                <li class="list-item text-body-2">
                  Node.
                </li>
                <li class="list-item text-body-2">
                  Slim (PHP).
                </li>
              </ul>
            </li>

            <li class="mt-3 mt-md-0">
              <strong>Ferramentas:</strong>
              <ul>
                <li class="list-item text-body-2">
                  Git / GitHub / GitLab.
                </li>
                <li class="list-item text-body-2">
                  Docker.
                </li>
              </ul>
            </li>
          </ul>

          <div class="d-flex justify-center pa-5">
            <v-btn
              style="width: 30%;"
              color="var(--primary-color)"
              @click="modals.details.visible = false"
            >
              FECHAR
            </v-btn>
          </div>
        </v-tab-item>
        <v-tab-item :key="'ferramentas'">Teste</v-tab-item>
      </v-tabs-items>
    </v-dialog>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "About",
  data: function() {
    return {
      modals: {
        details: {
          visible: false,
          tabs: 0 as number,
        },
      },
    };
  },

  methods: {},
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

ul {
  list-style: none;
}

.list-item::before {
  content: "\2713";
  color: var(--secondary-color);
  margin-right: 5px;
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
