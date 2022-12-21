---
h1: First heading
h2: Second heading
year: 0000
collaborators:
  RNZ:
    - one
    - two
    - three
  Extended Whānau:
    - one
    - two
    - three
theme:
  black: '#051C2F'
  white: '#FFF'
  yellow: '#F1B049'
  orange: '#FB7C37'
  blue-bright: '#41B8EC'
  blue-gray: '#87A9C1'
  blue-dark: '#3D6079'
  blue-black: '#173752'
---

<script lang="ts">
  import Test from "../../components/test.svelte";
</script>

How does this work?

<Test theme={theme} />
