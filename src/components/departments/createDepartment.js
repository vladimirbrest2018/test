import React, {Component} from 'react'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import {addDepartment} from '../../actions/departments'


@connect(
    state => ({}),
    dispatch => ({
        addDepartment: (department) => dispatch(addDepartment(department)),
    })
)


export default class CreateDepartment extends Component {

    constructor(props) {
        super(props)
        this.onSaveClickHandler = this.onSaveClickHandler.bind(this)
    }

    onSaveClickHandler(event) {

        event.preventDefault()

        const department = {
            name: this.refs.name.value,
            description: this.refs.description.value
        };

        ::this.props.addDepartment(department)

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
                        defaultValue=""
                    />
                </div>
                <div className="form-group col-3">
                    <label className="form-control-label">Description</label>
                    <input
                        className="form-control"
                        name="description"
                        ref="description"
                        defaultValue=""
                    />
                </div>
                <div className="form-group col-3">
                    <button className="btn btn-primary btn-sm" onClick={this.onSaveClickHandler}>Send</button>
                </div>
            </form>
        )
    }
}

