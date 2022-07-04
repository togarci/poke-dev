import { Route, Routes  } from "react-router-dom";
import HomePage from './pages/HomePage';
import PokemonsPage from './pages/PokemonsPage';
import InfoPage from './pages/InfoPage';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/home" element={<HomePage/>} />
            <Route path="/pokemons" element={<PokemonsPage/>} />
            <Route path="/contato" element={<InfoPage/>} />
        </Routes>
    )
}