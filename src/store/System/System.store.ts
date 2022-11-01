import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
	showAlert: boolean
	message: string
}

const initialState: CounterState = {
	showAlert: false,
	message: ''
}

const systemSlice = createSlice({
	name: 'system',
	initialState,
	reducers: {
		openAlert(state, action) {
			state.showAlert = true
			state.message = action.payload
		},
		closeAlert(state) {
			state.showAlert = false
		}
	}
})

export const { openAlert, closeAlert } = systemSlice.actions
export default systemSlice.reducer
