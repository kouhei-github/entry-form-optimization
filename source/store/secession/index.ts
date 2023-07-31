import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Session = {
  name  : string | null
  kana  : string | null
  phone : string | null
  url   : string | null
  isPost: boolean
}

export type SessionState      = { session: Session }
export type UpdateUserPayload = Session
export type Phone  = {phone: string}
export type URL    = {url: string}
export type IsPost = {isPost: boolean}
export type Name   = {name: string}
export type Kana   = {kana: string}

const initialState: SessionState = {
  session: {
    name  : null,
    kana  : null,
    phone : null,
    url   : null,
    isPost: false
  },
}

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  // HACK: reducerは肥大化したらファイル分けたくなるかも
  reducers: {
    updateSession(state, action: PayloadAction<UpdateUserPayload>) {
      state.session        = action.payload
    },
    updateIsPost(state, action: PayloadAction<IsPost>) {
      state.session.isPost = action.payload.isPost
    },
    updateName(state, action: PayloadAction<Name>) {
      state.session.name   = action.payload.name
    },
    updateKana(state, action: PayloadAction<Kana>) {
      state.session.kana   = action.payload.kana
    },
    updatePhone(state, action: PayloadAction<Phone>) {
      state.session.phone  = action.payload.phone
    },
    updateUrl(state, action: PayloadAction<URL>) {
      state.session.url    = action.payload.url
    },
    reset(): SessionState {
      return initialState
    },
  },
})
