import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
	settings: {
		show: boolean
		title: string
		type: 'danger' | 'success'
	}
}

const initialState: CounterState = {
	settings: {
		show: false,
		title: '',
		type: 'success'
	}
}

const alertSlice = createSlice({
	name: 'system',
	initialState,
	reducers: {
		openAlert(state, action) {
			state.settings = action.payload
		},
		closeAlert(state, action) {
			state.settings = action.payload
		}
	}
})

export const { openAlert, closeAlert } = alertSlice.actions
export default alertSlice.reducer
