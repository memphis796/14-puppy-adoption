'use strict';
import CreateFormView from 'create-form-view';
import PuppyView from 'puppy-view';

export default class ApplicationView {
  constructor(element) {
    this.nav = element.querySelector(`.top-nav`);
    this.info = element.querySelector(`.input__info`);
    this.puppyList = element.querySelector(`.puppy-list`);

    this.form = new CreateFormView(this.nav, this);

    this.create =
    fetch(`http://tiny-tn.herokuapp.com/collections/ts-puppies`)
      .then((res) => res.json())
      .then((json) => {
        this.data = json;
        console.log(this.data);
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

  remove(puppy, p_id) {
    console.log("original puppy=")
    console.log(puppy);
    console.log("this.app.remove(" + p_id + ")");
    this.puppy = this.data.filter((item) => {
      console.log("item=");
      console.log(item);
      console.log("puppy=");
      console.log(puppy);
      return item._id !== puppy._id;
    });
    this.render();
  }
}
