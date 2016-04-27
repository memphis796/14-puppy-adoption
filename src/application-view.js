'use strict';
import CreateFormView from 'create-form-view';
import PuppyView from 'puppy-view';

export default class ApplicationView {
  constructor(element) {
    this.nav = element.querySelector(`.top-nav`);
    this.info = element.querySelector(`.input__info`);
    this.puppyList = element.querySelector(`.puppy-list`);

    this.create =
    fetch(`http://tiny-tn.herokuapp.com/collections/ryan-puppy`)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((item) => {
        const view = new PuppyView(item, this);

        this.puppyList.appendChild(view.card);
      });
    });
  }
}
