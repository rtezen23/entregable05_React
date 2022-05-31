import { configureStore } from '@reduxjs/toolkit';
import pokemon from './slices/pokemon.slice';

export default configureStore({
  reducer: {
    pokemon
	}
})