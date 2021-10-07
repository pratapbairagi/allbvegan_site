// import { createStore } from "redux"
// import { combineReducers} from "redux"
import { createStore } from "redux"
import { combineReducers } from "redux"
import { Screen_view_reducer } from "./reducer"

const rootReducers = combineReducers({
screen_view_reducer : Screen_view_reducer

})

export const store = createStore(rootReducers,window.__REDUX__DEVTOOLS__EXTENSIONS__ &&
    window.__REDUX__DEVTOOLS__EXTENSION__())


    // https://github.com/pratapbairagi/allbvegan_site.git