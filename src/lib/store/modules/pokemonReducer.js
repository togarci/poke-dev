import { createSlice } from '@reduxjs/toolkit'

export const pokemonReducer = createSlice({
	name: 'counter',
	initialState: {
	},
	reducers: {
	},
})

export const { increment, decrement, incrementByAmount } = pokemonReducer.actions
export default pokemonReducer.reducer