'use strict';
window.puppy_id_counter = 0;
export default class PuppyView {
  constructor(info, app) {
    this.info = info;
    this.app = app;
    this.card = document.createElement(`form`);
    this.card.classList.add(`puppy-card`);
    this._id = window.puppy_id_counter++;
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

      var that = this; // constructor's this

      var update_button = this.card.querySelector(".form-button-update");
      var update_delete = this.card.querySelector(".form-button-delete");

      if (update_delete!= undefined) { /* Only if "this.element" is defined */
          update_delete.addEventListener(`click`, () => {
          this.deletePuppy(that._id);
        });
      } else { console.log("Caution: this.element does not exist!"); }

  if (update_button != undefined) {
      update_button.addEventListener(`click`, () => {
        this.updatePuppy(that._id);
      });
    } else { console.log("Caution: this.element does not exist!"); }

    this.render();
    // this.deletePuppy();
    // this.update();
  }




  updatePuppy(puppyId) {

console.log("updatePuppy(" + puppyId + ");");

    const pups = {
      name: this.card.querySelector(`.input-field__name`).value,
      age: this.card.querySelector(`.input-field__age`).value,
      photoUrl: this.card.querySelector(`.input-field__photo-url`).value,
      profile: this.card.querySelector(`.input-field__profile`).value,
    };

if (puppyId == undefined) {
  console.log("Error: this.puppy._id does not exist.");
} else
    console.log("Note: fetching puppy id = " + puppyId);
    fetch(`http://tiny-tn.herokuapp.com/collections/ts-puppies-${puppyId}`, {
      method: `PUT`,
      headers: {
        Accept: `application/json`,
        'Content-type': `application/json`,
      },
      body: JSON.stringify(pups),
    }).then((res) => res.json())
    .then((data) => {
      Object.assign(data, pups);

      this.render();
    });
  }


  deletePuppy() {
    const id = this.card.querySelector(`[name=_id]`);
    id.value = this.info._id;

fetch(`http://tiny-tn.herokuapp.com/collections/ts-puppies/${id.value}`, {
//    fetch(`http://tiny-tn.herokuapp.com/collections/ts-puppies/${this.puppy._id}`, {
      method: `DELETE`,
    }).then((res) => res.json())
        .then(() => {
          this.app.remove(this.puppy);
        });
  }


  render() {
    const pic = this.card.querySelector(`.puppy-image__pic`);
    pic.setAttribute(`src`, this.info.photoUrl);

    //const ____id = this.card.querySelector(`[name=name]`);
    //____id.value = this.info._id;

    const name = this.card.querySelector(`[name=name]`);
    name.value = this.info.name;

    const age = this.card.querySelector(`[name=age]`);
    age.value = this.info.age;

    const photo = this.card.querySelector(`[name=photo]`);
    photo.value = this.info.photoUrl;

    const profile = this.card.querySelector(`[name=profile]`);
    profile.value = this.info.profile;

    const id = this.card.querySelector(`[name=_id]`);
    id.value = this.info._id;
    //console.log(this.info._id);




  }
}
