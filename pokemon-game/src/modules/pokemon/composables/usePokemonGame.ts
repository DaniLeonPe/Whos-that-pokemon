import {onMounted, ref} from 'vue';
import { GameStatus} from '../interface/game-status.enum';
import { PokemonApi } from '../api/pokemonApi';
import type { PokemonListResponse } from '../interface';


export const usePokemonGame = () => {
    const gameStatus = ref<GameStatus>(GameStatus.Playing);

    const getPokemons = async () =>{
        const pokemonApi = new PokemonApi();
        const response = await pokemonApi.get<PokemonListResponse>('/?limit=151'); 
        console.log(response.data);
    };
    onMounted(()=>{
        getPokemons();
    })

    return {
        gameStatus,
    };
}