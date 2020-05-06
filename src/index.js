import * as Fathom from 'fathom-client';

export function install(Vue, options = { siteID: '' }) {
  Fathom.load();
  Fathom.setSiteId(options.siteID);

  // see vue-fathom.d.ts
  const fathom = {
    trackPageview: Fathom.trackPageview,
    trackGoal: Fathom.trackGoal,
  };
  Vue.$fathom = fathom;
  Vue.prototype.$fathom = fathom;
};

export default { install };
