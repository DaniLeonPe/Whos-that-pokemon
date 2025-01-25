<template>
  <section class="flex flex-col justify-center items-center">
    <ul class="button-list">
      <li>
        <button type="button" class="button water">Pokémon 1</button>
      </li>
      <li>
        <button type="button" class="button fire">Pokémon 2</button>
      </li>
      <li>
        <button type="button" class="button electric">Pokémon 3</button>
      </li>
      <li>
        <button type="button" class="button grass">Pokémon 4</button>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
export default {
  name: 'PokemonOptions',
};
</script>

<style scoped>
/* Lista de botones */
.button-list {
  @apply p-0 m-0 space-y-4 justify-center; 
}

/* Estilo base de los botones */
.button {
  @apply rounded-full text-white font-medium text-sm px-5 py-2.5 text-center shadow-md transition duration-300 ease-in-out;
}

/* Tipo Agua */
.button.water {
  @apply bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800;
}

/* Tipo Fuego */
.button.fire {
  @apply bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800;
}

/* Tipo Eléctrico */
.button.electric {
  @apply bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-800;
}

/* Tipo Planta */
.button.grass {
  @apply bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800;
}
</style>
