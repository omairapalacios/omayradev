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
      <v-switch v-model="isDark" color="pink" class="d-flex d-sm-none mt-5">
        <template #prepend>
          <v-icon :color="themeColor">fas fa-moon</v-icon>
        </template>
      </v-switch>
      <v-switch class="d-flex d-sm-none mt-5" color="pink" v-model="isEnglish">
        <template #prepend>
          <p v-if="isDark" class="white--text font-weigth-bold">EN</p>
          <p v-else class="font-weigth-bold">EN</p>
        </template>
      </v-switch>
      <v-spacer></v-spacer>
      <transition name="slide-fade">
        <div class="d-none d-sm-flex flex-row nav-links align-center">
          <div @click="$vuetify.goTo('#about', scrollOptions)">
            {{ this.isEnglish ? 'About me' : 'Acerca de mí' }}
          </div>
          <div @click="$vuetify.goTo('#projects', scrollOptions)">
            {{ this.isEnglish ? 'Projects' : 'Proyectos' }}
          </div>
          <div @click="$vuetify.goTo('#contact', scrollOptions)">
            {{ this.isEnglish ? 'Contact' : 'Contacto' }}
          </div>
          <v-btn
            color="amber"
            class="ml-3 black--text"
            href="https://drive.google.com/file/d/1Gcygrw4FJlkuoHtP2m1nLpweV4I6z6Wp/view?usp=sharing"
            target="_bank"
            elevation="0"
            >{{ this.isEnglish ? 'My resume' : 'Mi CV' }}</v-btn
          >
        </div>
      </transition>
      <v-app-bar-nav-icon class="d-flex d-sm-none" @click="toggleDrawer()" />
    </v-app-bar>

    <v-main class="main">
      <router-view :isDark="isDark" :isEnglish="isEnglish"></router-view>

      <div class="social-links d-none d-sm-flex">
        <SocialIcons :isDark="isDark" />
      </div>
      <div class="theme-toggle ma-10 d-none d-sm-flex flex-row align-center">
        <v-icon class="mr-3" :color="themeColor">fas fa-moon</v-icon>
        <v-switch color="pink" v-model="isDark"> </v-switch>
      </div>

      <div class="languaje-toggle my-10 d-none d-sm-flex flex-row align-center">
        <p class="ma-4 grey--text">EN</p>
        <v-switch color="pink" v-model="isEnglish"> </v-switch>
      </div>
    </v-main>

    <RightNav ref="rightNav" :isEnglish="isEnglish" />
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
    isEnglish: false,
  }),
  created() {
    console.log(this.$props);
  },
  computed: {
    themeColor() {
      return this.isDark ? 'yellow' : 'accent';
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

.languaje-toggle {
  transform: rotate(90deg);
  width: 80px;
  height: 150px;
  position: fixed;
  display: block;
  bottom: 55px;
  left: 10px;
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
