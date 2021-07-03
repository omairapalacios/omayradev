<template>
  <v-container fill-height align-center justify="center">
    <v-row>
      <v-col cols="12" align="center">
        <v-img
          alt="logo omayradev"
          class="shrink mr-2"
          contain
          :src="require('@/assets/logo.svg')"
          transition="scale-transition"
          width="200"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
    name:"Loading",
    mounted: function(){
        setTimeout(() =>{
            this.$router.push("/main");
        },1000);
    }
};
</script>