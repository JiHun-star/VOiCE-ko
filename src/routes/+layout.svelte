<script>
	import '../app.css';
	import '../font.css';
	import '@fortawesome/fontawesome-free/js/all.min.js';

	let menu1 = 'https://github.com/JiHun-star/VOiCE-ko/blob/main/src/images/menu1.png';
	let menu2 = '../images/menu2.png';

	let pageNum = 1;
</script>

<svelte:head>
	<title>VO!CE -beta-</title>
</svelte:head>

<!-- navigation -->
<nav id="pnav">
	<ul class="hidden lg:flex flex-col">
		<li
			on:click={() => {
				pageNum = 1;
			}}
		>
			<a href="/"><img class="object-cover shadow-xl rounded-2xl" src={menu1} alt="메인" /></a>
		</li>
		<li
			on:click={() => {
				pageNum = 2;
			}}
		>
			<a href="/producers"
				><img class="object-cover shadow-xl rounded-2xl" src={menu2} alt="프로듀서" /></a
			>
		</li>
	</ul>
</nav>

<nav id="mnav" class="opacity-90 shadow-xl lg:hidden">
	<ul class="menu menu-horizontal bg-base-100 rounded-box">
		<li
			class:bg-primary={pageNum === 1}
			class:text-base-100={pageNum === 1}
			on:click={() => {
				pageNum = 1;
			}}
		>
			<a href="/">!ntroduce</a>
		</li>
		<li
			class:bg-primary={pageNum === 2}
			class:text-base-100={pageNum === 2}
			on:click={() => {
				pageNum = 2;
			}}
		>
			<a href="/producers">Producers</a>
		</li>
	</ul>
</nav>

<slot />
<!-- footer modal -->
<footer>
	<!-- The button to open modal -->
	<label for="my-modal-4" class="copy modal-button"><i class="fa-regular fa-copyright" /></label>

	<!-- Put this part before </body> tag -->
	<input type="checkbox" id="my-modal-4" class="modal-toggle" />
	<label for="my-modal-4" class="modal cursor-pointer modal-bottom">
		<label class="modal-box relative bg-primary-focus" for="">
			<h4 class="text-lg font-bold">
				&copy; 2022 <a
					class="link link-hover"
					href="https://byeol-dasoni.netlify.app"
					target="_blank">Byeol Dasoni</a
				>
			</h4>
			<h5 class="py-4"><b>framework & library</b><br />- Sveltekit, Tailwind CSS, daisyUI</h5>
			<h5 class="py-4"><b>fonts</b><br />- Rix이누아리두리네, 고운돋움</h5>
			<h5 class="py-4"><b>images</b><br />- Unsplash</h5>
			<h5 class="py-4">
				<i class="fa-brands fa-youtube" />
				<b
					><a
						class="link link-hover"
						href="https://www.youtube.com/channel/UCZQvu2SAjwJypMEQoHLLYOA"
						target="_blank"
					>
						YouTube Channel 바로가기
					</a></b
				>
			</h5>
		</label>
	</label>
</footer>

<style>
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

	#pnav ul li {
		width: 5rem;
		height: 5rem;
	}

	#pnav ul li img:hover {
		transition: all 0.3s ease-out;
		transform: scale(1.1);
	}

	#mnav {
		position: fixed;
		top: 3%;
		left: 50%;
		z-index: 999;
		transform: translateX(-50%);
	}

	#mnav ul li a {
		font-family: var(--tFont);
		font-size: 1rem;
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
