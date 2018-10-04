import React, {Component} from 'react'
import Menu from '../components/menu'

class App extends Component {
    render() {
        return (
            <div className="row justify-content-center">
                <Menu/>
                <section className="col-8 border">
                    {this.props.children}
                </section>
            </div>
        )
    }
}

export default App