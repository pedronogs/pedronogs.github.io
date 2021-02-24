<template>
  <div class="pa-10" style="margin-top: 15vh">
    <v-timeline dark>
      <v-timeline-item v-for="(job, i) in jobData" :key="i" :color="job.color">
        <template v-slot:icon>
          <v-avatar>
            <v-img class="" :src="getLogoSource(job.logo)" />
          </v-avatar>
        </template>

        <template v-slot:opposite>
          <span
            :class="`headline font-weight-light ${job.color}--text`"
            v-text="job.period"
          ></span>
        </template>

        <div class="py-4 text-justify">
          <h2 :class="`headline font-weight-bold mb-4 ${job.color}--text`">
            {{ `${job.company} (${job.title})` }}
          </h2>
          <div>
            {{ job.description }}<br /><br />
            <span class="font-weight-bold">Crítica: </span>{{ job.critic }}
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Job",
  data: function() {
    return {
      jobData: [
        {
          color: "cyan",
          company: "Telebrás",
          title: "Estagiário na Gerência de Engenharia de Redes e Plataformas",
          period: "Set/2019 - Mar/2020",
          description:
            "Atividade relacionada à validação da instalação de equipamentos de rede (CPE) em clientes e suporte de documentação. Além disso, foi possível observar e auxiliar em projetos de rede mais avançados.",
          critic:
            "O estágio poderia ter permitido maior interação prática e aplicação dos conhecimentos obtidos na faculdade e em outros projetos. Em suma, este primeiro estágio foi uma rica experiência para conhecimento do mercado de trabalho, porém não possibilitou grande crescimento nas habilidades profissionais.",
          logo: "telebras-logo.png",
        },
        {
          color: "green",
          company: "Ministério da Cidadania",
          title: "Projeto de Extensão da UNB",
          period: "Jan/2020 - Atualmente",
          description:
            "Atividade relacionada ao desenvolvimento e aprimoramento da nova aplicação 'Prontuário Eletrônico' da rede SUAS (Assistência Social).",
          critic:
            "Esta oportunidade permitiu evoluir imensamente nas habilidades de desenvolvimento, principalmente com novas tecnologias que fogem do escopo da faculdade. Como equipe, foi definida a refatoração da aplicação legado, o que gerou enormes melhorias para o cliente e grandes avanços profissionais",
          logo: "cidadania-logo.png",
        },
        {
          color: "red",
          company: "BrScan",
          title: "Estagiário [Desenvolvimento de Software]",
          period: "Dez/2020 - Atualmente",
          description:
            "Pesquisa e desenvolvimento de soluções de automação de processos com Machine Learning. Utilização principal da linguagem de script Python.",
          critic:
            "Estágio altamente prático, permitindo liberdade na pesquisa e desenvolvimento de soluções.",
          logo: "brscan-logo.jpg",
        },
      ],
    };
  },
  methods: {
    // Dinamically render icons for each timeline item
    getLogoSource(source: string) {
      return require(`../assets/${source}`);
    },
  },
});
</script>
