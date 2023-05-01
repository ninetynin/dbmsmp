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
    a{
        color: rgb(255, 255, 255);
        text-decoration: none;
    }
</style>

     <h1 class="heading"><a href="/">DBS MP</a></h1>

<slot />