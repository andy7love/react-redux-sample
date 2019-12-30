import { Middleware } from "redux"

const crashReporter: Middleware = store => next => action => {
    try {
        return next(action)
    } catch (err) {
        console.error('Caught an exception!', err)
        throw err;
    }
}

export default crashReporter;
