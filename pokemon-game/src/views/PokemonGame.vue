<template>

<section v-if="isLoading" class="flex flex-col justify-center items-center w-screen h-screen">
  <h1 class="text-3xl"> Espere por favor</h1>
  <h3 class="animate-pulse">Cargando Pokemón</h3>
</section>

<section v-else class="flex flex-col items-center justify-center h-screen w-screen">
    <section><h1 class="text-3xl">¿Cúal es este pokémon?</h1></section>
    
    
    <PokemonPicture :pokemon-id="randomPokemon.id" 
    :show-pokemon="gameStatus !== GameStatus.Playing" />
    <PokemonOptions 
    :options="options"
    :block-selection="gameStatus !== GameStatus.Playing"
    @selected-option="checkAnswer" />

    <button v-if="gameStatus !== GameStatus.Playing" @click="resetGame" class="mt-4 bg-blue-500 text-white p-3 rounded-lg">
      Reiniciar Juego
    </button>
  </section>

</template>

<script lang="ts">
  import PokemonPicture from '../components/PokemonPicture.vue';
  import PokemonOptions from '../components/PokemonOptions.vue';
  import { usePokemonGame } from '../modules/pokemon/composables/usePokemonGame';
  import { GameStatus } from '@/modules/pokemon/interface';
  
export default {
  name:'PokemonGame',

  setup(){
  const {resetGame, gameStatus,randomPokemon, isLoading, pokemonOptions: options, checkAnswer} = usePokemonGame();
    
    const onSelectedOption = (value: number) =>{
      console.log({value});
    };


    return {
      randomPokemon,
      isLoading,
      GameStatus,
      gameStatus,
      options,
      onSelectedOption,
      checkAnswer,
      resetGame,
    }
  },
  components: {
    PokemonPicture,
    PokemonOptions
  },
}

</script>

<style scoped>

</style>
