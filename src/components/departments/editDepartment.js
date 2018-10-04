import React, {Component} from 'react'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import {updateDepartment} from '../../actions/departments'


@connect(
    state => ({
        departments: state.departments,
    }),
    dispatch => ({
        updateDepartment: (department) => dispatch(updateDepartment(department))
    })
)


export default class EditDepartment extends Component {

    constructor(props) {
        super(props)
        this.department = this.props.departments.find(item => item.id === this.props.params.departmentId)
        this.onSaveClickHandler = this.onSaveClickHandler.bind(this)
    }

    onSaveClickHandler(event) {

        event.preventDefault()

        const department = {
            id: this.department.id,
            name: this.refs.name.value,
            description: this.refs.description.value
        };
        ::this.props.updateDepartment(department)
        browserHistory.push('/departments')
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
                        defaultValue={this.department.name}
                    />
                </div>
                <div className="form-group col-3">
                    <label className="form-control-label">Description</label>
                    <input
                        className="form-control"
                        name="description"
                        ref="description"
                        defaultValue={this.department.description}
                    />
                </div>
                <div className="form-group col-3">
                    <button className="btn btn-primary btn-sm" onClick={this.onSaveClickHandler}>Send</button>
                </div>
            </form>
        )
    }
}

