import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { User } from '../../types/user.model'

interface AuthState {
  user: User | null
}

const initialState: AuthState = {
  user: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoggedUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload
    }

  }
})

export default authSlice.reducer
export const { setLoggedUser } = authSlice.actions
