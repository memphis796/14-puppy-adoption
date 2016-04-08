'use strict';

import App from 'application-view';

export default function () {
  // this const app = new app is saying that hey, only change
  // things in the body.
  const app = new App(document.querySelector(`body`));
}
