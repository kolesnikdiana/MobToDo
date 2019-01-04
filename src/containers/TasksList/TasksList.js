import React, { Component }       from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { connect }                from 'react-redux'

import { fetchInfo as getTodosList } from '/src/actions/todos'

import TaskCard from '/src/components/TaskCard'

class TasksList extends Component {
	static defaultProps = {
		tasksList       : [],
		toggleFavourite : () => ({})
	}
	
	componentDidMount() {
		this.props.getTodosList()
	}
	
	render () {
		return (
			<ScrollView style={styles.layout}>
				{this.props.tasksList.map(task =>
					<TaskCard
						toggleFavourite={this.props.toggleFavourite}
						isDone={task.isDone}
						title={task.title}
						key={task.id}
						id={task.id}
					/>)}
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	layout : {
		flex : 4
	}
})

const mapStateToProps = state => ({
	tasksList : state.list
})

const mapDispatchToProps = (dispatch) => ({
	getTodosList: () => {
		dispatch(getTodosList())
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(TasksList)