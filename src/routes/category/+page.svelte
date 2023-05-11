<script lang="ts">
	import { supabase } from "$lib/supabaseClient";

    export let data;
    let { category } = data;
    $: ({ category } = data);

    console.log(category);
</script>

<main>
    <h1>{category}</h1>
</main>;