import {computed, onMounted, ref} from 'vue';
import { PokemonApi } from '../api/pokemonApi';
import confetti from 'canvas-confetti';

import { GameStatus, type PokemonListResponse, type Pokemon } from '../interface';


export const usePokemonGame = () => {
    const gameStatus = ref<GameStatus>(GameStatus.Playing);
    const pokemons = ref<Pokemon[]>([]);
    const isLoading = computed(() => pokemons.value.length === 0);
    const pokemonOptions = ref<Pokemon[]>([]);

    const randomPokemon = computed(() =>{
        const randomIndex = Math.floor(Math.random() * pokemonOptions.value.length);
        return pokemonOptions.value[randomIndex];
    })

    const resetGame = async () =>{
        gameStatus.value = GameStatus.Playing;
        pokemons.value = await getPokemons();
        getNextOption();
    }

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

    const getNextOption = (howMany: number = 4)=>{
        gameStatus.value = GameStatus.Playing;
        pokemonOptions.value = pokemons.value.slice(0, howMany);
        pokemons.value = pokemons.value.slice(howMany);
    }

    const checkAnswer = (id: number)=>{
        const hasWon = randomPokemon.value.id === id;
        if(hasWon){
            gameStatus.value = GameStatus.Won;
            confetti({
                particleCount: 300,
                spread: 150,
                origin:{y:0.6},
            });
            return;
        }
        gameStatus.value = GameStatus.Lost;
    }



    onMounted(async()=>{

       /* const recarga = new Promise((resolve) =>{
            setTimeout(()=>{
                resolve(true);
            }, 1000);
        });
        await recarga;*/
        pokemons.value = await getPokemons();
        getNextOption();
    })

    return {
        gameStatus,
        isLoading,
        pokemonOptions,
        randomPokemon,

        getNextOption,
        checkAnswer,
        resetGame,
    };
}


