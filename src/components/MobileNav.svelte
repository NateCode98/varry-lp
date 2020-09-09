<style>


@keyframes moveInLeft {
  0% {
    opacity: 0;
    transform: translateX(-10rem);
  }
  80% {
    transform: translateX(1rem);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes moveInRight {
  0% {
    opacity: 0;
    transform: translateX(10rem);
  }
  80% {
    transform: translateX(-1rem);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes moveInBottom {
  from {
    opacity: 0;
    transform: translateY(3rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.navigation__checkbox {
  display: none;
}
.navigation__checkbox:checked ~ .navigation__background {
  transform: scale(100);
}
.navigation__checkbox:checked ~ .navigation__nav {
  transform: translateX(0);
  visibility: initial;
  opacity: 1;
}
.navigation__button {
  position: fixed;
  top: 2rem;
  right: 2rem;
  border-radius: 50%;
  cursor: pointer;
  z-index: 12;
  text-align: center;
}
.navigation__background {
  position: fixed;
  top: 2rem;
  right: 2rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background: var(--text-red);
  z-index: 10;
  transform: scale(0);
  transition: transform 0.35s cubic-bezier(0.86, 0, 0.07, 1);
}
.navigation__nav {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 11;
  transform: translateX(-50%);
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.35s ease-in, transform 0.35s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.navigation__list {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  list-style: none;
}
.navigation__item {
  margin: 1rem;
  counter-increment: list;
}
.navigation__link::before {
  content: "0" counters(list,"");
  padding-right: 1.2rem;
}
.navigation__link:link, .navigation__link:visited {
  display: inline-block;
  font-size: 1.5rem;
  font-weight: 300;
  padding: 1rem 2rem;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  background-size: 227%;
  transition: all 0.4s;
}
.navigation__link:hover, .navigation__link:active {
  color: #3A1660;
  background-position: 100%;
  transform: translateX(1rem);
}
.navigation__icon {
  display: inline-block;
  position: fixed;
  width: 2rem;
  height: 0.15rem;
  top: 5%;
  right: 5%;
  transition: transform 0.25s ease-in-out;
}
.navigation__icon-span {
  position: absolute;
  height: 0.5rem;
  width: 50%;
  background: #202020;
  /* opacity:.6;  */
  transition: all 0.35s ease-in;
}
.navigation__icon-span:nth-child(even) {
  left: 50%;
  border-radius: 0 0.9rem 0.9rem 0;
}
.navigation__icon-span:nth-child(odd) {
  left: 0;
  border-radius: 0.9rem 0 0 0.9rem;
}
.navigation__icon-span:nth-child(1), .navigation__icon-span:nth-child(2) {
  transform: translateY(-1rem);
}
.navigation__icon-span:nth-child(5), .navigation__icon-span:nth-child(6) {
  transform: translateY(1rem);
}
.navigation__checkbox:checked + .navigation__button .navigation__icon-span:nth-child(1), .navigation__checkbox:checked + .navigation__button .navigation__icon-span:nth-child(6) {
  transform: rotate(45deg);
}
.navigation__checkbox:checked + .navigation__button .navigation__icon-span:nth-child(2), .navigation__checkbox:checked + .navigation__button .navigation__icon-span:nth-child(5) {
  transform: rotate(-45deg);
}
.navigation__checkbox:checked + .navigation__button .navigation__icon-span:nth-child(2), .navigation__checkbox:checked + .navigation__button .navigation__icon-span:nth-child(6) {
  transform-origin: left;
}
.navigation__checkbox:checked + .navigation__button .navigation__icon-span:nth-child(1), .navigation__checkbox:checked + .navigation__button .navigation__icon-span:nth-child(5) {
  transform-origin: right;
}
.navigation__checkbox:checked + .navigation__button .navigation__icon-span:nth-child(3) {
  left: -50%;
  opacity: 0;
}
.navigation__checkbox:checked + .navigation__button .navigation__icon-span:nth-child(4) {
  left: 100%;
  opacity: 0;
}
.navigation__button:hover .navigation__icon-span:nth-child(3) {
  transform: translateX(-0.3rem) scale(1.1);
}
.navigation__button:hover .navigation__icon-span:nth-child(4) {
  transform: translateX(0.3rem) scale(1.1);
}
.navigation__checkbox:checked + .navigation__button:hover .navigation__icon {
  transform: rotate(180deg);
}
@media only screen and (min-width:1024px) {
  .navigation {
    display: none !important;
  }
}
</style>

		<div class="navigation">
			<input type="checkbox" id="navi-toggle" class="navigation__checkbox" />

			<label for="navi-toggle" class="navigation__button">
				<span class="navigation__icon">
					<span class="navigation__icon-span">&nbsp;</span>
					<span class="navigation__icon-span">&nbsp;</span>
					<span class="navigation__icon-span">&nbsp;</span>
					<span class="navigation__icon-span">&nbsp;</span>
					<span class="navigation__icon-span">&nbsp;</span>
					<span class="navigation__icon-span">&nbsp;</span>
				</span>
			</label>

			<div class="navigation__background">&nbsp;</div>

			<nav class="navigation__nav">
				<ul class="navigation__list">

					<li class="navigation__item"><a class="navigation__link" href="/">For Students</a></li>
					<li class="navigation__item"><a class="navigation__link" href="partners">For Partners</a></li>
					<li class="navigation__item"><a class="navigation__link" href="approach">Approach</a></li>
					<li class="navigation__item"><a class="navigation__link" href="story">Our Story</a></li>
					<li class="navigation__item"><a class="navigation__link" href="jobs">Job Board</a></li>
					<li class="navigation__item"><a class="navigation__link" href="join">Join Now</a></li>
				</ul>
			</nav>
		</div>
