<template>
  <div
    class="container"
    :style="{ justifyContent: horizontalAlign === 'left' ? 'flex-start' : '' }"
  >
    <span
      class="container__line"
      :style="{ borderColor: whiteMode ? 'white' : '' }"
    ></span>
    <button
      class="container__button"
      :style="{ color: whiteMode ? 'white' : '' }"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    whiteMode: {
      type: Boolean,
      default: false,
    },
    horizontalAlign: {
      type: String,
      default: "center",
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;

  &__line {
    display: block;
    height: 1px;
    width: 22px;
    position: relative;
    border-top: 1px solid #222222;
    z-index: 2;
    left: 11px;
  }
  // .container__button
  &__button {
    color: #222222;
    background: white;
    border: 1px solid rgba(235, 235, 235, 1);
    position: relative;
    padding: 10px 48px;
    font-size: 14px;
    font-weight: 800;
    line-height: 20px;
    background: rgba(255, 255, 255, 0);
    font-family: "Gilroy", sans-serif;
    cursor: pointer;
  }
}
</style>
