<template>
  <v-app>
    <Loading v-show="loading"></Loading>
    <Header />
    <v-main v-show="!loading">
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "@/global/Header.vue";
import Footer from "@/global/Footer.vue";
import Loading from "@/components/Loading.vue";

export default Vue.extend({
  name: "App",

  components: {
    Header,
    Footer,
    Loading,
  },

  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
});
</script>
