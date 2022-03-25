<template>
  <section class="preview-card">
    <div
      :style="{ background: 'url(' + backgroundImage + ')' }"
      class="preview-card__back"
    >
      <div class="preview-card__buttons preview-card__buttons_back">
        <BackgroundCurtain
          :background="'rgba(235, 87, 87, 1)'"
          :sequence-number="0"
          :selected-button="selectedButton"
        /><BackgroundCurtain
          :background="'rgba(33, 150, 83, 1)'"
          :sequence-number="1"
          :selected-button="selectedButton"
        /><BackgroundCurtain
          :background="'rgba(47, 128, 237, 1)'"
          :sequence-number="2"
          :selected-button="selectedButton"
        /><BackgroundCurtain
          :background="'rgba(155, 81, 224, 1)'"
          :sequence-number="3"
          :selected-button="selectedButton"
        />
      </div>
    </div>
    <div class="preview-card__request">
      <h1
        class="preview-card__title title"
        :style="{ color: isWhiteMode ? '#ffffff' : '#222222' }"
      >
        Ремонт <span class="title__white-text">и</span> дизайн<br />
        <span
          class="title__white-text"
          :class="{ whiteMode: isWhiteMode, blackMode: !isWhiteMode }"
          >в Москве и Московской области</span
        >
      </h1>
      <div class="show-hide">
        <BaseButton
          :whiteMode="isWhiteMode"
          class="preview-card__button-request"
          >Оставить заявку
        </BaseButton>
      </div>
      <div class="preview-card__menu">
        <div class="preview-card__buttons">
          <div
            :class="{ hide: selectedButton === 0 }"
            :style="{ borderRight: selectedButton === 1 ? 'none' : '' }"
            class="preview-card__button"
            @mouseenter="selectButton(0)"
            @mouseleave="selectButton(null)"
          >
            Услуги по ремонту
          </div>
          <div
            :class="{ hide: selectedButton === 1 }"
            :style="{ borderRight: selectedButton === 2 ? 'none' : '' }"
            class="preview-card__button"
            @mouseenter="selectButton(1)"
            @mouseleave="selectButton(null)"
          >
            Виды работ
          </div>
          <div
            :class="{ hide: selectedButton === 2 }"
            :style="{ borderRight: selectedButton === 3 ? 'none' : '' }"
            class="preview-card__button"
            @mouseenter="selectButton(2)"
            @mouseleave="selectButton(null)"
          >
            Дизайн интерьера
          </div>
          <div
            :class="{ hide: selectedButton === 3 }"
            class="preview-card__button"
            @mouseenter="selectButton(3)"
            @mouseleave="selectButton(null)"
          >
            Ремонт помещений
          </div>
        </div>
        <div class="preview-card__icon icon-vector"></div>
      </div>
    </div>
  </section>
</template>

<script>
import BackgroundCurtain from "@/components/main-page/BackgroundCurtain";

export default {
  name: "ThePreviewCard",
  components: {
    BackgroundCurtain,
  },
  data() {
    return {
      selectedButton: null,
      urlsBackground: [
        require("../../assets/images/service.png"),
        require("../../assets/images/types-of-work.png"),
        require("../../assets/images/design.png"),
        require("../../assets/images/area.png"),
      ],
    };
  },
  computed: {
    backgroundImage() {
      if (this.selectedButton === null) return "";
      return this.urlsBackground[this.selectedButton];
    },
    isWhiteMode() {
      return this.selectedButton !== null;
    },
  },
  methods: {
    selectButton(payload) {
      this.selectedButton = payload;
      this.$emit("changedWhiteMode", this.isWhiteMode);
    },
  },
};
</script>

<style lang="scss">
.preview-card {
  position: relative;

  &:before {
    position: absolute;
    z-index: -2;
    content: "";
    display: block;
    height: 100%;
    width: 100%;
    bottom: 0;
    background: url("../../assets/images/Image-preview.png") no-repeat bottom;
  }

  &__back {
    position: absolute;
    width: 100%;
    height: 100%;
    background: url("../../assets/images/service.png");
    background-position: center;
    background-size: cover;
    z-index: -1;
  }

  // .preview-card__request
  &__request {
    display: flex;
    flex-direction: column;
  }

  // .preview-card__title
  &__title {
    font-size: 4rem;
    line-height: 72px;
    text-align: center;
    font-weight: 800;
    margin: 150px 0 48px 0;
    color: #222222;
    @media (max-width: 700px) {
      font-size: 2rem;
    }
  }

  &__button-request {
    margin-bottom: 84px;
  }

  // .preview-card__menu
  &__menu {
    height: 344px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }

  // .preview-card__buttons
  &__buttons {
    color: white;
    font-size: 20px;
    font-weight: 800;
    line-height: 25px;
    text-align: center;
    display: flex;
    width: 100%;

    &_back {
      height: calc(100% - 88px);
    }
  }

  // .preview-card__button
  &__button {
    flex: 360.25px;
    height: 85px;
    text-align: center;
    padding-top: 31px;
    border-top: 1px solid rgba(235, 235, 235, 1);
    border-bottom: 1px solid rgba(235, 235, 235, 1);
    border-right: 1px solid rgba(235, 235, 235, 1);
    cursor: pointer;
    @media (max-width: 756px) {
      border: none;
      font-size: 13px;
    }

    &_back {
      border: none;
      @media (max-width: 756px) {
        border: none;
        font-size: 10px;
      }
    }

    &.hide {
      opacity: 0;
      border-right: none;
      border-left: none;
    }

    &:last-of-type {
      border-right: none;
    }

    &.selected {
      display: block;
      height: 100%;
      width: 100%;
    }
  }

  &__description {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    p {
      margin-top: 16px;
      font-family: "Montserrat", sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      text-align: center;
      padding: 0 40px;
    }
  }

  &__container-icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__icon {
    transform: rotate(180deg) translateX(-3px);
    color: white;
    font-size: 15px;
    padding: 12.5px;
    border: 1px solid rgba(235, 235, 235, 1);
    border-radius: 100%;
    margin: 23px 0;
    cursor: pointer;

    &_back {
      transform: rotate(90deg);
      margin: 33px 0 40px;
    }
  }
}

.blackMode {
  position: relative;
  -webkit-text-stroke: 1.5px #222222;
  color: white;
}
.whiteMode {
  position: relative;
  -webkit-text-stroke: 1.5px #ffffff;
  color: transparent;
}
.show-hide {
  @media (max-width: 853px) {
    display: none;
  }
}
</style>
