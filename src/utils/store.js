import { applyMiddleware }               from 'redux'
import { createInjectSagasStore, sagaMiddleware } from 'redux-sagas-injector'

import reducer       from '/src/reducers/todos'
import * as rootSaga from '/src/sagas'

const store = createInjectSagasStore(
	{ rootSaga },
	reducer,
	applyMiddleware(sagaMiddleware)
)

export default store
