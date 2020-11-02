<template>
  <div id="about-container">
    <div id="about-card">
      <div class="card-text">
        <h1>Pedro Henrique Nogueira da Silva</h1>
        <sup>também conhecido como Pedro "Nogs"</sup><br /><br /><br /><br />

        <ul>
          <li>
            <i class="fas fa-angle-double-right"></i>
            Graduando em
            <strong>Engenharia de Redes de Comunicação</strong> pela UNB.
          </li>
          <li>
            <i class="fas fa-angle-double-right"></i>
            Interessado em <strong>administração de redes</strong> e
            <strong>infraestrutura de redes</strong>.
          </li>
          <li>
            <i class="fas fa-angle-double-right"></i>
            <strong>Programador</strong> 🧑‍💻 - C/C++, Python, JavaScript,
            Bash, Linux, conhecimento em redes.
          </li>
          <li>
            <i class="fas fa-angle-double-right"></i>
            <strong>Desenvolvedor WEB e Desktop</strong><br />
            <pre>
     > Front-End: HTML + CSS + JavaScript = Electron + VueJS 😍.</pre
            >
            <pre>   > Back-End: JavaScript (Node.js) e PHP (Slim).</pre>
            <pre>   > Ferramentas: VSCode, </pre>
          </li>
        </ul>

        <a id="github-button" href="../assets/curriculo.pdf" download>
          <div>
            Acesse meu currículo completo
            <i class="fas fa-file-alt" style="margin-left: 10px;"></i>
          </div>
        </a>
        <sup style="margin: auto; margin-top: 10px;"
          >Atualizado em: 02/10/2020</sup
        >
      </div>

      <div class="spacer"></div>

      <div class="card-image">
        <img class="card-photo" src="../assets/personal-image.jpg" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "About"
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
  margin-top: 80px;

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

#about-card .card-text {
  flex: 4 1 0;
  display: flex;
  flex-direction: column;
}

#about-card h1 {
  font-size: 4rem;
  font-weight: 700;
}

#about-card sup {
  font-size: 1rem;
  font-weight: bold;
  color: grey;
}

#about-card li {
  list-style-type: none;

  font-size: 1.6rem;
  font-weight: 300;

  margin-top: 10px;
}

#about-card li i {
  margin-right: 15px;

  color: var(--primary-color);
}

#about-card .spacer {
  flex: 1 1 0;
}

#about-card .card-image {
  flex: 2 1 0;
}

#about-card .card-photo {
  width: 80%;

  border-radius: 20px;
}

#github-button {
  display: flex;
  align-items: center;

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
</style>
