<script>
	import { producers } from '$lib/store';
	import { onMount } from 'svelte';
	import { Image } from 'svelte-lazy-loader';
	import { count } from '$lib/store';

	onMount(() => {
		count.set(2);
	});

	//모달로딩
	let loaded = false;
	let thisModal;

	onMount(() => {
		thisModal.onload = () => {
			loaded = true;
		};
	});
</script>

<main>
	<section>
		<h1 class="pb-28 text-secondary">VO!CE PRODUCERS</h1>

		<article
			class="w-9/12 mx-auto my-0 grid place-content-center place-items-center gap-5 grid-cols-3 lg:grid-cols-5"
		>
			{#each producers as producer}
				<div class="gridbox w-24">
					<!-- The button to open modal -->
					<label for="my-modal-{producer.no}" class="avatar modal-button">
						<div class="rounded-full hover:ring ring-secondary ring-offset-base-100 ring-offset-2">
							<Image
								src="/images/profile/{producer.no}.png"
								alt={producer.name}
								loading="lazy"
								width="88px"
								height="88px"
							/>
						</div>
					</label>
				</div>

				<!-- Put this part before </body> tag -->
				<input type="checkbox" id="my-modal-{producer.no}" class="modal-toggle" />
				<div class="modal" class:loaded bind:this={thisModal}>
					<div class="modal-box relative">
						<label
							for="my-modal-{producer.no}"
							class="btn btn-sm btn-circle absolute right-2 top-2"
						>
							✕
						</label>
						<div class="rounded-full mx-auto my-0 overflow-hidden profileimg">
							<Image
								src="/images/profile/{producer.no}.png"
								alt={producer.name}
								loading="lazy"
								width="88px"
								height="88px"
							/>
						</div>
						<h4 class="py-2 text-xl font-bold">{producer.name}</h4>
						<h5 class="text-sm text-error">
							<i class="fa-brands fa-youtube" />
							<b>
								<a class="link link-hover" href={producer.channel} target="_blank">
									YouTube Channel 바로가기
								</a>
							</b>
						</h5>
						<div class="divider" />
						<iframe
							class="mx-auto my-0 w-11/12 border-4 border-secondary"
							src={producer.src}
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
							allowfullscreen
						/>
					</div>
				</div>
			{/each}
		</article>
	</section>
</main>

<style>
	main {
		background-image: url('/images/bg2.jpg');
		overflow: scroll;
	}
	.ring-secondary {
		transition: all 0.3s ease-out;
	}

	.modal-button {
		cursor: pointer;
	}

	.modal {
		opacity: 0;
	}

	.loaded {
		opacity: 1;
	}

	.profileimg {
		width: 88px;
		height: 88px;
	}
</style>
