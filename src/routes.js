import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from './containers/app'
import Home from './components/home'
import Employees from './components/employees/employees'
import Departments from './components/departments/departments'
import EditEmployee from './components/employees/editEmploee'
import CreateEmployee from './components/employees/createEmploee'

import EditDepartment from './components/departments/editDepartment'
import CreateDepartment from './components/departments/createDepartment'


// import NotFound from './components/NotFound'

export const routes = (
    <Route path='/' component={App}>
        <IndexRoute component={Home}/>
        <Route path='/employees' component={Employees}/>
        <Route exact path='/employees/edit(/:employeeId)' component={EditEmployee}/>
        <Route exact path='/employees/create' component={CreateEmployee}/>

        <Route exact path='/departments/edit(/:departmentId)' component={EditDepartment}/>
        <Route exact path='/departments/create' component={CreateDepartment}/>

        <Route path='/departments' component={Departments}/>

    </Route>
)