import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import * as firebase from 'firebase'
import * as Notifications from 'expo-notifications';

export class App extends Component {

	state = {
		token: null,
	}

	componentDidMount() {
		this.handlePermissions()
	}


	// sendPushNotification = async () => {
	// 	const message = {
	// 		to: this.state.token,
	// 		sound: 'default',
	// 		title: 'Original Title',
	// 		body: 'And here is the body!',
	// 		data: { someData: 'goes here' },
	// 	};

	// 	await fetch('https://exp.host/--/api/v2/push/send', {
	// 		method: 'POST',
	// 		headers: {
	// 			Accept: 'application/json',
	// 			'Accept-encoding': 'gzip, deflate',
	// 			'Content-Type': 'application/json',
	// 		},
	// 		body: JSON.stringify(message),
	// 	});
	// }

	handlePermissions = async () => {
		const { status: currentStatus } = await Notifications.getPermissionsAsync()
		let finalStatus = currentStatus

		if (currentStatus !== "granted") {
			const { status } = await Notifications.requestPermissionsAsync();
			finalStatus = status
		}
		if (finalStatus !== 'granted') {
			alert("go back")
			return;
		}

		const token = await Notifications.getExpoPushTokenAsync()
		console.log(token)
		this.setState({ token: token })
	}



	render() {
		return (
			<View >
				<Text> textInComponent </Text>
				<Button
					title="Press to Send Notification"
				/>
			</View>
		)
	}

}


export default App
