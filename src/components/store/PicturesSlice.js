import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const addCat = createAsyncThunk(
    'authorization/addCat',
    async () => {
      const response = await fetch('https://api.thecatapi.com/v1/images/search');
      return await response.json();
    }
  );
  
export const changeCat = createAsyncThunk(
    'authorization/changeCat',
    async ({id, cats}) => {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const responseJSON = await response.json();
    return(cats.map(cat=> cat.id===id?responseJSON[0]:cat));
  });  


const initialPicturesState = {
    cats: []
}

const PicturesSlice = createSlice({
    name: 'picturesslice',
    initialState: initialPicturesState,
    reducers:{
        setNewCats: (state, action) => {
            state.cats = action.payload.newCats;
        }
    },
    extraReducers: {
        [addCat.pending]: (state, action) => {
          state.status = 'loading'
        },
        [addCat.fulfilled]: (state, { payload }) => {
          state.cats = [...state.cats, payload[0]];
          state.status = 'success'
        },
        [addCat.rejected]: (state, action) => {
          state.status = 'failed'
        },
    
    
        [changeCat.pending]: (state, action) => {
          state.status = 'loading'
        },
        [changeCat.fulfilled]: (state, { payload }) => {
          state.cats = payload;
          state.status = 'success'
        },
        [changeCat.rejected]: (state, action) => {
          state.status = 'failed'
        },
      }
});
export const PicturesActs = PicturesSlice.actions;
 export default PicturesSlice.reducer;