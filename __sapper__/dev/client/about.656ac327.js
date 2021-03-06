import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, a as space, c as create_component, q as query_selector_all, b as detach_dev, e as claim_space, f as claim_component, g as insert_dev, m as mount_component, n as noop, t as transition_in, h as transition_out, j as destroy_component } from './client.888b8b96.js';
import { H as Hero, M as MobileHero, Q as Quote, a as MobileImage, b as MobileQuote, c as MobileSubFooter } from './MobileSubFooter.6dd90ef9.js';

/* src/routes/about.svelte generated by Svelte v3.24.1 */

function create_fragment(ctx) {
	let t0;
	let hero0;
	let t1;
	let mobilehero;
	let t2;
	let hero1;
	let current;

	hero0 = new Hero({
			props: {
				subheader: "",
				header: "We create a new and unique exchange opportunity with longlasting benefits for our community.",
				text: "",
				bgURL: "/about/start_shape_team.svg",
				isAux: ""
			},
			$$inline: true
		});

	mobilehero = new MobileHero({
			props: {
				heading: "We create a new and unique exchange opportunity with longlasting benefits for our community.",
				text: ""
			},
			$$inline: true
		});

	hero1 = new Hero({
			props: {
				subheader: "",
				header: "The Story behind Varry.",
				text: "<p style='margin-bottom: 10px;'> Why is there no passionate online community with exciting learning opportunities? is a question Henrik and Nate asked themselves while being stuck in quarantine for 6 weeks. Before that, they co-organized the unicon Berlin, a student-run digital products conference, which was one of the last events in Berlin – just before the lockdown. Three days full of interesting input and exchange with students and companies, but why just limit it to only a few days?</p><p style='margin-bottom: 10px;'>After successfully completing this pilot project with 60 students and 4 partner companies from across Germany, the decision was made to roll out the Varry product as it is now.   With the strong commitment out of the community the second version, the so-called Deep Dive, is starting in October 2020. We are excited to support the professional development of young professionals by setting up this unique environment and close the gap between companies and students for a better exchange.</p>",
				imageURL: "/about/founder_team@2x.png",
				bgURL: "",
				isAux: "isAux",
				whiteText: "",
				extraText: "extraText",
				customImageStyles: "padding:10vmax;"
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			t0 = space();
			create_component(hero0.$$.fragment);
			t1 = space();
			create_component(mobilehero.$$.fragment);
			t2 = space();
			create_component(hero1.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-6dhl87\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			claim_component(hero0.$$.fragment, nodes);
			t1 = claim_space(nodes);
			claim_component(mobilehero.$$.fragment, nodes);
			t2 = claim_space(nodes);
			claim_component(hero1.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			document.title = "Imprint";
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			mount_component(hero0, target, anchor);
			insert_dev(target, t1, anchor);
			mount_component(mobilehero, target, anchor);
			insert_dev(target, t2, anchor);
			mount_component(hero1, target, anchor);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(hero0.$$.fragment, local);
			transition_in(mobilehero.$$.fragment, local);
			transition_in(hero1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(hero0.$$.fragment, local);
			transition_out(mobilehero.$$.fragment, local);
			transition_out(hero1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			destroy_component(hero0, detaching);
			if (detaching) detach_dev(t1);
			destroy_component(mobilehero, detaching);
			if (detaching) detach_dev(t2);
			destroy_component(hero1, detaching);
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
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<About> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("About", $$slots, []);

	$$self.$capture_state = () => ({
		Quote,
		Hero,
		MobileHero,
		MobileImage,
		MobileQuote,
		MobileSubFooter
	});

	return [];
}

class About extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "About",
			options,
			id: create_fragment.name
		});
	}
}

export default About;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuNjU2YWMzMjcuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYWJvdXQuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPkltcHJpbnQ8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPHNjcmlwdD5cblx0aW1wb3J0IFF1b3RlIGZyb20gJy4uL2NvbXBvbmVudHMvUXVvdGUuc3ZlbHRlJ1xuXHRpbXBvcnQgSGVybyBmcm9tICcuLi9jb21wb25lbnRzL0hlcm8uc3ZlbHRlJ1xuXHRpbXBvcnQgTW9iaWxlSGVybyBmcm9tICcuLi9jb21wb25lbnRzL01vYmlsZUhlcm8uc3ZlbHRlJ1xuXHRpbXBvcnQgTW9iaWxlSW1hZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9Nb2JpbGVJbWFnZS5zdmVsdGUnXG5cdGltcG9ydCBNb2JpbGVRdW90ZSBmcm9tICcuLi9jb21wb25lbnRzL01vYmlsZVF1b3RlLnN2ZWx0ZSdcblx0aW1wb3J0IE1vYmlsZVN1YkZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL01vYmlsZVN1YkZvb3Rlci5zdmVsdGUnXG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAgIC5waG90b3Mge1xuICAgICAgICBwYWRkaW5nOiA4dm1heCA1dm1heDtcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKCcvYWJvdXQvbWVldF90ZWFtX3NoYXBlLnN2ZycpIGxlZnQgY2VudGVyIG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgICAgICAvKiBjb2xvcjogI2ZmZiAhaW1wb3J0YW50OyAqL1xuICAgIH1cbiAgICAucGhvdG9zIGgxIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG4gICAgLmdyaWQtY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xuICAgICAgICBnYXA6IDQlIDQlO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcIi4gLiAuIC5cIiBcIi4gLiAuIC5cIiBcIi4gLiAuIC5cIjtcbiAgICB9XG5cbiAgICBzcGFuIHtcbiAgICAgICAgY29sb3I6ICMyMDIwMjA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgICAuZ3JpZC1jb250YWluZXIgZGl2IGltZ3tcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG5cbiAgICB9XG4gICAgLnRpdGxlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAuOHJlbTtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWJvZHktZm9udHMpO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgcGFkZGluZzogMnB4IDEwcHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCA1cHggIzAwMDAwMDIxO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIH1cblxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDI0cHgpIHtcbiAgICAuZ3JpZC1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyO1xuICAgICAgICBnYXA6IDQlIDQlO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcIi4gLlwiIFwiLiAuXCIgXCIuIC5cIiBcIi4gLlwiIFwiLiAuXCIgXCIuIC5cIjtcbiAgICB9XG4gICAgc3BhbiAgIHtcbiAgICAgICAgY29sb3I6ICMyMDIwMjA7IFxuXG4gICAgfVxuICAgIC50aXRsZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogLjdyZW07XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1ib2R5LWZvbnRzKTtcbiAgICAgICAgY29sb3I6ICMyMDIwMjA7IFxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgIH1cbiAgICB9XG48L3N0eWxlPlxuPEhlcm9cblx0c3ViaGVhZGVyPVwiXCJcblx0aGVhZGVyPVwiV2UgY3JlYXRlIGEgbmV3IGFuZCB1bmlxdWUgZXhjaGFuZ2Ugb3Bwb3J0dW5pdHkgd2l0aCBsb25nbGFzdGluZyBiZW5lZml0cyBmb3Igb3VyIGNvbW11bml0eS5cIlxuXHR0ZXh0PVwiXCJcblx0YmdVUkw9Jy9hYm91dC9zdGFydF9zaGFwZV90ZWFtLnN2Zydcblx0aXNBdXg9Jydcbi8+XG5cbjxNb2JpbGVIZXJvXG5cdGhlYWRpbmc9XCJXZSBjcmVhdGUgYSBuZXcgYW5kIHVuaXF1ZSBleGNoYW5nZSBvcHBvcnR1bml0eSB3aXRoIGxvbmdsYXN0aW5nIGJlbmVmaXRzIGZvciBvdXIgY29tbXVuaXR5LlwiXG5cdHRleHQ9XCJcIlxuLz5cblxuPEhlcm9cblx0c3ViaGVhZGVyPVwiXCJcblx0aGVhZGVyPVwiVGhlIFN0b3J5IGJlaGluZCBWYXJyeS5cIlxuXHR0ZXh0PVwiPHAgc3R5bGU9J21hcmdpbi1ib3R0b206IDEwcHg7Jz4gV2h5IGlzIHRoZXJlIG5vIHBhc3Npb25hdGUgb25saW5lIGNvbW11bml0eSB3aXRoIGV4Y2l0aW5nIGxlYXJuaW5nIG9wcG9ydHVuaXRpZXM/IGlzIGEgcXVlc3Rpb24gSGVucmlrIGFuZCBOYXRlIGFza2VkIHRoZW1zZWx2ZXMgd2hpbGUgYmVpbmcgc3R1Y2sgaW4gcXVhcmFudGluZSBmb3IgNiB3ZWVrcy4gQmVmb3JlIHRoYXQsIHRoZXkgY28tb3JnYW5pemVkIHRoZSB1bmljb24gQmVybGluLCBhIHN0dWRlbnQtcnVuIGRpZ2l0YWwgcHJvZHVjdHMgY29uZmVyZW5jZSwgd2hpY2ggd2FzIG9uZSBvZiB0aGUgbGFzdCBldmVudHMgaW4gQmVybGluIOKAkyBqdXN0IGJlZm9yZSB0aGUgbG9ja2Rvd24uIFRocmVlIGRheXMgZnVsbCBvZiBpbnRlcmVzdGluZyBpbnB1dCBhbmQgZXhjaGFuZ2Ugd2l0aCBzdHVkZW50cyBhbmQgY29tcGFuaWVzLCBidXQgd2h5IGp1c3QgbGltaXQgaXQgdG8gb25seSBhIGZldyBkYXlzPzwvcD48cCBzdHlsZT0nbWFyZ2luLWJvdHRvbTogMTBweDsnPkFmdGVyIHN1Y2Nlc3NmdWxseSBjb21wbGV0aW5nIHRoaXMgcGlsb3QgcHJvamVjdCB3aXRoIDYwIHN0dWRlbnRzIGFuZCA0IHBhcnRuZXIgY29tcGFuaWVzIGZyb20gYWNyb3NzIEdlcm1hbnksIHRoZSBkZWNpc2lvbiB3YXMgbWFkZSB0byByb2xsIG91dCB0aGUgVmFycnkgcHJvZHVjdCBhcyBpdCBpcyBub3cuIOKAqOKAqFdpdGggdGhlIHN0cm9uZyBjb21taXRtZW50IG91dCBvZiB0aGUgY29tbXVuaXR5IHRoZSBzZWNvbmQgdmVyc2lvbiwgdGhlIHNvLWNhbGxlZCBEZWVwIERpdmUsIGlzIHN0YXJ0aW5nIGluIE9jdG9iZXIgMjAyMC4gV2UgYXJlIGV4Y2l0ZWQgdG8gc3VwcG9ydCB0aGUgcHJvZmVzc2lvbmFsIGRldmVsb3BtZW50IG9mIHlvdW5nIHByb2Zlc3Npb25hbHMgYnkgc2V0dGluZyB1cCB0aGlzIHVuaXF1ZSBlbnZpcm9ubWVudCBhbmQgY2xvc2UgdGhlIGdhcCBiZXR3ZWVuIGNvbXBhbmllcyBhbmQgc3R1ZGVudHMgZm9yIGEgYmV0dGVyIGV4Y2hhbmdlLjwvcD5cIlxuXHRpbWFnZVVSTD1cIi9hYm91dC9mb3VuZGVyX3RlYW1AMngucG5nXCJcblx0YmdVUkw9Jydcblx0aXNBdXg9J2lzQXV4J1xuXHR3aGl0ZVRleHQ9JydcbiAgICBleHRyYVRleHQ9J2V4dHJhVGV4dCdcblx0Y3VzdG9tSW1hZ2VTdHlsZXM9eydwYWRkaW5nOjEwdm1heDsnfVxuLz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFtR29CLGlCQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
