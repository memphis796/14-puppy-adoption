'use strict';

export default class PuppyView {
  constructor(info, app) {
    this.info = info;
    this.card = document.createElement(`form`);
    this.card.classList.add(`puppy-card`);
    this.card.innerHTML = `
      <div class="puppy-image">
        <img class="puppy-image__pic" src="" alt=""/>
      </div>

      <div class="input__info">
        <label class="label-name">Name</label>
        <input class="input-field" type="text" name="name" value="">

        <label class="label-name">Age</label>
        <input class="input-field" type="text" name="age" value="">

        <label class="label-name">Photo URL</label>
        <input class="input-field" type="text" name="photo" value="">

        <label class="label-name">Profile</label>
        <input class="input-field" type="text" name="profile" value="">

        <div class="top-label__buttons">
          <button class="form-button" type="button" name="button">Delete</button>
          <button class="form-button" type="button" name="button">Update</button>
        </div>
      </div>`;

    this.render();
  }

  render() {
    const pic = this.card.querySelector(`.puppy-image__pic`);
    pic.setAttribute(`src`, this.info.photoUrl);

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
