<template>
  <header class="container-header">
    <nav
      class="nav-menu"
      :style="{
        color: isWhiteMode
          ? 'rgba(255, 255, 255, 0.7)'
          : 'rgba(34, 34, 34, 0.7)',
      }"
    >
      <a class="nav-menu__icon icon-map"></a>
      <div class="nav-menu__links">
        <div
          class="nav-menu__link"
          :class="{ selected_black: !isWhiteMode, selected_white: isWhiteMode }"
        >
          <a>Главная</a>
        </div>
        <div class="nav-menu__link"><a>О компании</a></div>
        <div class="nav-menu__link"><a>Услуги</a></div>
      </div>
      <div class="nav-menu__icon_no-border icon-logo"></div>
      <div class="nav-menu__links">
        <div class="nav-menu__link"><a>Цены</a></div>
        <div class="nav-menu__link"><a>Портфолио</a></div>
        <div class="nav-menu__link"><a>Контакты</a></div>
      </div>
      <a class="nav-menu__icon icon-phone"></a>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  props: {
    isWhiteMode: {
      required: true,
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
.container-header {
  display: flex;
  width: 100%;
  position: absolute;
  z-index: 200;
  opacity: 1;
  max-width: 1440px;
}
.nav-menu {
  width: 100%;
  height: 86px;
  display: flex;
  align-items: center;
  border: 1px solid #ebebeb;

  @media (max-width: 700px) {
    display: grid;
    grid-template-columns: 33.33% 33.33% 33.33%;
    height: 100%;
    justify-items: center;
  }

  // .nav-menu__links
  &__links {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-basis: 100%;
    font-size: 14px;
    line-height: 30px;
    height: 100%;
    width: 100%;
    @media (max-width: 700px) {
      grid-column: 1/-1;
      grid-row: 2;
    }
    &:last-of-type {
      @media (max-width: 700px) {
        grid-column: 1/-1;
        grid-row: 3;
      }
    }
  }

  // .nav-menu__icon
  &__icon {
    cursor: pointer;
    padding: 34px;
    font-size: 18px;
    border-right: 1px solid rgba(235, 235, 235, 1);
    @media (max-width: 1156px) {
      padding: 34px 16px;
    }
    @media (max-width: 700px) {
      grid-column: 1;
      grid-row: 1;
      justify-self: start;
    }
    &:last-of-type {
      border-right: none;
      border-left: 1px solid rgba(235, 235, 235, 1);
      @media (max-width: 700px) {
        grid-column: -2/-1;
        grid-row: 1;
        justify-self: end;
      }
    }
    // .nav-menu__icon_no-border
    &_no-border {
      font-size: 30px;
      @media (max-width: 700px) {
        grid-column: 2/3;
        grid-row: 1;
      }
    }
  }

  // .nav-menu__link
  &__link {
    margin: 0 50px;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
      color: black;
    }
    @media (max-width: 1156px) {
      margin: 0 15px;
    }
    @media (max-width: 700px) {
      flex: 1 0 85px;
      justify-content: center;
    }
  }
}

.selected_black {
  box-shadow: 0 4px 0px -2px #222222;
  color: #222222;
}
.selected_white {
  box-shadow: 0 4px 0px -2px #ffffff;
  color: #ffffff;
}
</style>
