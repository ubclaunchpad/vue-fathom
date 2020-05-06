declare module '@ubclaunchpad/vue-fathom' {
  import Vue from 'vue';

  export interface VueFathom {
    trackGoal(id: string, val: number): void
    trackPageview(): void;
  }

  export interface PluginOptions {
    siteID: string,
  }

  export class VueFathomPlugin {
    static install(
      _Vue: typeof Vue,
      options: PluginOptions,
    ): void;
  }

  export default VueFathomPlugin;

  module 'vue/types/vue' {
    interface Vue {
      $fathom: VueFathom;
    }
  }
}
