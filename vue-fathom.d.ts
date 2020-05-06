declare module 'vue-fathom' {
  import _Vue from 'vue';
  import * as Fathom from 'fathom-client';

  export interface PluginOptions {
    siteID: string,
  }

  export class VueFathom {
    static install(
      Vue: typeof _Vue,
      options: PluginOptions,
    ): void;
  }

  module 'vue/types/vue' {
    interface Vue {
      $fathom: Fathom;
    }
  }
}
