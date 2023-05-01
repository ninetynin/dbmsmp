<script lang="ts">
  export let data;
  let { club } = data;
  $: ({ club } = data);
</script>


<style>

  .container-fluid
  {
    padding-top: 9%;
    padding-right: 5%;
    background-color: #ffffff;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* adjust the number of columns as needed */
    grid-gap: 1rem; /* add some spacing between the articles */
  }
  
  .club-article {
    border-radius: 15px; /* add rounded edges */
    background-color: #a3dffd;
    transition: transform 0.2s ease-out; /* add transition effect */
  }

  .club-article:hover {
  transform: scale(1.05); /* enlarge on hover */
}

  .fsize{
    font-size: 80%;
    color: black;
  }

  .heading {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-top: 10%;
  background-color: #090b668e;
  text-align: center;
  padding: 1rem 0;
  font-size: 2rem;
  font-weight: bolder;
  backdrop-filter: blur(3px);
  font: italic;
  font-family:monospace;
  color: #ffffff;
} 

  a {
    text-decoration: none; 
    color: #4436fe;
    font-weight: bold;;
    /* remove underlining for all links */
  }

  a:hover {
    text-decoration: none; /* remove underlining when hovering */
  }
</style>

<p class="heading">DBMSMP</p>
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
