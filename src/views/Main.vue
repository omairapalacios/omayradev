<template>
  <div :class="theme">
    <Home :isDark="isDark" />
    <About :isDark="isDark" />
    <Projects :isDark="isDark" />
    <Contact :isDark="isDark" />
    <div
      :class="[
        theme,
        'pb-5',
        'text-center',
        'text-title',
        'font-weight-bold',
        'repo-link',
      ]"
    >
      <a href="https://github.com/omairapalacios" target="_blank">
        <v-icon :dark="isDark" class="mr-2">fab fa-github</v-icon>
        <span>Made with love by Omaira Palacios</span>
      </a>
    </div>
  </div>
</template>

<script>
const Home = () => import('@/views/Home.vue');
const About = () => import('@/views/About.vue');
const Projects = () => import('@/views/Projects.vue');
const Contact = () => import('@/views/Contact.vue');

export default {
  name: 'Root',
  props: { isDark: Boolean },
  components: {
    Home,
    About,
    Projects,
    Contact,
  },
  computed: {
    theme() {
      return this.isDark ? ['black', 'white-text'] : '';
    },
  },
};
</script>

<style scoped>
.white-text {
  color: white;
}
.repo-link a {
  text-decoration: none;
  opacity: 0.8;
  color: gray;
}
</style>
