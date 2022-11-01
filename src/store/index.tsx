import { configureStore, createSlice } from '@reduxjs/toolkit'
import { defaultDip, IParticipant } from "../typings/typing"

//Participants
//createParticipant
//updateParticipant/{id}
//deleteParticipant/{id}
const defaultParticipants: IParticipant[] = []
const participantsSlice = createSlice({
  name: "participants",
  initialState: defaultParticipants,
  reducers: {
    createParticipant(state, action) {
      state.push(action.payload)
    },
    //Must contain ID and Payload
    updateParticipant(state, action) {
      state[action.payload.id] = action.payload
    },
    deleteParticipant(state, action) {
      state.splice(action.payload.id, 1)
    }
  }
})

//Dip
// createDip, getDip
const dipSlice = createSlice({
  name: "dip",
  initialState: defaultDip,
  reducers: {
    createDip(state, action) {
      state = action.payload
    }
  }
})

export const store = configureStore({ reducer: { participants: participantsSlice.reducer, dip: dipSlice.reducer } })

export const participantsActions = participantsSlice.actions
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch