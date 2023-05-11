<script>

</script>

<style>
    @import '@picocss/pico';
    .heading {
        position: sticky;
        top: 0;
        left: 0;
        right: 0;
        background-color: rgba(17, 25, 30, 0.83); 
        text-align: center;
        padding: 1rem 0;
        font-size: 2rem;
        font-weight: bolder;
        backdrop-filter: blur(5px);
        font: italic;
        font-family:monospace;
    }
    a {
        color: rgb(255, 255, 255);
        text-decoration: none;
    }

    #id {
        width: 10%;
        height: 10%;
    }

    .makeitlight {
        color: rgb(172, 169, 169);
    }
</style>

<!-- <nav></nav> -->
<!-- <h1 class="heading"><a href="/"><strong>DBSMP</strong></a></h1> -->
<nav>
    <!-- <ul></ul> -->
    <ul>
      <!-- <li><strong>Brand</strong></li> -->
      <li></li>
        <li><a href="/"><strong>DBSMP</strong></a></li>
        <li></li>
        <li><a href="/category" class="makeitlight">Catogories</a></li>
        <li></li>
        <li><a href="/events" class="makeitlight">Events</a></li>
        <li></li>
        <li><input type="search" id="search" name="search" placeholder="Search" on:keyup={
        e => {if (e.key === 'Enter') window.location.href = `/search/${e.target.value}`;
        }}></li>
    </ul>
  </nav>
<slot />