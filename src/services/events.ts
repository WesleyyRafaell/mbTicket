import api from './api'

export const getEvents = async () => {
	try {
		const result = await api.get('/events')

		if (result.data) {
			return result.data
		}
	} catch (error) {
		console.log(`error`, error)
		throw new Error('error in get events')
	}
}

export const getDetailEvent = async (id: string) => {
	try {
		const result = await api.get(`/events/${id}`)

		if (result.data) {
			return result.data
		}
	} catch (error) {
		console.log(`error`, error)
		throw new Error('error in get events')
	}
}
