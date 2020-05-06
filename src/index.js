import * as Fathom from 'fathom-client';

export function install(Vue, options = { siteID: '', enabled: true }) {
  const fathom = {};
  if (options.enabled) {
    Fathom.load();
    Fathom.setSiteId(options.siteID);
  
    // see vue-fathom.d.ts
    fathom.trackPageview = Fathom.trackPageview;
    fathom.trackGoal = (id, value = 0) => Fathom.trackGoal(id, value);
  } else {
    fathom.trackPageview = () => {};
    fathom.trackGoal = () => {};
  }

  Vue.$fathom = fathom;
  Vue.prototype.$fathom = fathom;
};

export default { install };
