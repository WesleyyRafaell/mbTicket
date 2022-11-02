import api from './api'

export const getEvents = async () => {
	try {
		const result = await api.get('/events')
		console.log(`result`, result.data)
	} catch (error) {
		console.log(`error`, error)
		throw new Error('error in get events')
	}
}
