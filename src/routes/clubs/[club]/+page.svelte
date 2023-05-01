<script>
    import { page } from "$app/stores";
    const cid = $page.params.club;

    export let data;
    let { club2 } = data;
    $: ({ club2 } = data);
    let { reg2 } = data;
    $: ({ reg2 } = data);
</script>


<style>
    .h1{
        text-align: center;
        padding-right: 2%;
    }

    .club-article {
        padding: 5%;
        border-radius: 10px; /* add rounded edges */
  }
    .notaccepting
    {
        text-align: center;
        color: crimson;
        font-weight: normal;
    }

    footer{
        text-align: center;
    }
</style>


<ul class="h1">
    {#each club2 as cl}
        {#if cl.club_name === cid}
            
        <article class="club-article">
            <h1>{cid}</h1>
            <footer>{cl.club_desc}</footer>
        </article>
        
            <p class="desc"></p>
            <p>{cl.contact_info}</p>
            {#if cl.accepting_members}
                <!-- <h5>Accepting Members</h5> -->
                
                        <a href="/clubs/{cl.club_name}/join" role="button">Join the Club</a>
                
            {:else}
                <p class="notaccepting">Not Recruiting Currently</p>
            {/if}
        {/if}
    {/each}
</ul>

