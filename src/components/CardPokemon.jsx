import { useState, useEffect } from 'react';
import { pokemonService } from '../lib/service/pokemonService';

const servicePokemon = new pokemonService();

export default function CardPokemon(props) {
    const [dataCard, setDataCard] = useState(null);
    

    const convertIndex = (number) => {
        let width = 3;
        width -= number.toString().length;
        if(width > 0) {
            return '#' + new Array(width + (/\./.test(number) ? 2 : 1)).join('0') + number;
        }
        return number + ""; 
    }

    const getPokemon = () => {
        servicePokemon.getPokemon(props.name).then(resp => setDataCard(resp))
    }

    useEffect(() => {
        if (!dataCard) getPokemon();
    })

    return (
        <div className="card-pokemon d-flex flex-column">
            <div className="d-flex col-12 justify-content-end">
                <span>{convertIndex(props.index)}</span>
            </div>
            <b>{ props.name[0].toUpperCase() + props.name.slice(1, -1)}</b>
            <div className="d-flex">
                <div>
                    { dataCard && 
                        dataCard.types.map((elem, index) => 
                            <div className="attribute" key={index}>
                                {elem.type.name}
                            </div>
                        )
                    
                    }
                    

                </div>
                { dataCard && 
                    <img src={dataCard.sprites.other.dream_world.front_default}/>
                }
            </div>
        </div>
    )
}