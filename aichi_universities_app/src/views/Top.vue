<template>
  <div>
    <v-row
      class="blue lighten-4"
      style="height: 50px; margin:5px;"
      justify="center"
      align-content="center"
    >
      <div>大学を調べる</div>
    </v-row>
    <v-row
      class="blue lighten-4"
      style="height: 50px; margin:5px;"
      justify="center"
      align-content="center"
    >
      <div>大学検索</div>
    </v-row>
    <div>
      <ul>
        <li>国公立大学</li>
        <li>私立大学</li>
        <li>短大</li>
        <li>専門</li>
      </ul>
      <ul>
        <li>職業を選択</li>
        <li>学問を選択</li>
        <li>資格を選択</li>
        <li>偏差値を選択</li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Top",

  data: () => ({

  }),
})
</script>