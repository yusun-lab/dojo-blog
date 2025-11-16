/* eslint-disable */
declare module "vue-router" {
  import type { DefineComponent } from "vue";

  export interface RouteRecordRaw {
    path: string;
    name?: string;
    component?: any;
    components?: any;
    redirect?: string | Location;
    alias?: string | string[];
    children?: RouteRecordRaw[];
    meta?: any;
    beforeEnter?: (to: any, from: any, next: any) => void;
    props?: boolean | object | ((to: any) => object);
  }

  export function createRouter(options: {
    history: any;
    routes: RouteRecordRaw[];
  }): any;

  export function createWebHistory(base?: string): any;
  export function createMemoryHistory(base?: string): any;
  export function createHashHistory(base?: string): any;

  export interface Router {
    push: (to: string | any) => Promise<any>;
    replace: (to: string | any) => Promise<any>;
    go: (delta: number) => void;
    back: () => void;
    forward: () => void;
    currentRoute: any;
    options: any;
  }

  export const useRouter: () => Router;
  export const useRoute: () => any;
}
