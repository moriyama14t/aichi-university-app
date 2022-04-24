<template>
  <v-navigation-drawer
    app
    permanent
    color="light-blue lighten-5"
    clipped
    width="200px"
    v-if="isPC"
  >
    <v-list nav>
      <v-list-item v-for="menu in menus" :key="menu.title" :to="menu.url">
        <v-list-item-icon>
          <v-icon>{{ menu.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ menu.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "SideBar",
  data: () => ({
    menus: [
      { title: "偏差値", icon: "mdi-web", url: "/" },
      { title: "学部", icon: "mdi-home", url: "/home" },
      { title: "カテゴリ", icon: "mdi-heart", url: "/favorites" },
      { title: "公務員", icon: "mdi-information-variant", url: "/about" },
      { title: "資格", icon: "mdi-information-variant", url: "/about" },
    ],
  }),

  computed: {
    isPC() {
      if (!navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
        return true;
      } else {
        return false;
      }
    },
  },
});
</script>