<svelte:head>
	<title>Imprint</title>
</svelte:head>

<script>
	import Quote from '../components/Quote.svelte'
	import Hero from '../components/Hero.svelte'
	import MobileHero from '../components/MobileHero.svelte'
	import MobileImage from '../components/MobileImage.svelte'
	import MobileQuote from '../components/MobileQuote.svelte'
	import MobileSubFooter from '../components/MobileSubFooter.svelte'
</script>

<style>
    .photos {
        padding: 8vmax 5vmax;
        background: url('/about/meet_team_shape.svg') left center no-repeat;
        background-size: 100%;
        /* color: #fff !important; */
    }
    .photos h1 {
        margin-bottom: 20px;
    }
    .grid-container {
        width: 80%;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        gap: 4% 4%;
        grid-template-areas: ". . . ." ". . . ." ". . . .";
    }

    span {
        color: #202020;
        font-weight: bold;
    }
    .grid-container div img{
        object-fit: cover;

    }
    .title {
        margin-top: 10px;
        font-size: .8rem;
        font-family: var(--body-fonts);
        background: #fff;
        float: left;
        padding: 2px 10px;
        box-shadow: 0 0 5px #00000021;
        border-radius: 50px;
    }

    @media only screen and (max-width:1024px) {
    .grid-container {
        width: 80%;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
        gap: 4% 4%;
        grid-template-areas: ". ." ". ." ". ." ". ." ". ." ". .";
    }
    span   {
        color: #202020; 

    }
    .title {
        margin-top: 10px;
        font-size: .7rem;
        font-family: var(--body-fonts);
        color: #202020; 
        box-shadow: none;
    }
    }
</style>
<Hero
	subheader=""
	header="We create a new and unique exchange opportunity with longlasting benefits for our community."
	text=""
	bgURL='/about/start_shape_team.svg'
	isAux=''
/>

<MobileHero
	heading="We create a new and unique exchange opportunity with longlasting benefits for our community."
	text=""
/>

<Hero
	subheader=""
	header="The Story behind Varry."
	text="<p style='margin-bottom: 10px;'> Why is there no passionate online community with exciting learning opportunities? is a question Henrik and Nate asked themselves while being stuck in quarantine for 6 weeks. Before that, they co-organized the unicon Berlin, a student-run digital products conference, which was one of the last events in Berlin – just before the lockdown. Three days full of interesting input and exchange with students and companies, but why just limit it to only a few days?</p><p style='margin-bottom: 10px;'>After successfully completing this pilot project with 60 students and 4 partner companies from across Germany, the decision was made to roll out the Varry product as it is now.   With the strong commitment out of the community the second version, the so-called Deep Dive, is starting in October 2020. We are excited to support the professional development of young professionals by setting up this unique environment and close the gap between companies and students for a better exchange.</p>"
	imageURL="/about/founder_team@2x.png"
	bgURL=''
	isAux='isAux'
	whiteText=''
    extraText='extraText'
	customImageStyles={'padding:10vmax;'}
/>