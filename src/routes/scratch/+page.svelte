<script lang="ts">
	import TextAnimation from '@components/text-animation.svelte';
</script>

<div class="absolute inset-0 overflow-auto">
	<div class="_grid" style="--cols: 5;">
		<div style={`--h:3;--w:2;`}>
			<div class="text-black text-[3vw]">
				<TextAnimation>
					<p>Here is some text!</p>
				</TextAnimation>
			</div>
			<div class="text-black absolute left-0 bottom-0 p-unit z-10">...</div>
		</div>
		<div class="in" style={`--h:1;--w:2;--in:1;`}><div /></div>
		<div class="edge" style={`--h:1;--w:3`}><div /></div>
		<div style={`--h:2;--w:2;`}><div /></div>
		<div class="in" style={`--h:4;--w:4;--in:1;`}>
			<div class="text-black text-[2vw]">
				<TextAnimation>And some more...</TextAnimation>
			</div>
			<div class="absolute left-0 bottom-0 p-unit">...</div>
		</div>
	</div>
</div>
