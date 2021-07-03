<template>
  <v-app>
    <v-app-bar
      hide-on-scroll
      fixed
      app
      :dark="isDark"
      flat
      v-if="$route.name != 'loading'"
    >
      <div class="d-flex align-center justify-center">
        <v-btn href="https://omayradev.app" icon>
          <v-img
            alt="ecnopdev"
            class="shrink mr-2"
            contain
            :src="require('@/assets/logo.svg')"
            transition="scale-transition"
            width="60"
          />
        </v-btn>
      </div>
      <v-spacer></v-spacer>
      <v-switch v-model="isDark" class="d-flex d-sm-none mt-5">
        <template #prepend>
          <v-icon :color="themeColor">fas fa-moon</v-icon>
        </template>
      </v-switch>
      <v-spacer></v-spacer>
      <transition name="slide-fade">
        <div class="d-none d-sm-flex flex-row nav-links align-center">
          <div @click="$vuetify.goTo('#about', scrollOptions)">About</div>
          <div @click="$vuetify.goTo('#experience', scrollOptions)">Experience</div>
          <div @click="$vuetify.goTo('#work', scrollOptions)">Work</div>
          <div @click="$vuetify.goTo('#contact', scrollOptions)">Contact</div>
          <v-btn
            elevation="0"
            color="amber lighten-1"
            class="ml-3"
            href="omairapa
          lacios-resume.pdf"
            target="_bank"
            >My resume</v-btn
          >
        </div>
      </transition>
      <v-app-bar-nav-icon class="d-flex d-sm-none" @click="toggleDrawer()" />
    </v-app-bar>

    <v-main class="main">
      <router-view :isDark="isDark"></router-view>

      <div class="social-links d-none d-sm-flex">
        <SocialIcons :isDark="isDark" />
      </div>

      <div class="theme-toggle d-none d-sm-flex flex-row align-center justify-center">
        <v-icon class="mr-3" :color="themeColor">fas fa-moon</v-icon>
        <v-switch v-model="isDark"> </v-switch>
      </div>
    </v-main>

    <RightNav ref="rightNav" />
  </v-app>
</template>

<script>
import RightNav from '@/components/RightNav';
import SocialIcons from '@/components/SocialIcons';

export default {
  name: 'App',
  components: {
    RightNav,
    SocialIcons,
  },

  data: () => ({
    scrollOptions: {
      duration: 600,
      offset: 0,
      easing: 'easeInOutCubic',
    },
    isDark: false,
  }),

  computed: {
    themeColor() {
      return this.isDark ? 'yellow' : 'blue lighten-3';
    },
  },

  methods: {
    toggleDrawer() {
      this.$refs.rightNav.toggle();
    },
  },
};
</script>

<style>
.main {
  scroll-snap-type: y proximity;
  position: relative;
}

.social-links {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  width: 45px;
  height: 75vh;
  display: block;
  position: fixed;
  right: 16px;
  bottom: 0px;
  padding-right: 16px;
  text-align: center;
}

.theme-toggle {
  transform: rotate(90deg);
  width: 80px;
  height: 150px;
  position: fixed;
  display: block;
  bottom: 0px;
  left: 0px;
}

.nav-links div {
  margin-left: 16px;
  cursor: pointer;
}

.nav-links div:hover {
  text-decoration: underline;
}
/* Enter and leave animations can use different */
/* durations and timing functions.*/
.slide-fade-enter-active {
  transition: all 0.8s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
