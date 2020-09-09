<script>
	import Quote from '../components/Quote.svelte'
	import SubFooter from '../components/SubFooter.svelte'
	import Hero from '../components/Hero.svelte'
	import Carousel from '../components/Carousel.svelte'
	import MobileHero from '../components/MobileHero.svelte'
	import MobileImage from '../components/MobileImage.svelte'
	import MobileQuote from '../components/MobileQuote.svelte'
	import MobileSubFooter from '../components/MobileSubFooter.svelte'
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
	<title>Varry : For Students</title>
</svelte:head>

<Hero
	subheader="For Students"
	header="Learn from the best.<br>Boost your network. <br>Entirely remote."
	text="Become a Varry member and save your seat for the next Deep-Dive starting at <span>12th October 2020</span>"
	imageURL="/students/hero.png"
	bgURL='/students/background page 1.svg'
	isAux=''
/>

<MobileHero
	heading="Learn from the best.<br>Boost your network. <br>Entirely remote."
	text="Become a Varry member and save your seat for the next Deep-Dive starting at <span>12th October 2020</span>"
/>

<MobileImage
	imgUrl="/students/hero.png"
	bgUrl="/students/background page 1.svg"
/>

<Quote 
	heading="A unique community for students and young professionals" 
	subtext="Our community Varry builds the bridge between students and companies because 
	we believe you learn most from experts with a passion for digital products."
	leftAlign={true}
/>

<MobileQuote
	showLogo={true}
	heading="A unique community for students and young professionals"
	text="Our community Varry builds the bridge between students and companies because we believe you learn most from experts with a passion for digital products."
	leftAlign={true}
/>

<Hero
	subheader=""
	header="The Varry Deep Dive."
	text="Within our two weeks, Varry Deep Dive starting at the 12th October 2020 our community exchanges extensively about several topics out of the digital product world. <br><br> Our partners will talk about the hottest trends and share insights into their day-to-day work life, learnings and fuckups. The knowledge is conveyed in various formats such as workshops, insight sessions and challenges. Of course, fully remote."
	imageURL="/students/hero_two.png"
	bgURL=''
	isAux='isAux'
	customImageStyles="padding-right: 0; width: 120%; max-width: none;"
	buttonBool="true"
	buttonLink="/approach"
	buttonText="Learn more"
/>

<MobileHero
	heading="The Varry Deep Dive."
	text="Within our two weeks, Varry Deep Dive starting at the 12th October 2020 our community exchanges extensively about several topics out of the digital product world. Our partners will talk about the hottest trends and share insights into their day-to-day work life, learnings and fuckups. The knowledge is conveyed in various formats such as workshops, insight sessions and challenges. Of course, fully remote."
	button="true"
	buttonLink="/approach"
	buttonText="Learn more"
/>

<MobileImage
	imgUrl="/students/hero_two.png"
	bgUrl=""
	customStyles="margin-right: -10vmax;width: 120%;"
/>

<Hero
	subheader=""
	header="The Varry Community &mdash; <br> connect with the makers of today and tomorrow"
	text="Get to know students from various fields with the same interest in digital products and expand your network with like-minded students from all across Europe."
	imageURL="/students/hero_3.png"
	bgURL=''
	isAux='isAux'
	alternate='true'
/>

<MobileHero
	heading="The Varry Community &mdash; <br> connect with the makers of today and tomorrow"
	text="Get to know students from various fields with the same interest in digital products and expand your network with like-minded students from all across Europe."
/>

<MobileImage
	imgUrl="/students/hero_3.png"
	bgUrl=""
/>

<MobileHero
	heading="Get hired by our network partners"
	text="Use the opportunity to build a personal relationship towards our partners, connect with them and get informed about new working opportunities for internships, working student positions or for collaboration for your thesis."
/>

<MobileImage
	imgUrl="/students/logos.png"
	bgUrl=""
/>

<Hero
	subheader=""
	header="Get hired by our network partners"
	text="Use the opportunity to build a personal relationship towards our partners, connect with them and get informed about new working opportunities for internships, working student positions or for collaboration for your thesis."
	imageURL="/students/logos.png"
	bgURL='/students/gethired.svg'
	isAux='isAux'
	whiteText='whiteText'
	smallerImage=true
/>
<!-- <Carousel /> -->

<SubFooter 
	heading="Join the future of education" 
	subtext="One platform. Everything you need to kickstart your digital career."
	buttonBool="true"
	buttonLink="/join"
	buttonText="Join Now!"/>


<MobileSubFooter
	heading="Join the future of education" 
	text="One platform. Everything you need to kickstart your digital career."
	button={true}
	buttonLink="/join"
	buttonText="Join Now!"/>
