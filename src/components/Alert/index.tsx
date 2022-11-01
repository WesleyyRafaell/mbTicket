import React, { useEffect } from 'react'
import AwesomeAlert from 'react-native-awesome-alerts'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { closeAlert } from '../../store/System/System.store'

const Alert = () => {
	const dispatch = useDispatch()
	const { showAlert, message } = useSelector((state: RootState) => state.system)

	useEffect(() => {
		if (showAlert) {
			setTimeout(function () {
				dispatch(closeAlert())
			}, 5000)
		}
	}, [dispatch, showAlert])

	return (
		<AwesomeAlert
			show={showAlert}
			showProgress={false}
			title={message}
			closeOnTouchOutside={true}
			closeOnHardwareBackPress={false}
			contentContainerStyle={{ backgroundColor: 'red' }}
			contentStyle={{ backgroundColor: 'red' }}
		/>
	)
}

export default Alert
