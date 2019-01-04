import { action } from './actionMakers'

// action types
export const TASKS_LIST_FETCH = {
	REQUEST : 'fetch todos list REQUEST',
	SUCCESS : 'fetch todos list SUCCESS',
	FAILURE : 'fetch todos list FAIL'
}

export const TASK_MAKE_DONE = {
	REQUEST : 'toggle DONE todo REQUEST',
	SUCCESS : 'toggle DONE todo SUCCESS'
}

// actions
export const tasksList = {
	success : data => action(TASKS_LIST_FETCH.SUCCESS, { data }),
	failure : error => action(TASKS_LIST_FETCH.FAILURE, { error }),
}

export const taskToggleDone = {
	success : (id, isDone) => action(TASK_MAKE_DONE.SUCCESS, { id, isDone }),
	failure : error => action(TASK_MAKE_DONE.FAILURE, { error }),
}

export const fetchInfo = () => action(TASKS_LIST_FETCH.REQUEST)

export const toggleDone = (id, isDone) => action(TASK_MAKE_DONE.REQUEST, { id, isDone })
