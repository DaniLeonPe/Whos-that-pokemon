import axios from "axios"



export class PokemonApi {
    
    async get<T>(limit:string) {
        const response = axios.get<T>('https://pokeapi.co/api/v2/pokemon'+limit + '&offset=0');
        
        return await response;
    }
}