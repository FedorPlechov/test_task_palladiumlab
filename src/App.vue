<template>
  <TheHeader :is-white-mode="isWhiteMode" />
  <router-view @changedWhiteMode="setWhiteMode($event)"></router-view>
  <TheFooter />
</template>

<script>
import TheHeader from "@/components/layout/TheHeader";
import TheFooter from "@/components/layout/TheFooter";
export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter,
  },
  data() {
    return {
      isWhiteMode: false,
    };
  },
  methods: {
    setWhiteMode(payload) {
      this.isWhiteMode = payload;
    },
  },
};
</script>

<style lang="scss">
@import "~reset-css/sass/_reset.scss";
@import url("/src/assets/style/font.scss");
@import url("/src/assets/style/font-icons.css");

html * {
  box-sizing: border-box;
}

#app {
  margin: auto;
  max-width: 1440px;
  font-family: "Gilroy", sans-serif;
}
</style>
