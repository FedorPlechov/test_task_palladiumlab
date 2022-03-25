<template>
  <div
    :style="{ background: background }"
    class="preview-card__button preview-card__button_back selected"
    v-show="selectedButton === sequenceNumber"
  >
    <div class="preview-card__description">
      <h3>Услуги по ремонту</h3>
      <p class="show-hide">
        С другой стороны реализация намеченных плановых заданий требуют от нас
        анализа.
      </p>
      <div class="preview-card__container-icon">
        <div
          class="preview-card__icon preview-card__icon_back icon-vector"
        ></div>
      </div>
    </div>
  </div>
  <div
    v-show="selectedButton !== sequenceNumber"
    class="preview-card__button preview-card__button_back selected"
  >
    <div class="preview-card__description"></div>
  </div>
</template>

<script>
export default {
  name: "BackgroundCurtain",
  props: {
    selectedButton: {
      default: null,
      type: Number || null,
    },
    sequenceNumber: {
      type: Number,
      required: true,
    },
    background: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped></style>
// all styles inside ThePreviewCard.vue
