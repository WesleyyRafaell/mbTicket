import AsyncStorage from '@react-native-async-storage/async-storage'

export const getArrayEventsStorage = async () => {
	const jsonValue = await AsyncStorage.getItem('@storage_card')
	const eventsStorage = jsonValue != null ? JSON.parse(jsonValue) : null

	return eventsStorage
}
