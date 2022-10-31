import { configureStore } from '@reduxjs/toolkit'
import { defaultParticipant, IParticipant } from "../typings/typing"
import { AnyAction } from "redux"

//Participants
//getParticipants
//getParticipant/{id}
//updateParticipant/{id}
//deleteParticipant/{id}

//Dip
//todo:
// createDip, getDip

const participantReducer = (state = defaultParticipant, action: AnyAction) => {
  if (action.type === "name") {
    return {
      ...state,
      name: action.payload
    }
  }
  if (action.type === "email") {
    return {
      ...state,
      email: action.payload
    }
  }
  if (action.type === "role") {
    return {
      ...state,
      role: action.payload
    }
  }

  return state
}

const participantsReducer = (state: IParticipant[] = [], action: AnyAction) => {
  if (action.type === "ADD_PARTICIPANT") {
    return (state.length > 0) ? [...state, action.payload] : [action.payload]
  }
  return state
}

export const store = configureStore({
  reducer: { participantReducer, participantsReducer }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch