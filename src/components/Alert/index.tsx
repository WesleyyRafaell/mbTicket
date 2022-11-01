import React, { useEffect } from 'react'
import AwesomeAlert from 'react-native-awesome-alerts'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { closeAlert } from '../../store/System/Alert.store'

const Alert = () => {
	const dispatch = useDispatch()
	const { settings } = useSelector((state: RootState) => state.alert)

	useEffect(() => {
		if (settings?.show) {
			setTimeout(function () {
				dispatch(closeAlert({ show: false, name: '', type: 'success' }))
			}, 5000)
		}
	}, [dispatch, settings])

	const typeAlert = {
		danger: '#851515',
		success: '#0cc91b'
	}

	return (
		<AwesomeAlert
			show={settings?.show}
			showProgress={false}
			title={settings?.title}
			closeOnTouchOutside={true}
			closeOnHardwareBackPress={false}
			contentContainerStyle={{
				backgroundColor: typeAlert[settings?.type]
			}}
			contentStyle={{
				backgroundColor: typeAlert[settings?.type]
			}}
			titleStyle={{ color: '#fff' }}
		/>
	)
}

export default Alert
