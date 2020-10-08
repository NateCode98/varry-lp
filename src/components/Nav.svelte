<style>
	nav {
		width: 100%;
		position: fixed;
		z-index: 100;

		height: 5vmax;
		padding: 1vmax 3vmax;
	}
	.selected {
		border-bottom: 2px solid; 
	}
	.logo {
		width: 30%;
		float:left;
	}
	.wrapper ul{
		width: 70%;
		list-style-type: none;
		float: left;
		padding: 5px;
		text-align: right;
	}
	.wrapper ul li {
		margin: 10px 20px;
		display: inline-block;
	}
	.wrapper ul li a {
		font-family: var(--heading-font);
		color: #fff;
		border-bottom: 2px solid rgba(255,255,255,0);
		text-decoration: none;
		padding-bottom: 5px;
		transition: all .35s ease;
		
	}
	.wrapper ul li a:hover {
		border-bottom: 2px solid rgba(255,255,255,1);

	}
	@media only screen and (max-width:1280px) {
		.wrapper ul li a{
			font-size: .8rem;
		}
	}
	.logo img{
		height: 3vmax;
	}
	.nav-button {
		color: var(--text-red) !important; 
		background: #fff;
		letter-spacing: .2px;
		padding: 10px 30px;
		border-radius: 50px;
		box-shadow: 0 0 5px rgba(0,0,0,0.2);
	}

	@media only screen and (max-width:768px) {
		.wrapper ul li a {
			color: var(--text-red);
		}
	}

	.nav-active .wrapper ul li a {
		color: var(--text-red);
	}

</style>

<nav class="navbar">
	<div class="wrapper">
			<div class="logo"><img src="/logos/varry_logo_gradient.png" alt="">	</div>
			<ul>
				<li><a href="/">For Students</a></li>
				<li><a href="partners">For Partners</a></li>
				<li><a href="approach">Approach</a></li>
				<li><a href="story">Our Story</a></li>
				<li><a href="https://www.notion.so/Job-Board-Varry-2096e87f71424dfaa693abe7a3e07c37" target="_blank">Job Board</a></li>
				<li><a href="https://form.typeform.com/to/GLDOuGSz" class="nav-button" target="_blank">Join Now</a></li>
			</ul>
	</div>	
	<div class="logo"></div>
</nav>

<script>
	import { onMount } from 'svelte';

	onMount(() => {

		const navbar = document.querySelector('.navbar');
		window.onscroll = () => {
			if (window.scrollY >10) {
				navbar.classList.add('nav-active');
				navbar.style.background="#fff"
				navbar.style.boxShadow="0 0 3px rgba(0,0,0,0.1)"
			} else {
				navbar.classList.remove('nav-active');
				navbar.style.background="transparent"
				navbar.style.boxShadow="none"


			}
		};
	});
</script>