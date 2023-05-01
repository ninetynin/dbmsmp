<script>
    import { page } from "$app/stores";
    const cid = $page.params.club;

    export let data;
    let { clubs,registrations,events,advisors } = data;
    $: ({ clubs,registrations,events,advisors } = data);
    // console.log(registrations.length);
    // console.log(clubs.length);

    const findRegLink = (/** @type {any} */ cid) => {
        for (let i = 0; i < registrations.length; i++) {
            if (registrations[i].club_id === cid) {
                return registrations[i].registration_link;
            }
        }
    };

</script>

<style>
    .h234{
        text-align: center;
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

    .footer{
        text-align: center;
    }
</style>

<ul class="h234">
    {#each clubs as cl}
        {#if cl.club_name === cid}
            
        <article class="club-article">
            <h1>{cid}</h1>
        <footer>{cl.club_desc}</footer>
        </article>
            <p class="desc"></p>
            <p>{cl.contact_info}</p>
            {#if cl.accepting_members}
                <a href="{findRegLink(cl.club_id)}" role="button">Join the Club</a>
            {:else}
                <p class="notaccepting">Not Recruiting Currently</p>
            {/if}
        {/if}
    {/each}
</ul>