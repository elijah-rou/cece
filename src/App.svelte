<script>
  import { fade } from "svelte/transition";
  import Typewriter from 'svelte-typewriter'

  let page = 0;
  let intervals = [50, 100, 150, 200];

  function next() {
    page += 1;
    console.log(page);
  }
</script>

<main class="cursor-auto font-typewriter antialiased">
  {#if page===0}
    <div class="flex items-center justify-center h-screen" out:fade>
      <button on:click={next} class="text-9xl animate-pulse">Dear Diary...</button>
    </div>
  {:else if page===1}
    <div class="grid grid-cols-2">
      <div class="text-5xl m-12 text-center">
        <Typewriter showCursorOnDelay={true} delay={1000} interval={intervals}>On May 4th</Typewriter>
        <Typewriter delay={3000} interval={intervals} on:done>2023</Typewriter>
        <Typewriter delay={5000} interval={intervals} on:done>I Met You...</Typewriter>
        <br/>
        <Typewriter delay={8000} interval={intervals} on:done>(through goat sacrifice)</Typewriter>
      </div>
      <div in:fade={{ delay: 5500 }}>
        <img class="m-12" src="src/assets/photos/sushi2.jpeg" alt="" />
      </div>
    </div>
  {:else if page===2}
    <div class="text-5xl m-64">
      <p>From Ping Pong</p>
      <p>To Movie Nights</p>
      <p>And Central Park Picnics</p>
      <p>Or Midnight Dances</p>
    </div>
  {:else if page===3}
    <div class="text-5xl m-64">I fell in Love</div>
  {:else if page===4}
    <div class="text-5xl m-64">
      <div>We became explorers...</div>
      <div>roommates...</div>
      <div>lovers...</div>
      <div>best friends</div>
    </div>
  {:else if page===5}
    <div class="text-5xl m-64">
      <p>No matter Where you are</p>
      <p>or What we do</p>
    </div>
  {:else if page===6}
    <div class="text-5xl m-64">
      I will always love your (bum....) smile... passion... (body...) black
      hair... writing... heart... eyes... kindness... thoughtfulness...
      tenacity... creativity... You.
    </div>
  {:else}
    <div class="text-7xl text-center ml-64 mr-64 mt-64 mb-24">
      <p> I love you</p>
      <p>my Darling Girl,</p>
      <p>Cecelia</p>
    </div>
  {/if}
</main>

