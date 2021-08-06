import {
    HOME,
    ACCESS_FORM,
    CONFIRM,
    SELECT_ORGANIZATION,
    SHOW_TABLE
} from '../utils/strings.json'


export const initialState = {
    state: ''
}

export const homeAction = {
        type: HOME,
}

export const AccessFormAction = {
        type: ACCESS_FORM,
}

export const SelectOrganizationAction = {
        type: SELECT_ORGANIZATION,
}

export const showTableAction = {
        type: SHOW_TABLE,
}

export const confirmAction = {
        type: CONFIRM,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case HOME:
            return {state: HOME}
        case ACCESS_FORM:
            return {state: ACCESS_FORM}
        case SELECT_ORGANIZATION:
            return {state: SELECT_ORGANIZATION}
        case SHOW_TABLE:
            return {state: SHOW_TABLE}
        case CONFIRM:
            return {state: CONFIRM}
        default:
            return state;
    }
}

export default reducer;
