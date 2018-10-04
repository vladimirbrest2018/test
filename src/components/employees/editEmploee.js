import React, {Component} from 'react'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import {updateEmployee} from '../../actions/employees'


@connect(
    state => ({
        employees: state.employees,
        departments: state.departments,
    }),
    dispatch => ({
        updateEmployee: (employee) => dispatch(updateEmployee(employee))
    })
)


export default class EditEmployee extends Component {

    constructor(props) {
        super(props)
        this.employee = this.props.employees.find(item => item.id === this.props.params.employeeId)
        this.onSaveClickHandler = this.onSaveClickHandler.bind(this)
    }

    onSaveClickHandler(event) {

        event.preventDefault()

        const employee = {
            id: this.employee.id,
            name: this.refs.name.value,
            surname: this.refs.surname.value,
            department_id: this.refs.department_id.value,
            pay: this.refs.pay.value,
            description: this.refs.description.value
        };

        ::this.props.updateEmployee(employee)

        browserHistory.push('/employees')
    }


    render() {
        return (
            <form>
                <div className="form-group col-3">
                    <label className="form-control-label">Name</label>
                    <input
                        className="form-control"
                        name="name"
                        ref="name"
                        defaultValue={this.employee.name}
                    />
                </div>
                <div className="form-group col-3">
                    <label className="form-control-label">Surname</label>
                    <input
                        className="form-control"
                        name="surname"
                        ref="surname"
                        defaultValue={this.employee.surname}
                    />
                </div>
                <div className="form-group col-3">
                    <label className="form-control-label">Pay</label>
                    <input
                        className="form-control"
                        name="pay"
                        ref="pay"
                        defaultValue={this.employee.pay}
                    />
                </div>
                <div className="form-group col-3">
                    <label className="form-control-label">Description</label>
                    <textarea
                        className="form-control"
                        name="description"
                        ref="description"
                        defaultValue={this.employee.description}
                    />
                </div>


                <div className="form-group col-3">
                    <label className="form-control-label">Department</label>
                    <select
                        className="form-control"
                        name="department_id"
                        ref="department_id"
                        defaultValue={this.employee.department_id}
                    >
                        {this.props.departments.map((department, index) => (
                            <option
                                key={index}
                                value={department.id}
                            >
                                {department.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group col-3">
                    <button className="btn btn-primary btn-sm" onClick={this.onSaveClickHandler}>Send</button>
                </div>
            </form>
        )
    }
}

