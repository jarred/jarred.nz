<script lang="ts">
  import {currentTheme} from "../lib/theme-store";
  export let data;

  if(data === null){
    data = $currentTheme;
  }

  const themeContents = () => {
    let vars = "";
    for(var i in data){
      console.log(i, data[i]);
      vars += `--${i}: ${data[i]};`
    }
    let style = `${vars}`
    console.log(style)
    return style;
  }
</script>

<div class="theme" style={themeContents()}>

Theme
</div>

<style>
  .theme{
    background: var(--bg);
  }
</style>