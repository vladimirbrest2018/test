import React, {Component} from 'react'
import {Link} from 'react-router'

class Menu extends Component {
    render() {
        return (
            <nav className="col-2 border">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link className="nav-link" activeClassName='active' to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" activeClassName='active' to='/departments'>Departments</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" activeClassName='active' to="/employees">Employees</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Menu