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
        margin-bottom: 200px;
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

<MobileHero
	heading="The Story behind Varry."
	text="<p style='margin-bottom: 10px;'>The Deep Dive consists of a mix of different learning formats and is the perfect opportunity to gain knowledge about digital products in addition to everyday life at university. Our selected partners and hand-picked speakers will let you ask all your questions as we attach great importance to making the sessions as interactive as possible. </p><p style='margin-bottom: 10px;'>Some of the next Deep Dive&rsquo;s topics:</p> <p style='margin-bottom: 10px;'><b>IoT and Smart Home Devices, New Work or Sustainability within digital products.</b></p> <p style='margin-bottom: 10px;'>Start Date: 12.10.2020 <br> End Date: 23.10.2020</p>"
/>

<MobileImage
	imgUrl="/about/founder_team@2x.png"
/>

<Quote 
	heading="&ldquo;Why just limit the exchange to a few days?&rdquo;" 
	subtext="&mdash; Nate and Henrik, March 2020"
    buttonBool="false"
    leftAlign={true}
    quote={true}
/>

<MobileQuote
	showLogo={true}
	heading="&ldquo;Why just limit to a few days?&rdquo;" 
	text="&mdash; Nate and Henrik, March 2020"
	button={false}
	leftAlign={true}
/>


<section class="photos">
    <h1 class="blue">Meet the Varry Team</h1>
    <div class="grid-container">
        <div class="image">
            <img src="/about/teamPhotos/ny--1.png" alt="">
            <p class="title"><span>Nate</span> &dash; Founder</p>
        </div>
        <div class="image">
            <img src="/about/teamPhotos/ny--2.png" alt="">
            <p class="title"><span>Henrik</span> &dash; Founder</p>
        </div>
        <div class="image">
            <img src="/about/teamPhotos/hb--9.png" alt="">
            <p class="title"><span>Vicky</span> &dash; Community</p>
        </div>
        <div class="image">
            <img src="/about/teamPhotos/hb--5.png" alt="">
            <p class="title"><span>Ann</span> &dash; Design</p>
        </div>
        <div class="image">
            <img src="/about/teamPhotos/hb--2.png" alt="">
            <p class="title"><span>Raban</span> &dash; Varry Associate</p>
        </div>
        <div class="image">
            <img src="/about/teamPhotos/hb--3.png" alt="">
            <p class="title"><span>Niklas</span> &dash; Varry Associate</p>
        </div>
        <div class="image">
            <img src="/about/teamPhotos/hb--4.png" alt="">
            <p class="title"><span>Alexander</span> &dash; Varry Associate</p>
        </div>
        <div class="image">
            <img src="/about/teamPhotos/hb--8.png" alt="">
            <p class="title"><span>Miriam</span> &dash; Varry Associate</p>
        </div>
        <div class="image">
            <img src="/about/teamPhotos/stell.png" alt="">
            <p class="title"><span>Stella</span> &dash; Varry Associate</p>
        </div>
        <div class="image">
            <img src="/about/teamPhotos/hb--7.png" alt="">
            <p class="title"><span>Linda</span> &dash; Varry Associate</p>
        </div>
        <div class="image">
            <img src="/about/teamPhotos/nieki.png" alt="">
            <p class="title"><span>Nieki</span> &dash; Varry Associate</p>
        </div>

        <div class="image">
            <img src="/about/teamPhotos/hb--10.png" alt="">
            <p class="title"><span>Nico</span> &dash; Varry Associate</p>
        </div>
    </div>
</section>

<Quote 
	heading="Join the future of education" 
	subtext="One platform. Everything you need to kickstart your digital career."
	buttonBool="true"
	buttonLink="https://form.typeform.com/to/GLDOuGSz"
	buttonText="Join Now!"/>

<MobileSubFooter
	heading="Join the future of education" 
	text="One platform. Everything you need to kickstart your digital career."
	button={true}
	buttonLink="https://form.typeform.com/to/GLDOuGSz"
	buttonText="Join Now!"
/>
