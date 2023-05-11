<script lang="ts">
    import { page } from "$app/stores";
	import { supabase } from "$lib/supabaseClient";

    const searchparam = $page.params.search;

    async function getSearch() {
        const { data: sfun, error } = await supabase.rpc('search_event_or_club', { search_text: searchparam }).select();
        return {
            search: sfun ?? [],
        };
    }

    let search: any[] = [];

    getSearch().then(result => {
        search = result.search;
    });

    function navigateToClub(club_name: any) {
        window.location.href = `/clubs/${club_name}`;
    } // there is delay i have no clue why check if there is time later on to fix this
</script>

<main>
    {#each search as cl}
        {#if cl.type === "club"}
            <article on:click={() => navigateToClub(cl.name)}>
                <a>{cl.name}</a>
                <br>
                Type: {cl.type}
            </article>
        {/if}
        {#if cl.type === "event"}
            <article>
                <a>{cl.name}</a>
                <br>
                Type: {cl.type}
            </article>
        {/if}
    {/each}
</main>