import { clearHistory, getHistory, setHistory } from "@/utils/token";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const setHistoryThunkAction = createAsyncThunk('music/setHistory', async (data, thunkApi) => {
    const res = getHistory() || '';
    if (res.length > 0 && res.includes(data)) {
        return null
    }
    const test = [data, ...res]

    thunkApi.dispatch(musicActions.addHistory([data, ...res]))
    // Lưu danh sách items vào localStorage
    setHistory([data, ...res])
})

export const removeHistoryThunkAction = createAsyncThunk('music/removeHistory', async (_, thunkApi) => {
    clearHistory()
    thunkApi.dispatch(musicActions.removeHistory())
})

export const setUrlThunkAction = createAsyncThunk('music/setUrl', async (data, thunkApi) => {
    thunkApi.dispatch(musicActions.setUrl(data))
})

export const { reducer: musicReducer, actions: musicActions, getInitialState } = createSlice({
    initialState: {
        history: getHistory(),
        url:null
    },
    name: 'music',
    reducers: {
        addHistory: (state, action) => {
            state.history = action.payload
        },
        removeHistory: (state) => {
            state.history = null
        },
        setUrl: (state,action) => {
            state.url = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(setHistoryThunkAction.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(setHistoryThunkAction.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(setHistoryThunkAction.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
})