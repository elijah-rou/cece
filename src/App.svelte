<script>
  let page = 0;

  function next() {
    page += 1;
    console.log(page);
  }
</script>

<main class="cursor-auto font-serif antialiased">
  {#if page===0}
    <div class="flex items-center justify-center h-screen">
      <button on:click={next} class="text-9xl animate-pulse">Dear Diary...</button>
    </div>
  {:else if page===1}
    <div class="grid grid-cols-2">
      <div class="text-5xl m-12 text-center">
        <p class="transition-all ease-in delay-300">On May 4th, 2023</p>
        <p>I Met You</p>
        <p>(Through goat sacrifice)</p>
      </div>
      <img class="m-12" src="https://media.giphy.com/media/3o7TKzqB3g6r2nY5EI/giphy.gif" alt="" />
    </div>
  {:else if page===2}
    <div class="text-5xl font-serif antialiased m-64">
      <p>From Sushi Making</p>
      <p>To Ping Pong</p>
      <p>And Movie Nights</p>
      <p>Or Central Park Picnics</p>
    </div>
  {:else if page===3}
    <div class="text-5xl font-serif antialiased m-64">I fell in Love</div>
  {:else if page===4}
    <div class="text-5xl font-serif antialiased m-64">
      <div>We became explorers...</div>
      <div>roommates...</div>
      <div>lovers...</div>
      <div>best friends</div>
    </div>
  {:else if page===5}
    <div class="text-5xl font-serif antialiased m-64">
      <p>No matter Where you are</p>
      <p>or What we do</p>
    </div>
  {:else if page===6}
    <div class="text-5xl font-serif antialiased m-64">
      I will always love your (bum....) smile... passion... (body...) black
      hair... writing... heart... eyes... kindness... thoughtfulness...
      tenacity... creativity... You.
    </div>
  {:else}
    <div class="text-7xl font-serif antialiased text-center ml-64 mr-64 mt-64 mb-24">
      <p> I love you</p>
      <p>my Darling Girl,</p>
      <p>Cecelia</p>
    </div>
  {/if}
</main>

