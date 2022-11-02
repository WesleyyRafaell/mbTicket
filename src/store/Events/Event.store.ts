import { createSlice } from '@reduxjs/toolkit'

type Event = {
	id: string
	start_date: string
	end_date: string
	name: string
	image: string
	address: {
		name: string
	}
}

type Events = {
	events: Event[]
}

const initialState: Events = {
	events: []
}

const eventsSlice = createSlice({
	name: 'system',
	initialState,
	reducers: {
		addEvents(state, action) {
			state.events = action.payload
		}
	}
})

export const { addEvents } = eventsSlice.actions
export default eventsSlice.reducer
