<template>
  <v-card dark>
    <v-navigation-drawer
      app
      temporary
      right
      v-model="drawer"
      class="d-flex flex-column align-center"
    >
      <v-list class="text-center">
        <v-list-item>
          <v-list-item-content>
            <div>
              <v-icon @click="drawer = !drawer">mdi-close</v-icon>
            </div>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          @click="navigate(item.target)"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item justify-content>
          <v-list-item-content>
            <v-btn
              class="amber black--text"
              href="https://drive.google.com/file/d/1Gcygrw4FJlkuoHtP2m1nLpweV4I6z6Wp/view?usp=sharing"
              target="_bank"
              >{{ this.isEnglish ? 'My resume' : 'Mi CV' }}</v-btn
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  name: 'RightNav',
  props: { isEnglish: Boolean },
  data() {
    return {
      drawer: false,
      items: [
        {
          title: this.isEnglish ? 'About' : 'Acerca de mí',
          icon: 'mdi-home-city',
          target: '#about',
        },
        {
          title: this.isEnglish ? 'My projects' : 'Mis proyectos',
          icon: 'mdi-account-group-outline',
          target: '#work',
        },
        {
          title: this.isEnglish ? 'Contact' : 'Contacto',
          icon: 'mdi-account-group-outline',
          target: '#contact',
        },
      ],
      scrollOptions: {
        duration: 300,
        offset: 0,
        easing: 'easeInOutCubic',
      },
    };
  },
  methods: {
    toggle() {
      this.drawer = !this.drawer;
    },
    navigate(target) {
      this.$vuetify.goTo(target, this.scrollOptions);
      this.toggle();
    },
  },
};
</script>
