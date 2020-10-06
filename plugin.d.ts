import { App } from 'vue';

// Types copied here to avoid import, which seems to cause problems.

// see https://sourcegraph.com/github.com/unstacked/fathom-client/-/blob/src/index.ts#L2:3-2:16
export type PageViewOptions = {
  url?: string;
  referrer?: string;
};

export interface VueFathom {
  trackGoal(id: string, val?: number): void
  trackPageview(opts?: PageViewOptions): void;
}

export interface PluginOptions {
  disabled?: boolean;
  siteID: string;
  // see https://sourcegraph.com/github.com/unstacked/fathom-client/-/blob/src/index.ts#L11:13-11:24
  settings: {
    url?: string;
    auto?: boolean;
    honorDNT?: boolean;
    canonical?: boolean;
    includedDomains?: string[];
    excludedDomains?: string[];
    spa?: 'auto' | 'history' | 'hash';
  }
}

export class VueFathomPlugin {
  static install(
    app: App,
    options: PluginOptions,
  ): void;
}

export default VueFathomPlugin;
