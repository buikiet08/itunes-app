import { ENV } from '@/config'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { musicReducer } from './musicReducer'

const reducers = combineReducers({
    music: musicReducer
})

export const store = configureStore({
    reducer: reducers,
    devTools: ENV === 'development'
})