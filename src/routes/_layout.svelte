<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
	import MobileNav from '../components/MobileNav.svelte';

	export let segment;
</script>

<style>


</style>

<Nav {segment}/>

<MobileNav />
<main>
	<slot></slot>
</main>

<Footer/>