import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from './root.reducer';
import rootEpic from './root.epic';
import logger from './utils/middlewares/logger';
import crashReporter from './utils/middlewares/crashReporter';

const epicMiddleware = createEpicMiddleware();

export default function configureStore() {
    const store = createStore(
        rootReducer,
        applyMiddleware(epicMiddleware, logger, crashReporter)
    );

    epicMiddleware.run(rootEpic);

    return store;
}
