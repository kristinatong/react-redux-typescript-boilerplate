import { Store, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension'
import { History } from 'history'

/**
 * Import the state interface and our combined reducers/sagas
 */
import { ApplicationState, createRootReducer, rootSaga } from '../store'

export default function configureStore(
    history: History,
    initialState: ApplicationState
): Store<ApplicationState> {
    /**
     * Create the composing function for our middlewares
     */
    const composeEnhancers = composeWithDevTools({})
    /**
     * Create the redux-saga middleware
     */
    const sagaMiddleware = createSagaMiddleware()

    /**
     * Create store with the combined reducers/sagas, and the initial Redux state
     */
    const store = createStore(
        createRootReducer(history),
        initialState,
        composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
    )

    /**
     * Run the root saga, and return the store object.
     */
    sagaMiddleware.run(rootSaga)
    return store
}