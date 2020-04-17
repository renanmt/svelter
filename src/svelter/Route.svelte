<script>
    export let path;

    import invariant from 'tiny-invariant';
    import { getContext } from 'svelte';
    import { getRouterContext, getSwitchContext } from './router-context';

    import { location, switchRoutes } from './store';

    const outOfContextMessage = 'Could not retrieve context. Is this component outside of a Router?';
    const _context = getRouterContext();

    let _shouldRender = false;

    invariant(_context, outOfContextMessage);

    const routeKey = {};
    const _switchContext = getSwitchContext();

    const logRoute = (num) => {
        if (typeof(__SVELTER_DEV__) !== 'undefined' && __SVELTER_DEV__) {
            console.log(
                num,
                `path: ${path} - _shouldRender: ${_shouldRender} - $switchRoutes[path]: ${$switchRoutes[path]}`
            );
        }
    };

    $: {
        if (_switchContext) {
            if ($switchRoutes[path] === undefined && $location.pathname === path) {
                _shouldRender = true;
                $switchRoutes[path] = routeKey;
                logRoute(1);
            } else if ($switchRoutes[path] && $location.pathname !== path) {
                _shouldRender = false;
                $switchRoutes[path] = undefined;
                logRoute(2);
            } else if ($switchRoutes[path] === routeKey) {
                _shouldRender = true;
                logRoute(3);
            }
        } else if ($location.pathname === path) {
            _shouldRender = true;
            logRoute(4);
        } else {
            _shouldRender = false;
            logRoute(5);
        }
    }
</script>

{#if _shouldRender}
    <slot />
{/if}
