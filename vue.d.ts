import Vue from 'vue';
import { VueFathom } from './plugin';

declare module 'vue/types/vue' {
  interface Vue {
    $fathom: VueFathom;
  }
}
