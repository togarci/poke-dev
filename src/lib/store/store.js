import { configureStore } from '@reduxjs/toolkit';

import pokemonReducer from './modules/pokemonReducer';

export const Store = configureStore({
    reducer: {
        pokemon: pokemonReducer
    }
});
