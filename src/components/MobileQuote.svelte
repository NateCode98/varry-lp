<script>
  export let showLogo;
  export let heading;
  export let text;
  export let button;
  export let buttonLink;
  export let buttonText;
  export let leftAlign;
</script>

<section class="mobile__hero">
  {#if showLogo}
  <img src="/logos/varry_wave_gradient.png" alt="">
  {/if}
  <div class="wrapper">
    <h1>{@html heading}</h1>
    <p class="lead">{@html text}</p>

    {#if button}
    <p class="lead button">
      <a href="{buttonLink}" class="button-primary">{buttonText}</a>
    </p>
    {/if}
  </div>
</section>

<style>
  .mobile__hero {
    display: none;
  }

  section {
    margin: 10vh 0;
    padding: 0 7vw;
  }

  img {
    width: 40%;
    margin: 3vmax 0;
  }

  .wrapper h1 {
    font-size: 8vw;
    color: var(--text-blue);
    font-family: var(--heading-font);
  }

  .wrapper .lead {
    line-height: 1.8;
    margin: 25px 0;
    font-size: 18px;
    color: #42315C;
  }

  .lead.button {
    text-align: center;
  }

  .button-primary {
    background: var(--text-red);
    text-decoration: none;
    color: #fff;
    padding: 10px 50px;
    font-size: 1rem;
    border-radius: 100px;
    margin-top: 10px;
    display: inline-block;
  }
</style>
