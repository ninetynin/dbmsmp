<script lang="ts">
  export let data;
  let { club } = data;
  $: ({ club } = data);
</script>


<style>

  .container-fluid
  {
    padding-top: 10%;
    padding-right: 3%;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* adjust the number of columns as needed */
    grid-gap: 1rem; /* add some spacing between the articles */
  }
  
  .club-article {
    border-radius: 10px; /* add rounded edges */
  }

  .fsize{
    font-size: 80%;
  }

  .heading {
  position:fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(17, 25, 30, 0.83); 
  text-align: center;
  padding: 1rem 0;
  font-size: 2rem;
  font-weight: bolder;
  backdrop-filter: blur(3px);
  font: italic;
  font-family:monospace;
}

  a {
    text-decoration: none; /* remove underlining for all links */
  }

  a:hover {
    text-decoration: none; /* remove underlining when hovering */
  }
</style>

<p class="heading">CLUB</p>
<main class="container-fluid">
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
