import employeesApi from '../api/employees'
import * as types from '../constants/operationTypes'

export function loadEmployees() {
    return function(dispatch) {
        return employeesApi.getAllEmployees().then(
            employees => {dispatch({type: types.LOAD_EMPLOYEES_SUCCESS, employees})
            }
        ).catch(error => {
            throw(error)
        })
    }
}

export function updateEmployee(employee) {
    return function(dispatch) {
        return employeesApi.editEmployee(employee).then(
            employee => {dispatch({type: types.UPDATE_EMPLOYEE_SUCCESS, employee})
            }
        ).catch(error => {
            throw(error)
        })
    }
}

export function addEmployee(employee) {
    return function(dispatch) {
        return employeesApi.addEmployee(employee).then(
            employee => {dispatch({type: types.CREATE_EMPLOYEE_SUCCESS, employee})
            }
        ).catch(error => {
            throw(error)
        })
    }
}

export function deleteEmployee(employee_id) {
    return function(dispatch) {
        return employeesApi.deleteEmployee(employee_id).then(
            employee_id => {dispatch({type: types.DELETE_EMPLOYEE_SUCCESS, employee_id})
            }
        ).catch(error => {
            throw(error)
        })
    }
}