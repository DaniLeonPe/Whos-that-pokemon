<template>
 <section class="flex flex-col justify-center items-center">
      <ul>
        <li>
          <button type="button"> <p>Pokémon 1</p></button>
        </li>
        <li>
          <button type="button"> <p>Pokémon 2</p></button>
        </li>
        <li>
          <button type="button"> <p>Pokémon 3</p></button>
        </li>
        <li>
          <button type="button"> <p>Pokémon 4</p></button>
        </li>
      </ul>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name:'PokemonOptions',

  }
)
</script>

<style scoped>
</style>
