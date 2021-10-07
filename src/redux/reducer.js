import { ACTUAL_VIEW_PORT, MAX_VIEW_PORT } from "./action_type"

const initial_state = {
    screen_view :{
        full_view: false,
        actual_view: false
    }
}

export const Screen_view_reducer = (state=initial_state,action) => {
    switch(action.type){
        case MAX_VIEW_PORT : return {...state, screen_view:{full_view:action.full_view , actual_view:action.min_view}}
        case ACTUAL_VIEW_PORT : return {...state, screen_view:{actual_view:action.min_view, full_view:action.full_view}}
        default : return {...state}
    }
}