import React, { Component }                        from 'react'
import { ImageBackground, View, StyleSheet, Text } from 'react-native'


export default class Header extends Component {
	render () {
		return (
			<View style={styles.header}>
				<ImageBackground
					source={require('../../assets/background-default.jpg')}
					style={styles.backgroundImage}>
					
					<Text style={styles.welcome}>Welcome!</Text>
				</ImageBackground>
			</View>
		)
	}
}
// todo: show task name in header of opened taski


const styles = StyleSheet.create({
	header : {
		flex : 2
	},
	backgroundImage : {
		width          : '100%',
		height         : '100%',
		flex           : 1,
		flexDirection  : 'column',
		justifyContent : 'flex-end'
	},
	welcome : {
		fontSize  : 20,
		textAlign : 'center',
		margin    : 20,
		color     : '#fff'
	}
})