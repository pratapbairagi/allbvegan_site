import { ACTUAL_VIEW_PORT , MAX_VIEW_PORT } from "./action_type";

export const Actual_view_action = (min_view,full_view) => {
    return {
        type : ACTUAL_VIEW_PORT,
        min_view,
        full_view
    }
}

export const Full_view_action = (full_view,min_view) => {
    return {
        type : MAX_VIEW_PORT,
        full_view,
        min_view
        
    }
}