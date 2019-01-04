import React                    from 'react'
import { View, Text, CheckBox } from 'react-native'

const TaskCard = ({ title, isDone, id, toggleFavourite }) => (
	<View>
		<CheckBox onClick={ () => {
			toggleFavourite(id, ! isDone)
		}} />
		
		<Text>{title}</Text>
	</View>
)

export default TaskCard
