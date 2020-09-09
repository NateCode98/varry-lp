<style>
    h1 {
        font-size: 3vmax;
        color: var(--text-blue);
        margin-bottom: 3rem;
        text-align: center;
    }

    .wrapper {
        padding: 5vmax;
        background: #F4F5FA;
    }
    .slide-content {
        opacity: .6;
        transition: opacity .35s ease-in-out;

    }

    .carousel :global(button.left) {
        left: -5vw;
    }

    .carousel :global(button.right) {
        right: -4vw;
    }

    .control :global(svg) {
		width: 150%;
        height: 100%;
		color: #202020;
	}
    .slide-content:hover {
        opacity: 1;

        filter: none;
    }

    .modal {
        display: none;
        transition: display .35s ease-in-out;
        position: fixed; /* Stay in place */
        z-index: 1000; /* Sit on top */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.7);
    }

    .modal-content {
        position: fixed;
        padding: 5vmax;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: #F4F5FA;
        border-radius: 10px;
    }
    .close {
        position: absolute;
        left: 50%;
        top: 20%;
        transform: translate(-50%, -20%); 
    }
    .close a {
        color: #202020;
        text-transform: uppercase;
        background: #fff;
        border-radius: 50px;
        text-decoration: none;
        padding: 5px 30px;
        letter-spacing: .5px;
        box-shadow: 0 0 5px rgba(0,0,0,0.7);

    }
</style>

<div class="modal">
    <div class="modal-content">

    </div>
    <span class="close" on:click = {() => closeModal()}><a href="#0"> close</a></span>
</div>
<section class="carousel">
    <h1>Your path to success.</h1>
    <div class="wrapper">
        <Carousel bind:this={carousel} on:mouseenter={enter} on:mouseleave={leave} on:change={changed}>
            <span class="control" slot="left-control">
                <ChevronLeftIcon />
            </span>
            <div class="slide-content">
                <div class="preview">
                    <img src="/students/foto_slider_placement@2x.png" alt="">
                </div>
            </div>
            <div class="slide-content">
                <div class="preview">
                    <img src="/students/foto_slider_placement@2x.png" alt="" on:click={() => showModal("https://www.youtube.com/embed/R-ChZqj_yBg")}>
                </div>
            </div>
            <div class="slide-content">
                <div class="preview">
                    <img src="/students/foto_slider_placement@2x.png" alt="" on:click={() => showModal("https://www.youtube.com/embed/R-ChZqj_yBg")}>
                </div>
            </div>
            <div class="slide-content">
                <div class="preview">
                    <img src="/students/foto_slider_placement@2x.png" alt="" on:click={() => showModal("https://www.youtube.com/embed/R-ChZqj_yBg")}>
                </div>
            </div>
        
            <span class="control" slot="right-control">
                <ChevronRightIcon />
            </span>
        </Carousel>

        
    </div>
</section>

<script>

    import Carousel from '@beyonk/svelte-carousel'
    import { ChevronLeftIcon, ChevronRightIcon } from 'svelte-feather-icons'
    let carousel;
    function enter() {
        carousel.pause();
    }

    function leave() {
        carousel.resume();
    }
    function showModal(url) {
        let modalContent = document.querySelector('.modal-content');
        let modal = document.querySelector('.modal');
        modalContent.innerHTML = '<iframe width="560" height="315" src="' + url + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        modal.style.display = "block";
    }

    function closeModal() {
        let modalContent = document.querySelector('.modal-content');
        let modal = document.querySelector('.modal');
        modalContent.innerHTML = ''
        modal.style.display = "none";
            
    }
    let carouselWrapper = document
    function changed (event) {
        let currentId = event.detail
        // let currentSlide = document.querySelector('.' + currentId)
        console.log(currentId)
	}
</script>