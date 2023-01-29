<script lang="ts">
	import type { Theme } from '$lib/types';
	export let theme: Theme;
</script>

<div class="w-full h-full" style={`background:var(--color-${theme.bg[0]})`}>
	<slot />
</div>
