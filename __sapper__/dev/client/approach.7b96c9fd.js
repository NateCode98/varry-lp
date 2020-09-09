import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, c as create_component, a as space, f as claim_component, e as claim_space, m as mount_component, g as insert_dev, n as noop, t as transition_in, h as transition_out, j as destroy_component, b as detach_dev } from './client.888b8b96.js';
import { H as Hero, M as MobileHero, a as MobileImage, Q as Quote, b as MobileQuote, c as MobileSubFooter } from './MobileSubFooter.6dd90ef9.js';
import { S as SubFooter } from './SubFooter.1a22895e.js';

/* src/routes/approach.svelte generated by Svelte v3.24.1 */

function create_fragment(ctx) {
	let hero0;
	let t0;
	let mobilehero0;
	let t1;
	let mobileimage0;
	let t2;
	let quote;
	let t3;
	let mobilequote;
	let t4;
	let hero1;
	let t5;
	let mobilehero1;
	let t6;
	let mobileimage1;
	let t7;
	let hero2;
	let t8;
	let mobilehero2;
	let t9;
	let mobileimage2;
	let t10;
	let hero3;
	let t11;
	let mobilehero3;
	let t12;
	let mobileimage3;
	let t13;
	let hero4;
	let t14;
	let mobilehero4;
	let t15;
	let mobileimage4;
	let t16;
	let subfooter;
	let t17;
	let mobilesubfooter;
	let current;

	hero0 = new Hero({
			props: {
				subheader: "",
				header: "The Varry Approach",
				text: "<p>Varry is a platform that enables students and young professionals to learn, exchange, connect and make new friends on a sustainable basis.</p> <br> <p>In addition, the two-week Deep Dive with several formats delivered by our partners offers a unique learning opportunity. The schedule allows the participation in the Deep Dive and the community events to be perfectly integrated into the daily university routine.</p>",
				imageURL: "/approach/hero.png",
				bgURL: "/approach/firstShape.svg",
				isAux: "",
				smallerText: "smallerText",
				approach: "approach",
				date: true
			},
			$$inline: true
		});

	mobilehero0 = new MobileHero({
			props: {
				heading: "The Varry Approach",
				text: "<p>Varry is a platform which lets students and young professionals to learn, exchange, connect and make new friends on sustainable basis.</p> <br> <p>In addition, the two-week Deep Dive with several formats delivered by our partners offers a unique opportunity. The schedule allows the participation in the Deep Dive and the community events to be perfectly integrated into the daily university routine.</p>"
			},
			$$inline: true
		});

	mobileimage0 = new MobileImage({
			props: {
				imgUrl: "/approach/hero-mobile.png",
				bgUrl: "/approach/firstShape.svg"
			},
			$$inline: true
		});

	quote = new Quote({
			props: {
				heading: "Together we create an environment for passionate young professionals.",
				subtext: "",
				buttonBool: "false"
			},
			$$inline: true
		});

	mobilequote = new MobileQuote({
			props: {
				heading: "Together we create an environment for passionate young professionals.",
				text: "",
				button: false
			},
			$$inline: true
		});

	hero1 = new Hero({
			props: {
				subheader: "",
				header: "The Deep Dive",
				text: "<p style='margin-bottom: 10px;'>The Deep Dive consists of a mix of different learning formats and is the perfect opportunity to gain knowledge about digital products in addition to everyday life at university. Our selected partners and hand-picked speakers will let you ask all your questions as we attach great importance to making the sessions as interactive as possible. </p><p style='margin-bottom: 10px;'>Some of the next Deep Dive’s topics:</p> <p style='margin-bottom: 10px;'><b>IoT and Smart Home Devices, New Work or Sustainability within digital products.</b></p> <p style='margin-bottom: 10px;'>Start Date: 12.10.2020 <br> End Date: 23.10.2020</p>",
				imageURL: "/approach/calendar.svg",
				bgURL: "",
				isAux: "isAux",
				whiteText: "",
				extraText: "extraText",
				customImageStyles: "padding:10vmax;"
			},
			$$inline: true
		});

	mobilehero1 = new MobileHero({
			props: {
				heading: "The Deep Dive",
				text: "<p style='margin-bottom: 10px;'>The Deep Dive consists of a mix of different learning formats and is the perfect opportunity to gain knowledge about digital products in addition to everyday life at university. Our selected partners and hand-picked speakers will let you ask all your questions as we attach great importance to making the sessions as interactive as possible. </p><p style='margin-bottom: 10px;'>Some of the next Deep Dive’s topics:</p> <p style='margin-bottom: 10px;'><b>IoT and Smart Home Devices, New Work or Sustainability within digital products.</b></p> <p style='margin-bottom: 10px;'>Start Date: 12.10.2020 <br> End Date: 23.10.2020</p>"
			},
			$$inline: true
		});

	mobileimage1 = new MobileImage({
			props: {
				imgUrl: "/approach/calendar.svg",
				bgUrl: ""
			},
			$$inline: true
		});

	hero2 = new Hero({
			props: {
				subheader: "",
				header: "The Varry Community. <br>",
				text: "Our community, consisting of students and young professionals as well as our partner companies, is the heart of Varry. Within it, we want to enable everyone to grow personally and to make new, long-lasting connections. <br> Another special characteristic of Varry is that everything grows out of our community. This means that the community has a voice on all topics and formats that take place within Varry. We listen and deeply care about your wishes and improvement suggestions.",
				imageURL: "/approach/foto_call@2x.png",
				bgURL: "",
				isAux: "isAux",
				alternate: "true",
				extraText: "extraText",
				customImageStyles: "padding:10vmax;"
			},
			$$inline: true
		});

	mobilehero2 = new MobileHero({
			props: {
				heading: "The Varry Community. <br>",
				text: "Our community, consisting of students and young professionals as well as our partner companies, is the heart of Varry. Within it, we want to enable everyone to grow personally and to make new, long-lasting connections. Another special characteristic of Varry is that everything grows out of our community. This means that the community has a voice on all topics and formats that take place within Varry. We listen and deeply care about your wishes and improvement suggestions."
			},
			$$inline: true
		});

	mobileimage2 = new MobileImage({
			props: { imgUrl: "/approach/foto_call@2x.png" },
			$$inline: true
		});

	hero3 = new Hero({
			props: {
				subheader: "",
				header: "VIP Sessions.",
				text: "<p>Not only within the Deep Dive but also before and after, we invite personalities from the digital scene to talk about their experiences and serve as role models for our community. <br><br> We are convinced that this is one of the best ways to get impressions and in the best case to learn from the mistakes and experiences of others. We take special care that the selected speakers give space to answer all questions.</p>",
				imageURL: "/approach/speaker_profile.svg",
				bgURL: "/approach/2nd shape approach.svg",
				isAux: "",
				whiteText: "",
				extraText: "extraText",
				customImageStyles: "padding:10vmax;"
			},
			$$inline: true
		});

	mobilehero3 = new MobileHero({
			props: {
				heading: "VIP Sessions.",
				text: "<p>Not only within the Deep Dive but also before and after, we invite personalities from the digital scene to talk about their experiences and serve as role models for our community. <br><br> We are convinced that this is one of the best ways to get impressions and in the best case to learn from the mistakes and experiences of others. We take special care that the selected speakers give space to answer all questions.</p>"
			},
			$$inline: true
		});

	mobileimage3 = new MobileImage({
			props: {
				imgUrl: "/approach/speaker_profile.svg",
				bgUrl: ""
			},
			$$inline: true
		});

	hero4 = new Hero({
			props: {
				subheader: "",
				header: "Mentoring. <br>",
				text: "Within Varry, mentoring is offered for any topic. From questions on specific topics like frontend, engineering, frameworks to questions about your resume. <br><br> Our mentors will cover your back at all times.",
				imageURL: "/approach/last_pic_approach@2x.png",
				bgURL: "",
				isAux: "isAux",
				alternate: "true",
				extraText: "extraText",
				customImageStyles: "padding:10vmax;"
			},
			$$inline: true
		});

	mobilehero4 = new MobileHero({
			props: {
				heading: "Mentoring. <br>",
				text: "Within Varry, mentoring is offered for any topic. From questions on specific topics like frontend, engineering, frameworks to questions about your resume. <br><br> Our mentors will cover your back at all times."
			},
			$$inline: true
		});

	mobileimage4 = new MobileImage({
			props: {
				imgUrl: "/approach/last_pic_approach@2x.png",
				bgUrl: ""
			},
			$$inline: true
		});

	subfooter = new SubFooter({
			props: {
				heading: "Join the future of education",
				subtext: "One platform. Everything you need to kickstart your digital career.",
				buttonBool: "true",
				buttonLink: "/join",
				buttonText: "Join Now!"
			},
			$$inline: true
		});

	mobilesubfooter = new MobileSubFooter({
			props: {
				heading: "Join the future of education",
				text: "One platform. Everything you need to kickstart your digital career.",
				button: true,
				buttonLink: "/join",
				buttonText: "Join Now!"
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(hero0.$$.fragment);
			t0 = space();
			create_component(mobilehero0.$$.fragment);
			t1 = space();
			create_component(mobileimage0.$$.fragment);
			t2 = space();
			create_component(quote.$$.fragment);
			t3 = space();
			create_component(mobilequote.$$.fragment);
			t4 = space();
			create_component(hero1.$$.fragment);
			t5 = space();
			create_component(mobilehero1.$$.fragment);
			t6 = space();
			create_component(mobileimage1.$$.fragment);
			t7 = space();
			create_component(hero2.$$.fragment);
			t8 = space();
			create_component(mobilehero2.$$.fragment);
			t9 = space();
			create_component(mobileimage2.$$.fragment);
			t10 = space();
			create_component(hero3.$$.fragment);
			t11 = space();
			create_component(mobilehero3.$$.fragment);
			t12 = space();
			create_component(mobileimage3.$$.fragment);
			t13 = space();
			create_component(hero4.$$.fragment);
			t14 = space();
			create_component(mobilehero4.$$.fragment);
			t15 = space();
			create_component(mobileimage4.$$.fragment);
			t16 = space();
			create_component(subfooter.$$.fragment);
			t17 = space();
			create_component(mobilesubfooter.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(hero0.$$.fragment, nodes);
			t0 = claim_space(nodes);
			claim_component(mobilehero0.$$.fragment, nodes);
			t1 = claim_space(nodes);
			claim_component(mobileimage0.$$.fragment, nodes);
			t2 = claim_space(nodes);
			claim_component(quote.$$.fragment, nodes);
			t3 = claim_space(nodes);
			claim_component(mobilequote.$$.fragment, nodes);
			t4 = claim_space(nodes);
			claim_component(hero1.$$.fragment, nodes);
			t5 = claim_space(nodes);
			claim_component(mobilehero1.$$.fragment, nodes);
			t6 = claim_space(nodes);
			claim_component(mobileimage1.$$.fragment, nodes);
			t7 = claim_space(nodes);
			claim_component(hero2.$$.fragment, nodes);
			t8 = claim_space(nodes);
			claim_component(mobilehero2.$$.fragment, nodes);
			t9 = claim_space(nodes);
			claim_component(mobileimage2.$$.fragment, nodes);
			t10 = claim_space(nodes);
			claim_component(hero3.$$.fragment, nodes);
			t11 = claim_space(nodes);
			claim_component(mobilehero3.$$.fragment, nodes);
			t12 = claim_space(nodes);
			claim_component(mobileimage3.$$.fragment, nodes);
			t13 = claim_space(nodes);
			claim_component(hero4.$$.fragment, nodes);
			t14 = claim_space(nodes);
			claim_component(mobilehero4.$$.fragment, nodes);
			t15 = claim_space(nodes);
			claim_component(mobileimage4.$$.fragment, nodes);
			t16 = claim_space(nodes);
			claim_component(subfooter.$$.fragment, nodes);
			t17 = claim_space(nodes);
			claim_component(mobilesubfooter.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(hero0, target, anchor);
			insert_dev(target, t0, anchor);
			mount_component(mobilehero0, target, anchor);
			insert_dev(target, t1, anchor);
			mount_component(mobileimage0, target, anchor);
			insert_dev(target, t2, anchor);
			mount_component(quote, target, anchor);
			insert_dev(target, t3, anchor);
			mount_component(mobilequote, target, anchor);
			insert_dev(target, t4, anchor);
			mount_component(hero1, target, anchor);
			insert_dev(target, t5, anchor);
			mount_component(mobilehero1, target, anchor);
			insert_dev(target, t6, anchor);
			mount_component(mobileimage1, target, anchor);
			insert_dev(target, t7, anchor);
			mount_component(hero2, target, anchor);
			insert_dev(target, t8, anchor);
			mount_component(mobilehero2, target, anchor);
			insert_dev(target, t9, anchor);
			mount_component(mobileimage2, target, anchor);
			insert_dev(target, t10, anchor);
			mount_component(hero3, target, anchor);
			insert_dev(target, t11, anchor);
			mount_component(mobilehero3, target, anchor);
			insert_dev(target, t12, anchor);
			mount_component(mobileimage3, target, anchor);
			insert_dev(target, t13, anchor);
			mount_component(hero4, target, anchor);
			insert_dev(target, t14, anchor);
			mount_component(mobilehero4, target, anchor);
			insert_dev(target, t15, anchor);
			mount_component(mobileimage4, target, anchor);
			insert_dev(target, t16, anchor);
			mount_component(subfooter, target, anchor);
			insert_dev(target, t17, anchor);
			mount_component(mobilesubfooter, target, anchor);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(hero0.$$.fragment, local);
			transition_in(mobilehero0.$$.fragment, local);
			transition_in(mobileimage0.$$.fragment, local);
			transition_in(quote.$$.fragment, local);
			transition_in(mobilequote.$$.fragment, local);
			transition_in(hero1.$$.fragment, local);
			transition_in(mobilehero1.$$.fragment, local);
			transition_in(mobileimage1.$$.fragment, local);
			transition_in(hero2.$$.fragment, local);
			transition_in(mobilehero2.$$.fragment, local);
			transition_in(mobileimage2.$$.fragment, local);
			transition_in(hero3.$$.fragment, local);
			transition_in(mobilehero3.$$.fragment, local);
			transition_in(mobileimage3.$$.fragment, local);
			transition_in(hero4.$$.fragment, local);
			transition_in(mobilehero4.$$.fragment, local);
			transition_in(mobileimage4.$$.fragment, local);
			transition_in(subfooter.$$.fragment, local);
			transition_in(mobilesubfooter.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(hero0.$$.fragment, local);
			transition_out(mobilehero0.$$.fragment, local);
			transition_out(mobileimage0.$$.fragment, local);
			transition_out(quote.$$.fragment, local);
			transition_out(mobilequote.$$.fragment, local);
			transition_out(hero1.$$.fragment, local);
			transition_out(mobilehero1.$$.fragment, local);
			transition_out(mobileimage1.$$.fragment, local);
			transition_out(hero2.$$.fragment, local);
			transition_out(mobilehero2.$$.fragment, local);
			transition_out(mobileimage2.$$.fragment, local);
			transition_out(hero3.$$.fragment, local);
			transition_out(mobilehero3.$$.fragment, local);
			transition_out(mobileimage3.$$.fragment, local);
			transition_out(hero4.$$.fragment, local);
			transition_out(mobilehero4.$$.fragment, local);
			transition_out(mobileimage4.$$.fragment, local);
			transition_out(subfooter.$$.fragment, local);
			transition_out(mobilesubfooter.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(hero0, detaching);
			if (detaching) detach_dev(t0);
			destroy_component(mobilehero0, detaching);
			if (detaching) detach_dev(t1);
			destroy_component(mobileimage0, detaching);
			if (detaching) detach_dev(t2);
			destroy_component(quote, detaching);
			if (detaching) detach_dev(t3);
			destroy_component(mobilequote, detaching);
			if (detaching) detach_dev(t4);
			destroy_component(hero1, detaching);
			if (detaching) detach_dev(t5);
			destroy_component(mobilehero1, detaching);
			if (detaching) detach_dev(t6);
			destroy_component(mobileimage1, detaching);
			if (detaching) detach_dev(t7);
			destroy_component(hero2, detaching);
			if (detaching) detach_dev(t8);
			destroy_component(mobilehero2, detaching);
			if (detaching) detach_dev(t9);
			destroy_component(mobileimage2, detaching);
			if (detaching) detach_dev(t10);
			destroy_component(hero3, detaching);
			if (detaching) detach_dev(t11);
			destroy_component(mobilehero3, detaching);
			if (detaching) detach_dev(t12);
			destroy_component(mobileimage3, detaching);
			if (detaching) detach_dev(t13);
			destroy_component(hero4, detaching);
			if (detaching) detach_dev(t14);
			destroy_component(mobilehero4, detaching);
			if (detaching) detach_dev(t15);
			destroy_component(mobileimage4, detaching);
			if (detaching) detach_dev(t16);
			destroy_component(subfooter, detaching);
			if (detaching) detach_dev(t17);
			destroy_component(mobilesubfooter, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Approach> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Approach", $$slots, []);

	$$self.$capture_state = () => ({
		Quote,
		Hero,
		SubFooter,
		MobileHero,
		MobileImage,
		MobileQuote,
		MobileSubFooter
	});

	return [];
}

class Approach extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Approach",
			options,
			id: create_fragment.name
		});
	}
}

export default Approach;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwcm9hY2guN2I5NmM5ZmQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYXBwcm9hY2guc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5cdGltcG9ydCBRdW90ZSBmcm9tICcuLi9jb21wb25lbnRzL1F1b3RlLnN2ZWx0ZSdcblx0aW1wb3J0IEhlcm8gZnJvbSAnLi4vY29tcG9uZW50cy9IZXJvLnN2ZWx0ZSdcblx0aW1wb3J0IFN1YkZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL1N1YkZvb3Rlci5zdmVsdGUnXG5cdGltcG9ydCBNb2JpbGVIZXJvIGZyb20gJy4uL2NvbXBvbmVudHMvTW9iaWxlSGVyby5zdmVsdGUnXG5cdGltcG9ydCBNb2JpbGVJbWFnZSBmcm9tICcuLi9jb21wb25lbnRzL01vYmlsZUltYWdlLnN2ZWx0ZSdcblx0aW1wb3J0IE1vYmlsZVF1b3RlIGZyb20gJy4uL2NvbXBvbmVudHMvTW9iaWxlUXVvdGUuc3ZlbHRlJ1xuXHRpbXBvcnQgTW9iaWxlU3ViRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvTW9iaWxlU3ViRm9vdGVyLnN2ZWx0ZSdcbjwvc2NyaXB0PlxuXG48c3R5bGU+IFxuOmdsb2JhbChzdmcpIHtcbiAgICBmb250LWZhbWlseTogJ1dvcmsgU2Fucyc7XG59XG48L3N0eWxlPlxuPEhlcm9cblx0c3ViaGVhZGVyPVwiXCJcblx0aGVhZGVyPVwiVGhlIFZhcnJ5IEFwcHJvYWNoXCJcblx0dGV4dD1cIjxwPlZhcnJ5IGlzIGEgcGxhdGZvcm0gdGhhdCBlbmFibGVzIHN0dWRlbnRzIGFuZCB5b3VuZyBwcm9mZXNzaW9uYWxzIHRvIGxlYXJuLCBleGNoYW5nZSwgY29ubmVjdCBhbmQgbWFrZSBuZXcgZnJpZW5kcyBvbiBhIHN1c3RhaW5hYmxlIGJhc2lzLjwvcD4gPGJyPiA8cD5JbiBhZGRpdGlvbiwgdGhlIHR3by13ZWVrIERlZXAgRGl2ZSB3aXRoIHNldmVyYWwgZm9ybWF0cyBkZWxpdmVyZWQgYnkgb3VyIHBhcnRuZXJzIG9mZmVycyBhIHVuaXF1ZSBsZWFybmluZyBvcHBvcnR1bml0eS4gVGhlIHNjaGVkdWxlIGFsbG93cyB0aGUgcGFydGljaXBhdGlvbiBpbiB0aGUgRGVlcCBEaXZlIGFuZCB0aGUgY29tbXVuaXR5IGV2ZW50cyB0byBiZSBwZXJmZWN0bHkgaW50ZWdyYXRlZCBpbnRvIHRoZSBkYWlseSB1bml2ZXJzaXR5IHJvdXRpbmUuPC9wPlwiXG5cdGltYWdlVVJMPVwiL2FwcHJvYWNoL2hlcm8ucG5nXCJcblx0YmdVUkw9Jy9hcHByb2FjaC9maXJzdFNoYXBlLnN2Zydcblx0aXNBdXg9Jydcblx0c21hbGxlclRleHQ9J3NtYWxsZXJUZXh0J1xuXHRhcHByb2FjaD0nYXBwcm9hY2gnXG5cdGRhdGU9e3RydWV9XG4vPlxuXG48TW9iaWxlSGVyb1xuXHRoZWFkaW5nPVwiVGhlIFZhcnJ5IEFwcHJvYWNoXCJcblx0dGV4dD1cIjxwPlZhcnJ5IGlzIGEgcGxhdGZvcm0gd2hpY2ggbGV0cyBzdHVkZW50cyBhbmQgeW91bmcgcHJvZmVzc2lvbmFscyB0byBsZWFybiwgZXhjaGFuZ2UsIGNvbm5lY3QgYW5kIG1ha2UgbmV3IGZyaWVuZHMgb24gc3VzdGFpbmFibGUgYmFzaXMuPC9wPiA8YnI+IDxwPkluIGFkZGl0aW9uLCB0aGUgdHdvLXdlZWsgRGVlcCBEaXZlIHdpdGggc2V2ZXJhbCBmb3JtYXRzIGRlbGl2ZXJlZCBieSBvdXIgcGFydG5lcnMgb2ZmZXJzIGEgdW5pcXVlIG9wcG9ydHVuaXR5LiBUaGUgc2NoZWR1bGUgYWxsb3dzIHRoZSBwYXJ0aWNpcGF0aW9uIGluIHRoZSBEZWVwIERpdmUgYW5kIHRoZSBjb21tdW5pdHkgZXZlbnRzIHRvIGJlIHBlcmZlY3RseSBpbnRlZ3JhdGVkIGludG8gdGhlIGRhaWx5IHVuaXZlcnNpdHkgcm91dGluZS48L3A+XCJcbi8+XG5cbjxNb2JpbGVJbWFnZVxuXHRpbWdVcmw9XCIvYXBwcm9hY2gvaGVyby1tb2JpbGUucG5nXCJcblx0YmdVcmw9Jy9hcHByb2FjaC9maXJzdFNoYXBlLnN2Zydcbi8+XG5cblxuPFF1b3RlIFxuXHRoZWFkaW5nPVwiVG9nZXRoZXIgd2UgY3JlYXRlIGFuIGVudmlyb25tZW50IGZvciBwYXNzaW9uYXRlIHlvdW5nIHByb2Zlc3Npb25hbHMuXCIgXG5cdHN1YnRleHQ9XCJcIlxuXHRidXR0b25Cb29sPVwiZmFsc2VcIlxuLz5cblxuPE1vYmlsZVF1b3RlXG5cdGhlYWRpbmc9XCJUb2dldGhlciB3ZSBjcmVhdGUgYW4gZW52aXJvbm1lbnQgZm9yIHBhc3Npb25hdGUgeW91bmcgcHJvZmVzc2lvbmFscy5cIiBcblx0dGV4dD1cIlwiXG5cdGJ1dHRvbj17ZmFsc2V9XG4vPlxuXG5cblxuPEhlcm9cblx0c3ViaGVhZGVyPVwiXCJcblx0aGVhZGVyPVwiVGhlIERlZXAgRGl2ZVwiXG5cdHRleHQ9XCI8cCBzdHlsZT0nbWFyZ2luLWJvdHRvbTogMTBweDsnPlRoZSBEZWVwIERpdmUgY29uc2lzdHMgb2YgYSBtaXggb2YgZGlmZmVyZW50IGxlYXJuaW5nIGZvcm1hdHMgYW5kIGlzIHRoZSBwZXJmZWN0IG9wcG9ydHVuaXR5IHRvIGdhaW4ga25vd2xlZGdlIGFib3V0IGRpZ2l0YWwgcHJvZHVjdHMgaW4gYWRkaXRpb24gdG8gZXZlcnlkYXkgbGlmZSBhdCB1bml2ZXJzaXR5LiBPdXIgc2VsZWN0ZWQgcGFydG5lcnMgYW5kIGhhbmQtcGlja2VkIHNwZWFrZXJzIHdpbGwgbGV0IHlvdSBhc2sgYWxsIHlvdXIgcXVlc3Rpb25zIGFzIHdlIGF0dGFjaCBncmVhdCBpbXBvcnRhbmNlIHRvIG1ha2luZyB0aGUgc2Vzc2lvbnMgYXMgaW50ZXJhY3RpdmUgYXMgcG9zc2libGUuIDwvcD48cCBzdHlsZT0nbWFyZ2luLWJvdHRvbTogMTBweDsnPlNvbWUgb2YgdGhlIG5leHQgRGVlcCBEaXZlJnJzcXVvO3MgdG9waWNzOjwvcD4gPHAgc3R5bGU9J21hcmdpbi1ib3R0b206IDEwcHg7Jz48Yj5Jb1QgYW5kIFNtYXJ0IEhvbWUgRGV2aWNlcywgTmV3IFdvcmsgb3IgU3VzdGFpbmFiaWxpdHkgd2l0aGluIGRpZ2l0YWwgcHJvZHVjdHMuPC9iPjwvcD4gPHAgc3R5bGU9J21hcmdpbi1ib3R0b206IDEwcHg7Jz5TdGFydCBEYXRlOiAxMi4xMC4yMDIwIDxicj4gRW5kIERhdGU6IDIzLjEwLjIwMjA8L3A+XCJcblx0aW1hZ2VVUkw9XCIvYXBwcm9hY2gvY2FsZW5kYXIuc3ZnXCJcblx0YmdVUkw9Jydcblx0aXNBdXg9J2lzQXV4J1xuXHR3aGl0ZVRleHQ9Jydcblx0ZXh0cmFUZXh0PSdleHRyYVRleHQnXG5cdGN1c3RvbUltYWdlU3R5bGVzPXsncGFkZGluZzoxMHZtYXg7J31cbi8+XG5cbjxNb2JpbGVIZXJvXG5cdGhlYWRpbmc9XCJUaGUgRGVlcCBEaXZlXCJcblx0dGV4dD1cIjxwIHN0eWxlPSdtYXJnaW4tYm90dG9tOiAxMHB4Oyc+VGhlIERlZXAgRGl2ZSBjb25zaXN0cyBvZiBhIG1peCBvZiBkaWZmZXJlbnQgbGVhcm5pbmcgZm9ybWF0cyBhbmQgaXMgdGhlIHBlcmZlY3Qgb3Bwb3J0dW5pdHkgdG8gZ2FpbiBrbm93bGVkZ2UgYWJvdXQgZGlnaXRhbCBwcm9kdWN0cyBpbiBhZGRpdGlvbiB0byBldmVyeWRheSBsaWZlIGF0IHVuaXZlcnNpdHkuIE91ciBzZWxlY3RlZCBwYXJ0bmVycyBhbmQgaGFuZC1waWNrZWQgc3BlYWtlcnMgd2lsbCBsZXQgeW91IGFzayBhbGwgeW91ciBxdWVzdGlvbnMgYXMgd2UgYXR0YWNoIGdyZWF0IGltcG9ydGFuY2UgdG8gbWFraW5nIHRoZSBzZXNzaW9ucyBhcyBpbnRlcmFjdGl2ZSBhcyBwb3NzaWJsZS4gPC9wPjxwIHN0eWxlPSdtYXJnaW4tYm90dG9tOiAxMHB4Oyc+U29tZSBvZiB0aGUgbmV4dCBEZWVwIERpdmUmcnNxdW87cyB0b3BpY3M6PC9wPiA8cCBzdHlsZT0nbWFyZ2luLWJvdHRvbTogMTBweDsnPjxiPklvVCBhbmQgU21hcnQgSG9tZSBEZXZpY2VzLCBOZXcgV29yayBvciBTdXN0YWluYWJpbGl0eSB3aXRoaW4gZGlnaXRhbCBwcm9kdWN0cy48L2I+PC9wPiA8cCBzdHlsZT0nbWFyZ2luLWJvdHRvbTogMTBweDsnPlN0YXJ0IERhdGU6IDEyLjEwLjIwMjAgPGJyPiBFbmQgRGF0ZTogMjMuMTAuMjAyMDwvcD5cIlxuLz5cblxuPE1vYmlsZUltYWdlXG5cdGltZ1VybD1cIi9hcHByb2FjaC9jYWxlbmRhci5zdmdcIlxuXHRiZ1VybD0nJ1xuLz5cblxuXG5cbjxIZXJvXG5cdHN1YmhlYWRlcj1cIlwiXG5cdGhlYWRlcj1cIlRoZSBWYXJyeSBDb21tdW5pdHkuIDxicj5cIlxuXHR0ZXh0PVwiT3VyIGNvbW11bml0eSwgY29uc2lzdGluZyBvZiBzdHVkZW50cyBhbmQgeW91bmcgcHJvZmVzc2lvbmFscyBhcyB3ZWxsIGFzIG91ciBwYXJ0bmVyIGNvbXBhbmllcywgaXMgdGhlIGhlYXJ0IG9mIFZhcnJ5LiBXaXRoaW4gaXQsIHdlIHdhbnQgdG8gZW5hYmxlIGV2ZXJ5b25lIHRvIGdyb3cgcGVyc29uYWxseSBhbmQgdG8gbWFrZSBuZXcsIGxvbmctbGFzdGluZyBjb25uZWN0aW9ucy4gPGJyPiBBbm90aGVyIHNwZWNpYWwgY2hhcmFjdGVyaXN0aWMgb2YgVmFycnkgaXMgdGhhdCBldmVyeXRoaW5nIGdyb3dzIG91dCBvZiBvdXIgY29tbXVuaXR5LiBUaGlzIG1lYW5zIHRoYXQgdGhlIGNvbW11bml0eSBoYXMgYSB2b2ljZSBvbiBhbGwgdG9waWNzIGFuZCBmb3JtYXRzIHRoYXQgdGFrZSBwbGFjZSB3aXRoaW4gVmFycnkuIFdlIGxpc3RlbiBhbmQgZGVlcGx5IGNhcmUgYWJvdXQgeW91ciB3aXNoZXMgYW5kIGltcHJvdmVtZW50IHN1Z2dlc3Rpb25zLlwiXG5cdGltYWdlVVJMPVwiL2FwcHJvYWNoL2ZvdG9fY2FsbEAyeC5wbmdcIlxuXHRiZ1VSTD0nJ1xuXHRpc0F1eD0naXNBdXgnXG5cdGFsdGVybmF0ZT0ndHJ1ZSdcblx0ZXh0cmFUZXh0PSdleHRyYVRleHQnXG5cdGN1c3RvbUltYWdlU3R5bGVzPXsncGFkZGluZzoxMHZtYXg7J31cbi8+XG5cbjxNb2JpbGVIZXJvXG5cdGhlYWRpbmc9XCJUaGUgVmFycnkgQ29tbXVuaXR5LiA8YnI+XCJcblx0dGV4dD1cIk91ciBjb21tdW5pdHksIGNvbnNpc3Rpbmcgb2Ygc3R1ZGVudHMgYW5kIHlvdW5nIHByb2Zlc3Npb25hbHMgYXMgd2VsbCBhcyBvdXIgcGFydG5lciBjb21wYW5pZXMsIGlzIHRoZSBoZWFydCBvZiBWYXJyeS4gV2l0aGluIGl0LCB3ZSB3YW50IHRvIGVuYWJsZSBldmVyeW9uZSB0byBncm93IHBlcnNvbmFsbHkgYW5kIHRvIG1ha2UgbmV3LCBsb25nLWxhc3RpbmcgY29ubmVjdGlvbnMuIEFub3RoZXIgc3BlY2lhbCBjaGFyYWN0ZXJpc3RpYyBvZiBWYXJyeSBpcyB0aGF0IGV2ZXJ5dGhpbmcgZ3Jvd3Mgb3V0IG9mIG91ciBjb21tdW5pdHkuIFRoaXMgbWVhbnMgdGhhdCB0aGUgY29tbXVuaXR5IGhhcyBhIHZvaWNlIG9uIGFsbCB0b3BpY3MgYW5kIGZvcm1hdHMgdGhhdCB0YWtlIHBsYWNlIHdpdGhpbiBWYXJyeS4gV2UgbGlzdGVuIGFuZCBkZWVwbHkgY2FyZSBhYm91dCB5b3VyIHdpc2hlcyBhbmQgaW1wcm92ZW1lbnQgc3VnZ2VzdGlvbnMuXCJcbi8+XG5cbjxNb2JpbGVJbWFnZVxuXHRpbWdVcmw9XCIvYXBwcm9hY2gvZm90b19jYWxsQDJ4LnBuZ1wiXG4vPlxuXG5cbjxIZXJvXG5cdHN1YmhlYWRlcj1cIlwiXG5cdGhlYWRlcj1cIlZJUCBTZXNzaW9ucy5cIlxuXHR0ZXh0PVwiPHA+Tm90IG9ubHkgd2l0aGluIHRoZSBEZWVwIERpdmUgYnV0IGFsc28gYmVmb3JlIGFuZCBhZnRlciwgd2UgaW52aXRlIHBlcnNvbmFsaXRpZXMgZnJvbSB0aGUgZGlnaXRhbCBzY2VuZSB0byB0YWxrIGFib3V0IHRoZWlyIGV4cGVyaWVuY2VzIGFuZCBzZXJ2ZSBhcyByb2xlIG1vZGVscyBmb3Igb3VyIGNvbW11bml0eS4gPGJyPjxicj4gV2UgYXJlIGNvbnZpbmNlZCB0aGF0IHRoaXMgaXMgb25lIG9mIHRoZSBiZXN0IHdheXMgdG8gZ2V0IGltcHJlc3Npb25zIGFuZCBpbiB0aGUgYmVzdCBjYXNlIHRvIGxlYXJuIGZyb20gdGhlIG1pc3Rha2VzIGFuZCBleHBlcmllbmNlcyBvZiBvdGhlcnMuIFdlIHRha2Ugc3BlY2lhbCBjYXJlIHRoYXQgdGhlIHNlbGVjdGVkIHNwZWFrZXJzIGdpdmUgc3BhY2UgdG8gYW5zd2VyIGFsbCBxdWVzdGlvbnMuPC9wPlwiXG5cdGltYWdlVVJMPVwiL2FwcHJvYWNoL3NwZWFrZXJfcHJvZmlsZS5zdmdcIlxuXHRiZ1VSTD0nL2FwcHJvYWNoLzJuZCBzaGFwZSBhcHByb2FjaC5zdmcnXG5cdGlzQXV4PScnXG5cdHdoaXRlVGV4dD0nJ1xuICAgIGV4dHJhVGV4dD0nZXh0cmFUZXh0J1xuXHRjdXN0b21JbWFnZVN0eWxlcz17J3BhZGRpbmc6MTB2bWF4Oyd9XG4vPlxuXG48TW9iaWxlSGVyb1xuXHRoZWFkaW5nPVwiVklQIFNlc3Npb25zLlwiXG5cdHRleHQ9XCI8cD5Ob3Qgb25seSB3aXRoaW4gdGhlIERlZXAgRGl2ZSBidXQgYWxzbyBiZWZvcmUgYW5kIGFmdGVyLCB3ZSBpbnZpdGUgcGVyc29uYWxpdGllcyBmcm9tIHRoZSBkaWdpdGFsIHNjZW5lIHRvIHRhbGsgYWJvdXQgdGhlaXIgZXhwZXJpZW5jZXMgYW5kIHNlcnZlIGFzIHJvbGUgbW9kZWxzIGZvciBvdXIgY29tbXVuaXR5LiA8YnI+PGJyPiBXZSBhcmUgY29udmluY2VkIHRoYXQgdGhpcyBpcyBvbmUgb2YgdGhlIGJlc3Qgd2F5cyB0byBnZXQgaW1wcmVzc2lvbnMgYW5kIGluIHRoZSBiZXN0IGNhc2UgdG8gbGVhcm4gZnJvbSB0aGUgbWlzdGFrZXMgYW5kIGV4cGVyaWVuY2VzIG9mIG90aGVycy4gV2UgdGFrZSBzcGVjaWFsIGNhcmUgdGhhdCB0aGUgc2VsZWN0ZWQgc3BlYWtlcnMgZ2l2ZSBzcGFjZSB0byBhbnN3ZXIgYWxsIHF1ZXN0aW9ucy48L3A+XCJcbi8+XG5cbjxNb2JpbGVJbWFnZVxuXHRpbWdVcmw9XCIvYXBwcm9hY2gvc3BlYWtlcl9wcm9maWxlLnN2Z1wiXG5cdGJnVXJsPScnXG4vPlxuXG5cbjxIZXJvXG5cdHN1YmhlYWRlcj1cIlwiXG5cdGhlYWRlcj1cIk1lbnRvcmluZy4gPGJyPlwiXG5cdHRleHQ9XCJXaXRoaW4gVmFycnksIG1lbnRvcmluZyBpcyBvZmZlcmVkIGZvciBhbnkgdG9waWMuIEZyb20gcXVlc3Rpb25zIG9uIHNwZWNpZmljIHRvcGljcyBsaWtlIGZyb250ZW5kLCBlbmdpbmVlcmluZywgZnJhbWV3b3JrcyB0byBxdWVzdGlvbnMgYWJvdXQgeW91ciByZXN1bWUuIDxicj48YnI+IE91ciBtZW50b3JzIHdpbGwgY292ZXIgeW91ciBiYWNrIGF0IGFsbCB0aW1lcy5cIlxuXHRpbWFnZVVSTD1cIi9hcHByb2FjaC9sYXN0X3BpY19hcHByb2FjaEAyeC5wbmdcIlxuXHRiZ1VSTD0nJ1xuXHRpc0F1eD0naXNBdXgnXG5cdGFsdGVybmF0ZT0ndHJ1ZSdcbiAgICBleHRyYVRleHQ9J2V4dHJhVGV4dCdcblx0Y3VzdG9tSW1hZ2VTdHlsZXM9eydwYWRkaW5nOjEwdm1heDsnfVxuLz5cblxuPE1vYmlsZUhlcm9cblx0aGVhZGluZz1cIk1lbnRvcmluZy4gPGJyPlwiXG5cdHRleHQ9XCJXaXRoaW4gVmFycnksIG1lbnRvcmluZyBpcyBvZmZlcmVkIGZvciBhbnkgdG9waWMuIEZyb20gcXVlc3Rpb25zIG9uIHNwZWNpZmljIHRvcGljcyBsaWtlIGZyb250ZW5kLCBlbmdpbmVlcmluZywgZnJhbWV3b3JrcyB0byBxdWVzdGlvbnMgYWJvdXQgeW91ciByZXN1bWUuIDxicj48YnI+IE91ciBtZW50b3JzIHdpbGwgY292ZXIgeW91ciBiYWNrIGF0IGFsbCB0aW1lcy5cIlxuLz5cblxuPE1vYmlsZUltYWdlXG5cdGltZ1VybD1cIi9hcHByb2FjaC9sYXN0X3BpY19hcHByb2FjaEAyeC5wbmdcIlxuXHRiZ1VybD0nJ1xuLz5cblxuXG48U3ViRm9vdGVyIFxuXHRoZWFkaW5nPVwiSm9pbiB0aGUgZnV0dXJlIG9mIGVkdWNhdGlvblwiIFxuXHRzdWJ0ZXh0PVwiT25lIHBsYXRmb3JtLiBFdmVyeXRoaW5nIHlvdSBuZWVkIHRvIGtpY2tzdGFydCB5b3VyIGRpZ2l0YWwgY2FyZWVyLlwiXG5cdGJ1dHRvbkJvb2w9XCJ0cnVlXCJcblx0YnV0dG9uTGluaz1cIi9qb2luXCJcblx0YnV0dG9uVGV4dD1cIkpvaW4gTm93IVwiLz5cblxuPE1vYmlsZVN1YkZvb3RlclxuXHRoZWFkaW5nPVwiSm9pbiB0aGUgZnV0dXJlIG9mIGVkdWNhdGlvblwiIFxuXHR0ZXh0PVwiT25lIHBsYXRmb3JtLiBFdmVyeXRoaW5nIHlvdSBuZWVkIHRvIGtpY2tzdGFydCB5b3VyIGRpZ2l0YWwgY2FyZWVyLlwiXG5cdGJ1dHRvbj17dHJ1ZX1cblx0YnV0dG9uTGluaz1cIi9qb2luXCJcblx0YnV0dG9uVGV4dD1cIkpvaW4gTm93IVwiXG4vPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBd0JPLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF1QkYsS0FBSzs7Ozs7Ozs7Ozs7Ozs7O3VCQWNNLGlCQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkF3QmpCLGlCQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFzQmpCLGlCQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkF1QmpCLGlCQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBd0I1QixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
