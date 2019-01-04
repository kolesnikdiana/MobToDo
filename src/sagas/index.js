import { call, put, takeEvery } from 'redux-saga/effects'

import * as actions from '/src/actions/todos'

import axios from 'axios'
import https from 'https'


const instance = axios.create({
	httpsAgent : new https.Agent({
		rejectUnauthorized : true
	}),
	withCredentials : true,
	baseURL         : api
})


export function* fetchTodos () {
	try {
		const data = '/src/api/todo-list.json'
		yield put(actions.tasksList.success(data))
	} catch (e) {
		yield put(actions.tasksList.failure(e))
	}
}

export function* toggleTaskDoneState ({ payload }) {
	try {
		yield put(actions.taskToggleDone.success(payload.id, payload.isDone))
	} catch (e) {
		yield put(actions.taskToggleDone.failure(e))
	}
}

export default [
	takeEvery(actions.TASKS_LIST_FETCH.REQUEST, fetchTodos),
	takeEvery(actions.TASK_MAKE_DONE.REQUEST, toggleTaskDoneState),
]
