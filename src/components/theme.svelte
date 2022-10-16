<script lang="ts">
  import {currentTheme} from "../lib/theme-store";
  export let data;

  if(data === null){
    data = $currentTheme;
  }
</script>

{JSON.stringify(data, null, 2)}