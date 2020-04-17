<script>
    import { getRouterContext, switchKey } from './router-context';
    import { setContext } from 'svelte';

    setContext(switchKey, { switch: true })
</script>

<slot test="hello"></slot>