import { browser } from '$app/environment';
import { writable, readable, get } from "svelte/store";
import type { Readable, Writable } from "svelte/store/index";

export interface ISiteStore{
  zoom: Writable<string>;
}

export const initSiteStore = (defaults: any): SiteStore => {
  const defaultZoom = defaults.zoom;
  const initialZoom = browser ? window.localStorage.getItem('zoom') ?? defaultZoom : defaultZoom;
  const zoom = writable<string>(initialZoom);
  zoom.subscribe((value) => {
    if (browser) {
      // we should swap this out for a cookie at some point to prevent the flash
      window.localStorage.setItem('zoom', value)
    }
  })
  return {zoom}
}