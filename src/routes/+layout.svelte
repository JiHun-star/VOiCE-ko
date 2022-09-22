<script>
	import '../app.css';
	import '../font.css';
	import '@fortawesome/fontawesome-free/js/all.min.js';
	import Error from './+error.svelte';
	import { count } from '$lib/store';

	let countValue;

	const unsubscribe = count.subscribe((value) => {
		countValue = value;
	});
</script>

<svelte:head>
	<title>VO!CE -beta-</title>
</svelte:head>

<!-- navigation -->
<nav id="pnav">
	<ul class="hidden lg:flex flex-col">
		<li>
			<a href="/">
				<img src="/images/menu1.png" alt="introduce" class="menubtn shadow-xl rounded-2xl" />
			</a>
		</li>
		<li>
			<a href="/producers">
				<img src="/images/menu2.png" alt="producers" class="menubtn shadow-xl rounded-2xl" />
			</a>
		</li>
	</ul>
</nav>

<nav id="mnav" class="opacity-90 lg:hidden">
	<ul class="menu menu-horizontal bg-base-100 rounded-box shadow-xl">
		<li class:bg-primary={countValue === 1} class:text-base-100={countValue === 1}>
			<a href="/"><h3 class="text-base">!ntroduce</h3></a>
		</li>
		<li class:bg-primary={countValue === 2} class:text-base-100={countValue === 2}>
			<a href="/producers"><h3 class="text-base">Producers</h3></a>
		</li>
	</ul>
</nav>
<!-- page -->
<slot />
<!-- footer modal -->
<footer>
	<!-- The button to open modal -->
	<label for="my-modal-f" class="copy modal-button"><i class="fa-regular fa-copyright" /></label>

	<!-- Put this part before </body> tag -->
	<input type="checkbox" id="my-modal-f" class="modal-toggle" />
	<label for="my-modal-f" class="modal cursor-pointer modal-bottom">
		<label class="modal-box relative bg-primary-focus" for="">
			<h4 class="text-lg font-bold">
				&copy; 2022 <a
					class="link link-hover"
					href="https://byeol-dasoni.netlify.app"
					target="_blank">Byeol Dasoni</a
				>
			</h4>
			<h5 class="py-4">
				<b>framework & library</b><br />- Sveltekit, Tailwind CSS, daisyUI, svelte-lazy-loader
			</h5>
			<h5 class="py-4"><b>fonts</b><br />- Rix이누아리두리네, 고운돋움</h5>
			<h5 class="py-4"><b>images</b><br />- Unsplash</h5>
			<h5 class="py-4">
				<i class="fa-brands fa-youtube" />
				<b>
					<a
						class="link link-hover"
						href="https://www.youtube.com/channel/UCZQvu2SAjwJypMEQoHLLYOA"
						target="_blank"
					>
						YouTube Channel 바로가기
					</a>
				</b>
			</h5>
		</label>
	</label>
</footer>

<style>
	/* 1024px이상 */
	#pnav {
		position: fixed;
		top: 50%;
		left: 1%;
		z-index: 999;
		transform: translateY(-50%);
	}

	#pnav ul {
		gap: 10px;
	}

	.menubtn {
		width: 5rem;
		height: 5rem;
	}

	.menubtn:hover {
		transition: all 0.3s ease-out;
		transform: scale(1.1);
	}

	/* 1024px이하 */
	#mnav {
		position: fixed;
		top: 3%;
		left: 50%;
		z-index: 999;
		transform: translateX(-50%);
	}

	footer {
		position: fixed;
		bottom: 10px;
		right: 15px;
		z-index: 999;
	}

	.copy {
		font-size: 2rem;
		cursor: pointer;
	}
</style>
