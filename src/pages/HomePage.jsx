import BannerComplete from '../assets/img/BannerComplete.png';

export default function HomePage() {
    return (
        <div id="home-page">
            <div className="d-flex justify-content-between">
                <section className="col-4">
                    <h2>Qual pokemon você <span>escolheria</span>?</h2>
                    
                    <p>Você pode saber o tipo de Pokémon, seus pontos fortes, fracos e habilidades.</p>
                    <button className="primary-btn">Veja os pokemons</button>
                </section>
                <div className="">
                    <img src={BannerComplete} />
                </div>
            </div>
        </div>
    )
}