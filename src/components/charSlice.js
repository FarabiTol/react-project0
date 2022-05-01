import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

export const callAPI = createAsyncThunk(
    'api/characters',
    async () => {
        try {
    
          const response = await fetch('https://thronesapi.com/api/v2/Characters')
          const result = await response.json()
          return result
    
        }
    
        catch (error) {
    
          console.log(error, "api is not correct ")
          return[]
        }
      }
)

const charSlice = createSlice({
    name:"characters",
    initialState:[],
    reducers:{},
    extraReducers:{
        [callAPI.pending]:(state,action)=>{
            return []
        },
        [callAPI.fulfilled]:(state,action)=>{
            return action.payload
        },
        [callAPI.rejected]:(state,action)=>{
            return []
        }
    }
})

export const actions = charSlice.actions;
export default charSlice ;