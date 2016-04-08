'use strict';
import CreateFormView from 'create-form-view';

export default class ApplicationView {
  constructor(element) {
    this.nav = element.querySelector(`.top-nav`);
    this.list = element.querySelector(`.puppy-list`);

    const create = new CreateFormView(this.nav);

    fetch(`http://tiny-tn.herokuapp.com/collections/ts-puppies`)
    .then((res) => res.json())
    .then((data) => {
      this.data = data;

      this.render();
    });
  }

  render() {
    this.list.innerHTML = ``

  }
}
