<script lang="ts">
	import ImgixClient from '@imgix/js-core';
	export let src: string;
	export let alt: string;
	export let css: string = '';

	let client = new ImgixClient({
		domain: 'jarred-design.imgix.net'
	});

	const url = () => {
		let s = src;
		let srcSet = client.buildSrcSet(s, {
			q: 86,
			w: 800,
			h: 800
		});
		return srcSet;
	};
</script>

<img class={css} {alt} srcset={url()} />
