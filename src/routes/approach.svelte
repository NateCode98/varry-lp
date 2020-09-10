<script>
	import Quote from '../components/Quote.svelte'
	import Hero from '../components/Hero.svelte'
	import SubFooter from '../components/SubFooter.svelte'
	import MobileHero from '../components/MobileHero.svelte'
	import MobileImage from '../components/MobileImage.svelte'
	import MobileQuote from '../components/MobileQuote.svelte'
	import MobileSubFooter from '../components/MobileSubFooter.svelte'
</script>

<style> 
:global(svg) {
    font-family: 'Work Sans';
}
</style>
<Hero
	subheader=""
	header="The Varry Approach"
	text="<p>Varry is a platform that enables students and young professionals to learn, exchange, connect and make new friends on a sustainable basis.</p> <br> <p>In addition, the two-week Deep Dive with several formats delivered by our partners offers a unique learning opportunity. The schedule allows the participation in the Deep Dive and the community events to be perfectly integrated into the daily university routine.</p>"
	imageURL="/approach/hero.png"
	bgURL='/approach/firstShape.svg'
	isAux=''
	smallerText='smallerText'
	approach='approach'
	date={true}
/>

<MobileHero
	heading="The Varry Approach"
	text="<p>Varry is a platform which lets students and young professionals to learn, exchange, connect and make new friends on sustainable basis.</p> <br> <p>In addition, the two-week Deep Dive with several formats delivered by our partners offers a unique opportunity. The schedule allows the participation in the Deep Dive and the community events to be perfectly integrated into the daily university routine.</p>"
/>

<MobileImage
	imgUrl="/approach/hero-mobile.png"
	bgUrl='/approach/firstShape.svg'
/>


<Quote 
	heading="Together we create an environment for passionate young professionals." 
	subtext=""
	buttonBool="false"
/>

<MobileQuote
	heading="Together we create an environment for passionate young professionals." 
	text=""
	button={false}
/>



<Hero
	subheader=""
	header="The Deep Dive"
	text="<p style='margin-bottom: 10px;'>The Deep Dive consists of a mix of different learning formats and is the perfect opportunity to gain knowledge about digital products in addition to everyday life at university. Our selected partners and hand-picked speakers will let you ask all your questions as we attach great importance to making the sessions as interactive as possible. </p><p style='margin-bottom: 10px;'>Some of the next Deep Dive&rsquo;s topics:</p> <p style='margin-bottom: 10px;'><b>IoT and Smart Home Devices, New Work or Sustainability within digital products.</b></p> <p style='margin-bottom: 10px;'>Start Date: 12.10.2020 <br> End Date: 23.10.2020</p>"
	imageURL="/approach/calendar.svg"
	bgURL=''
	isAux='isAux'
	whiteText=''
	extraText='extraText'
	customImageStyles={'padding:10vmax;'}
/>

<MobileHero
	heading="The Deep Dive"
	text="<p style='margin-bottom: 10px;'>The Deep Dive consists of a mix of different learning formats and is the perfect opportunity to gain knowledge about digital products in addition to everyday life at university. Our selected partners and hand-picked speakers will let you ask all your questions as we attach great importance to making the sessions as interactive as possible. </p><p style='margin-bottom: 10px;'>Some of the next Deep Dive&rsquo;s topics:</p> <p style='margin-bottom: 10px;'><b>IoT and Smart Home Devices, New Work or Sustainability within digital products.</b></p> <p style='margin-bottom: 10px;'>Start Date: 12.10.2020 <br> End Date: 23.10.2020</p>"
/>

<MobileImage
	imgUrl="/approach/calendar.svg"
	bgUrl=''
/>



<Hero
	subheader=""
	header="The Varry Community. <br>"
	text="Our community, consisting of students and young professionals as well as our partner companies, is the heart of Varry. Within it, we want to enable everyone to grow personally and to make new, long-lasting connections. <br> Another special characteristic of Varry is that everything grows out of our community. This means that the community has a voice on all topics and formats that take place within Varry. We listen and deeply care about your wishes and improvement suggestions."
	imageURL="/approach/foto_call@2x.png"
	bgURL=''
	isAux='isAux'
	alternate='true'
	extraText='extraText'
	customImageStyles={'padding:10vmax;'}
/>

<MobileHero
	heading="The Varry Community. <br>"
	text="Our community, consisting of students and young professionals as well as our partner companies, is the heart of Varry. Within it, we want to enable everyone to grow personally and to make new, long-lasting connections. Another special characteristic of Varry is that everything grows out of our community. This means that the community has a voice on all topics and formats that take place within Varry. We listen and deeply care about your wishes and improvement suggestions."
/>

<MobileImage
	imgUrl="/approach/foto_call@2x.png"
/>


<Hero
	subheader=""
	header="VIP Sessions."
	text="<p>Not only within the Deep Dive but also before and after, we invite personalities from the digital scene to talk about their experiences and serve as role models for our community. <br><br> We are convinced that this is one of the best ways to get impressions and in the best case to learn from the mistakes and experiences of others. We take special care that the selected speakers give space to answer all questions.</p>"
	imageURL="/approach/speaker_profile.svg"
	bgURL='/approach/2nd shape approach.svg'
	isAux=''
	whiteText=''
    extraText='extraText'
	customImageStyles={'padding:10vmax;'}
/>

<MobileHero
	heading="VIP Sessions."
	text="<p>Not only within the Deep Dive but also before and after, we invite personalities from the digital scene to talk about their experiences and serve as role models for our community. <br><br> We are convinced that this is one of the best ways to get impressions and in the best case to learn from the mistakes and experiences of others. We take special care that the selected speakers give space to answer all questions.</p>"
/>

<MobileImage
	imgUrl="/approach/speaker_profile.svg"
	bgUrl=''
/>


<Hero
	subheader=""
	header="Mentoring. <br>"
	text="Within Varry, mentoring is offered for any topic. From questions on specific topics like frontend, engineering, frameworks to questions about your resume. <br><br> Our mentors will cover your back at all times."
	imageURL="/approach/last_pic_approach@2x.png"
	bgURL=''
	isAux='isAux'
	alternate='true'
    extraText='extraText'
	customImageStyles={'padding:10vmax;'}
/>

<MobileHero
	heading="Mentoring. <br>"
	text="Within Varry, mentoring is offered for any topic. From questions on specific topics like frontend, engineering, frameworks to questions about your resume. <br><br> Our mentors will cover your back at all times."
/>

<MobileImage
	imgUrl="/approach/last_pic_approach@2x.png"
	bgUrl=''
/>


<SubFooter 
	heading="Join the future of education" 
	subtext="One platform. Everything you need to kickstart your digital career."
	buttonBool="true"
	buttonLink="https://varry.typeform.com/to/g2OSfi5B"
	buttonText="Join Now!"/>

<MobileSubFooter
	heading="Join the future of education" 
	text="One platform. Everything you need to kickstart your digital career."
	button={true}
	buttonLink="https://varry.typeform.com/to/g2OSfi5B"
	buttonText="Join Now!"
/>
