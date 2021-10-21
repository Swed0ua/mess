import { applyMiddleware, combineReducers, createStore } from 'redux';
import home_reduser from './home_reduser';
import dialogs_reduser from './dialogs_reduser';
import searching_reduser from './searching_reduser';
import header_reduser from './header_reduser';
import auth_reduser from './auth_reduser'
import thunk from 'redux-thunk';
import {reducer as formReduser} from 'redux-form'

let redusers = combineReducers({
    home_reduser,
    dialogs_reduser,
    searching_reduser,
    header_reduser,
    auth_reduser,
    form: formReduser
})

let store = createStore(redusers, applyMiddleware(thunk));
window.state = store;

export default store;