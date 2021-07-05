<template>
  <Slug>
    <template #header>
      <div id="about" class="text-h5 text-sm-h4">
        <span class="cyan accent-2">01.</span>
        {{ isEnglish ? ' About Me' : 'Acerca de mi' }}
      </div>
    </template>
    <template #content>
      <v-container>
        <v-row>
          <v-col cols="12" md="4" class="d-flex flex-row align-center justify-center">
            <div class="profile-picture-container">
              <v-img
                class="mx-auto"
                :src="require('@/assets/profile.jpg')"
                :lazy-src="require('@/assets/profile.jpg')"
              ></v-img>
            </div>
          </v-col>
          <v-col cols="12" md="8" class="px-xs-0">
            <v-list color="transparent" :dark="isDark">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="amber">fa-user-tag</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <p>
                    {{ isEnglish ? ' Hi, my name' : 'Hola, mi nombre es' }} <b>Omaira</b>,
                    {{ isEnglish ? ' but Everyone call me ' : 'pero todos me llaman ' }}
                    <b>Omayra</b>
                  </p>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="amber">fa-briefcase</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <p>
                    {{ isEnglish ? 'I am a ' : 'Yo soy ' }}
                    <b>Software Engineer</b>
                    {{ isEnglish ? 'based in ' : 'vivo en ' }}<b>Perú.</b>
                    {{ isEnglish ? ' specializing in' : 'tengo experiencia en' }}
                    <b>web development</b> {{ isEnglish ? 'and' : 'y' }}
                    <b>cloud engineering</b>.
                    {{ isEnglish ? 'Aside from' : 'Aparte de hacer' }}
                    <b>{{ isEnglish ? 'coding' : 'código' }}</b
                    >, {{ isEnglish ? 'I also enjoy' : 'también disfruto' }}
                    <b>{{ isEnglish ? 'meeting with people' : 'conocer gente' }}</b>
                    {{ isEnglish ? 'and' : 'y' }}
                    <b>{{
                      isEnglish ? 'learning new things' : 'aprender nuevas cosas'
                    }}</b
                    >.
                  </p>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="amber">fa-tools</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <p>
                    {{
                      isEnglish
                        ? 'My current technology stack comprises of'
                        : 'Mi stack favorito de tecnologías es'
                    }}
                    <b>Vue.js</b>, <b>Node.js</b>
                    {{ isEnglish ? 'and' : '&' }}
                    <b>Google Cloud Platform/AWS, </b
                    >{{
                      isEnglish
                        ? "but also I'm learning"
                        : 'pero también me gusta intentar nuevos retos, actualmente estoy aprendiendo'
                    }}
                    <b>React</b> &
                    <b>Python.</b>
                  </p>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="amber">fa-graduation-cap</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <p>
                    {{ isEnglish ? "I got my Bachelor's Degree in" : 'Me gradué en' }}

                    <b>
                      {{ isEnglish ? 'Computer Science' : 'Ingeniería Informática' }}</b
                    >
                    {{ isEnglish ? 'at' : 'en' }}
                    <b>
                      {{
                        isEnglish
                          ? 'University of Piura'
                          : 'la universidad Nacional de Piura'
                      }}</b
                    >.
                    {{ isEnglish ? 'and also I studied at ' : 'y también estudié en' }}
                    <b>
                      {{
                        isEnglish ? 'Laboratoria Bootcamp' : 'el bootcamp de laboratoria'
                      }}</b
                    >.
                  </p>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </Slug>
</template>

<script>
const Slug = () => import('@/views/Slug');
export default {
  name: 'About',
  props: { isDark: Boolean, isEnglish: Boolean },
  components: {
    Slug,
  },
};
</script>

<style>
.profile-picture-container {
  overflow: hidden;
  max-width: 300px;
  height: 300px;
  text-align: center;
  box-shadow: rgb(210, 210, 210) -10px 10px;
}
</style>
