import _Vue from 'vue';

export interface VueFathom {
  trackGoal(id: string, val?: number): void
  trackPageview(): void;
}

export interface PluginOptions {
  siteID: string;
  disabled?: boolean;
  fathomURL?: string;
}

export class VueFathomPlugin {
  static install(
    Vue: typeof _Vue,
    options: PluginOptions,
  ): void;
}

export default VueFathomPlugin;
