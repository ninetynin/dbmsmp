<script>
    import { page } from "$app/stores";
    const cid = $page.params.club;

    export let data;
    let { club2 } = data;
    $: ({ club2 } = data);
    let { reg2 } = data;
    $: ({ reg2 } = data);
</script>

<h1>Club: {cid}</h1>

<ul>
    {#each club2 as cl}
        {#if cl.club_name === cid}
            <h4>{cl.club_desc}</h4>
            <h5>{cl.contact_info}</h5>
            {#if cl.accepting_members}
                <!-- <h5>Accepting Members</h5> -->
                <!-- <a href="/clubs/{cl.club_name}/join">Join</a> -->
            {:else}
                <h5>Not Accepting Members</h5>
            {/if}
        {/if}
    {/each}
</ul>