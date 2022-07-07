import Search from '../components/Search';
import CardPokemon from '../components/CardPokemon';

import { pokemonService } from '../lib/service/pokemonService';
import { useEffect, useState } from 'react';
const servicePokemon = new pokemonService();

export default function PokemonsPage() {
    const [listPokemons, setListPokemons] = useState(new Array());

    const getPokemons = () => {
        servicePokemon.getAllPokemons().then(resp => setListPokemons(resp.results));
    }

    useEffect(() => {
        if (listPokemons.length === 0) {
            getPokemons()
        }
    })

    return (
        <div id="poke-page">
            <div className="container d-flex flex-column align-items-center justify-content-center">
                <h2>Mais de 250 Pokemons para você escolher o seu favorito</h2>
                <div className="d-flex justify-content-center col-10">
                    <Search
                        placeholder={'Pesquisar pokemon'}
                    />
                </div>
                <section className="col-10">
                    <div className="d-flex col-7 justify-content-between">
                        <select defaultValue={'default'} className='col-3' name="tipo" id="tipo">
                            <option value={"default"}>Tipo</option>
                        </select>
                        <select defaultValue={'default'} className='col-3' name="ataque" id="ataque">
                            <option value={"default"}>Ataque</option>
                        </select>
                        <select defaultValue={'default'} className='col-3' name="defesa" id="defesa">
                            <option value={"default"}>Defesa</option>
                        </select>
                    </div>
                    
                    <div className="container-pokemon d-flex justify-content-between">
                        { listPokemons.length > 0 &&
                            listPokemons.map((elem, index) => 
                                <CardPokemon key={index} url={elem.url} index={index + 1} name={elem.name}/>
                            ) 
                        }
                    </div>
                </section>
            </div>
        </div>
    )
}