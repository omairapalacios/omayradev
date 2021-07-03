<template>
  <div>Archive</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Projects',
  data: () => ({
    repos: [],
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
      this.repos.forEach((el) => {
        el.languages = [];
        axios
          .get(`https://api.github.com/repos/omairapalacios/${el.name}/languages`, {
            headers: {
              Authorization: `token ${process.env.VUE_APP_TOKEN}`,
            },
          })
          .then((response) => {
            let aux = response.data;
            for (let key in aux) {
              if (Object.keys(aux).includes(key)) {
                el.languages.push(key);
              }
            }
          });
      });
      console.log(this.repos);
    },
    goTo(url) {
      window.open(url);
    },
  },
};
</script>

<style lang="scss" scoped></style>
