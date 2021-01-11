<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive">
        <!-- 这里是会被缓存的视图组件，比如 Home！ -->
      </router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive">
      <!-- 这里是会被缓存的视图组件，比如 Home！ -->
    </router-view>
  </div>
</template>

<script>
import axios from "axios";
import Cookies from "vue-cookies";
export default {
  name: "app",
  async created() {
    await this.init();
  },
  methods: {
    init() {
      let openid = this.$route.query.openid;
      openid && Cookies.set("openid", openid, 24 * 60 * 60);
      axios
        .post("http://m.fashi77.com/token/Produce")
        .then(({ data }) => {
          if (data.result.res === "success") {
            Cookies.set("oauth_token", data.result.oauth_token, 30 * 24 * 60 * 60);
            Cookies.set("v_key", data.result.oauth_token_exp, 30 * 24 * 60 * 60);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
body {
  background-color: #f6f6f6;
}
</style>
