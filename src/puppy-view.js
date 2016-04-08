'use strict';

export default class PuppyView {
  constructor(info, app) {
    this.card = document.createElement(`form`);
    this.card.classList.add(`puppy-card`);
    this.card.innerHTML = `
      <div class="puppy-image">
        <img src="http://tidewaterretrievers.com/images/puppy-wing2.jpg" alt=""/>
      </div>

      <div class="input__info">
        <label class="label-name">Name</label>
        <input class="input-field" type="text" name="name" value="">

        <label class="label-name">Age</label>
        <input class="input-field" type="text" name="name" value="">

        <label class="label-name">Photo URL</label>
        <input class="input-field" type="text" name="name" value="">

        <label class="label-name">Profile</label>
        <input class="input-field" type="text" name="name" value="">

        <div class="top-label__buttons">
          <button class="form-button" type="button" name="button">Delete</button>
          <button class="form-button" type="button" name="button">Update</button>
        </div>
      </div>`;
  }
}
