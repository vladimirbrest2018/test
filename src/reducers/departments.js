import * as types from '../constants/operationTypes'
import initialState from './initialState'

export default function userstate(state = initialState.departments, action) {
    switch(action.type) {
        case types.LOAD_DEPARTMENTS_SUCCESS:
            return action.departments
        case types.UPDATE_DEPARTMENT_SUCCESS:
            let newState = [...state]
            let index = newState.indexOf(newState.find(item => item.id === action.department.id))
            newState[index] = action.department
            return newState
        case types.CREATE_DEPARTMENT_SUCCESS:
            return [...state].concat(action.department)
        case types.DELETE_DEPARTMENT_SUCCESS:
            let delState = [...state]
            let deleteIndex = delState.indexOf(delState.find(item => item.id === action.department_id))
            delState.splice(deleteIndex, 1)
            return delState
        default:
            return state
    }
}