<script>
	import { count } from '$lib/store';
	import { onMount } from 'svelte';

	onMount(() => {
		count.set(3);
	});
</script>

<main>
	<section>
		<h1 class="pb-28 text-secondary">COOPERATION</h1>
		<article class="flex flex-wrap flex-row justify-center gap-5">
			<div class="card w-80 bg-base-content shadow-xl lg:w-96">
				<div class="card-body text-stone-700">
					<h2 class="card-title">ON STAGE</h2>
					<p class="text-left indent-2">
						한국 서브컬쳐 분야에서 활동하시는 다양한 분들이 교류하고 있는 커뮤니티 입니다.
					</p>
				</div>
			</div>

			<div class="card w-80 bg-base-content shadow-xl lg:w-96">
				<div class="card-body text-stone-700">
					<h2 class="card-title">동아크루</h2>
					<p class="text-left indent-2">
						한국 동인계 아티스트를 중심으로 설립된 네이버 카페입니다.
					</p>
				</div>
			</div>
		</article>
	</section>
</main>

<style>
	main {
		background-image: url('/images/bg3.jpg');
		overflow: scroll;
	}

	.card-title {
		font-weight: normal;
	}
</style>
