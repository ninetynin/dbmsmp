<script lang="ts">
  export let data;
  let { club } = data;
  $: ({ club } = data);

  // let { search } = data;
  // $: ({ search } = data);

  // console.log(search[0].name);

  function navigateToClub(club_name: any) {
    window.location.href = `/clubs/${club_name}`;
  } // there is delay i have no clue why check if there is time later on to fix this
</script>

<style>
  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* adjust the number of columns as needed */
    grid-gap: 1rem; /* add some spacing between the articles */
  }
  
  .club-article {
    border-radius: 10px; 
  }

  .fsize{
    font-size: 80%;
  }

.club-article:hover {
  transform: scale(1.005);
}

  a {
    text-decoration: none; 
  }

  a:hover {
    text-decoration: none; 
  }
</style>

<main class="container-fluid">
  <ul>
    {#each club as cl}
      <article class="club-article" on:click={() => navigateToClub(cl.club_name)}>
        <a>{cl.club_name}</a>
        <br> <br>
        <p class="fsize">{cl.club_desc}</p>
      </article>
    {/each}
  </ul>
</main>