import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 0,
        pokemons: [],
        isLoding: false,
    },
    reducers: {
        startLodingPokemons: (state, /* action */) => {
            state.isLoding = true;
        },

        setPokemons: (state, action) => {
            console.log(action);
        }
    }
});


// Action creators are generated for each case reducer function
export const { startLodingPokemons, setPokemons } = pokemonSlice.actions;