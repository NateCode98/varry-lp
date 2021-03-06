import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, k as element, r as text, l as claim_element, u as children, w as claim_text, b as detach_dev, o as attr_dev, p as add_location, g as insert_dev, x as append_dev, y as set_data_dev, a as space, e as claim_space, n as noop } from './client.888b8b96.js';

/* src/components/SubFooter.svelte generated by Svelte v3.24.1 */

const file = "src/components/SubFooter.svelte";

// (93:8) {#if buttonBool === "true"}
function create_if_block_1(ctx) {
	let p;
	let a;
	let t;

	const block = {
		c: function create() {
			p = element("p");
			a = element("a");
			t = text(/*buttonText*/ ctx[4]);
			this.h();
		},
		l: function claim(nodes) {
			p = claim_element(nodes, "P", { class: true });
			var p_nodes = children(p);
			a = claim_element(p_nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			t = claim_text(a_nodes, /*buttonText*/ ctx[4]);
			a_nodes.forEach(detach_dev);
			p_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(a, "href", /*buttonLink*/ ctx[3]);
			attr_dev(a, "class", "button-primary svelte-2fj5sj");
			add_location(a, file, 94, 12, 1679);
			attr_dev(p, "class", "lead button svelte-2fj5sj");
			add_location(p, file, 93, 8, 1643);
		},
		m: function mount(target, anchor) {
			insert_dev(target, p, anchor);
			append_dev(p, a);
			append_dev(a, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*buttonText*/ 16) set_data_dev(t, /*buttonText*/ ctx[4]);

			if (dirty & /*buttonLink*/ 8) {
				attr_dev(a, "href", /*buttonLink*/ ctx[3]);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(p);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(93:8) {#if buttonBool === \\\"true\\\"}",
		ctx
	});

	return block;
}

// (99:8) {#if threeBoxes === "true"}
function create_if_block(ctx) {
	let div3;
	let div0;
	let h10;
	let t0;
	let i0;
	let t1;
	let p0;
	let t2;
	let t3;
	let div1;
	let h11;
	let t4;
	let i1;
	let t5;
	let p1;
	let t6;
	let t7;
	let div2;
	let h12;
	let t8;
	let i2;
	let t9;
	let p2;
	let t10;

	const block = {
		c: function create() {
			div3 = element("div");
			div0 = element("div");
			h10 = element("h1");
			t0 = text("Workshops ");
			i0 = element("i");
			t1 = space();
			p0 = element("p");
			t2 = text("Hold workshops in front of our student’s audience. Besides employer branding, this gives you an opportunity to let an independent group of people take a look at the things that surround you daily.");
			t3 = space();
			div1 = element("div");
			h11 = element("h1");
			t4 = text("Input Sessions ");
			i1 = element("i");
			t5 = space();
			p1 = element("p");
			t6 = text("Like a lecture at the university – but in much cooler. Here you can introduce frameworks, working principles or all other things that make you a unique employer.");
			t7 = space();
			div2 = element("div");
			h12 = element("h1");
			t8 = text("Mentorship ");
			i2 = element("i");
			t9 = space();
			p2 = element("p");
			t10 = text("Mentor our students in their last steps before becoming extremely valuable professionals for the job market. With your knowledge, you are able to provide them with highly valuable feedback.");
			this.h();
		},
		l: function claim(nodes) {
			div3 = claim_element(nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div0 = claim_element(div3_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h10 = claim_element(div0_nodes, "H1", { class: true });
			var h10_nodes = children(h10);
			t0 = claim_text(h10_nodes, "Workshops ");
			i0 = claim_element(h10_nodes, "I", { class: true });
			children(i0).forEach(detach_dev);
			h10_nodes.forEach(detach_dev);
			t1 = claim_space(div0_nodes);
			p0 = claim_element(div0_nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t2 = claim_text(p0_nodes, "Hold workshops in front of our student’s audience. Besides employer branding, this gives you an opportunity to let an independent group of people take a look at the things that surround you daily.");
			p0_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t3 = claim_space(div3_nodes);
			div1 = claim_element(div3_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			h11 = claim_element(div1_nodes, "H1", { class: true });
			var h11_nodes = children(h11);
			t4 = claim_text(h11_nodes, "Input Sessions ");
			i1 = claim_element(h11_nodes, "I", { class: true });
			children(i1).forEach(detach_dev);
			h11_nodes.forEach(detach_dev);
			t5 = claim_space(div1_nodes);
			p1 = claim_element(div1_nodes, "P", { class: true });
			var p1_nodes = children(p1);
			t6 = claim_text(p1_nodes, "Like a lecture at the university – but in much cooler. Here you can introduce frameworks, working principles or all other things that make you a unique employer.");
			p1_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t7 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			h12 = claim_element(div2_nodes, "H1", { class: true });
			var h12_nodes = children(h12);
			t8 = claim_text(h12_nodes, "Mentorship ");
			i2 = claim_element(h12_nodes, "I", { class: true });
			children(i2).forEach(detach_dev);
			h12_nodes.forEach(detach_dev);
			t9 = claim_space(div2_nodes);
			p2 = claim_element(div2_nodes, "P", { class: true });
			var p2_nodes = children(p2);
			t10 = claim_text(p2_nodes, "Mentor our students in their last steps before becoming extremely valuable professionals for the job market. With your knowledge, you are able to provide them with highly valuable feedback.");
			p2_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(i0, "class", "fas fa-briefcase svelte-2fj5sj");
			add_location(i0, file, 101, 34, 1921);
			attr_dev(h10, "class", "svelte-2fj5sj");
			add_location(h10, file, 101, 20, 1907);
			attr_dev(p0, "class", "lead svelte-2fj5sj");
			add_location(p0, file, 102, 20, 1979);
			attr_dev(div0, "class", "workshops svelte-2fj5sj");
			add_location(div0, file, 100, 16, 1863);
			attr_dev(i1, "class", "fas fa-comment-alt svelte-2fj5sj");
			add_location(i1, file, 105, 35, 2290);
			attr_dev(h11, "class", "svelte-2fj5sj");
			add_location(h11, file, 105, 16, 2271);
			attr_dev(p1, "class", "lead svelte-2fj5sj");
			add_location(p1, file, 106, 20, 2350);
			attr_dev(div1, "class", "input svelte-2fj5sj");
			add_location(div1, file, 104, 16, 2235);
			attr_dev(i2, "class", "fas fa-mug-hot svelte-2fj5sj");
			add_location(i2, file, 111, 31, 2669);
			attr_dev(h12, "class", "svelte-2fj5sj");
			add_location(h12, file, 111, 16, 2654);
			attr_dev(p2, "class", "lead svelte-2fj5sj");
			add_location(p2, file, 112, 20, 2725);
			attr_dev(div2, "class", "mentor svelte-2fj5sj");
			add_location(div2, file, 110, 16, 2617);
			attr_dev(div3, "class", "grid-container svelte-2fj5sj");
			add_location(div3, file, 99, 12, 1818);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div3, anchor);
			append_dev(div3, div0);
			append_dev(div0, h10);
			append_dev(h10, t0);
			append_dev(h10, i0);
			append_dev(div0, t1);
			append_dev(div0, p0);
			append_dev(p0, t2);
			append_dev(div3, t3);
			append_dev(div3, div1);
			append_dev(div1, h11);
			append_dev(h11, t4);
			append_dev(h11, i1);
			append_dev(div1, t5);
			append_dev(div1, p1);
			append_dev(p1, t6);
			append_dev(div3, t7);
			append_dev(div3, div2);
			append_dev(div2, h12);
			append_dev(h12, t8);
			append_dev(h12, i2);
			append_dev(div2, t9);
			append_dev(div2, p2);
			append_dev(p2, t10);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div3);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(99:8) {#if threeBoxes === \\\"true\\\"}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let section;
	let div;
	let h1;
	let t0;
	let t1;
	let p;
	let t2;
	let t3;
	let section_class_value;
	let if_block0 = /*buttonBool*/ ctx[2] === "true" && create_if_block_1(ctx);
	let if_block1 = /*threeBoxes*/ ctx[5] === "true" && create_if_block(ctx);

	const block = {
		c: function create() {
			section = element("section");
			div = element("div");
			h1 = element("h1");
			t0 = text(/*heading*/ ctx[0]);
			t1 = space();
			p = element("p");
			t2 = space();
			if (if_block0) if_block0.c();
			t3 = space();
			if (if_block1) if_block1.c();
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			div = claim_element(section_nodes, "DIV", { class: true });
			var div_nodes = children(div);
			h1 = claim_element(div_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, /*heading*/ ctx[0]);
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(div_nodes);
			p = claim_element(div_nodes, "P", { class: true });
			var p_nodes = children(p);
			p_nodes.forEach(detach_dev);
			t2 = claim_space(div_nodes);
			if (if_block0) if_block0.l(div_nodes);
			t3 = claim_space(div_nodes);
			if (if_block1) if_block1.l(div_nodes);
			div_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h1, "class", "svelte-2fj5sj");
			add_location(h1, file, 89, 8, 1535);
			attr_dev(p, "class", "lead svelte-2fj5sj");
			add_location(p, file, 90, 8, 1562);
			attr_dev(div, "class", "wrapper svelte-2fj5sj");
			add_location(div, file, 88, 4, 1505);
			attr_dev(section, "class", section_class_value = "quote " + /*fullWidth*/ ctx[6] + " svelte-2fj5sj");
			add_location(section, file, 87, 0, 1465);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, div);
			append_dev(div, h1);
			append_dev(h1, t0);
			append_dev(div, t1);
			append_dev(div, p);
			p.innerHTML = /*subtext*/ ctx[1];
			append_dev(div, t2);
			if (if_block0) if_block0.m(div, null);
			append_dev(div, t3);
			if (if_block1) if_block1.m(div, null);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*heading*/ 1) set_data_dev(t0, /*heading*/ ctx[0]);
			if (dirty & /*subtext*/ 2) p.innerHTML = /*subtext*/ ctx[1];
			if (/*buttonBool*/ ctx[2] === "true") {
				if (if_block0) {
					if_block0.p(ctx, dirty);
				} else {
					if_block0 = create_if_block_1(ctx);
					if_block0.c();
					if_block0.m(div, t3);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (/*threeBoxes*/ ctx[5] === "true") {
				if (if_block1) ; else {
					if_block1 = create_if_block(ctx);
					if_block1.c();
					if_block1.m(div, null);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}

			if (dirty & /*fullWidth*/ 64 && section_class_value !== (section_class_value = "quote " + /*fullWidth*/ ctx[6] + " svelte-2fj5sj")) {
				attr_dev(section, "class", section_class_value);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
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
	let { heading } = $$props;
	let { subtext } = $$props;
	let { buttonBool } = $$props;
	let { buttonLink } = $$props;
	let { buttonText } = $$props;
	let { threeBoxes } = $$props;
	let { fullWidth = "false" } = $$props;

	const writable_props = [
		"heading",
		"subtext",
		"buttonBool",
		"buttonLink",
		"buttonText",
		"threeBoxes",
		"fullWidth"
	];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<SubFooter> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("SubFooter", $$slots, []);

	$$self.$$set = $$props => {
		if ("heading" in $$props) $$invalidate(0, heading = $$props.heading);
		if ("subtext" in $$props) $$invalidate(1, subtext = $$props.subtext);
		if ("buttonBool" in $$props) $$invalidate(2, buttonBool = $$props.buttonBool);
		if ("buttonLink" in $$props) $$invalidate(3, buttonLink = $$props.buttonLink);
		if ("buttonText" in $$props) $$invalidate(4, buttonText = $$props.buttonText);
		if ("threeBoxes" in $$props) $$invalidate(5, threeBoxes = $$props.threeBoxes);
		if ("fullWidth" in $$props) $$invalidate(6, fullWidth = $$props.fullWidth);
	};

	$$self.$capture_state = () => ({
		heading,
		subtext,
		buttonBool,
		buttonLink,
		buttonText,
		threeBoxes,
		fullWidth
	});

	$$self.$inject_state = $$props => {
		if ("heading" in $$props) $$invalidate(0, heading = $$props.heading);
		if ("subtext" in $$props) $$invalidate(1, subtext = $$props.subtext);
		if ("buttonBool" in $$props) $$invalidate(2, buttonBool = $$props.buttonBool);
		if ("buttonLink" in $$props) $$invalidate(3, buttonLink = $$props.buttonLink);
		if ("buttonText" in $$props) $$invalidate(4, buttonText = $$props.buttonText);
		if ("threeBoxes" in $$props) $$invalidate(5, threeBoxes = $$props.threeBoxes);
		if ("fullWidth" in $$props) $$invalidate(6, fullWidth = $$props.fullWidth);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [heading, subtext, buttonBool, buttonLink, buttonText, threeBoxes, fullWidth];
}

class SubFooter extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance, create_fragment, safe_not_equal, {
			heading: 0,
			subtext: 1,
			buttonBool: 2,
			buttonLink: 3,
			buttonText: 4,
			threeBoxes: 5,
			fullWidth: 6
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "SubFooter",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*heading*/ ctx[0] === undefined && !("heading" in props)) {
			console.warn("<SubFooter> was created without expected prop 'heading'");
		}

		if (/*subtext*/ ctx[1] === undefined && !("subtext" in props)) {
			console.warn("<SubFooter> was created without expected prop 'subtext'");
		}

		if (/*buttonBool*/ ctx[2] === undefined && !("buttonBool" in props)) {
			console.warn("<SubFooter> was created without expected prop 'buttonBool'");
		}

		if (/*buttonLink*/ ctx[3] === undefined && !("buttonLink" in props)) {
			console.warn("<SubFooter> was created without expected prop 'buttonLink'");
		}

		if (/*buttonText*/ ctx[4] === undefined && !("buttonText" in props)) {
			console.warn("<SubFooter> was created without expected prop 'buttonText'");
		}

		if (/*threeBoxes*/ ctx[5] === undefined && !("threeBoxes" in props)) {
			console.warn("<SubFooter> was created without expected prop 'threeBoxes'");
		}
	}

	get heading() {
		throw new Error("<SubFooter>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set heading(value) {
		throw new Error("<SubFooter>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get subtext() {
		throw new Error("<SubFooter>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set subtext(value) {
		throw new Error("<SubFooter>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get buttonBool() {
		throw new Error("<SubFooter>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set buttonBool(value) {
		throw new Error("<SubFooter>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get buttonLink() {
		throw new Error("<SubFooter>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set buttonLink(value) {
		throw new Error("<SubFooter>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get buttonText() {
		throw new Error("<SubFooter>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set buttonText(value) {
		throw new Error("<SubFooter>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get threeBoxes() {
		throw new Error("<SubFooter>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set threeBoxes(value) {
		throw new Error("<SubFooter>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get fullWidth() {
		throw new Error("<SubFooter>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set fullWidth(value) {
		throw new Error("<SubFooter>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { SubFooter as S };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3ViRm9vdGVyLjFhMjI4OTVlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9TdWJGb290ZXIuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5leHBvcnQgbGV0IGhlYWRpbmc7XG5leHBvcnQgbGV0IHN1YnRleHQ7XG5leHBvcnQgbGV0IGJ1dHRvbkJvb2w7XG5leHBvcnQgbGV0IGJ1dHRvbkxpbms7XG5leHBvcnQgbGV0IGJ1dHRvblRleHQ7XG5leHBvcnQgbGV0IHRocmVlQm94ZXM7XG5leHBvcnQgbGV0IGZ1bGxXaWR0aD0nZmFsc2UnO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblxuaDEge1xuICAgIGZvbnQtc2l6ZTogM3ZtYXg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1ibHVlKTtcbn1cblxuLnF1b3RlIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiAydm1heCAwO1xuICAgIHdpZHRoOiA1MCU7XG59XG5cbi5sZWFkIHtcbiAgICBmb250LXNpemU6IDEuM3ZtYXg7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICM0MjMxNUM7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5idXR0b24tcHJpbWFyeSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tdGV4dC1yZWQpO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAxMHB4IDUwcHg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG59XG4ud3JhcHBlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZ3JpZC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgICBnYXA6IDBweCAxMCU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJ3b3Jrc2hvcHMgaW5wdXQgbWVudG9yXCI7XG59XG5cbi53b3Jrc2hvcHMgeyBncmlkLWFyZWE6IHdvcmtzaG9wczsgfVxuLmlucHV0IHsgZ3JpZC1hcmVhOiBpbnB1dDsgfVxuLm1lbnRvciB7IGdyaWQtYXJlYTogbWVudG9yOyB9XG5cbi5ncmlkLWNvbnRhaW5lciBkaXYge1xuICAgIGJhY2tncm91bmQ6ICNGNEY1RkE7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAydm1heCAxdm1heDtcbn1cbi5ncmlkLWNvbnRhaW5lciBkaXYgLmxlYWR7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDF2bWF4O1xuICAgIG9wYWNpdHk6IC44O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG59XG4uZ3JpZC1jb250YWluZXIgZGl2IGgxe1xuICAgIGZvbnQtc2l6ZTogMS41dm1heDtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLmZ1bGxXaWR0aCB7XG4gICAgd2lkdGg6IDgwJTtcbn1cblxuLmZ1bGxXaWR0aCAud3JhcHBlcj5oMSB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXZtYXg7XG59XG5cbmkge1xuICAgIGZvbnQtc2l6ZTogMjgwJTtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1yZWQpO1xufVxuPC9zdHlsZT5cbjxzZWN0aW9uIGNsYXNzPVwicXVvdGUge2Z1bGxXaWR0aH1cIj5cbiAgICA8ZGl2IGNsYXNzPVwid3JhcHBlclwiPlxuICAgICAgICA8aDE+e2hlYWRpbmd9PC9oMT5cbiAgICAgICAgPHAgY2xhc3M9XCJsZWFkXCI+e0BodG1sIHN1YnRleHR9PC9wPlxuXG4gICAgICAgIHsjaWYgYnV0dG9uQm9vbCA9PT0gXCJ0cnVlXCJ9XG4gICAgICAgIDxwIGNsYXNzPVwibGVhZCBidXR0b25cIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJ7YnV0dG9uTGlua31cIiBjbGFzcz1cImJ1dHRvbi1wcmltYXJ5XCI+e2J1dHRvblRleHR9PC9hPlxuICAgICAgICA8L3A+XG4gICAgICAgIHsvaWZ9XG5cbiAgICAgICAgeyNpZiB0aHJlZUJveGVzID09PSBcInRydWVcIn1cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3b3Jrc2hvcHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPldvcmtzaG9wcyA8aSBjbGFzcz1cImZhcyBmYS1icmllZmNhc2VcIj48L2k+PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsZWFkXCI+SG9sZCB3b3Jrc2hvcHMgaW4gZnJvbnQgb2Ygb3VyIHN0dWRlbnTigJlzIGF1ZGllbmNlLiBCZXNpZGVzIGVtcGxveWVyIGJyYW5kaW5nLCB0aGlzIGdpdmVzIHlvdSBhbiBvcHBvcnR1bml0eSB0byBsZXQgYW4gaW5kZXBlbmRlbnQgZ3JvdXAgb2YgcGVvcGxlIHRha2UgYSBsb29rIGF0IHRoZSB0aGluZ3MgdGhhdCBzdXJyb3VuZCB5b3UgZGFpbHkuPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dFwiPlxuICAgICAgICAgICAgICAgIDxoMT5JbnB1dCBTZXNzaW9ucyA8aSBjbGFzcz1cImZhcyBmYS1jb21tZW50LWFsdFwiPjwvaT48L2gxPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImxlYWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIExpa2UgYSBsZWN0dXJlIGF0IHRoZSB1bml2ZXJzaXR5IOKAkyBidXQgaW4gbXVjaCBjb29sZXIuIEhlcmUgeW91IGNhbiBpbnRyb2R1Y2UgZnJhbWV3b3Jrcywgd29ya2luZyBwcmluY2lwbGVzIG9yIGFsbCBvdGhlciB0aGluZ3MgdGhhdCBtYWtlIHlvdSBhIHVuaXF1ZSBlbXBsb3llci5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW50b3JcIj5cbiAgICAgICAgICAgICAgICA8aDE+TWVudG9yc2hpcCA8aSBjbGFzcz1cImZhcyBmYS1tdWctaG90XCI+PC9pPjwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibGVhZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgTWVudG9yIG91ciBzdHVkZW50cyBpbiB0aGVpciBsYXN0IHN0ZXBzIGJlZm9yZSBiZWNvbWluZyBleHRyZW1lbHkgdmFsdWFibGUgcHJvZmVzc2lvbmFscyBmb3IgdGhlIGpvYiBtYXJrZXQuIFdpdGggeW91ciBrbm93bGVkZ2UsIHlvdSBhcmUgYWJsZSB0byBwcm92aWRlIHRoZW0gd2l0aCBoaWdobHkgdmFsdWFibGUgZmVlZGJhY2suXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICB7L2lmfVxuICAgIDwvZGl2PlxuPC9zZWN0aW9uPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzJCQThGMkQsR0FBVTs7Ozs7Ozs7MENBQVYsR0FBVTs7Ozs7O3NDQUEvQyxHQUFVOzs7Ozs7Ozs7Ozs7aUVBQTJCLEdBQVU7Ozt1Q0FBL0MsR0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQUZuQixHQUFVLFFBQUssTUFBTTtnQ0FNckIsR0FBVSxRQUFLLE1BQU07Ozs7Ozs7eUJBVHJCLEdBQU87Ozs7Ozs7Ozs7Ozs7Ozs7eUNBQVAsR0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZFQUZHLEdBQVM7Ozs7Ozs7Ozs7NkJBR0QsR0FBTzs7Ozs7OzsyREFEekIsR0FBTzt3REFDVyxHQUFPO3NCQUV6QixHQUFVLFFBQUssTUFBTTs7Ozs7Ozs7Ozs7OztzQkFNckIsR0FBVSxRQUFLLE1BQU07Ozs7Ozs7Ozs7OzJHQVhYLEdBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0F0RnJCLE9BQU87T0FDUCxPQUFPO09BQ1AsVUFBVTtPQUNWLFVBQVU7T0FDVixVQUFVO09BQ1YsVUFBVTtPQUNWLFNBQVMsR0FBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
