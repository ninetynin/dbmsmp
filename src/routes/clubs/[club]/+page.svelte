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
        padding-right: 2%;
        padding-top: 10%;
        background-color: #ffffff;
    }

    .heading {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        padding-top: 10%;
        background-color: #090b66;
        text-align: center;
        padding: 1rem 0;
        font-size: 2rem;
        font-weight: bolder;
        backdrop-filter: blur(3px);
        font: italic;
        font-family:monospace;
        color: #ffffff;
} 

    .club-article {
        padding: 5%;
        border-radius: 15px; /* add rounded edges */
        background-color: #a3dffd;
        color: #fff;
  }
    .notaccepting
    {
        text-align: center;
        color: crimson;
        font-weight: normal;
    }

    footer{
        text-align: center;
        border-radius: 15px;
        background-color: #4436fe;
    }

    h1{
        color: #4436fe;
    }

    a{
        text-decoration: none; 
        color: #fff;
        font-weight: bold;;
    }

    a:hover {
    text-decoration: none; /* remove underlining when hovering */
  }
</style>

<p class="heading"><a href="/">DBMSMP</a></p>

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