import { writable } from 'svelte/store';

export const history = writable({});
export const location = writable({});
export const switchRoutes = writable({});
