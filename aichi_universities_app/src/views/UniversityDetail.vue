<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-img :src="university.image.url"></v-img>
      </v-col>
    </v-row>
    <v-card>
      <v-row>
        <v-col cols="12">
          <v-card-title
            >{{ university.furikana }}ダイガク<br />{{
              university.name
            }}大学</v-card-title
          >
          {{ university.feature_comment }}
          <v-spacer></v-spacer>
          <v-card-actions>
            <v-btn
              :to="{
                name: 'UniversityDetail',
                params: { id: university.id },
              }"
              color="indigo"
              fab
              small
              dark
            >
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios, { AxiosResponse } from "axios";
import { UniversityModel } from "@/models/UniversityModel";

export default Vue.extend({
  name: "UniversityDetail",

  data: () => ({
    university: {},
  }),

  async mounted() {
    const response: AxiosResponse<UniversityModel> = await axios.get(
      `https://aichi.microcms.io/api/v1/university_info/${this.$route.params.id}`,
      {
        headers: {
          "X-MICROCMS-API-KEY": process.env.VUE_APP_X_API_KEY,
        },
      }
    );
    const university: UniversityModel = await response.data;
    this.university = university;
  },
});
</script>
