<script>

	import Quote from '../components/Quote.svelte'
	import Hero from '../components/Hero.svelte'
	import Carousel from '../components/Carousel.svelte'
	import Triple from '../components/Triple.svelte'
	import MobileHero from '../components/MobileHero.svelte'
	import MobileImage from '../components/MobileImage.svelte'
	import MobileQuote from '../components/MobileQuote.svelte'
	import MobileSubFooter from '../components/MobileSubFooter.svelte'
	import SubFooter from '../components/SubFooter.svelte'
	import { onMount } from 'svelte';

	onMount(() => {
		let navButton = document.querySelector('.nav-button')
		console.log(navButton)
		navButton.style.color = "#3A1660 !important"
	});
</script>
<style>


	/* @media only screen and (max-width:1440px) {
		.hero {
			background-position: 1100%;
		}
	}
	@media only screen and (max-width:1280px) {
		.hero {
			background-position: -100%;
		}
	}
	*/
   
</style>

<svelte:head>
	<title>Varry : For Partners</title>
</svelte:head>

<Hero
	subheader="For Companies"
	header="Varry is your access <br> to top talents"
	text="Get direct access to our pool of selected talents from top-tier universities across Europe."
	imageURL="/partners/partnerspage_firstphoto.png"
	bgURL='/partners/shape_partners.svg'
	isAux=''
/>

<MobileHero
	heading="Varry is your access <br> to top talents"
	text="Get direct access to our pool of selected talents from top-tier universities across Europe."
/>

<MobileImage
	imgUrl="/partners/partnerspage_firstphoto.png"
	bgUrl='/partners/shape_partners.svg'
/>

<Quote 
	heading="You&rsquo;re in good company." 
	subtext="<img src='/partners/logo_linear.png' style='height: 150px;'>"
	buttonBool="false"/>

<MobileQuote
	heading="You&rsquo;re in good company." 
	text="<img src='/partners/logo_linear.png'>"
	button={false}
/>

<Hero
	subheader=""
	header="Enhance your business by <br> reaching the right target group"
	text="Young professionals are the fuel for your future success. Varry gives you an entry point to not only get to know them. With the broad range of formats, you as well have the opportunity to collaborate."
	imageURL="/partners/photo2_partner@2x.png"
	bgURL=''
	isAux='isAux'
	whiteText=''
/>

<MobileHero
	heading="Enhance your business by reaching the right target group"
	text="Young professionals are the fuel for your future success. Varry gives you an entry point to not only get to know them. With the broad range of formats, you as well have the opportunity to collaborate."
/>

<MobileImage
	imgUrl="/partners/photo2_partner@2x.png"
/>

<Hero
	subheader=""
	header="Help students while <br> positioning your brand."
	text="Our community is eager and dependent on learning from our partners. You are giving them the possibility to learn from your day-to-day practice. With having this impact on the learning process your brand has the opportunity to etch itself deeply into the memory of the students."
	imageURL="/partners/photo3_partners@2x.png"
	bgURL=''
	isAux='isAux'
	whiteText=''
	alternate='true'
/>

<MobileHero
	heading="Help students while <br> positioning your brand."
	text="Our community is eager and dependent on learning from our partners. You are giving them the possibility to learn from your day-to-day practice. With having this impact on the learning process your brand has the opportunity to etch itself deeply into the memory of the students."
/>

<MobileImage
	imgUrl="/partners/photo3_partners@2x.png"
/>


<Hero
	subheader=""
	header="Give your employees a stage"
	text="You have the experts in your company. Varry enables you to give them a stage to represent not only your business but also themselves. At the same time, they have a positive impact on the personal development of truly eager students."
	imageURL="/partners/photo+shape_partner@2x.png"
	bgURL=''
	isAux='isAux'
	whiteText=''
	customImageStyles={"padding-right: 0;width: 130%;max-width: none;"}
/>

<MobileHero
	heading="Give your employees a stage"
	text="You have the experts in your company. Varry enables you to give them a stage to represent not only your business but also themselves. At the same time, they have a positive impact on the personal development of truly eager students."
/>

<MobileImage
	imgUrl="/partners/photo+shape_partner@2x.png"
/>

<SubFooter 
	heading="What does a partner contribute?" 
    subtext = ""
	buttonBool="false"
	threeBoxes="true"
    fullWidth="fullWidth"
/>


<Triple />


<Quote 
	heading="Want to become a partner?" 
	subtext="Build the platform hand-in-hand with us, tailored to your needs"
	buttonBool="true"
	buttonLink="/join"
	buttonText="Get In Touch"
	/>

<MobileSubFooter
	heading="Want to become a partner?" 
	text="Build the platform hand-in-hand with us, tailored to your needs"
	button={true}
	buttonLink="/join"
	buttonText="Get In Touch"
/>