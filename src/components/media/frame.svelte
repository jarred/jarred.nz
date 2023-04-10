<script lang="ts">
	import type { ITheme } from '$lib/types';
	export let theme: ITheme;
</script>

<div class="w-full h-full" style={`background:var(--color-${theme.bg[0]})`}>
	<slot />
</div>
