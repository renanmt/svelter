<script>
    import { key, defaultContext } from './router-context';

    export let history;
    export let context = defaultContext;

    import { setContext } from 'svelte';
    import { history as historyStore, location as locationStore } from './store';

    $historyStore = history;

    history.listen((location, action) => {
        locationStore.set(location);
    });

    setContext(key, context);
</script>

<slot />
