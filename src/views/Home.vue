<template>
  <v-container
    fluid
    style="height: 100vh; position: relative"
    class="d-flex align-start"
    color="primary"
  >
    <v-row class="mt-5">
      <v-col cols="1"></v-col>
      <v-col cols="11">
        <v-container>
          <v-row>
            <v-col class="mb-4">
              <div class="title accent--text font-weight-bold mb-4">
                {{ isEnglish ? 'Hi, my name is' : 'Hola, mi nombre es' }}
              </div>
              <transition name="slide-fade">
                <div
                  transition="fade-transition"
                  class="text-h4 text-sm-h2 font-weight-bold mb-4"
                  v-if="showName"
                >
                  Omayra
                  <Typewriter />
                </div>
              </transition>
              <transition name="slide-fade">
                <h2
                  transition="fade-transition"
                  v-if="showTitle"
                  class="text-h4 text-sm-h3 font-weight-bold mb-5 grey--text"
                >
                  {{ isEnglish ? 'I build things' : 'Yo construyo grandes cosas' }}
                  <WordRotate :isEnglish="isEnglish"/>
                </h2>
              </transition>
              <transition name="slide-fade">
                <p
                  transition="fade-transition"
                  v-if="showBio"
                  class="description text-body-1 font-weight-regular"
                >
                  {{ isEnglish ? "I'm a" : 'Yo soy' }}
                  <span class="font-weight-bold accent--text"
                    >full-stack software engineer</span
                  >
                  {{ isEnglish ? 'who specializes in' : 'con experiencia en' }}
                  <i>web development</i> & <i>cloud engineering</i>
                  {{ isEnglish ? 'using' : 'usando' }}
                  <span class="font-weight-bold">Vue.js</span>,
                  <span class="font-weight-bold">Node.js</span>
                  {{ isEnglish ? 'and' : 'y' }}
                  <span class="font-weight-bold">Google Cloud Platform/AWS</span>.
                </p>
              </transition>
              <transition name="slide-fade">
                <v-btn
                  class="mt-2 pa-6"
                  v-if="showBio"
                  color="amber"
                  target="_blank"
                  :href="mailTo"
                  elevation="0"
                >
                  <v-icon color="black" class="mr-5">fa-envelope</v-icon
                  >{{ isEnglish ? 'Get in touch' : 'Contáctame' }}
                </v-btn>
              </transition>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="1" align="right" justify="bottom" align-self="end"></v-col>
    </v-row>
    <div class="down-arrow" @click="$vuetify.goTo('#about', scrollOptions)">
      <v-icon :dark="isDark" href="#about" size="50px">fa-chevron-down</v-icon>
    </div>
  </v-container>
</template>

<script>
const Typewriter = () => import('@/components/Typewriter.vue');
const WordRotate = () => import('@/components/WordRotate.vue');

export default {
  name: 'Home',
  props: ['isDark', 'isEnglish'],
  data: () => ({
    showName: false,
    showTitle: false,
    showBio: false,
    mailTo: 'mailto:omairapalaciosanchez@gmail.com',
    scrollOptions: {
      duration: 600,
      offset: 0,
    },
  }),
  components: {
    Typewriter,
    WordRotate,
  },
  mounted: function () {
    setTimeout(() => {
      this.showName = true;
    }, 300);
    setTimeout(() => {
      this.showTitle = true;
    }, 500);
    setTimeout(() => {
      this.showBio = true;
    }, 700);
  },
};
</script>

<style scoped>
.down-arrow {
  position: absolute;
  bottom: 60px;
  width: 80px;
  height: 80px;
  left: calc(50vw - 20px);
  animation: downArrow 0.8s linear infinite;
  opacity: 0;
}

@keyframes downArrow {
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

.description {
  width: 400px;
  margin-top: 50px;
}

@media only screen and (max-width: 599px) {
  .description {
    width: 100%;
  }
}
</style>
