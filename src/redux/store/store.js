import { configureStore } from '@reduxjs/toolkit'
import joke from './jokeSlice/jokeSlice'
export const store = configureStore({
    reducer: {
        joke,
    },
})
// export type RootState = ReturnType<typeof store.getState>