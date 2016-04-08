'use strict';

export default class ApplicationView {
  constructor(element) {
    this.form = element.querySelector(`.top-nav__form`);
    this.info = element.querySelector(`.input__info`);


    fetch(`http://tiny-tn.herokuapp.com/collections/ts-puppies`)
    .then((res) => res.json())
    .then((data) => {

    });
  }
}
