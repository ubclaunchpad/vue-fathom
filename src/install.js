import * as Fathom from 'fathom-client';

export function install(Vue, options = { siteID: '' }) {
  Fathom.load();
  Fathom.setSiteId(options.siteID);

  Vue.$fathom = Vue.prototype.$fathom = Fathom;
}
