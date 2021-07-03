<template>
  <div>
    <a
      v-for="(item, index) in icons"
      :key="index"
      class="social-icon-container my-2 mx-1"
      target="_blank"
      :href="item.link"
    >
      <v-icon :dark="isDark" :title="item.name" class="social-icon" size="30">{{
        item.icon
      }}</v-icon>
    </a>
  </div>
</template>

<script>
export default {
  name: 'SocialIcons',
  props: { isDark: Boolean },
  data() {
    return {
      icons: [
        {
          name: 'LinkedIn',
          icon: 'fab fa-linkedin',
          link: 'https://www.linkedin.com/in/omairapalacios/',
        },
        {
          name: 'Github',
          icon: 'fab fa-github',
          link: 'https://github.com/omairapalacios',
        },
        {
          name: 'Twitter',
          icon: 'fab fa-twitter',
          link: 'https://twitter.com/omairapalacioss',
        },
      ],
    };
  },
  methods: {
    gotoLink(url) {
      document.location = url;
    },
  },
};
</script>

<style scoped>
.social-links-container {
  width: 60px;
}
.social-icon {
  top: 10px;
  position: relative;
}

.social-icon:hover {
  color: #4fc08d;
  top: 2px;
}

.social-icon-container {
  animation: animate 1s linear forwards;
  opacity: 0;
  text-decoration: none;
}

@media only screen and (max-height: 480px) {
  .social-icon {
    font-size: 20px !important;
  }
}

@keyframes animate {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
