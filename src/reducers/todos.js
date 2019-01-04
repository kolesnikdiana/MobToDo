import { fromJS, List }     from 'immutable'
import { TASKS_LIST_FETCH, TASK_MAKE_DONE } from '/src/actions/todos'


export const initialState = fromJS({
	loading : false,
	fetched : false,
	list    : List(),
	error   : null
})

export default (tasks = initialState, { type, payload }) => {
	switch (type) {
		case TASKS_LIST_FETCH.REQUEST:
			return tasks
				.set('loading', true)
		
		case TASKS_LIST_FETCH.SUCCESS:
			return tasks
				.set('list', List(payload.data))
				.set('fetched', true)
				.set('loading', false)
		
		case TASKS_LIST_FETCH.FAILURE:
			return tasks
				.set('error', payload.error)
				.set('fetched', true)
		
		case TASK_MAKE_DONE.SUCCESS: {
			const taskIndex = tasks.get('list').findIndex(({ id }) => id === payload.id)
			
			return tasks.updateIn(['list', taskIndex], task => ({
				...task,
				isDone : payload.isDone
			}))
		}
		
		default: return tasks
	}
}
