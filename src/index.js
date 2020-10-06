import * as Fathom from 'fathom-client';

/**
 * Fathom plugin for Vue.
 * 
 * @param {import('vue').App} app Vue application
 * @param {import('../plugin').PluginOptions} options configuration for plugin
 */
export function install(app, options = { siteID: '', disabled: false, settings: {} }) {
  const fathom = {};
  if (!options.disabled) {
    Fathom.load(options.siteID, options.settings);
  
    // see vue-fathom.d.ts
    fathom.trackPageview = Fathom.trackPageview;
    fathom.trackGoal = (id, value = 0) => Fathom.trackGoal(id, value);
  } else {
    fathom.trackPageview = () => {};
    fathom.trackGoal = () => {};
  }

  app.provide('$fathom', fathom);
};

export default { install };
