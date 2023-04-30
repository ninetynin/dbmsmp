<script>
    export let data;
    let { club } = data;
    $: ({ club } = data);
  </script>

  <style>
    div {
  display: flex;
  flex-wrap: wrap;
}

article {
  flex: 1 4 30%;
  max-width: 30%;
}
  </style>
<main class="container">
  <ul>
    {#each club as cl}
        <!-- <a href="/clubs/{cl.club_name}">{cl.club_name}</a>
        <br> -->
        <div>
            <article>
                <a href="/clubs/{cl.club_name}">
                    <h2>{cl.club_name}</h2>
                </a>
            </article>
        </div>
    {/each}
  </ul>
</main>