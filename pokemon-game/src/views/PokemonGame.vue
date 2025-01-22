<template>

<section v-show="isVisible" class="flex flex-col justify-center items-center w-screen h-screen">
  <h1 class="text-3xl"> Espere por favor</h1>
  <h3 class="animate-pulse">Cargando Pokemón</h3>
</section>
<section class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="text-3xl">¿Cúal es este pokémon?</h1>
      <PokemonPicture/>
      <PokemonOptions/>
  </section>

</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import PokemonPicture from '../components/PokemonPicture.vue';
  import PokemonOptions from '../components/PokemonOptions.vue';


export default defineComponent({
  name:'PokemonGame',

  setup(){
    const isVisible = ref(false);
    return isVisible;
  },
  components: {
    PokemonPicture,
    PokemonOptions
  },
}
)
</script>

<style scoped>

</style>
