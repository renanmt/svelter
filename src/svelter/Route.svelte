<script>
    export let path;

    import invariant from 'tiny-invariant';
    import { getContext } from 'svelte';
    import { getRouterContext, getSwitchContext } from './router-context';
    import { location, switchRoutes } from './store';
    import matchPath from './route';

    const outOfContextMessage = 'Could not retrieve context. Is this component outside of a Router?';
    const _context = getRouterContext();

    let _shouldRender = false;

    invariant(_context, outOfContextMessage);

    const routeKey = {};
    const _switchContext = getSwitchContext();

    const logRoute = (num) => {
        if (typeof __SVELTER_DEV__ !== 'undefined' && __SVELTER_DEV__) {
            console.log(
                num,
                `path: ${path} - _shouldRender: ${_shouldRender} - $switchRoutes[path]: ${$switchRoutes[path]}`
            );
        }
    };

    function processRoute(matched) {
        if (_switchContext) {
            if ($switchRoutes[path] === undefined && matched) {
                _shouldRender = true;
                $switchRoutes[path] = routeKey;
                logRoute(1);
            } else if ($switchRoutes[path] && !matched) {
                _shouldRender = false;
                $switchRoutes[path] = undefined;
                logRoute(2);
            } else if ($switchRoutes[path] === routeKey) {
                _shouldRender = true;
                logRoute(3);
            }
        } else if (matched) {
            _shouldRender = true;
            logRoute(4);
        } else {
            _shouldRender = false;
            logRoute(5);
        }
    }

    $: {
        const matched = matchPath($location.pathname, path);
        processRoute(matched);
    }
</script>

{#if _shouldRender}
    <slot />
{/if}
