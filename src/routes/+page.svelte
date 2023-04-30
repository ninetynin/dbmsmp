<script>
  export let data;
  let { club } = data;
  $: ({ club } = data);
</script>

<style>
  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* adjust the number of columns as needed */
    grid-gap: 1rem; /* add some spacing between the articles */
  }
  
  .club-article {
    border-radius: 10px; /* add rounded edges */


    /* add any additional styles for the club articles here */
  }

  .fsize{
    font-size: 80%;
  }

  .heading {
    position: sticky;
    top: 0;
    background-color: rgba(17, 25, 30, 0.5); 
    text-align: center;
    padding: 1rem 0;
    font-size: 2rem;
    font-weight: bold;
    backdrop-filter: blur(5px);
  }

  a {
    text-decoration: none; /* remove underlining for all links */
  }

  a:hover {
    text-decoration: none; /* remove underlining when hovering */
  }
</style>

<main class="container-fluid">
  <h1 class="heading">CLUB</h1>
  <ul>
    {#each club as cl}
      <article class="club-article">
        <a href="/clubs/{cl.club_name}">{cl.club_name}</a>
        <br> <br>
        <p class="fsize">{cl.club_desc}</p>
      </article>
    {/each}
  </ul>
</main>
