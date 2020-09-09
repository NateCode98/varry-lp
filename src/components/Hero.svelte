<script>
	export let subheader;
	export let header;
	export let text;
	export let imageURL;
	export let bgURL;
	export let isAux = 'false'; //is_auxillary means it's a left/right element but not hero
	export let alternate = 'false';
	export let whiteText= 'false';
	export let smallerText = 'false';
	export let smallerImage = false;
	export let approach='';
	export let extraText='false';
	export let customImageStyles = '';
	export let buttonBool;
	export let buttonLink;
	export let buttonText;
</script>

<style>
	h1 {
		font-size: 3vmax;
		font-family: var(--heading-font);
		margin-bottom: 1vmax;
	}
	.hero {
		height: 100vh;
		
		background-position: 60vmin;
	}
	@media only screen and (max-width:768px) {
		.hero {
			background: none;
		}
	} 
	.grid-container {
		
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr;
		gap: 1px 1px;
		grid-template-areas: "left right";
		justify-items: center;
		height: 100%;
		padding: 0 0 0 5vmax;
		align-items: center;
	}
	
	.left { grid-area: left;   justify-self: center; }
	
	.right { grid-area: right; justify-self: center; align-items: center;}

	.right img {
		padding-right: 2.5vmax;
	}

	/* .right img {height: 30vmax;} */
	.left h1,
	.right h1 {
		color: var(--text-blue);
		text-transform: capitalize;
	}
	
	.sub  {
		color: var(--text-red);
		font-weight: normal;
		text-transform: capitalize;
		
	}
	
	.lead {
		width: 80%;
		font-size: 1.4vmax;
		line-height: 1.433333;
		opacity: .8;
		color: #42315C;
    	font-weight: 600;
	}
	
	.isAux {
		height:80vh;
		margin: 5rem 0;
		/* background-size: 100vmax !important; */
		background-position: -10rem !important;
		
	}
	.isAux h1 {
		font-size: 2.5vmax;
		/* width: 70%; */
	}

	.whiteText {
		background-size: 50%;
		background-position: -17.5vmax !important
	}

	.whiteText .left {
		justify-self: flex-start;
		max-width: 70%;
	}
	
	.whiteText, .whiteText h1 {
		color: #fff; 
	}
	
	.smallerImage {
		padding: 7vmax;
	}
	
	.smallerText {
		font-size: 1.1rem;
	}
	.button-primary {
		background: var(--text-red);
		text-decoration: none;
		color: #fff;
		padding: 10px 50px;
		font-size: 1rem;
		border-radius: 100px;
	}
	.lead {
    font-size: 1.3vmax;
    margin-bottom: 20px;
    color: #42315C;
    font-weight: 600;
	opacity: 1;
	}	
	
</style>

{#if alternate === 'false'}
<section class="hero {isAux} {whiteText} {extraText}" ref={approach} style="background: #fff url('{bgURL}') right no-repeat; background-position: 65vmin;">
	<div class="grid-container">
		<div class="left">
			<h4 class="sub">{subheader}</h4>
			<h1>{@html header}</h1>
			<p class="lead {smallerText} {whiteText}">
				{@html text} 
			</p>
			{#if buttonBool === "true"}
        <p class="lead button">
            <a href="{buttonLink}" class="button-primary">{buttonText}</a>
        </p>
        {/if}
		</div>
		<div class="right">
			{#if isAux === 'isAux'}
			<img class:smallerImage style={customImageStyles} src="{imageURL}" alt="">
			{:else}
			<img class:smallerImage style={customImageStyles} src="{imageURL}" alt="">
			{/if}
			
		</div>
	</div>
</section>

{:else}
<section class="hero {isAux} {whiteText} {extraText}" style="background: #fff url('{bgURL}') left no-repeat; background-position: 65vmin;">
	<div class="grid-container">
		<div class="left">
			{#if isAux === 'isAux'}
			<img class:smallerImage style={customImageStyles} src="{imageURL}" alt="">
			{:else}
			<img class:smallerImage style={customImageStyles} src="{imageURL}" alt="">
			{/if}
			{#if buttonBool === "true"}
        <p class="lead button">
            <a href="{buttonLink}" class="button-primary">{buttonText}</a>
        </p>
        {/if}
		</div>
		<div class="right" style="margin-left: 5vmax;">
			<h4 class="sub">{subheader}</h4>
			<h1>{@html header}</h1>
			<p class="lead {whiteText}">
				{@html text} 
			</p>
		</div>
	</div>
</section>

{/if}