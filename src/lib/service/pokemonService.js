import axios from "axios";

export class pokemonService {
    constructor() {}

    getAllPokemons(params) {
        let url = `https://pokeapi.co/api/v2/pokemon`;
        return axios.get(url, {
            params: params
        }).then(response => response.data);
    }

    getPokemon(name, params) {
        let url = `https://pokeapi.co/api/v2/pokemon/${name}`;
        return axios.get(url, {
            params: params
        }).then(response => response.data);
    }
}