<script>
    export let name;
    import BrowserRouter from './svelter/BrowserRouter.svelte';
    import Route from './svelter/Route.svelte';
    import Link from './svelter/Link.svelte';
    import Switch from './svelter/Switch.svelte';
</script>

<main>
    <h1>Hello {name}!</h1>
    <p>This is the test project of Svelter, the svelte router.</p>
    <BrowserRouter>
        <Link to="/test01" test="hello">Test 01</Link>
        /
        <Link to="/test02">Test 02</Link>
        <Switch>
            <Route path="/test01">
                <h2>Inside switch 01 A</h2>
            </Route>
            <Route path="/test01">
                <h2>Inside switch 01 B</h2>
            </Route>
        </Switch>
        <Route path="/test01">
            <h2>Outside switch 01</h2>
        </Route>
        <Route path="/test02">
            <h2>Outside switch 02</h2>
        </Route>

    </BrowserRouter>
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
