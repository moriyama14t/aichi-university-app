<template>
  <v-bottom-navigation app hide-on-scroll>
    <v-btn v-for="menu in menus" :key="menu.title" :to="menu.url">
      <span>{{ menu.title }}</span>
      <v-icon>{{ menu.icon }}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
<script>
import Vue from "vue";

export default Vue.extend({
  name: "Footer",
  data: () => ({
    menus: [
      { title: "偏差値", icon: "mdi-web", url: "/" },
      { title: "学部", icon: "mdi-home", url: "/home" },
      { title: "カテゴリ", icon: "mdi-heart", url: "/favorites" },
      { title: "公務員", icon: "mdi-information-variant", url: "/about" },
      { title: "資格", icon: "mdi-information-variant", url: "/about" },
    ],
  }),
});
</script>
<style>
</style>