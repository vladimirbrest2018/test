import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {loadDepartments, deleteDepartment} from '../../actions/departments'

@connect(
    state => ({
        departments: state.departments,
    }),
    dispatch => ({
        deleteDepartment: (department_id) => dispatch(deleteDepartment(department_id)),
        loadDepartments: () => dispatch(loadDepartments()),
    })
)

export default class Departments extends Component {
    constructor(props) {
        super(props)
        this.onDeleteClickHandler = this.onDeleteClickHandler.bind(this)
    }

    componentDidMount() {
        this.props.loadDepartments()
    }

    onDeleteClickHandler(event) {

        event.preventDefault()

            ::this.props.deleteDepartment(event.target.value)
    }

    render() {
        return (
            <table className="table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Department name</th>
                    <th>
                        <Link
                            to={'/departments/create'}
                            className="btn btn-success btn-sm"
                        >Add Department
                        </Link>
                    </th>
                </tr>
                </thead>
                <tbody>
                {this.props.departments.map((department, index) => (
                    <tr key={index}>
                        <td scope="row">{index + 1}</td>
                        <td>{department.name}</td>
                        <td>{department.description}</td>
                        <td>
                            <Link
                                to={'/departments/edit/' + department.id}
                                className="btn btn-primary btn-sm"
                            >Edit Department
                            </Link>
                        </td>
                        <td>
                            <button
                                ref="department_id"
                                value={department.id}
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
