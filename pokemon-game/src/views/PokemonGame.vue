<template>
<!--
<section v-show="isVisible" class="flex flex-col justify-center items-center w-screen h-screen">
  <h1 class="text-3xl"> Espere por favor</h1>
  <h3 class="animate-pulse">Cargando Pokemón</h3>
</section>
-->
<section class="flex flex-col items-center justify-center h-screen w-screen">
    <section><h1 class="text-3xl">¿Cúal es este pokémon?</h1></section>
    <section><PokemonPicture/></section>
    <section><PokemonOptions/></section>
  </section>

</template>

<script lang="ts">
  import { ref } from 'vue';
  import PokemonPicture from '../components/PokemonPicture.vue';
  import PokemonOptions from '../components/PokemonOptions.vue';
  import { usePokemonGame } from '../modules/pokemon/composables/usePokemonGame';

export default {
  name:'PokemonGame',

  setup(){
  const {gameStatus} = usePokemonGame();
    
    const isVisible = ref(false);
    
    return isVisible;
  },
  components: {
    PokemonPicture,
    PokemonOptions
  },
}

</script>

<style scoped>

</style>
