<template>
  <v-container fluid>
    <div id="about-card">
      <div class="card-text">
        <h2>Pedro Henrique Nogueira da Silva</h2>
        <sup>também conhecido como Pedro "Nogs"</sup>

        <ul>
          <li>
            <i class="fas fa-angle-double-right"></i>
            Graduando em
            <strong>Engenharia de Redes de Comunicação</strong> pela UNB.
          </li>
          <li>
            <i class="fas fa-angle-double-right"></i>
            Interessado em <strong>programação</strong>,
            <strong>inteligência artificial</strong>,
            <strong>administração de redes</strong> e
            <strong>infraestrutura de redes</strong>.
          </li>
          <li>
            <i class="fas fa-angle-double-right"></i>
            <strong>Linguagens de programação: 👨‍💻</strong><br />
            <span style="margin-left: 20px"
              >><strong style="margin-left: 20px">Geral:</strong> C/C++ | Python
              | JavaScript | Bash.</span
            ><br />
            <span style="margin-left: 20px"
              >><strong style="margin-left: 20px">WEB e Desktop:</strong> PHP |
              HTML + CSS + JS = VueJS + Electron + NodeJS 😍.</span
            >
          </li>
        </ul>

        <a id="github-button" href="../assets/curriculo.pdf" download>
          <div>
            Acesse meu currículo completo
            <i class="fas fa-file-alt" style="margin-left: 20px;"></i>
          </div>
        </a>
        <sup style="margin: auto; margin-top: 10px;"
          >Atualizado em: 22/12/2020</sup
        >
      </div>

      <div class="spacer"></div>

      <div class="card-image">
        <img class="card-photo" src="../assets/personal-image.jpg" />
      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "About",
});
</script>

<style scoped>
#about-container {
  display: flex;
  flex-direction: column;

  width: 100%;

  justify-content: center;
  align-items: center;

  padding: 50px;
  margin-top: 60px;

  color: var(--text-color);
  text-align: justify;
}

#about-card {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  width: 100%;

  justify-content: center;
  align-items: center;
}

.card-text {
  flex: 4 1 0;
  display: flex;
  flex-direction: column;
}

.card-text h1 {
  font-size: 4rem;
  font-weight: 700;
}

.card-text sup {
  font-size: 1rem;
  font-weight: bold;
  color: grey;
}

.card-text ul {
  margin-top: 50px;
}

.card-text li {
  list-style-type: none;

  font-size: 1.6rem;
  font-weight: 300;

  margin-top: 10px;
}

.card-text li i {
  margin-right: 15px;

  color: var(--primary-color);
}

#about-card .spacer {
  flex: 1 1 0;
}

.card-image {
  flex: 2 1 0;
  display: flex;

  margin: auto;
}

.card-image .card-photo {
  width: 80%;

  border: 5px solid white;
  border-radius: 1000px;
}

#github-button {
  display: flex;
  align-items: center;
  justify-content: center;

  margin: auto;
  margin-top: 50px;
  padding: 20px;
  border-radius: 10px;

  width: 30%;
  height: 10%;

  background-color: var(--primary-color);

  font-size: 1.2rem;
  font-weight: bolder;
  text-align: center;
}

/* Media Queries */
@media screen and (max-width: 1230px) {
  #about-container {
    padding: 0;
  }

  #about-card {
    flex-direction: column;
  }

  .card-text {
    padding: 0;
    width: 90%;
  }

  .card-text h1 {
    text-align: center;
  }

  .card-text ul {
    padding: 0;
    margin-top: 30px;
  }

  .card-image {
    justify-content: center;
  }

  .card-image .card-photo {
    width: 50%;
    margin-top: 30px;
  }
}

@media screen and (max-width: 840px) {
  .card-text h1 {
    font-size: 3rem;
  }

  .card-text li {
    font-size: 1.2rem;
  }

  #github-button {
    font-size: 1rem;
    width: 30%;
    height: 2.5%;
    padding: 10px;
  }
}

@media screen and (max-width: 680px) {
  .card-text h1 {
    font-size: 2.5rem;
  }

  .card-text sup {
    font-size: 0.6rem;
  }

  .card-text li {
    font-size: 1rem;
  }

  #github-button {
    font-size: 0.8rem;
    width: 40%;
    height: 2.5%;
    padding: 10px;
    margin-top: 20px;
  }
}

@media screen and (max-width: 520px) {
  .card-text h1 {
    font-size: 1.5rem;
  }

  .card-text li {
    font-size: 0.8rem;
  }

  #github-button {
    font-size: 0.8rem;
    width: 60%;
    height: 2%;
  }
}

@media screen and (max-width: 400px) {
  .card-text h1 {
    font-size: 1.45rem;
    font-weight: bolder;
  }

  .card-text li {
    font-size: 0.7rem;
  }
}
</style>
