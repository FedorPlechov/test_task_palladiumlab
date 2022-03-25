<template>
  <main>
    <ThePreviewCard @changedWhiteMode="$emit('changedWhiteMode', $event)" />
    <TheExamplesOfWork />
  </main>
</template>

<script>
import ThePreviewCard from "@/components/main-page/ThePreviewCard";
import TheExamplesOfWork from "@/components/main-page/TheExamplesOfWork";
export default {
  name: "TheMainRoute",
  components: {
    ThePreviewCard,
    TheExamplesOfWork,
  },
};
</script>

<style scoped lang="scss"></style>
