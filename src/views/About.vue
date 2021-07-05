<template>
  <Slug>
    <template #header>
      <div id="about" class="text-h5 text-sm-h4">
        <span class="cyan accent-2">01.</span>
        About Me
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
                    Hi, my name
                    <b>Omaira Palacios</b>. Sometimes people call me <b>Omayra</b> or
                    <b>Cristina</b> (which is my middle name).
                  </p>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="amber">fa-briefcase</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <p>
                    I am a
                    <b>Software Engineer</b> based in <b>Lima</b> specializing in
                    <b>web development</b> and <b>cloud engineering</b>. Aside from
                    <b>coding</b>, I also enjoy <b>meeting with people</b> and
                    <b>learning new things</b>.
                  </p>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="amber">fa-tools</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <p>
                    My current technology stack comprises of
                    <b>Vue.js</b>, <b>Node.js</b> and
                    <b>Google Cloud Platform/AWS, </b>but also I'm learning
                    <b>React</b> and <b>Python.</b>
                  </p>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="amber">fa-graduation-cap</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <p>
                    I got my Bachelor's Degree in
                    <b>Computer Science</b> at <b>University of Piura</b>.
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
  props: { isDark: Boolean },
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
