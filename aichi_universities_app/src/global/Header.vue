<template>
  <div>
    <v-app-bar app color="light-blue" elevation="5" dark>
      <v-container @click="getHome()" style="cursor: pointer">
        <v-row>
          <v-col>愛知の大学図鑑</v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  name: "Header",

  methods: {
    getHome() {
      this.$router.push({
        name: "Universities",
      });
    },
  },
};
</script>
<style>
</style>