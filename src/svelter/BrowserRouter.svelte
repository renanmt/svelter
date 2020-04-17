<script>
    export let basename = '';

    import createHistory from 'history/createBrowserHistory';
    import Router from './Router.svelte';

    const _history = createHistory({
        basename
    });
</script>

<Router history={_history}>
    <slot />
</Router>
