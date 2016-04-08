'use strict';
import CreateFormView from 'create-form-view';
import PuppyView from 'puppy-view';

export default class ApplicationView {
  constructor(element) {
    this.nav = element.querySelector(`.top-nav`);
    this.list = element.querySelector(`.puppy-list`);

    const create = new CreateFormView(this.nav);

    fetch(`http://tiny-tn.herokuapp.com/collections/ryan-puppy`)
    .then((res) => res.json())
    .then((data) => {
      this.data = data;

      this.render();
    });
  }

  render() {
    this.list.innerHTML = ``;
    this.data.forEach((puppy) => {
      const puppyCard = new PuppyView(puppy);

      this.list.appendChild(puppyCard.card);
    });

  }
}
