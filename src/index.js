'use strict';

import ApplicationView from 'application-view';

export default function () {
  // this const app = new app is saying that hey, only change
  // things in the body.
  const applicationView = new ApplicationView(document.querySelector(`body`));
}
