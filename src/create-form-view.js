export default class CreateFormView {
  constructor(element) {
    this.toggleBtn = element.querySelector(`.puppy-plus`);
    this.form = element.querySelector(`.top-nav__form`);

    this.toggleBtn.addEventListener(`click`, () => {
      this.form.classList.toggle(`top-nav__form--active`);
    });
  }
}
