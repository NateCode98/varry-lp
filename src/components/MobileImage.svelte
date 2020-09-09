<script>
    export let imgUrl;
    export let bgUrl;
    export let customStyles='';
</script>

<style>
    .mobile__image {
        display: none;
    }

    section {
        background-size: 90% !important;
        background-position-y: 4vmax !important;
    }

    img {
        width: 85%;
        margin: 0 auto;
        display: block;
        max-width: 400px;
    }
</style>

<section class="mobile__image" style="background: #fff url('{bgUrl}') right no-repeat; background-position: 20vmin top;">
    <div class="wrapper">
        <img src="{imgUrl}" style="{customStyles}" alt="">
    </div>
</section>
