'use strict';

import CreateFormView from 'create-form-view';
import PuppyView from 'puppy-view';

export default class ApplicationView {
  constructor(element) {
    this.element = element;
    this.nav = element.querySelector(`.top-nav`);
    this.info = element.querySelector(`.input__info`);
    this.puppyList = element.querySelector(`.puppy-list`);

    this.form = new CreateFormView(this.nav, this);

    fetch(`http://tiny-tn.herokuapp.com/collections/ts-puppies`)
      .then((res) => res.json())
      .then((info) => {
        this.data = info;

        this.render();
      });
  }

  addPuppy(puppy) {
    this.data = [...this.data, puppy];

    this.render();
  }

  render() {
    this.puppyList.innerHTML = ``;

    this.data.forEach((item) => {
      const view = new PuppyView(item, this);

      this.puppyList.appendChild(view.card);
    });
  }

  remove(puppy) {
    this.data = this.data.filter((item) => {
      return item._id !== puppy;
    });
    this.render();
  }
}
