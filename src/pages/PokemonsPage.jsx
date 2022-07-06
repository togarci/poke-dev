import Search from '../components/Search';
import CardPokemon from '../components/CardPokemon';

export default function PokemonsPage() {
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
                    <div className="d-flex col-8 p-1 justify-content-between">
                        <select className='col-3' name="tipo" id="tipo">
                            <option selected>Tipo</option>
                        </select>
                        <select className='col-3' name="ataque" id="ataque">
                            <option selected>Ataque</option>
                        </select>
                        <select className='col-3' name="defesa" id="defesa">
                            <option selected>Defesa</option>
                        </select>
                    </div>
                    
                    <div className="container-pokemon d-flex">
                        <CardPokemon />
                    </div>
                </section>
            </div>
        </div>
    )
}