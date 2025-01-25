import {onMounted, ref} from 'vue';
import { PokemonApi } from '../api/pokemonApi';

import { GameStatus, type PokemonListResponse, type Pokemon } from '../interface';


export const usePokemonGame = () => {
    const gameStatus = ref<GameStatus>(GameStatus.Playing);


    const getPokemons = async (): Promise<Pokemon[]> =>{
        const pokemonApi = new PokemonApi();
        const response = await pokemonApi.get<PokemonListResponse>('/?limit=151'); 

        const pokemonArray = response.data.results.map(pokemon =>{
            const urlParts = pokemon.url.split('/');
            const id = urlParts[urlParts.length -2 ] ?? 0;
            return {
                id: +id,
                name: pokemon.name
            }
             
    
    });
        return pokemonArray.sort(()=>Math.random() - 0.5);
};
    onMounted(async()=>{
        const pokemons = await getPokemons();
        console.log(pokemons);
    })

    return {
        gameStatus,
    };
}