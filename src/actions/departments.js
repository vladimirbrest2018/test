import departmentsApi from '../api/departments'
import * as types from '../constants/operationTypes'

export function loadDepartments() {
    return function(dispatch) {
        return departmentsApi.getAllDepartments().then(departments => {
            dispatch({type: types.LOAD_DEPARTMENTS_SUCCESS, departments})
        }).catch(error => {
            throw(error)
        })
    }
}


export function updateDepartment(department) {
    return function(dispatch) {
        return departmentsApi.editDepartment(department).then(
            department => {dispatch({type: types.UPDATE_DEPARTMENT_SUCCESS, department})
            }
        ).catch(error => {
            throw(error)
        })
    }
}

export function addDepartment(department) {
    return function(dispatch) {
        return departmentsApi.addDepartment(department).then(
            department => {dispatch({type: types.CREATE_DEPARTMENT_SUCCESS, department})
            }
        ).catch(error => {
            throw(error)
        })
    }
}

export function deleteDepartment(department_id) {
    return function(dispatch) {
        return departmentsApi.deleteDepartment(department_id).then(
            department_id => {dispatch({type: types.DELETE_DEPARTMENT_SUCCESS, department_id})
            }
        ).catch(error => {
            throw(error)
        })
    }
}