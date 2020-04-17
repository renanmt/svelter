<script>
    export let to;
    export let anchorProps = {};

    import { getContext } from 'svelte';
    import { key } from './router-context';
    import { history } from './store';

    const _context = getContext(key);

    function handleClick(event) {
        $history.push(to);
    }
</script>

<a href="javascript:void(0)" on:click={handleClick} {...anchorProps}>
    <slot />
</a>
