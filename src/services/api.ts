import axios from 'axios'

const api = axios.create({
	baseURL: 'https://api.sympla.com.br/public/v3',
	headers: {
		s_token: 'f87731e451a5a241057055338b2fe8ee6fddb45f665d787416dc214d30501b49'
	}
})

export default api
