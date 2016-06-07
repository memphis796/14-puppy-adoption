'use strict';

export default class PuppyView {
  constructor(info, app) {
    this.info = info;
    this.app = app;
    this.card = document.createElement(`form`);

    this.card.classList.add(`puppy-card`);
    this.card.innerHTML = `
      <div class="puppy-image">
        <img class="puppy-image__pic" src="" alt=""/>
      </div>

      <div class="input__info">

      <label class="label-name">ID</label>
      <input class="input-field input-field_id" type="text" name="_id" value="">

        <label class="label-name">Name</label>
        <input class="input-field input-field__name" type="text" name="name" value="">

        <label class="label-name">Age</label>
        <input class="input-field input-field__age" type="text" name="age" value="">

        <label class="label-name">Photo URL</label>
        <input class="input-field input-field__photo-url" type="text" name="photo" value="">

        <label class="label-name">Profile</label>
        <input class="input-field input-field__profile" type="text" name="profile" value="">

        <div class="top-label__buttons">
          <button class="form-button-delete" type="button" name="button">Delete</button>
          <button class="form-button-update" type="button" name="button">Update</button>
        </div>
      </div>`;

    this.render();
    this.deletePuppy(this.card.id);
    this.updatePuppy(this.card.id);
  }

  updatePuppy() {
    this.card.querySelector(`.form-button-update`).addEventListener(`click`, (ev) => {
      ev.preventDefault();

      const pups = {
        name: this.card.querySelector(`.input-field__name`).value,
        age: this.card.querySelector(`.input-field__age`).value,
        photoUrl: this.card.querySelector(`.input-field__photo-url`).value,
        profile: this.card.querySelector(`.input-field__profile`).value,
      };

      fetch(`http://tiny-tn.herokuapp.com/collections/ts-puppies/${this.info._id}`, {
        method: `PUT`,
        headers: {
          Accept: `application/json`,
          'Content-Type': `application/json`,
        },
        body: JSON.stringify(pups),

      }).then((res) => res.json())
      .then((data) => {
        this.info = data;

        this.render();
      });
    });
  }

  deletePuppy() {
    this.card.querySelector(`.form-button-delete`).addEventListener(`click`, (ev) => {
      ev.preventDefault();

      fetch(`http://tiny-tn.herokuapp.com/collections/ts-puppies/${this.info._id}`, {
        method: `DELETE`,
      }).then((res) => res.json())
        .then(() => {
          this.card.remove(this.info);
        });
    });
  }


  render() {
    const pic = this.card.querySelector(`.puppy-image__pic`);
    pic.setAttribute(`src`, this.info.photoUrl);

    const iid = this.card.querySelector(`[name=_id]`);
    iid.value = this.info._id;

    const name = this.card.querySelector(`[name=name]`);
    name.value = this.info.name;

    const age = this.card.querySelector(`[name=age]`);
    age.value = this.info.age;

    const photo = this.card.querySelector(`[name=photo]`);
    photo.value = this.info.photoUrl;

    const profile = this.card.querySelector(`[name=profile]`);
    profile.value = this.info.profile;
  }
}
