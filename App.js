/**
 * @format
 * @flow
 */

import React, { Component }             from 'react'
import { Provider }                     from 'react-redux'
import { StyleSheet, View }             from 'react-native'

import Header    from '/src/containers/Header'
import TasksList from '/src/containers/TasksList'

import store from '/src/utils/store'

export default class App extends Component {
	render () {
		return (
			<Provider store={store} style={styles.container}>
				
				<View>
					<Header/>
					<TasksList/>
				</View>
				
			</Provider>
		)
	}
}

const styles = StyleSheet.create({
	container : {
		flex            : 1,
		backgroundColor : '#F5FCFF'
	}
})
