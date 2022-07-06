import Image from '../assets/img/image.png';

export default function CardPokemon(props) {
    return (
        <div className="card-pokemon d-flex flex-column">
            <div className="d-flex col-12 justify-content-end">
                <span>#001</span>
            </div>
            <b>Bulbasaur</b>
            <div className="d-flex">
                <div>
                    <div className="attribute">
                        Planta
                    </div>
                    <div className="attribute">
                        Venenoso
                    </div>

                </div>
                <img src={Image} alt="bulbasaur"/>
            </div>
        </div>
    )
}