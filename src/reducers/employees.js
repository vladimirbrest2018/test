import * as types from '../constants/operationTypes'
import initialState from './initialState'

export default function employeestate(state = initialState.employees, action) {
    switch (action.type) {
        case types.LOAD_EMPLOYEES_SUCCESS:
            return action.employees
        case types.UPDATE_EMPLOYEE_SUCCESS:
            let newState = [...state]
            let index = newState.indexOf(newState.find(item => item.id === action.employee.id))
            newState[index] = action.employee
            return newState
        case types.CREATE_EMPLOYEE_SUCCESS:
            return [...state].concat(action.employee)
        case types.DELETE_EMPLOYEE_SUCCESS:
            let delState = [...state]
            let deleteIndex = delState.indexOf(delState.find(item => item.id === action.employee_id))
            delState.splice(deleteIndex, 1)
            return delState
        default:
            return state
    }
}