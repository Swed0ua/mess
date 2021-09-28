import { combineReducers, createStore } from "redux";
import home_reduser from './home_reduser';
import dialogs_reduser from './dialogs_reduser';

let redusers = combineReducers({
    home_reduser,
    dialogs_reduser
})

let store = createStore(redusers);

export default store;