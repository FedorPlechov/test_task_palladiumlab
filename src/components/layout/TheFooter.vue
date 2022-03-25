<template>
  <footer class="footer">
    <h3 class="footer__header secondary-title">
      Связаться <span class="secondary-title__black-mode">с нами</span>
    </h3>
    <div class="footer__information">
      <div class="footer__column">
        <h5 class="footer__title">Офис</h5>
        <p class="footer__description">Москва, ул. Уличная, д. 1, оф. 1</p>
        <h5 class="footer__title">E-mail</h5>
        <p class="footer__description">company@company.ru</p>
        <h5 class="footer__title">Социальные сети</h5>
        <div class="footer__icons">
          <div class="footer__icon"></div>
          <div class="footer__icon"></div>
          <div class="footer__icon"></div>
        </div>
      </div>
      <div class="footer__column">
        <h5 class="footer__title">Режим работы</h5>
        <p class="footer__description">
          Пн-Вт: 10<sup>00</sup> — 19<sup>00</sup>; Сб-Вс: 10<sup>00</sup> —
          15<sup>00</sup>
        </p>
        <h5 class="footer__title">Телефон</h5>
        <p class="footer__description">8 (800) 900-00-00</p>
      </div>
      <div class="footer__column">
        <h5 class="footer__title">Остались вопросы?</h5>
        <form class="form">
          <label class="form__label" for="name">Ваше имя</label>
          <input
            class="form__input"
            id="name"
            type="text"
            placeholder="Иван Иванов"
          />
          <label class="form__label" for="phoneEmail">Телефон / E-mail</label>
          <input
            class="form__input"
            id="phoneEmail"
            type="text"
            placeholder="example@example.com"
          />
          <label class="form__label" for="message">Ваше сообщение</label>
          <input
            class="form__input"
            id="message"
            type="text"
            placeholder="Текст обращения"
          />
          <p class="form__rule">
            Нажимая на кнопку «Получить консультацию», вы соглашаетесь на
            <span class="form__dash">обработку персональных данных</span>
          </p>
          <BaseButton :horizontal-align="'left'" class="form__submit"
            >Получить консультацию</BaseButton
          >
        </form>
      </div>
    </div>
    <div class="footer__capture">
      <div class="footer__capture-inform">
        <span class="footer__capture-inform_color-font">© 2022 Сompany.</span>
        Соглашение об обработке персональных данных и политика
        конфиденциальности
      </div>
      <div class="footer__capture-inform">
        Сделано в
        <span class="footer__capture-inform_color-font">Palladiumlab</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>
<style lang="scss">
.footer {
  margin: 0 auto;
  max-width: 1110px;
  padding: 0 5px;
  // .footer__title
  &__header {
    margin: 68px 0 48px 0;
  }
  &__title {
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 8px;
  }

  // .footer__information
  &__information {
    display: flex;
    margin-bottom: 135px;
    @media (max-width: 800px) {
      flex-direction: column;
      justify-content: center;
    }
  }

  // .footer__column
  &__column {
    display: flex;
    flex-direction: column;
    flex-basis: 33.33%;
    align-items: flex-start;
    justify-content: flex-start;
  }

  // .footer__description
  &__description {
    font-family: "Montserrat", sans-serif;
    font-size: 13px;
    font-weight: 400;
    line-height: 24px;
    margin-bottom: 48px;
    sup {
      vertical-align: super;
      font-size: smaller;
    }
  }

  // .footer__icons
  &__icons {
    display: flex;
    gap: 10px;
  }

  // .footer__icon
  &__icon {
    width: 30px;
    height: 30px;
    background: #222222;
  }

  // .footer__capture
  &__capture {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1.5px solid #222222;
    height: 72.5px;
  }

  // .footer__defend-inform
  &__capture-inform {
    font-family: "Montserrat", sans-serif;
    font-size: 13px;
    font-weight: 400;
    line-height: 24px;
    &_color-font {
      //styleName: H4;
      font-family: "Gilroy", sans-serif;
      font-size: 14px;
      font-weight: 800;
      line-height: 20px;
    }
  }
}

.form {
  display: flex;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  // .form__label
  &__label {
    font-size: 9px;
    font-weight: 500;
    line-height: 12px;
  }

  // .form__input
  &__input {
    //styleName: Body;
    font-size: 13px;
    font-weight: 400;
    line-height: 24px;
    border: none;
    border-bottom: 1px solid #ebebeb;
    margin-bottom: 20px;
    outline: none;
    &::-webkit-input-placeholder {
      font-size: 13px;
      font-weight: 400;
      line-height: 24px;
      color: rgba(144, 144, 144, 1);
    }
  }
  &__rule {
    font-size: 9px;
    font-weight: 500;
    line-height: 12px;
    color: #909090;
    margin-bottom: 30.5px;
  }
  &__dash {
    color: #222222;
    border-bottom: 1px dashed #222222;
  }
  &__submit {
    position: relative;
    transform: translateX(-20px);
  }
}
</style>
