<template>
  <div>
    <v-row class="ma-5 pa-5">
      <v-col cols="12" v-for="university in universities" :key="university.id">
        <v-card @click="goUniversityDetail(university.id)">
          <v-container>
            <v-row>
              <v-col
                xl="4"
                lg="4"
                md="4"
                sm="12"
                xs="12"
                class="d-flex align-center"
              >
                <v-img :src="university.image.url"></v-img>
              </v-col>
              <v-col xl="8" lg="8" md="8" sm="12" xs="12">
                <v-card-title>
                  <p>{{ university.name }}大学</p>
                  <p class="text-caption">{{ university.furikana }}ダイガク</p>
                </v-card-title>
                <v-chip
                  class="white--text"
                  v-if="university.is_public"
                  color="green"
                >
                  公立</v-chip
                >
                <v-chip class="white--text" v-else color="blue">私立</v-chip>
                <v-card-text>
                  <p>
                    {{
                      university.feature_comment.substr(
                        0,
                        university.feature_comment.indexOf("！")
                      )
                    }}!
                  </p>
                </v-card-text>
                <div
                  style="display: inline"
                  v-for="feature_tag in university.feature_tags"
                  :key="feature_tag"
                >
                  <v-chip color="yellow">{{ feature_tag.name }}</v-chip>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  name: "Universities",

  data: () => ({
    universities: [],
    satisfaction: 5,
  }),

  async mounted() {
    const response = await axios.get(
      "https://aichi.microcms.io/api/v1/university_info",
      {
        headers: {
          "X-MICROCMS-API-KEY": process.env.VUE_APP_X_API_KEY,
        },
      }
    );
    this.universities = await response.data.contents;
  },
  methods: {
    goUniversityDetail(id: string) {
      this.$router.push({
        name: "UniversityDetail",
        params: {
          id: id,
        },
      });
    },
  },
});
</script>
