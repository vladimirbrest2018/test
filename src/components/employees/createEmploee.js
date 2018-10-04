import React, {Component} from 'react'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import {addEmployee} from '../../actions/employees'


@connect(
    state => ({
        departments: state.departments,
    }),
    dispatch => ({
        addEmployee: (employee) => dispatch(addEmployee(employee)),
    })
)


export default class CreateEmployee extends Component {

    constructor(props) {
        super(props)
        this.onSaveClickHandler = this.onSaveClickHandler.bind(this)
    }

    onSaveClickHandler(event) {

        event.preventDefault()

        const employee = {
            name: this.refs.name.value,
            surname: this.refs.surname.value,
            department_id: this.refs.department_id.value,
            pay: this.refs.pay.value,
            description: this.refs.description.value
        };

        ::this.props.addEmployee(employee)

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
                        defaultValue=""
                    />
                </div>
                <div className="form-group col-3">
                    <label className="form-control-label">Surname</label>
                    <input
                        className="form-control"
                        name="surname"
                        ref="surname"
                        defaultValue=""
                    />
                </div>
                <div className="form-group col-3">
                    <label className="form-control-label">Pay</label>
                    <input
                        className="form-control"
                        name="pay"
                        ref="pay"
                        defaultValue=""
                    />
                </div>
                <div className="form-group col-3">
                    <label className="form-control-label">Description</label>
                    <textarea
                        className="form-control"
                        name="description"
                        ref="description"
                        defaultValue=""
                    />
                </div>
                <div className="form-group col-3">
                    <label className="form-control-label">Department</label>
                    <select
                        className="form-control"
                        name="department_id"
                        ref="department_id"
                        defaultValue=""
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