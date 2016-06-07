 'use strict';

 export default class CreateFormView {
   constructor(element, app) {
     this.app = app;
    //  this.element = element;
     this.toggleBtn = element.querySelector(`.puppy-plus`);
     this.form = element.querySelector(`.top-nav__form`);

     this.nameInput = this.form.querySelector(`#puppy_name`);
     this.ageInput = this.form.querySelector(`.puppy__input-field__age`);
     this.photoInput = this.form.querySelector(`.puppy__input-field__photo`);
     this.profileInput = this.form.querySelector(`.puppy__input-field__profile`);

     this.toggleBtn.addEventListener(`click`, () => {
       this.toggleForm();
     });

     this.form.addEventListener(`submit`, (ev) => {
       ev.preventDefault();

       const name = this.nameInput.value;
       const age = this.ageInput.value;
       const photoUrl = this.photoInput.value;
       const profile = this.profileInput.value;

       const fetchOptions = {
         method: `POST`,
         headers: {
           Accept: `application/json`,
           'Content-Type': `application/json`,
         },
         body: JSON.stringify({ name, age, photoUrl, profile }),
       };

       const url = `http://tiny-tn.herokuapp.com/collections/ts-puppies`;

       fetch(url, fetchOptions)
        .then((res) => { return res.json(); })
        .then((puppy) => {
          this.app.addPuppy(puppy);

          this.nameInput.value = ``;
          this.ageInput.value = ``;
          this.photoInput.value = ``;
          this.profileInput.value = ``;

          this.toggleForm();
        });
     });
   }

   toggleForm() {
     this.form.classList.toggle(`top-nav__form--active`);
   }
}
