import { getContext } from 'svelte';

export const key = {};
export const defaultContext = { svelter: true };

export const getRouterContext = () => getContext(key);

export const switchKey = { switch: true };
export const getSwitchContext = () => getContext(switchKey)
