import {configureStore} from '@reduxjs/toolkit'
import charSlice from './charSlice'


const store =  configureStore({
    reducer:{
        characters: charSlice.reducer
    
    }
})

export default store;