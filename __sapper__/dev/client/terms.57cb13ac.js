import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, a as space, c as create_component, k as element, r as text, q as query_selector_all, b as detach_dev, e as claim_space, f as claim_component, l as claim_element, u as children, w as claim_text, p as add_location, B as set_style, g as insert_dev, m as mount_component, x as append_dev, n as noop, t as transition_in, h as transition_out, j as destroy_component } from './client.e0083afe.js';
import { H as Hero, M as MobileHero, Q as Quote, a as MobileImage, b as MobileQuote, c as MobileSubFooter } from './MobileSubFooter.f650e820.js';

/* src/routes/terms.svelte generated by Svelte v3.24.1 */
const file = "src/routes/terms.svelte";

function create_fragment(ctx) {
	let t0;
	let hero;
	let t1;
	let mobilehero;
	let t2;
	let p;
	let br0;
	let t3;
	let br1;
	let br2;
	let t4;
	let current;

	hero = new Hero({
			props: {
				subheader: "",
				header: "Terms Of Use",
				text: "",
				bgURL: "/about/start_shape_team.svg",
				isAux: ""
			},
			$$inline: true
		});

	mobilehero = new MobileHero({
			props: { heading: "Terms Of Use", text: "" },
			$$inline: true
		});

	const block = {
		c: function create() {
			t0 = space();
			create_component(hero.$$.fragment);
			t1 = space();
			create_component(mobilehero.$$.fragment);
			t2 = space();
			p = element("p");
			br0 = element("br");
			t3 = text(" Please read these Terms and Conditions carefully. All contracts that the Provider may enter into from time to time for the provision of the Hosted Services and related services shall be governed by these Terms and Conditions. ");
			br1 = element("br");
			br2 = element("br");
			t4 = text("\n\nLast updated: March 19, 2020\n\n\nDisclaimer\n\nVarry has been created as part as a CODE University project.\n\nCODE University is a university in Berlin, where we work on creating real-life digital projects. This landing page and Sonacy has been created as a part of one of these digital projects. More info can be found at code.berlin\n\nContact info of the unversity can be found at the bottom of this page.\n\nData Protection\n\nWe will only use your data in the scope of this project. We will not share the data publicly, nor use it within other projects at CODE University. We will keep your data (email address) for 4 months. After that the data will be deleted.\n\n\nContact & Questions\n\nPlease contact jonathan.kuhl@code.berlin for any questions regarding this disclaimer.\n\nPlease read these terms and conditions carefully before using Our Service.\n\n\nInterpretation and Definitions\n\nInterpretation\n\nThe words of which the initial letter is capitalized have meanings defined under the following conditions.\n\nThe following definitions shall have the same meaning regardless of whether they appear in singular or in plural.\n\n\nDefinitions\n\nFor the purposes of these Terms and Conditions:\n\nAffiliate means an entity that controls, is controlled by or is under common control with a party, where \"control\" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority. Company (referred to as either \"the Company\", \"We\", \"Us\" or \"Our\" in this Agreement) refers to Sonacy. Country refers to: Berlin, Germany Service refers to the Website. Terms and Conditions (also referred as \"Terms\") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service. This Terms and Conditions agreement as been created with the help of Terms and Conditions Generator. Third-party Social Media Service means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service. Website refers to Sonacy, accessible from https://www.sonacy.de You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.\n\n\nAcknowledgement\n\nThese are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.\n\n\nYour access to and use of the Service\n\nis conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.\n\nBy accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.\n\nYour access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the\n\nWebsite and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.\n\n\nLinks to Other Websites\n\nOur Service may contain links to third- party web sites or services that are not owned or controlled by the Company.\n\nThe Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.\n\nWe strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.\n\n\nTermination\n\nWe may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.\n\nUpon termination, Your right to use the Service will cease immediately.\n\n\nLimitation of Liability\n\nNotwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.\n\nTo the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.\n\nSome states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.\n\n\n\"AS IS\" and \"AS AVAILABLE\" Disclaimer\n\nThe Service is provided to You \"AS IS\" and \"AS AVAILABLE\" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non- infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.\n\nWithout limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error- free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.\n\nSome jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.\n\n\nGoverning Law\n\nThe laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.\n\n\nDisputes Resolution\n\nIf You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.\n\n\nFor European Union (EU) Users\n\nIf You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which you are resident in.\n\n\nUnited States Legal Compliance\n\nYou represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a “terrorist supporting” country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.\n\n\nSeverability and Waiver\n\nSeverability\n\nIf any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.\n\n\nWaiver\n\nExcept as provided herein, the failure to exercise a right or to require performance of an obligation under this Terms shall not effect a party's ability to exercise such right or require such performance at any time thereafter nor shall be the waiver of a breach constitute a waiver of any subsequent breach.\n\n\nTranslation Interpretation\n\nThese Terms and Conditions may have been translated if We have made them available to You on our Service.\n\nYou agree that the original English text shall prevail in the case of a dispute.\n\n\nChanges to These Terms and Conditions\n\nWe reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.\n\nBy continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.\n\n\nContact Us\n\nIf you have any questions about these Terms and Conditions, You can contact us by email: jonathan.kuhl@code.berlin");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-58hfkf\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			claim_component(hero.$$.fragment, nodes);
			t1 = claim_space(nodes);
			claim_component(mobilehero.$$.fragment, nodes);
			t2 = claim_space(nodes);
			p = claim_element(nodes, "P", { style: true });
			var p_nodes = children(p);
			br0 = claim_element(p_nodes, "BR", {});
			t3 = claim_text(p_nodes, " Please read these Terms and Conditions carefully. All contracts that the Provider may enter into from time to time for the provision of the Hosted Services and related services shall be governed by these Terms and Conditions. ");
			br1 = claim_element(p_nodes, "BR", {});
			br2 = claim_element(p_nodes, "BR", {});
			t4 = claim_text(p_nodes, "\n\nLast updated: March 19, 2020\n\n\nDisclaimer\n\nVarry has been created as part as a CODE University project.\n\nCODE University is a university in Berlin, where we work on creating real-life digital projects. This landing page and Sonacy has been created as a part of one of these digital projects. More info can be found at code.berlin\n\nContact info of the unversity can be found at the bottom of this page.\n\nData Protection\n\nWe will only use your data in the scope of this project. We will not share the data publicly, nor use it within other projects at CODE University. We will keep your data (email address) for 4 months. After that the data will be deleted.\n\n\nContact & Questions\n\nPlease contact jonathan.kuhl@code.berlin for any questions regarding this disclaimer.\n\nPlease read these terms and conditions carefully before using Our Service.\n\n\nInterpretation and Definitions\n\nInterpretation\n\nThe words of which the initial letter is capitalized have meanings defined under the following conditions.\n\nThe following definitions shall have the same meaning regardless of whether they appear in singular or in plural.\n\n\nDefinitions\n\nFor the purposes of these Terms and Conditions:\n\nAffiliate means an entity that controls, is controlled by or is under common control with a party, where \"control\" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority. Company (referred to as either \"the Company\", \"We\", \"Us\" or \"Our\" in this Agreement) refers to Sonacy. Country refers to: Berlin, Germany Service refers to the Website. Terms and Conditions (also referred as \"Terms\") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service. This Terms and Conditions agreement as been created with the help of Terms and Conditions Generator. Third-party Social Media Service means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service. Website refers to Sonacy, accessible from https://www.sonacy.de You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.\n\n\nAcknowledgement\n\nThese are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.\n\n\nYour access to and use of the Service\n\nis conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.\n\nBy accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.\n\nYour access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the\n\nWebsite and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.\n\n\nLinks to Other Websites\n\nOur Service may contain links to third- party web sites or services that are not owned or controlled by the Company.\n\nThe Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.\n\nWe strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.\n\n\nTermination\n\nWe may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.\n\nUpon termination, Your right to use the Service will cease immediately.\n\n\nLimitation of Liability\n\nNotwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.\n\nTo the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.\n\nSome states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.\n\n\n\"AS IS\" and \"AS AVAILABLE\" Disclaimer\n\nThe Service is provided to You \"AS IS\" and \"AS AVAILABLE\" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non- infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.\n\nWithout limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error- free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.\n\nSome jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.\n\n\nGoverning Law\n\nThe laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.\n\n\nDisputes Resolution\n\nIf You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.\n\n\nFor European Union (EU) Users\n\nIf You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which you are resident in.\n\n\nUnited States Legal Compliance\n\nYou represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a “terrorist supporting” country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.\n\n\nSeverability and Waiver\n\nSeverability\n\nIf any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.\n\n\nWaiver\n\nExcept as provided herein, the failure to exercise a right or to require performance of an obligation under this Terms shall not effect a party's ability to exercise such right or require such performance at any time thereafter nor shall be the waiver of a breach constitute a waiver of any subsequent breach.\n\n\nTranslation Interpretation\n\nThese Terms and Conditions may have been translated if We have made them available to You on our Service.\n\nYou agree that the original English text shall prevail in the case of a dispute.\n\n\nChanges to These Terms and Conditions\n\nWe reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.\n\nBy continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.\n\n\nContact Us\n\nIf you have any questions about these Terms and Conditions, You can contact us by email: jonathan.kuhl@code.berlin");
			p_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Terms Of Use";
			add_location(br0, file, 88, 33, 2054);
			add_location(br1, file, 88, 264, 2285);
			add_location(br2, file, 88, 268, 2289);
			set_style(p, "margin-bottom", "10px");
			add_location(p, file, 88, 0, 2021);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			mount_component(hero, target, anchor);
			insert_dev(target, t1, anchor);
			mount_component(mobilehero, target, anchor);
			insert_dev(target, t2, anchor);
			insert_dev(target, p, anchor);
			append_dev(p, br0);
			append_dev(p, t3);
			append_dev(p, br1);
			append_dev(p, br2);
			append_dev(p, t4);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(hero.$$.fragment, local);
			transition_in(mobilehero.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(hero.$$.fragment, local);
			transition_out(mobilehero.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			destroy_component(hero, detaching);
			if (detaching) detach_dev(t1);
			destroy_component(mobilehero, detaching);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(p);
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
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Terms> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Terms", $$slots, []);

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

class Terms extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Terms",
			options,
			id: create_fragment.name
		});
	}
}

export default Terms;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVybXMuNTdjYjEzYWMuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
