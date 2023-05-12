<style>
    .container {
        display: flex;
    }

    .column {
        flex: 1;
        /* padding: 10px; */
    }

    /* .column:not(:last-child) {
        border-right: 1px solid #ccc;
    } */

    .h4class {
        margin-top: 10%;
        margin-left: 25%;
        margin-bottom: 5px;
        /* text-align: center; */
    }

    .acl {
        /* border: 1px solid #ccc;
        padding: 10px; */
        border-radius: 10px; 
    }

    .acl:hover {
        transform: scale(1.005);
    }

    .acl {
        height: fit-content;
        width: 70%;
        text-align: center;
    }
</style>

<script lang="ts">
    import { supabase } from "$lib/supabaseClient";

    export let data;
    let { category } = data;
    $: ({ category } = data);

    let { club } = data;
    $: ({ club } = data);

    const matchClubCat = (club2: any) => {
        for (let i = 0; i < club.length; i++) {
            if (club2 === club[i].club_id) {
                return club[i];
            }
        }
    }

    function navigateToClub(club_name: any) {
        window.location.href = `/clubs/${club_name}`;
    }

</script>

<div class="container">
    <div class="column">
        <h4 class="h4class">Technical</h4>
        {#each category as cat}
            {#if cat.category_name === "Technical"}
                <article class="acl" on:click={() => navigateToClub(matchClubCat(cat.club_id).club_name)}>
                    <p>{matchClubCat(cat.club_id).club_name}</p>
                </article>
            {/if}
        {/each}
    </div>
    <div class="column">
        <h4 class="h4class">Cultural</h4>
        {#each category as cat}
            {#if cat.category_name === "Cultural"}
                <article class="acl" on:click={() => navigateToClub(matchClubCat(cat.club_id).club_name)}>
                    <p>{matchClubCat(cat.club_id).club_name}</p>
                </article>
            {/if}
        {/each}
    </div>
</div>
