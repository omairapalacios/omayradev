import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        accent: '#48E9FF',
        amber: '#FFCC19',
        black: '#0b0b0b'
      },
      dark: {
        accent: '#48E9FF',
        amber: '#FFCC19',
        black: '#0b0b0b'
      },
    },
  },
});
