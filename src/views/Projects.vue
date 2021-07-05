<template>
  <Slug>
    <template #header>
      <div id="projects" class="text-h5 text-sm-h4">
        <span class="cyan accent-2">02.</span>
        {{ isEnglish ? 'Projects' : 'Proyectos' }}
      </div>
    </template>
    <template #content>
      <v-container class="d-flex justify-center flex-wrap">
        <v-card
          :dark="isDark"
          v-for="repo in portfolio"
          :key="repo.id"
          class="my-4"
          outlined
          width="950"
          min-width="200"
          elevation="1"
        >
          <v-row>
            <v-col cols="12" md="6" sm="12">
              <v-card-title class="text-h6"
                ><v-icon>mdi-book</v-icon>{{ repo.name }}</v-card-title
              >

              <v-card-subtitle class="my-2" v-text="repo.description"></v-card-subtitle>
              <v-row class="ma-2"
                ><v-chip
                  class="ma-1"
                  outlined
                  v-for="(tech, index) in repo.stack"
                  :key="index"
                  >{{ tech }}</v-chip
                ></v-row
              >
              <v-card-actions>
                <v-btn
                  class="ml-2 mt-5 black--text"
                  color="amber"
                  target="_blank"
                  :href="repo.html_url"
                  elevation="0"
                >
                  {{ isEnglish ? 'See more' : 'Ver más' }}
                </v-btn>
              </v-card-actions>
            </v-col>
            <v-col md="6" sm="12">
              <v-row class="ma-3"> <v-img height="250" :src="repo.image"></v-img></v-row>
            </v-col>
          </v-row> </v-card></v-container
    ></template>
  </Slug>
</template>
<script>
const Slug = () => import('@/views/Slug');
import axios from 'axios';

export default {
  name: 'Projects',
  props: ['isDark', 'isEnglish'],
  components: {
    Slug,
  },
  data: () => ({
    listOfrepos: [
      {
        name: 'md-links',
        image: `${require('@/assets/md-links.jpg')}`,
        stack: ['Node', 'Markdown', 'Jest', 'CLI', 'HTTP'],
      },
      {
        name: 'burger-queen-api',
        image: `${require('@/assets/burger-queen.jpg')}`,
        stack: ['Node', 'Express', 'Jest', 'MongoDB', 'Docker'],
      },
      {
        name: 'blizzard-diablo-game',
        image: `${require('@/assets/blizzard-game.png')}`,
        stack: ['Vuejs', 'Vuex', 'Bootstrap', '0Auth', 'HTTP'],
      },
      {
        name: 'photo-gallery-api',
        image: `${require('@/assets/photo-api.png')}`,
        stack: ['Node', 'Typescript', 'Express', 'Mongoose', 'Multer'],
      },
      {
        name: 'wpp-chatbot',
        image: `${require('@/assets/chatbot.png')}`,
        stack: ['Node', 'Typescript', 'Firebase', 'Dialogflow'],
      },
      {
        name: 'filmsbook-app',
        image: `${require('@/assets/films-book.jpg')}`,
        stack: ['Flutter', 'Dart', 'HTTP'],
      },
      {
        name: 'send-automatic-report',
        image: `${require('@/assets/task-scheduler.png')}`,
        stack: ['Cloud Functions', 'Firebase', 'Nodemailer', 'Scheduler'],
      },
    ],
    repos: [],
    portfolio: [],
    repoTags: null,
    owner: 'omairapalacios',
    headers: { Authorization: `token ${process.env.VUE_APP_TOKEN}` },
    options: {
      'User-Agent': 'omairapalacios',
      client_id: process.env.VUE_APP_GITHUB_ID,
      client_secret: process.env.VUE_APP_GITHUB_SECRET,
    },
  }),
  created() {
    this.getData();
    console.log(this.options);
  },
  methods: {
    async getData() {
      axios
        .get(`https://api.github.com/users/omairapalacios/repos`, {
          headers: {
            Authorization: `token ${process.env.VUE_APP_TOKEN}`,
          },
        })
        .then((response) => {
          this.repos = response.data;
          this.getLanguages();
        });
    },
    getLanguages() {
      console.log(this.repos);
      this.portfolio = this.listOfrepos.map((repoChoosed) => {
        let object = {};
        this.repos.forEach((repoGit) => {
          if (repoGit.name === repoChoosed.name) {
            object = {
              image: repoChoosed.image,
              stack: repoChoosed.stack,
              ...repoGit,
            };
          }
        });
        return object;
      });
      console.log(this.portfolio);
    },
    goTo(url) {
      window.open(url);
    },
  },
};
</script>
