import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {loadEmployees, deleteEmployee} from '../../actions/employees'
import {loadDepartments} from '../../actions/departments'

@connect(
    state => ({
        employees: state.employees,
        departments: state.departments,
    }),
    dispatch => ({
        deleteEmployee: (employee_id) => dispatch(deleteEmployee(employee_id)),
        loadDepartments: () => dispatch(loadDepartments()),
        loadEmployees: () => dispatch(loadEmployees()),
    })
)

export default class Employees extends Component {
    constructor(props) {
        super(props)
        this.onDeleteClickHandler = this.onDeleteClickHandler.bind(this)
    }

    componentDidMount() {
        this.props.loadDepartments()
        this.props.loadEmployees()
    }

    onDeleteClickHandler(event) {

        event.preventDefault()

            ::this.props.deleteEmployee(event.target.value)
    }

    render() {
        return (
            <table className="table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Department</th>
                    <th>Pay</th>
                    <th>Description</th>
                    <th>
                        <Link
                            to={'/employees/create'}
                            className="btn btn-success btn-sm"
                        >Add Employee
                        </Link>
                    </th>
                </tr>
                </thead>
                <tbody>
                {this.props.employees.map((employe, index) => (
                    <tr key={index}>
                        <td scope="row">{index + 1}</td>
                        <td>{employe.name}</td>
                        <td>{employe.surname}</td>
                        <td>
                            {this.props.departments.find((el) => el.id === employe.department_id).name}
                        </td>
                        <td>{employe.pay}</td>
                        <td>{employe.description}</td>
                        <td>
                            <Link
                                to={'/employees/edit/' + employe.id}
                                className="btn btn-primary btn-sm"
                            >Edit Employe
                            </Link>
                        </td>
                        <td>
                            <button
                                ref="employee_id"
                                value={employe.id}
                                type="button"
                                className="btn btn-dark btn-sm"
                                onClick={this.onDeleteClickHandler}
                            >Delete Employe
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        )
    }
}