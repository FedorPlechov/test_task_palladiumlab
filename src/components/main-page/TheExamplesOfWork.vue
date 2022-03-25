<template>
  <section class="examples">
    <h3 class="secondary-title">
      Примеры
      <span class="secondary-title__black-mode">выполненных</span> работ
    </h3>
    <div class="examples__grid-container">
      <div class="examples__example examples__example_background1"></div>
      <div class="examples__example examples__example_background2"></div>
      <div class="examples__example examples__example_background3"></div>
      <div class="examples__example examples__example_background4"></div>
      <div class="examples__example examples__example_background5"></div>
      <div class="examples__example examples__example_background6"></div>
      <div class="examples__example examples__example_background7"></div>
      <div class="examples__example examples__example_background8"></div>
    </div>
    <BaseButton class="examples__button">Все проекты</BaseButton>
  </section>
</template>

<script>
export default {
  name: "TheExamplesOfWork",
};
</script>

<style lang="scss">
.examples {
  max-width: 1100px;
  margin: 136px auto 0 auto;
  @media (max-width: 1110px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  // .examples__grid-container
  &__grid-container {
    display: grid;
    justify-content: center;
    width: 100%;
    grid-template-columns: repeat(3, minmax(auto, 360px));
    grid-template-rows: repeat(4, minmax(auto, 270px));
    gap: 10px;
    margin: 48px 0 64px 0;
    @media (max-width: 1110px) {
      grid-template-columns: repeat(2, minmax(auto, 360px));
      grid-template-rows: repeat(6, minmax(auto, 270px));
    }
  }
  &__example {
    background-size: cover;
    position: relative;
    cursor: pointer;
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      opacity: 0;
      transition: opacity 300ms ease;
    }
    &:hover:after {
      opacity: 1;
    }
    &_background1 {
      background: url("https://i.ibb.co/xG4GMcP/Service-Card-Horizontal.png");
      grid-column: 1/3;
      @media (max-width: 1110px) {
        grid-column: 1/3;
        grid-row: 1/2;
      }
    }
    &_background2 {
      background: url("https://i.ibb.co/C0sQCfP/Service-Card-Vertical.png");
      grid-column: -1/-2;
      grid-row: 1/3;
      @media (max-width: 1110px) {
        grid-column: 1/2;
        grid-row: 2/4;
      }
    }
    &_background3 {
      background: url("https://i.ibb.co/MCkW52Z/Service-Card-Vertical-1.png");
      grid-column: 1/2;
      grid-row: 3/5;
      @media (max-width: 1110px) {
        grid-column: 2/3;
        grid-row: 2/4;
      }
    }
    &_background4 {
      background: url("https://i.ibb.co/B4LM3nR/Service-Card-Horizontal-1.png");
      grid-column: -3/-1;
      grid-row: 4/5;
    }
    &_background5 {
      background: url("https://i.ibb.co/YdWywwd/Service-Card.png");
    }
    &_background6 {
      background: url("https://i.ibb.co/ZH9C40S/Service-Card-1.png");
    }
    &_background7 {
      background: url("https://i.ibb.co/tp5jzzN/Service-Card-2.png");
    }
    &_background8 {
      background: url("https://i.ibb.co/1KQ3w5T/Service-Card-3.png");
    }
  }
  &__button {
    margin-bottom: 68px;
  }
}

.secondary-title {
  color: #222222;
  font-size: 32px;
  font-weight: 800;
  line-height: 40px;
  text-align: left;
  position: relative;

  &:before {
    content: "";
    display: block;
    width: 40px;
    height: 1px;
    border-top: 1px solid #222222;
    position: absolute;
    top: 50%;
    left: -80px;
  }

  &__black-mode {
    position: relative;
    -webkit-text-stroke: 0.5px #222222;
    color: white;
  }
}
</style>
