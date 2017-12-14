import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

// import reducers
// import apiReducer from './redux/reducers/nemdirect';
import reducer from './redux/reducers/reducer';

const configureStore = () => {
    const middlewares = [thunk];
    if(process.env.NODE_ENV !== 'production') {
        middlewares.push(createLogger());
    }

    return createStore(
        // reducers,
        // apiReducer,
        reducer,
        applyMiddleware(...middlewares)
    );
}

export default configureStore;
